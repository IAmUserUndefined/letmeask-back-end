import { RoomRepository } from "../../../repositories/Room/RoomRepository/RoomRepository";
import { MissingParamError, UnauthorizedError } from "../../../utils/errors";
import Helper from "../../../utils/helper/Helper";
import ICreateRoom from "./ICreateRoom";

export default class CreateRoomRules {
    
	private repository: RoomRepository;

	constructor() {
		this.repository = new RoomRepository();
	}

	async execute( { userId, name }: ICreateRoom ) {

		const room = await this.repository.getManageRoomId(userId);

		if (room)
			return new UnauthorizedError("Você já tem uma sala criada, exclua ela para criar outra");

		if (!name)
			return new MissingParamError("Preencha o nome da sala");

		const code = `#${Math.floor(Math.random() * 100000000000)}`;

		await this.repository.store(Helper.createId(), userId, code, name);

		return "Sala criada com sucesso";
	}

}