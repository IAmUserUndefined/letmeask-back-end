import { ok } from "../../../adapter/adapterResponses/adapterResponses";
import IRequestRouters from "../../../adapter/interfaces/IRequestRouters";
import DeleteRoomRules from "./DeleteRoomRules";

export default new class DeleteRoomController {

	async handle(request: IRequestRouters) {

		const { roomId } = request.params;

		const userId = request.userId;

		const deleteRoomRules = new DeleteRoomRules();

		const response = await deleteRoomRules.execute( { roomId, userId } );

		return ok(response);
	}
};