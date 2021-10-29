import IRoomRepository from "./IRoomRepository";
import RoomModel from "../../../database/models/Room";
import { Room } from "../../../entities/Room";
import { EntityRepository, getCustomRepository } from "typeorm";

@EntityRepository(Room)
export class RoomRepository implements IRoomRepository{
	
	private repository: RoomModel;

	constructor(){
		this.repository = getCustomRepository(RoomModel);
	}

	async store(id: string, userId: string, code: string, name: string): Promise<void> {
		const room = this.repository.create({
			id: id,
			userId: userId,
			code: code,
			name: name
		});

		await this.repository.save(room);
	}

	async getRoomAdmin(userId: string): Promise<Room> {
		const room = await this.repository.findOne({ userId: userId });
		return room;
	}

	async getRooms(): Promise<Room[]> {
		const rooms = await this.repository.find();
		return rooms;
	}

	async destroy(id: string): Promise<void> {
		await this.repository.delete(id);
	}

}