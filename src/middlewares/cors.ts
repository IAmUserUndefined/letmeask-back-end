/* eslint-disable @typescript-eslint/no-explicit-any */

import { NotAllowedCors } from "../utils/errors";
import Helper from "../utils/helper/Helper";
import cors from "cors";

const corsOptions = {
    
	origin: (origin: any, callback: any) => {

		if (Helper.getAppUrlEnvironmentVariable().indexOf(origin) !== -1) return callback(null, true);
      
		callback(new NotAllowedCors("O cors não permite essa requisição"));

	}
};

export default cors(corsOptions);