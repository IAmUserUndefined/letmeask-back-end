import UserModel from "../../../database/models/User";
import { User } from "../../../entities/User";
import { EntityRepository, getCustomRepository } from "typeorm";
import IUserTestRepository from "./IUserTestRepository";

@EntityRepository(User)
export class UserTestRepository implements IUserTestRepository {
	
	private repository: UserModel;

	constructor(){
		this.repository = getCustomRepository(UserModel);
	}

	async createTestUsers(): Promise<void>{

		const userOne = this.repository.create({
			id: "aa98bc1b-22f4-4fc6-be64-3d830068bddc",
			name: "João Pedro",
			email: "joao@teste.com",
			password: "$2a$10$qccZ2L8csoUcHQR1mMFkJulToLLZTe7Xo7DnM19dV4Ly3r1OkBg6S",
			verifiedEmail: true,
			verificationToken: "544f818f5f5cd4cde44c611683fc71",
			verificationTokenExpiryDate: "16333909805121" 
		});

		await this.repository.save(userOne);

		const userTwo = this.repository.create({
			id: "ff98bc1b-22f4-4fc6-be64-3d830068bzaa",
			name: "João Pedro",
			email: "joao1000@teste.com",
			password: "$2a$10$qccZ2L8csoUcHQR1mMFkJulToLLZTe7Xo7DnM19dV4Ly3r1OkBg6S",
			verifiedEmail: false,
			verificationToken: "216d685d384626d9a575629dc38e88",
			verificationTokenExpiryDate: "16333909805121" 
		});

		await this.repository.save(userTwo);

		const userThree = this.repository.create({
			id: "fe98bc1b-22f4-4fc6-be64-3d830068bddd",
			name: "João Pedro",
			email: "joao5000@teste.com",
			password: "$2a$10$qccZ2L8csoUcHQR1mMFkJulToLLZTe7Xo7DnM19dV4Ly3r1OkBg6S",
			verifiedEmail: true,
			verificationToken: "544f818f5f5cd4cde44c611683fc71",
			verificationTokenExpiryDate: "0" 
		});

		await this.repository.save(userThree);

	}

	async deleteTestUsers(): Promise<void>{
		await this.repository.delete({});
	}
}