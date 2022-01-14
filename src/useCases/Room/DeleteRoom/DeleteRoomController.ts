import { ok } from "../../../adapter/adapterResponses/adapterResponses";
import IRequestRouters from "../../../adapter/interfaces/IRequestRouters";
import DeleteRoomRules from "./DeleteRoomRules";

export default new class DeleteRoomController {

	async handle(request: IRequestRouters) {

		const { roomCode } = request.params;

		const deleteRoomRules = new DeleteRoomRules();

		const response = await deleteRoomRules.execute( { roomCode } );

		return ok(response);
	}
};