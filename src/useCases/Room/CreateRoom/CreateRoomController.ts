import { ok } from "../../../adapter/adapterResponses/adapterResponses";
import IRequestRouters from "../../../adapter/interfaces/IRequestRouters";
import CreateRoomRules from "./CreateRoomRules";

export default new class CreateRoomController {
    
	async handle(request: IRequestRouters) {

		const { name } = request.body;

		const userId = request.userId;

		const createRoomRules = new CreateRoomRules();

		const response = await createRoomRules.execute( { userId, name} );

		return ok(response);
	}
};