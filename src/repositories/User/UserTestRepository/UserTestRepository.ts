import prisma from "../../../../prisma/index";
import IUserTestRepository from "./IUserTestRepository";

export class UserTestRepository implements IUserTestRepository {

	async createTestUsers(){

		await prisma.user.create({
			data: {
				id: "aa98bc1b-22f4-4fc6-be64-3d830068bddc",
				email: "joao@teste.com",
				name: "João Pedro",
				password: "$2a$10$qccZ2L8csoUcHQR1mMFkJulToLLZTe7Xo7DnM19dV4Ly3r1OkBg6S",
				verificationToken: "544f818f5f5cd4cde44c611683fc71",
				verifiedEmail: true,
				verificationTokenExpiryTime: 16333909805121
			}
		});
	
		await prisma.user.create({
			data: {
				id: "ff98bc1b-22f4-4fc6-be64-3d830068bzaa",
				email: "joao1000@teste.com",
				name: "João Pedro",
				password: "$2a$10$qccZ2L8csoUcHQR1mMFkJulToLLZTe7Xo7DnM19dV4Ly3r1OkBg6S",
				verificationToken: "216d685d384626d9a575629dc38e88",
				verifiedEmail: false   
			}
		});

		await prisma.user.create({
			data: {
				id: "fe98bc1b-22f4-4fc6-be64-3d830068bddd",
				email: "joao5000@teste.com",
				name: "João Pedro",
				password: "$2a$10$qccZ2L8csoUcHQR1mMFkJulToLLZTe7Xo7DnM19dV4Ly3r1OkBg6S",
				verificationToken: "544f818f5f5cd4cde44c611683fc71",
				verifiedEmail: true,
				verificationTokenExpiryTime: 0
			}
		});

	}

	async deleteTestUsers(){
		await prisma.user.deleteMany({});
	}
}