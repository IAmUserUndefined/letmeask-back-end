import { UserRepository } from "../../../../repositories/User/UserRepository/UserRepository";
import { InvalidParamError, MissingParamError } from "../../../../utils/errors";
import Helper from "../../../../utils/helper/Helper";
import IRecoverUserPassword from "./IRecoverUserPassword";

export default class RecoverPasswordRules {

	private repository: UserRepository;

	constructor() {
		this.repository = new UserRepository();
	}

	async execute( { email, token, password, passwordConfirm }: IRecoverUserPassword ) {
		if (!password || !passwordConfirm || !email || !token)
			return new MissingParamError("Preencha todos os campos");

		if (await this.repository.getVerificationTokenByEmail(email) !== token)
			return new InvalidParamError("Token Inválido");

		if (Date.now() > await this.repository.getVerificationTokenExpiryDateByEmail(email))
			return new InvalidParamError("Link expirado, recomece o processo");

		const userPassword = await this.repository.getPasswordByEmail(email);

		const passwordCompare = Helper.compareEncryptPassword(password, userPassword);

		if (passwordCompare)
			return new InvalidParamError("A sua nova senha não pode ser igual a anterior");

		const { result, message } = Helper.isPasswordValid(password);

		if (!result)
			return new InvalidParamError(message);

		if (password !== passwordConfirm)
			return new InvalidParamError("As senhas não coincidem");

		await this.repository.updatePasswordByEmail(email, Helper.encryptPassword(password));

		await this.repository.updateVerificationTokenExpiryDateByEmail(email, BigInt(0));

		return "Senha atualizada com sucesso";
	}
}