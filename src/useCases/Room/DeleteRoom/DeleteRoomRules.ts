import { RoomRepository } from "../../../repositories/Room/RoomRepository/RoomRepository";
import IDeleteRoom from "./IDeleteRoom";

export default class DeleteRoomRules {

	private repository: RoomRepository;

	constructor() {
		this.repository = new RoomRepository();
	}

	async execute( { roomCode }: IDeleteRoom ) {
		await this.repository.destroy(roomCode);
		return "Sala excluída com sucesso";
	}
}