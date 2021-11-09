import { UserRepository } from "../../../repositories/User/UserRepository/UserRepository";
import { InvalidParamError, MissingParamError } from "../../../utils/errors";
import ICreateUser from "./ICreateUser";
import Helper from "../../../utils/helper/Helper";
import Mail from "../../../provider/Mail/Mail";

export default class CreateUserRules {
	private repository: UserRepository;
	private mail: Mail;

	constructor() {
		this.repository = new UserRepository;
		this.mail = new Mail();
	}

	async execute({ email, name, password, passwordConfirm }: ICreateUser) {

		if (!email || !name ||!password || !passwordConfirm)
			return new MissingParamError("Preencha todos os campos");

		if (await this.repository.findEmailByEmail(email))
			return new InvalidParamError("Email já cadastrado");

		const { result, message } = Helper.isPasswordValid(password);

		if (!result)
			return new InvalidParamError(message);

		if (password !== passwordConfirm)
			return new InvalidParamError("As senhas não coincidem");

		const token = Helper.createToken();

		await this.repository.store(Helper.createId(), email, name, Helper.encryptPassword(password), token);

		await this.mail.sendMail(email, "Verificação de Email", "createUserEmailBody", {
			appUrl: Helper.getAppUrlEnvironmentVariable(),
			email: email,
			token: token
		});

		return "Usuário cadastrado com sucesso, verique seu email";
	}
}