import { ok } from "../../../adapter/adapterResponses/adapterResponses";
import IRequestRouters from "../../../adapter/interfaces/IRequestRouters";
import CreateUserRules from "./CreateUserRules";

export default new class CreateUserController {

	async handle(request: IRequestRouters) {
		const { email, name, password, passwordConfirm } = request.body;

		const createUserRules = new CreateUserRules();

		const response = await createUserRules.execute( { email, name, password, passwordConfirm } );

		return ok(response);
	}
}; 