import { ReturnErrorType } from "../Types/ErrorTypes";

abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  getStatus(): number {
    return this.statusCode;
  }

  abstract getErrors(): any;
}

export default CustomError;
