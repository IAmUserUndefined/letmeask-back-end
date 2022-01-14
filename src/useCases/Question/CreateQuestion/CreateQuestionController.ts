import { ok } from "../../../adapter/adapterResponses/adapterResponses";
import IRequestRouters from "../../../adapter/interfaces/IRequestRouters";
import CreateQuestionRules from "./CreateQuestionRules";

export default new class CreateQuestionController {

	async handle(request: IRequestRouters) {

		const { question } = request.body;

		const { roomCode } = request.params;

		const userId = request.userId;

		const createQuestionRules = new CreateQuestionRules();

		const response = await createQuestionRules.execute( { question, userId, roomCode } );

		return ok(response);
	}
};