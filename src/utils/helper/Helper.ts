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

	static isPasswordValid(password: string){
		return {
			result: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?:([0-9a-zA-Z])){8,}$/.test(password),
			message: "Sua senha precisa ter 8 caracteres, uma letra maiúscula, uma minúscula e um número"
		};
	}
}

export default Helper;