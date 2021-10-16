import { MissingParamError, InvalidParamError, UnauthorizedError } from "../../utils/errors/index";

interface IResponse {
    response: string | MissingParamError | InvalidParamError | UnauthorizedError | Error; 
    statusCode: number;
}

export default IResponse;