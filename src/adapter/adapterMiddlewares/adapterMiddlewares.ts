import { UnauthorizedError } from "../../utils/errors/index";
import { Request, Response, NextFunction } from "express";
import IRequestMiddleware from "../interfaces/IRequestMiddlewares";

export default (middleware: (request: IRequestMiddleware ) => Promise<string | void | Error | UnauthorizedError>) => {

	return async (req: Request, res: Response, next: NextFunction) => {

		const response = await middleware({
			headers: req.headers,
			params: req.params
		});

		if (response instanceof UnauthorizedError)
			return res.status(401).json({ response: response.message });

		if (response instanceof Error)
			return res.status(500).json({ response: response.message });

		if(response)
			req.userId = response;

		return next();

	};
};