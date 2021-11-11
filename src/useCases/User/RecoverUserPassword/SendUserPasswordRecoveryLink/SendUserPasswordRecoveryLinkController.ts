import { ok } from "../../../../adapter/adapterResponses/adapterResponses";
import IRequestRouters from "../../../../adapter/interfaces/IRequestRouters";
import SendUserPasswordRecoveryLinkRules from "./SendUserPasswordRecoveryLinkRules";

export default new class SendUserEmailUpdateLinkController {

	async handle(request: IRequestRouters) {

		const { email } = request.body;

		const sendUserPasswordRecoveryLinkRules = new SendUserPasswordRecoveryLinkRules();

		const response = await sendUserPasswordRecoveryLinkRules.execute( { email } );

		return ok(response);
	}
};