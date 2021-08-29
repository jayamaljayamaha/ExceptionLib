import ReturnErrorType from "../Types/ReturnErrorType";
import CustomError from "./CustomError";

class NotImplementedError extends CustomError {
    statusCode: number = 501;
    private error: string

    constructor(error: string){
        super("Not Implemented Error")
        this.error = error
        Object.setPrototypeOf(this, NotImplementedError.prototype)
    }

    getErrors() : ReturnErrorType<string> {
        return {
            statusCode: this.statusCode,
            errors: [this.error],
            type: "Not Implemented Error"
        }
    }

}

export default NotImplementedError