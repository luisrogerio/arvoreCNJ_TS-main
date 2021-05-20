/* eslint-disable @typescript-eslint/no-unsafe-call */
import { BaseRepository } from "@repositories/BaseRepository";

class ClassRepository extends BaseRepository {
    protected tipoItem: string;

    constructor(){
        super();
        this.tipoItem = 'C';
    }
}

export default new ClassRepository();