import { ok } from "../../../../adapter/adapterResponses/adapterResponses";
import IRequestRouters from "../../../../adapter/interfaces/IRequestRouters";
import UpdateUserEmailRules from "./UpdateUserEmailRules";

export default new class UpdateEmailController {

	async handle(request: IRequestRouters) {
		
		const id = request.userId;

		const { email, token } = request.query;

		const updateUserEmailRules = new UpdateUserEmailRules();

		const response = await updateUserEmailRules.execute( { id, email, token } );

		return ok(response);
	}
};