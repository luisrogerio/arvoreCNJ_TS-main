import JusticeItem from "@entities/JusticeItem";

export interface IClass {
    natureza: string;
    sigla: string;
    poloAtivo: string;
    poloPassivo: string;
    numeracaoPropria: boolean;

}

class Class extends JusticeItem implements IClass {
    public natureza: string;
    public sigla: string;
    public poloAtivo: string;
    public poloPassivo: string;
    public numeracaoPropria: boolean;

    constructor(values: Map<string, string>) {
        super(values);
        this.natureza= values.get('natureza') ?? "";
        this.sigla= values.get('sigla') ?? "";
        this.poloAtivo= values.get('polo_ativo') ?? "";
        this.poloPassivo= values.get('polo_passivo') ?? "";
        this.numeracaoPropria= values.get('numeracaoPropria') == 'S';
    }
 
}

export default Class;
