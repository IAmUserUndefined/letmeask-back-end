import { UserRepository } from "../../../../repositories/User/UserRepository/UserRepository";
import { InvalidParamError, MissingParamError } from "../../../../utils/errors";
import Mail from "../../../../provider/Mail/Mail";
import ISendUserPasswordRecoveryLink from "./ISendUserPasswordRecoveryLink";
import Helper from "../../../../utils/helper/Helper";

export default class SendUserPasswordRecoveryLinkRules {

	private repository: UserRepository;
	private mail: Mail;

	constructor() {
		this.repository = new UserRepository();
		this.mail = new Mail();
	}

	async execute( { email }: ISendUserPasswordRecoveryLink ) {

		if (!email)
			return new MissingParamError("Preencha o campo email");

		if (!await this.repository.findEmailByEmail(email))
			return new InvalidParamError("Email não cadastrado");

		const token = Helper.createToken();

		await this.repository.updateVerificationTokenByEmail(email, token);
		await this.repository.updateVerificationTokenExpiryDateByEmail(email, BigInt(Helper.createTokenExpiryDate()));

		await this.mail.sendMail(email, "Recuperação de Senha", "recoverPasswordEmailBody", {
			appUrl: Helper.getAppUrlEnvironmentVariable(),
			email: email,
			token: token
		});

		return "O link de recuperação de senha foi enviado para seu email, ele é válido por alguns minutos, não esqueça de verificar sua caixa de spam";
	}
}