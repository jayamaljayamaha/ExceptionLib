import { ReturnErrorType } from "../Types/ErrorTypes";
import CustomError from "./CustomError";

class NotFoundError extends CustomError {
  statusCode: number = 404;
  private error: string;

  constructor(error: string) {
    super("Not Found Error");
    this.error = error;
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  getErrors(): ReturnErrorType<string> {
    return {
      statusCode: this.statusCode,
      errors: [this.error],
      type: "Not Found Error",
    };
  }
}

export default NotFoundError;
