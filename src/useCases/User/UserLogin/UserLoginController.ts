import { ok } from "../../../adapter/adapterResponses/adapterResponses";
import IRequestRouters from "../../../adapter/interfaces/IRequestRouters";
import UserLoginRules from "./UserLoginRules";

export default new class UserLoginController {

	async handle(request: IRequestRouters) {
		const { email, password } = request.body;

		const userLoginRules = new UserLoginRules();

		const response = await userLoginRules.execute( { email, password } );

		return ok(response);
	}
};