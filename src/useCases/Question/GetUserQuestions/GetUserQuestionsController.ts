import { ok } from "../../../adapter/adapterResponses/adapterResponses";
import IRequestRouters from "../../../adapter/interfaces/IRequestRouters";
import GetUserQuestionsRules from "./GetUserQuestionsRules";

export default new class GetUserQuestionsController {

	async handle(request: IRequestRouters) {

		const userId = request.userId;

		const getUserQuestionsRules = new GetUserQuestionsRules();

		const response = await getUserQuestionsRules.execute( { userId } );

		return ok(response);
	}
};