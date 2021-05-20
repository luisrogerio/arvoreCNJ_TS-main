import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import ClassService from "../services/ClassService";
import logger from '@shared/Logger';
import { shortParameterError, errorDuringRequest } from '@shared/constants';
const { BAD_REQUEST, INTERNAL_SERVER_ERROR, OK } = StatusCodes;

export async function getByName(req: Request, res: Response){
    try {
        const name:string = req.query.name as string;

        if (name.trim().length < 3) {
            return res.status(BAD_REQUEST).json({
                error: shortParameterError,
            });
        }
    
        const classes = await ClassService.getByName(name);
        return res.status(OK).json(classes);
    } catch (e){
        const message = (<Error>e).message;
        logger.err(message, true);
        return res.status(INTERNAL_SERVER_ERROR).json({ error: `${errorDuringRequest} ${message}`});
    }
}

export async function getById(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
    
        const clasz = await ClassService.getById(id);
        return res.status(OK).json(clasz);
    } catch (e){
        const message = (<Error>e).message;
        logger.err(message, true);
        return res.status(INTERNAL_SERVER_ERROR).json({ error: `${errorDuringRequest} ${message}`});
    }
}