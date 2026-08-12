export type HTTPStatusCode = 400 | 401 | 404 | 409 | 500;

export class ConflictError extends Error {
    public readonly statusCode: HTTPStatusCode;

    constructor(message: string, statusCode: HTTPStatusCode = 409 ) {
        super(message)
        this.name = "ConflictError"
        this.statusCode = statusCode
    }
 }