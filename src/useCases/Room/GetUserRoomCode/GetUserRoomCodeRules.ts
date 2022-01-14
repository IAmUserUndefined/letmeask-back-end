import { RoomRepository } from "../../../repositories/Room/RoomRepository/RoomRepository";
import IGetUserRoom from "./IGetUserRoomCode";

export default class GetUserRoomCodeRules {

	private repository: RoomRepository;

	constructor() {
		this.repository = new RoomRepository();
	}

	async execute({ userId }: IGetUserRoom) {
		return await this.repository.getUserRoomCode(userId);
	}
}