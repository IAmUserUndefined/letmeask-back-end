import prisma from "../../../../prisma/index";
import IUserRepository from "./IUserRepository";

export class UserRepository implements IUserRepository{

	async store(id: string, email: string, name: string, hash: string, token: string): Promise<void> {
		try {
			await prisma.user.create({
				data: {
					id: id,
					email: email,
					name: name,
					password: hash,
					verificationToken: token
				}
			});
		}

		catch(e) {
			console.log(e);
		}
	}

	async verifyEmail(email: string, token: string): Promise<void> {
		try {
			const user = await prisma.user.findMany({
				where: {
					AND: [
						{ email: { equals: email } },
						{ verificationToken: { equals: token }
						},
					],
				},
			});

			
			await prisma.user.update({
				where:{
					id: user[0].id
				},
				data: {
					verifiedEmail: true
				}
			});
		}

		catch(e) {
			console.log(e);
		}
	}

	async getName(id: string): Promise<string> {
		try {
			const { name } = await prisma.user.findUnique({
				where: {
					id: id
				}
			});
	
			return name;
		}

		catch(e) {
			console.log(e);
		}
	}

	async updateName(id: string, name: string): Promise<void> {
		try {
			await prisma.user.update({
				where: {
					id: id
				},
				data: {
					name: name
				}
			});
		}

		catch(e) {
			console.log(e);
		}
	}

	async destroy(id: string): Promise<void> {
		try {
			await prisma.user.delete({
				where: {
					id: id
				}
			});
		}

		catch(e) {
			console.log(e);
		}
	}

	async findEmailById(id: string): Promise<string> {
		try {
			const user = await prisma.user.findUnique({
				where: {
					id: id
				}
			});
	
			return user.email;
		}

		catch(e) {
			console.log(e);
		}
	}

	async findEmailByEmail(email: string): Promise<string> {
		try {
			const user = await prisma.user.findUnique({
				where: {
					email: email
				}
			});
	
			const userEmail = user ? user.email : null;
	
			return userEmail;
		}

		catch(e) {
			console.log(e);
		}
	}

	async findByEmailVerified(email: string): Promise<string> {
		try {
			const user = await prisma.user.findMany({
				where: {
					AND: [
						{ email: { equals: email } },
						{ verifiedEmail: { equals: true }
						},
					],
				},
			});
	
			const userEmail = user[0] ? user[0].email : null;
	
			return userEmail;
		}

		catch(e) {
			console.log(e);
		}
	}

	async getId(email: string): Promise<string> {
		try {
			const user = await prisma.user.findUnique({
				where: {
					email: email
				}
			});
	
			return user.id;
		}

		catch(e) {
			console.log(e);
		}
	}

	async getPasswordByEmail(email: string): Promise<string> {
		try {
			const user = await prisma.user.findUnique({
				where: {
					email: email
				}
			});
	
			return user.password;
		}

		catch(e) {
			console.log(e);
		}
	}

	async getPasswordById(id: string): Promise<string> {
		try {
			const user = await prisma.user.findUnique({
				where: {
					id: id
				}
			});
	
			return user.password;
		}

		catch(e) {
			console.log(e);
		}
	}

	async getVerificationTokenById(id: string): Promise<string> {
		try {
			const user = await prisma.user.findUnique({
				where: {
					id: id
				}
			});
	
			return user.verificationToken;
		}

		catch(e) {
			console.log(e);
		}
	}

	async getVerificationTokenByEmail(email: string): Promise<string> {
		try {
			const user = await prisma.user.findUnique({
				where: {
					email: email
				}
			});
	
			return user.verificationToken;
		}

		catch(e) {
			console.log(e);
		}
	}

	async updateVerificationTokenById(id: string, verificationToken: string): Promise<void> {
		try {
			await prisma.user.update({
				where: {
					id: id
				},
				data: {
					verificationToken: verificationToken
				}
			});
		}

		catch(e) {
			console.log(e);
		}
	}

	async updateVerificationTokenByEmail(email: string, verificationToken: string): Promise<void> {
		await prisma.user.update({
			where: {
				email: email
			},
			data: {
				verificationToken: verificationToken
			}
		});
	}

	async getVerificationTokenExpiryDateById(id: string): Promise<bigint> {
		try {
			const user = await prisma.user.findUnique({
				where: {
					id: id
				}
			});
	
			return user.verificationTokenExpiryTime;
		}

		catch(e) {
			console.log(e);
		}
	}

	async getVerificationTokenExpiryDateByEmail(email: string): Promise<bigint> {
		try {
			const user = await prisma.user.findUnique({
				where: {
					email: email
				}
			});
	
			return user.verificationTokenExpiryTime;
		}

		catch(e) {
			console.log(e);
		}
	}

	async updateVerificationTokenExpiryDateById(id: string, verificationTokenExpiryDate: bigint): Promise<void> {
		try {
			await prisma.user.update({
				where: {
					id: id
				},
				data: {
					verificationTokenExpiryTime: verificationTokenExpiryDate
				}
			});
		}

		catch(e) {
			console.log(e);
		}
	}

	async updateVerificationTokenExpiryDateByEmail(email: string, verificationTokenExpiryDate: bigint): Promise<void> {
		try {
			await prisma.user.update({
				where: {
					email: email
				},
				data: {
					verificationTokenExpiryTime: verificationTokenExpiryDate
				}
			});
		}

		catch(e) {
			console.log(e);
		}
	}

	async updateEmail(id: string, email: string): Promise<void> {
		try {
			await prisma.user.update({
				where: {
					id: id
				},
				data: {
					email: email
				}
			});
		}

		catch(e) {
			console.log(e);
		}
	}

	async updatePasswordById(id: string, password: string): Promise<void> {
		try {
			await prisma.user.update({
				where: {
					id: id
				},
				data: {
					password: password
				}
			});
		}

		catch(e) {
			console.log(e);
		}
	}

	async updatePasswordByEmail(email: string, password: string): Promise<void> {
		
		try {
			await prisma.user.update({
				where: {
					email: email
				},
				data: {
					password: password
				}
			});
		}
		
		catch(e) {
			console.log(e);
		}
	}
}