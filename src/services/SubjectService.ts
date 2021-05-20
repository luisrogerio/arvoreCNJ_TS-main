/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Subject from "@entities/Subject";
import { ISubjectService } from "@services/interfaces/ISubjectService";
import SubjectRepository from "@repositories/SubjectRepository";
import connectToDb from "@repositories/Db";

class SubjectService implements ISubjectService {

    async getByName(name: string): Promise<Subject[]> {
        const listOfItems = await SubjectRepository.getByName(name);
        const db = await connectToDb();
        const subjectCollection = db.collection('subjects');

        const subjectList = await Promise.all(
            listOfItems.map(async (item) => {
                
                const subject = new Subject(item);
                await subjectCollection.insertOne(subject);

                return subject;
            })
        );

        return subjectList;
    }

    async getById(id: number) : Promise<Subject>{
        const subjectMap = await SubjectRepository.getById(id);

        const subject = new Subject(subjectMap);

        return subject;
    }
    
}

export default new SubjectService();