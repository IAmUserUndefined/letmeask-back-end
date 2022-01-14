/* eslint-disable @typescript-eslint/no-unused-vars */

import { ok } from "../../../adapter/adapterResponses/adapterResponses";
import IRequestRouters from "../../../adapter/interfaces/IRequestRouters";
import GetRoomRules from "./GetRoomRules";

export default new class GetRoomController {

	async handle(request: IRequestRouters) {

		const { roomCode } = request.params;

		const getRoomRules = new GetRoomRules();

		const response = await getRoomRules.execute({ roomCode });

		return ok(response);
	}
};