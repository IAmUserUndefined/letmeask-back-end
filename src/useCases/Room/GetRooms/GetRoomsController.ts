/* eslint-disable @typescript-eslint/no-unused-vars */

import { ok } from "../../../adapter/adapterResponses/adapterResponses";
import IRequestRouters from "../../../adapter/interfaces/IRequestRouters";
import GetRoomsRules from "./GetRoomsRules";

export default new class GetRoomController {

	async handle(request: IRequestRouters) {

		const getRoomsRules = new GetRoomsRules();

		const response = await getRoomsRules.execute();

		return ok(response);
	}
};