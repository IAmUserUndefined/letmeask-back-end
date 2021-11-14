import { RoomRepository } from "../../../repositories/Room/RoomRepository/RoomRepository";

export default class GetRoomsRules {

	private repository: RoomRepository;

	constructor() {
		this.repository = new RoomRepository();
	}

	async execute() {
		return await this.repository.getRooms();
	}
}