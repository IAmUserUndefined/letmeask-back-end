import { MissingParamError, InvalidParamError } from "../../utils/errors/index";

interface IResponse {
    response: string | MissingParamError | InvalidParamError | Error; 
    statusCode: number;
}

export default IResponse;