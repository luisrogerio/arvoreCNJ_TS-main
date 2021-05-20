/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Client, createClientAsync } from "soap";
import { IArray } from "@entities/responses/IArray";
import { IItemCode } from "@entities/responses/IItemCode";
import { IMainResponse } from "@entities/responses/IMainResponse";
import { IBaseRepository } from "@repositories/interfaces/IBaseRepository";

export abstract class BaseRepository implements IBaseRepository {
    
    protected url: string;
    
    protected abstract tipoItem: string;

    constructor(){
        this.url = (process.env.CNJ_WSDL || "https://www.cnj.jus.br/sgt/sgt_ws.php?wsdl");
    }

    async getById(id: number) : Promise<Map<string, string>>{
        const args = {
            'seqItem': id,
            'tipoItem': this.tipoItem
        };

        const method = 'getArrayDetalhesItemPublicoWSAsync';
        const result = await this.callWebService<IArray>(method, args);

        const dicResult = this.getDictionaryFromKeyValuePair(result);

        return dicResult;
    }

    async getByName(name: string) : Promise<Map<string, string>[]> {
        const args = {
            'tipoTabela': this.tipoItem,
            'tipoPesquisa': 'N',
            'valorPesquisa': name
        };

        const method = 'pesquisarItemPublicoWSAsync';
        const listOfItems = await this.callWebService<IItemCode>(method, args);

        const mapList = await Promise.all(
            listOfItems.map(async (item) => {
                return await this.getById(item.cod_item);
            })
        );

        return mapList;
    }
    

    protected async getClient() : Promise<Client>{
        return createClientAsync(this.url);
    }

    protected async callWebService<T>(method: string, args: unknown) : Promise<T[]> {
        const client = await this.getClient();
        const result = (await client[method](args)) as Array<IMainResponse<T>>;

        return result[0].return.item ?? result[0].return.Item;
    }
    
    protected getDictionaryFromKeyValuePair(list: IArray[]): Map<string, string>{
        const dictionary = new Map<string, string>();
        
        list.map((item) => {
            dictionary.set(item.key, item.value);
        });
        
        return dictionary;
    }

}