import "dotenv/config";

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

	static getAppUrlEnvironmentVariable(){
		return process.env.APP_URL;
	}

	static getEmailEnvironmentVariable(){
		return process.env.EMAIL;
	}

	static getEmailPasswordEnvironmentVariable(){
		return process.env.EMAIL_PASSWORD;
	}

	static getSecretKeyJwtEnvironmentVariable(){
		return process.env.SECRET_KEY_JWT;
	}

	static getDatabaseUsernameEnvironmentVariable(){
		return process.env.DB_USERNAME;
	}

	static getDatabasePasswordEnvironmentVariable(){
		return process.env.DB_PASSWORD;
	}
    
	static getDatabaseNameEnvironmentVariable(){
		return process.env.DB_NAME;
	}

	static getDatabasePortEnvironmentVariable(){
		return process.env.DB_PORT;
	}

	static getDatabaseTypeEnvironmentVariable(){
		return process.env.DB_TYPE;
	}

	static getHostEnvironmentVariable(){
		return process.env.HOST;
	}
}

export default Helper;