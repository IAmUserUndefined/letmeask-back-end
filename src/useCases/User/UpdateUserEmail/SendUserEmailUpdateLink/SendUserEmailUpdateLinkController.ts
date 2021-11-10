import { ok } from "../../../../adapter/adapterResponses/adapterResponses";
import IRequestRouters from "../../../../adapter/interfaces/IRequestRouters";
import SendUserEmailUpdateLinkRules from "./SendUserEmailUpdateLinkRules";

export default new class SendUserEmailUpdateLinkController {

	async handle(request: IRequestRouters) {

		const id = request.userId;

		const { email } = request.body;

		const sendUserEmailUpdateLinkRules = new SendUserEmailUpdateLinkRules();

		const response = await sendUserEmailUpdateLinkRules.execute( { id, email } );

		return ok(response);
	}
};