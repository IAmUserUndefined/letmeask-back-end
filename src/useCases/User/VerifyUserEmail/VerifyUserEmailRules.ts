import { UserRepository } from "../../../repositories/User/UserRepository/UserRepository";
import { InvalidParamError, MissingParamError } from "../../../utils/errors";
import IVerifyUserEmail from "./IVerifyUserEmail";

export default class VerifyUserEmailRules {
	private repository: UserRepository;

	constructor() {
		this.repository = new UserRepository();
	}

	async execute( { email, token }: IVerifyUserEmail ): Promise<string | MissingParamError | InvalidParamError | Error> {
		if (!email || !token)
			return new MissingParamError("Preencha todos os campos");

		if (await this.repository.findByEmailVerified(email))
			return new InvalidParamError("Email já verificado");

		if (await this.repository.getVerificationTokenByEmail(email) !== token)
			return new InvalidParamError("Token inválido");

		await this.repository.verifyEmail(email, token);

		return "Email verificado com sucesso";
	}
}