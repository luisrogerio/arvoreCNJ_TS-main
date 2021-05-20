export interface IBaseRepository {
    getByName(name: string): Promise<Map<string, string>[]>;
    getById(id: number) : Promise<Map<string, string>>;
}
