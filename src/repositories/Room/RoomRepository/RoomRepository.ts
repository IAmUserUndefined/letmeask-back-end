import { Room } from "../../../entities/Room";
import prisma from "../../../../prisma/index";
import IRoomRepository from "./IRoomRepository";

export class RoomRepository implements IRoomRepository{
	
	async store(id: string, userId: string, code: string, name: string): Promise<void> {
		try {
			await prisma.room.create({
				data: {
					id: id,
					userId: userId,
					code: code,
					name: name
				}
			});
		}

		catch(e) {
			console.log(e);
		}
	}

	async getUserRoomCode(userId: string): Promise<string> {
		try {
			const room = await prisma.room.findUnique({
				where: {
					userId: userId
				}
			});
			
			const code = room ? room.code : null;
	
			return code;
		}

		catch(e) {
			console.log(e);
		}
	}

	async getRoom(code: string): Promise<Room> {
		try {
			const room = await prisma.room.findMany({
				where: {
					code: code
				},
			});
			
			const roomId = room.length !== 0 ? room[0].id : "";
	
			return await prisma.room.findUnique({
				where:{
					id: roomId
				}
			});
		}

		catch(e) {
			console.log(e);
		}
	}

	async destroy(code: string): Promise<void> {
		try {
			await prisma.room.delete({
				where: {
					code: code
				}
			});
		}

		catch(e) {
			console.log(e);
		}
	}
}