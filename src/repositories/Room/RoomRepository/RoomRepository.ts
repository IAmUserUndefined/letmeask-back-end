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

	async getManageRoom(userId: string): Promise<Room> {
		const room = await prisma.room.findUnique({
			where: {
				userId: userId
			}
		});
		return room;
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