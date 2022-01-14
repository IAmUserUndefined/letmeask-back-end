import { ok } from "../../../adapter/adapterResponses/adapterResponses";
import IRequestRouters from "../../../adapter/interfaces/IRequestRouters";
import GetQuestionsRules from "./GetQuestionsRules";

export default new class GetQuestionsController {

	async handle(request: IRequestRouters) {

		const { roomCode } = request.params;

		const getQuestionsRules = new GetQuestionsRules();

		const response = await getQuestionsRules.execute( { roomCode } );

		return ok(response);
	}
};