/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express';
import { getById, getByName } from "../controllers/SubjectController";


export class SubjectRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init(): void {
        this.router.get('/byName/:name', getByName);
        this.router.get('/byId/:id', getById);
    }
}

const subjectRouter = new SubjectRouter();

export default subjectRouter.router;
