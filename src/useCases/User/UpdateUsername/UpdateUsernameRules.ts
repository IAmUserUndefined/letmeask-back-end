import { UserRepository } from "../../../repositories/User/UserRepository/UserRepository";
import { MissingParamError } from "../../../utils/errors";
import IUpdateUserName from "./IUpdateUsername";

export default class UpdateUserNameRules {
	private repository: UserRepository;

	constructor() {
		this.repository = new UserRepository;
	}

	async execute({ name, userId }: IUpdateUserName) {

		if (!name)
			return new MissingParamError("Preencha o seu novo nome");

		await this.repository.updateName(userId, name);

		return "Nome atualizado com sucesso";
	}
}