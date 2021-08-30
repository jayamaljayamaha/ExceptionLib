import ReturnErrorType from "../Types/ReturnErrorType";
import CustomError from "./CustomError";

class BadRequestError extends CustomError {
    
    statusCode: number = 400;
    error: string;

    constructor(error: string){
        super("Bad Request Error")
        this.error = error
        Object.setPrototypeOf(this, BadRequestError.prototype)
    }

    getErrors() : ReturnErrorType<string> {
        return {
            statusCode: this.statusCode,
            errors: [this.error],
            type: "Bad Request Error"
        }
    }
}

export default BadRequestError