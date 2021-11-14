/* eslint-disable @typescript-eslint/no-explicit-any */

import IRequestMiddleware from "../adapter/interfaces/IRequestMiddlewares";
import { RoomRepository } from "../repositories/Room/RoomRepository/RoomRepository";
import { UnauthorizedError } from "../utils/errors/index";

import Helper from "../utils/helper/Helper";

export default async (request: IRequestMiddleware) => {

	const { authorization } = request.headers;

	const [, token] = authorization.split(" ");

	const decode: any = Helper.jwtVerify(token);

	const roomRepository = new RoomRepository();

	const room = await roomRepository.getManageRoomId(decode.id);

	const { roomId } = request.params;

	if(room === roomId)
		return new UnauthorizedError("O administrador da sala só pode responder perguntas"); 
};