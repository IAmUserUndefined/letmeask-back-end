import { ok } from "../../../adapter/adapterResponses/adapterResponses";
import IRequestRouters from "../../../adapter/interfaces/IRequestRouters";
import GetUserRoomCodeRules from "./GetUserRoomCodeRules";

export default new class GetUserRoomCodeController {

	async handle(request: IRequestRouters) {

		const userId = request.userId;

		const getUserRoomCodeRules = new GetUserRoomCodeRules();

		const response = await getUserRoomCodeRules.execute({ userId });

		return ok(response);
	}
};