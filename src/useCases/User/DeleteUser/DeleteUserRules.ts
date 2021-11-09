import { UserRepository } from "../../../repositories/User/UserRepository/UserRepository";
import { InvalidParamError, MissingParamError } from "../../../utils/errors";
import Helper from "../../../utils/helper/Helper";
import IDeleteUser from "./IDeleteUser";

export default class DeleteUserRules {

	private repository: UserRepository;

	constructor() {
		this.repository = new UserRepository();
	}

	async execute( { id, password, passwordConfirm }: IDeleteUser ) {
		if (!password || !passwordConfirm)
			return new MissingParamError("Preencha todos os campos");

		if (password !== passwordConfirm)
			return new InvalidParamError("As senhas não coincidem");

		const comparePassword = Helper.compareEncryptPassword(password, await this.repository.getPasswordById(id));

		if (comparePassword) { 
			await this.repository.destroy(id);
			return "Usuário excluído com sucesso";
		}

		return new InvalidParamError("A sua senha está incorreta");
	}
}