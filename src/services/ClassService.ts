/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Class from "@entities/Class";
import { IClassService } from "@services/interfaces/IClassService";
import ClassRepository from "@repositories/ClassRepository";
import connectToDb from "@repositories/Db";

class ClassService implements IClassService {

    async getByName(name: string): Promise<Class[]> {
        const listOfItems = await ClassRepository.getByName(name);
        const db = await connectToDb();
        const classCollection = db.collection('classes');

        const classList = await Promise.all(
            listOfItems.map(async (item) => {
                
                const clasz = new Class(item);
                await classCollection.insertOne(clasz);

                return clasz;
            })
        );

        return classList;
    }

    async getById(id: number) : Promise<Class>{
        const classMap = await ClassRepository.getById(id);

        const clasz = new Class(classMap);

        return clasz;
    }
    
}

export default new ClassService();