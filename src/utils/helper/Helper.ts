import { v4 } from "uuid";
import { hashSync } from "bcryptjs";
import crypto from "crypto";

class Helper {
	static createId() {
		return v4();
	}
    
	static createToken() {
		return crypto.randomBytes(15).toString("hex");
	}

	static encryptPassword(password: string) {
		return hashSync(password, 10);
	}
}

export default Helper;