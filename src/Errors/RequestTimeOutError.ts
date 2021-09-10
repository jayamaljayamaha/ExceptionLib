import { ReturnErrorType } from "../Types/ErrorTypes";
import CustomError from "./CustomError";

class RequestTimeOutError extends CustomError {
  statusCode: number = 408;
  private error: string;

  constructor(error: string) {
    super("Request Time Out Error");
    this.error = error;
    Object.setPrototypeOf(this, RequestTimeOutError.prototype);
  }

  getErrors(): ReturnErrorType<string> {
    return {
      statusCode: this.statusCode,
      errors: [this.error],
      type: "Request Time Out Error",
    };
  }
}

export default RequestTimeOutError;
