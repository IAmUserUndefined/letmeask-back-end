/* eslint-disable @typescript-eslint/no-explicit-any */

import IRequestMiddleware from "../adapter/interfaces/IRequestMiddlewares";
import { UnauthorizedError } from "../utils/errors/index";

import Helper from "../utils/helper/Helper";

export default async (request: IRequestMiddleware) => {

	const { authorization } = request.headers;

	if (!authorization)
		return new UnauthorizedError("Você não está logado");

	const [, token] = authorization.split(" ");

	const decode: any = Helper.jwtVerify(token);

	if (decode instanceof UnauthorizedError)
		return decode;

	return decode.id; 
};