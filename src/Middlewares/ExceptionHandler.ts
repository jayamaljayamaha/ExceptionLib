import { NextFunction, Request, Response } from "express";
import CustomError from "../Errors/CustomError";

const ExceptionHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if(err instanceof CustomError) {
        return res.status(err.getStatus()).send({
            errors: err.getErrors()
        })
    }
}

export default ExceptionHandler