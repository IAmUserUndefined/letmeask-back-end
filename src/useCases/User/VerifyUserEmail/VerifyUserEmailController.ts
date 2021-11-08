import VerifyUserEmailRules from "./VerifyUserEmailRules";
import IRequestRouters from "../../../adapter/interfaces/IRequestRouters";
import { ok } from "../../../adapter/adapterResponses/adapterResponses";

export default new class VerifyUserEmailController {

	async handle(request: IRequestRouters) {
		const { email, token } = request.query;

		const verifyUserEmailRules = new VerifyUserEmailRules();

		const response = await verifyUserEmailRules.execute( { email, token } );

		return ok(response);
	}
};