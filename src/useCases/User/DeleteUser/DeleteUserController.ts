import { ok } from "../../../adapter/adapterResponses/adapterResponses";
import IRequestRouters from "../../../adapter/interfaces/IRequestRouters";
import DeleteUserRules from "./DeleteUserRules";

export default new class DeleteUserController {

	async handle(request: IRequestRouters) {
        
		const id = request.userId;

		const { password, passwordConfirm } = request.body;

		const deleteUserController = new DeleteUserRules();

		const response = await deleteUserController.execute( { id, password, passwordConfirm } );

		return ok(response);
	}
};