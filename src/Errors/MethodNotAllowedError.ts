import { ReturnErrorType } from "../Types/ErrorTypes";
import CustomError from "./CustomError";

class MethodNotAllowedError extends CustomError {
  statusCode: number = 405;
  private error: string;

  constructor(error: string) {
    super("Method Not Allowed Error");
    this.error = error;
    Object.setPrototypeOf(this, MethodNotAllowedError.prototype);
  }

  getErrors(): ReturnErrorType<string> {
    return {
      statusCode: this.statusCode,
      errors: [this.error],
      type: "Method Not Allowed Error",
    };
  }
}

export default MethodNotAllowedError;
