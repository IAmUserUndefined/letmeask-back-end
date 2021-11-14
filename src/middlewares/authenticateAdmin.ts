/* eslint-disable @typescript-eslint/no-explicit-any */

import IRequestMiddleware from "../adapter/interfaces/IRequestMiddlewares";
import { Room } from "../entities/Room";
import { RoomRepository } from "../repositories/Room/RoomRepository/RoomRepository";
import { UnauthorizedError } from "../utils/errors/index";

import Helper from "../utils/helper/Helper";

export default async (request: IRequestMiddleware) => {

	const { authorization } = request.headers;

	const [, token] = authorization.split(" ");

	const decode: any = Helper.jwtVerify(token);

	const roomRepository = new RoomRepository();

	const room: Room = await roomRepository.getManageRoom(decode.id);

	const { roomId } = request.params;

	if(room.id !== roomId)
		return new UnauthorizedError("Só o administrador da sala pode fazer essa ação"); 
};