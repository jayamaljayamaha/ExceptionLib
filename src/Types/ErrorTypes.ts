export interface ReturnErrorType<Type> {
  statusCode: number;
  errors: Type[];
  type: string;
}

export interface ValidationErrorType {
  message: string;
  field: string;
  errorType: string;
}
