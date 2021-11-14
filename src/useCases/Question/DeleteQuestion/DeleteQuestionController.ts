import { ok } from "../../../adapter/adapterResponses/adapterResponses";
import IRequestRouters from "../../../adapter/interfaces/IRequestRouters";
import DeleteQuestionRules from "./DeleteQuestionRules";

export default new class DeleteQuestionController {

	async handle(request: IRequestRouters) {

		const { questionId } = request.params;

		const deleteQuestionRules = new DeleteQuestionRules();

		const response = await deleteQuestionRules.execute( { questionId } );

		return ok(response);
	}
};