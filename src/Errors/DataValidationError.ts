import { ReturnErrorType, ValidationErrorType } from "../Types/ErrorTypes";
import CustomError from "./CustomError";

class DataValidationError extends CustomError {
  statusCode: number = 400;
  private errors: ValidationErrorType[];

  constructor(errors: ValidationErrorType[]) {
    super("Data Validation Error");
    this.errors = errors;
    Object.setPrototypeOf(this, DataValidationError.prototype);
  }

  getErrors(): ReturnErrorType<ValidationErrorType> {
    return {
      statusCode: this.statusCode,
      errors: this.errors,
      type: "Data Validation Error",
    };
  }
}

export default DataValidationError;
