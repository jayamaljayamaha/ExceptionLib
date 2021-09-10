import { ReturnErrorType } from "../Types/ErrorTypes";
import CustomError from "./CustomError";

class InternalServerError extends CustomError {
  statusCode: number = 500;
  private error: string;

  constructor(error: string) {
    super("Internal Server Error");
    this.error = error;
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }

  getErrors(): ReturnErrorType<string> {
    return {
      statusCode: this.statusCode,
      errors: [this.error],
      type: "Internal Server Error",
    };
  }
}

export default InternalServerError;
