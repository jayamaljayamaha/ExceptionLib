import ReturnErrorType from "../Types/ReturnErrorType";
import CustomError from "./CustomError";

class ForbiddenError extends CustomError{
    statusCode: number = 403;

    private error: string;

    constructor(error: string){
        super("Forbidden Error")
        this.error = error
        Object.setPrototypeOf(this, ForbiddenError.prototype)
    }

    getErrors() : ReturnErrorType<string> {
        return {
            statusCode: this.statusCode,
            errors: [this.error],
            type: "Forbidden Error"
        }
    }
}

export default ForbiddenError