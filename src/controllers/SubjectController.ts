import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import SubjectService from "../services/SubjectService";
import logger from '@shared/Logger';
import { shortParameterError, errorDuringRequest } from '@shared/constants';
const { BAD_REQUEST, INTERNAL_SERVER_ERROR, OK } = StatusCodes;

export async function getByName(req: Request, res: Response){
    try {
        const name:string = req.params.name;

        if (name.trim().length < 3) {
            return res.status(BAD_REQUEST).json({
                error: shortParameterError,
            });
        }
    
        const subjects = await SubjectService.getByName(name);
        return res.status(OK).json(subjects);
    } catch (e){
        const message = (<Error>e).message;
        logger.err(message, true);
        return res.status(INTERNAL_SERVER_ERROR).json({ error: `${errorDuringRequest} ${message}`});
    }
}

export async function getById(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
    
        const subject = await SubjectService.getById(id);
        return res.status(OK).json(subject);
    } catch (e){
        const message = (<Error>e).message;
        logger.err(message, true);
        return res.status(INTERNAL_SERVER_ERROR).json({ error: `${errorDuringRequest} ${message}`});
    }
}