
export default interface ReturnErrorType<Type> {
    statusCode: number
    errors: Type[]
    type: string
}