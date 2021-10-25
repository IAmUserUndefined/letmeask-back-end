import IUserRepository from "./IUserRepository";
import UserModel from "../../database/models/User";
import { User } from "../../entities/User";
import { EntityRepository, getCustomRepository } from "typeorm";

@EntityRepository(User)
export class UserRepository implements IUserRepository{
	
	private repository: UserModel;

	constructor(){
		this.repository = getCustomRepository(UserModel);
	}

	async store(id: string, email: string, name: string, hash: string, token: string): Promise<void> {
		const user = this.repository.create({
			id: id,
			name: name,
			email: email,
			password: hash,
			verificationToken: token,
			verificationTokenExpiryDate: "0" 
		});

		await this.repository.save(user);
	}

	async verifyEmail(email: string, token: string): Promise<void> {
		const user = await this.repository.findOne({ email: email, verificationToken: token });
		user.verifiedEmail = true;
		await this.repository.save(user);
	}

	async updateName(id: string, name: string): Promise<void> {
		const user = await this.repository.findOne({ id: id });
		user.name = name;
		await this.repository.save(user);
	}

	async destroy(id: string): Promise<void> {
		await this.repository.delete(id);
	}

	async findEmailById(id: string): Promise<string> {
		const user = await this.repository.findOne({ id: id});
		return user.email;
	}

	async findEmailByEmail(email: string): Promise<string> {
		const user = await this.repository.findOne({ email: email });
		return user.email;
	}

	async getId(email: string): Promise<string> {
		const user = await this.repository.findOne({ email: email });
		return user.id;
	}

	async getPasswordByEmail(email: string): Promise<string> {
		const user = await this.repository.findOne({ email: email });
		return user.password;
	}

	async getPasswordById(id: string): Promise<string> {
		const user = await this.repository.findOne({ id: id });
		return user.password;
	}

	async getVerificationTokenById(id: string): Promise<string> {
		const user = await this.repository.findOne({ id: id });
		return user.verificationToken;
	}

	async getVerificationTokenByEmail(email: string): Promise<string> {
		const user = await this.repository.findOne({ email: email });
		return user.verificationToken;
	}

	async updateVerificationTokenById(id: string, verificationToken: string): Promise<void> {
		const user = await this.repository.findOne({ id: id });
		user.verificationToken = verificationToken;
		await this.repository.save(user);
	}

	async updateVerificationTokenByEmail(email: string, verificationToken: string): Promise<void> {
		const user = await this.repository.findOne({ email: email });
		user.verificationToken = verificationToken;
		await this.repository.save(user);
	}

	async getVerificationTokenExpiryDateById(id: string): Promise<string> {
		const user = await this.repository.findOne({ id: id });
		return user.verificationTokenExpiryDate;
	}

	async getVerificationTokenExpiryDateByEmail(email: string): Promise<string> {
		const user = await this.repository.findOne({ email: email });
		return user.verificationTokenExpiryDate;
	}

	async updateVerificationTokenExpiryDateById(id: string, verificationTokenExpiryDate: string): Promise<void> {
		const user = await this.repository.findOne({ id: id });
		user.verificationTokenExpiryDate = verificationTokenExpiryDate;
		await this.repository.save(user);
	}

	async updateVerificationTokenExpiryDateByEmail(email: string, verificationTokenExpiryDate: string): Promise<void> {
		const user = await this.repository.findOne({ email: email });
		user.verificationTokenExpiryDate = verificationTokenExpiryDate;
		await this.repository.save(user);
	}

	async updateEmail(id: string, email: string): Promise<void> {
		const user = await this.repository.findOne({ id: id });
		user.email = email;
		await this.repository.save(user);
	}

	async updatePasswordById(id: string, password: string): Promise<void>{
		const user = await this.repository.findOne({ id: id });
		user.password = password;
		await this.repository.save(user);
	}

	async updatePasswordByEmail(email: string, password: string): Promise<void>{
		const user = await this.repository.findOne({ email: email });
		user.password = password;
		await this.repository.save(user);
	}
}