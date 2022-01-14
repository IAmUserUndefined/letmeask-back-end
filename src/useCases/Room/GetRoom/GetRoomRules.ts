import { RoomRepository } from "../../../repositories/Room/RoomRepository/RoomRepository";
import IGetRoom from "./IGetRoom";

export default class GetRoomsRules {

	private repository: RoomRepository;

	constructor() {
		this.repository = new RoomRepository();
	}

	async execute({ roomCode }: IGetRoom) {
		return await this.repository.getRoom(roomCode);
	}
}