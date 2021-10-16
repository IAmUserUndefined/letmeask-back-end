import { MissingParamError, InvalidParamError, UnauthorizedError } from "../../utils/errors/index";

const ok = async (response: string | Error | MissingParamError | InvalidParamError | UnauthorizedError) => {
	return {
		statusCode: 200,
		response: response
	};
}; 

export {
	ok
};