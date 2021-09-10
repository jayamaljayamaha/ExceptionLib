import { ReturnErrorType } from "../Types/ErrorTypes";
import CustomError from "./CustomError";

class BadGatewayError extends CustomError {
  statusCode: number = 502;
  private error: string;

  constructor(error: string) {
    super("Bad Gateway Error");
    this.error = error;
    Object.setPrototypeOf(this, BadGatewayError.prototype);
  }

  getErrors(): ReturnErrorType<string> {
    return {
      statusCode: this.statusCode,
      errors: [this.error],
      type: "Bad Gateway Error",
    };
  }
}

export default BadGatewayError;
