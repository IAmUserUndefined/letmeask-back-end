import "dotenv/config";

import { UnauthorizedError } from "../errors";

import { v4 } from "uuid";
import { hashSync, compareSync } from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";

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

	static compareEncryptPassword(password: string, userPassword: string) {
		return compareSync(password, userPassword);
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

	static createJwt(user: { id: string, email: string }) {
		return jwt.sign(user, this.getSecretKeyJwtEnvironmentVariable(), { expiresIn: 7200 } );
	}

	static jwtVerify(tokenJwt: string){

		try {

			const decode = jwt.verify(tokenJwt, this.getSecretKeyJwtEnvironmentVariable());

			return decode;
		}

		catch { return new UnauthorizedError("Token Inválido, logue-se novamente"); }
	}

	static createTokenExpiryDate() {
		return new Date().setMinutes(new Date().getMinutes() + 10);
	}

}

export default Helper;