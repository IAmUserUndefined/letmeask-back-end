import { ok } from "../../../adapter/adapterResponses/adapterResponses";
import IRequestRouters from "../../../adapter/interfaces/IRequestRouters";
import CreateResponseRules from "./CreateResponseRules";

export default new class CreateResponseController {

	async handle(request: IRequestRouters) {

		const { response } = request.body;

		const { questionId } = request.params;

		const userId = request.userId;

		const createResponseRules = new CreateResponseRules();

		const responseHandle = await createResponseRules.execute( { response, userId, questionId } ); 

		return ok(responseHandle);
	}
};