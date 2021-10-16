import { MissingParamError, InvalidParamError, UnauthorizedError } from "../../utils/errors/index";
import { Request, Response } from "express";
import IRequestRouters from "../interfaces/IRequestRouters";
import IResponse from "../interfaces/IResponse";

export default (router: (request: IRequestRouters) => Promise<IResponse>) => {

	return async (req: Request, res: Response) => {

		const { response, statusCode } = await router({
			body: req.body,
			query: req.query,
			params: req.params,
			userId: req.userId
		});

		if (response instanceof UnauthorizedError)
			return res.status(401).json({ response: response.message });

		if (response instanceof InvalidParamError || response instanceof MissingParamError)
			return res.status(400).json({ response: response.message });

		if (response instanceof Error)
			return res.status(500).json({ response: response.message });

		return res.status(statusCode).json({ response: response });
	};
};