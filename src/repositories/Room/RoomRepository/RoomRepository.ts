import { Room } from "../../../entities/Room";
import prisma from "../../../../prisma/index";
import IRoomRepository from "./IRoomRepository";

export class RoomRepository implements IRoomRepository{
	
	async store(id: string, userId: string, code: string, name: string): Promise<void> {
		await prisma.room.create({
			data: {
				id: id,
				userId: userId,
				code: code,
				name: name
			}
		});
	}

	async getManageRoomId(userId: string): Promise<string> {
		const room = await prisma.room.findUnique({
			where: {
				userId: userId
			}
		});
		
		const roomId = room ? room.id : null;

		return roomId;
	}

	async getRooms(): Promise<Room[]> {
		const rooms = await prisma.room.findMany();
		return rooms;
	}

	async destroy(id: string): Promise<void> {
		await prisma.room.delete({
			where: {
				id: id
			}
		});
	}
}