import { UserRepository } from "../../../repositories/User/UserRepository/UserRepository";
import { MissingParamError, UnauthorizedError } from "../../../utils/errors";
import Helper from "../../../utils/helper/Helper";
import IUserLogin from "./IUserLogin";

export default class UserLoginRules { 

	private repository: UserRepository;

	constructor() {
		this.repository = new UserRepository();
	}

	async execute( { email, password }: IUserLogin ) {
		if (!email || !password)
			return new MissingParamError("Preencha todos os campos");

		if (!await this.repository.findEmailByEmail(email))
			return new UnauthorizedError("Email/Senha Incorreto(s)");

		if (!await this.repository.findByEmailVerified(email))
			return new UnauthorizedError("Email não verificado");

		const result = Helper.compareEncryptPassword(password, await this.repository.getPasswordByEmail(email));

		const id = await this.repository.getId(email);

		if (result)
			return Helper.createJwt({ id, email });

		return new UnauthorizedError("Email/Senha Incorreto(s)");
	}
}