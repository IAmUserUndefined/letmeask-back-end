import { ok } from "../../../adapter/adapterResponses/adapterResponses";
import IRequestRouters from "../../../adapter/interfaces/IRequestRouters";
import GetUsernameRules from "./GetUsernameRules";

export default new class GetUsernameController {

	async handle(request: IRequestRouters) {

		const { userId } = request.body;

		const getUsernameRules = new GetUsernameRules();

		const response = await getUsernameRules.execute( { userId } );

		return ok(response);
	}
}; 