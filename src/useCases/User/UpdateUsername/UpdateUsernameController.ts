import { ok } from "../../../adapter/adapterResponses/adapterResponses";
import IRequestRouters from "../../../adapter/interfaces/IRequestRouters";
import UpdateUserNameRules from "./UpdateUsernameRules";

export default new class UpdateUserNameController {

	async handle(request: IRequestRouters) {

		const { name } = request.body;

		const userId = request.userId;

		const updateUserNameRules = new UpdateUserNameRules();

		const response = await updateUserNameRules.execute( { name, userId } );

		return ok(response);
	}
}; 