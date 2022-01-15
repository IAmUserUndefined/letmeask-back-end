import { UserRepository } from "../../../../repositories/User/UserRepository/UserRepository";
import Mail from "../../../../provider/Mail/Mail";
import ISendUserEmailUpdateLink from "./ISendUserEmailUpdateLink";
import { InvalidParamError, MissingParamError } from "../../../../utils/errors";
import Helper from "../../../../utils/helper/Helper";

export default class SendUserEmailUpdateLinkRules {
    
	private repository: UserRepository;
	private mail: Mail;

	constructor() {
		this.repository = new UserRepository();
		this.mail = new Mail();
	}

	async execute( { id, email }: ISendUserEmailUpdateLink ) {
		if (!email)
			return new MissingParamError("Preencha o campo email");

		if (await this.repository.findEmailByEmail(email))
			return new InvalidParamError("Email já cadastrado");

		const token = Helper.createToken();

		await this.repository.updateVerificationTokenById(id, token);
		await this.repository.updateVerificationTokenExpiryDateById(id, BigInt(Helper.createTokenExpiryDate()));

		await this.mail.sendMail(email, "Atualização de Email", "updateUserEmailBody", {
			appUrl: Helper.getAppUrlEnvironmentVariable(),
			email: email,
			token: token
		});

		return "O link de atualização de email foi enviado para seu email, ele é válido por alguns minutos, não esqueça de verificar sua caixa de spam";
	}
}