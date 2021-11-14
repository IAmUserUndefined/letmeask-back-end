import { ok } from "../../../adapter/adapterResponses/adapterResponses";
import IRequestRouters from "../../../adapter/interfaces/IRequestRouters";
import DeleteResponseRules from "./DeleteResponseRules";

export default new class DeleteResponseController {

	async handle(request: IRequestRouters) {
        
		const { responseId } = request.params;

		const deleteResponseRules = new DeleteResponseRules();

		const response = await deleteResponseRules.execute( {responseId} );

		return ok(response);
	}
};