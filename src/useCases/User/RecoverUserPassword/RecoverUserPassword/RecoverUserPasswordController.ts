import { ok } from "../../../../adapter/adapterResponses/adapterResponses";
import IRequestRouters from "../../../../adapter/interfaces/IRequestRouters";
import RecoverPasswordRules from "./RecoverUserPasswordRules";

export default new class RecoverPasswordController {

	async handle(request: IRequestRouters) {

		const { email, token } = request.query;

		const { password, passwordConfirm } = request.body;

		const recoverPasswordRules = new RecoverPasswordRules();

		const response = await recoverPasswordRules.execute( { email, token, password, passwordConfirm } );

		return ok(response);
	}
};