/* eslint-disable @typescript-eslint/no-unsafe-call */
import { BaseRepository } from "@repositories/BaseRepository";

class SubjectRepository extends BaseRepository {

    protected tipoItem: string;

    constructor(){
        super();
        this.tipoItem = 'A';
    }

}

export default new SubjectRepository();