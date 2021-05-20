import Subject from "@entities/Subject";

export interface ISubjectService {
    getByName(name: string): Promise<Array<Subject>>;
    getById(id: number) : Promise<Subject>;
}
