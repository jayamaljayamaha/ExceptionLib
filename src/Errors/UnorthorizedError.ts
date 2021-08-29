import ReturnErrorType from "../Types/ReturnErrorType";
import CustomError from "./CustomError";

class UnorthorizedError extends CustomError {
    statusCode: number = 401;
    private error: string;

    constructor(error: string){
        super("Unorthorized Error")
        this.error = error
        Object.setPrototypeOf(this, UnorthorizedError.prototype)
    }

    getErrors() : ReturnErrorType<string> {
        return {
            statusCode: this.statusCode,
            errors: [this.error],
            type: "Unorthorized Error"
        }
    }

}

export default UnorthorizedError