import { ok } from "../../../adapter/adapterResponses/adapterResponses";
import IRequestRouters from "../../../adapter/interfaces/IRequestRouters";
import GetResponsesRules from "./GetResponsesRules";

export default new class GetResponsesController {

	async handle(request: IRequestRouters) {
        
		const { questionId } = request.params;

		const getResponsesRules = new GetResponsesRules();

		const response =  await getResponsesRules.execute(questionId);

		return ok(response);
	}
};