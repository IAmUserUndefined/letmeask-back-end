import { ok } from "../../../adapter/adapterResponses/adapterResponses";
import IRequestRouters from "../../../adapter/interfaces/IRequestRouters";
import UpdatePasswordRules from "./UpdateUserPasswordRules";

export default new class UpdatePasswordController {

	async handle(request: IRequestRouters) {

		const id = request.userId;

		const { passwordCurrent, newPassword, newPasswordConfirm } = request.body;

		const updatePasswordRules = new UpdatePasswordRules();

		const response = await updatePasswordRules.execute( { id, passwordCurrent, newPassword, newPasswordConfirm } );

		return ok(response);
	}
};