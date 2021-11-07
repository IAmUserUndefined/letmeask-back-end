import prisma from "../../../../prisma";
import IUserRepository from "./IUserRepository";

export class UserRepository implements IUserRepository{

	async store(id: string, email: string, name: string, hash: string, token: string): Promise<void> {
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

	async verifyEmail(email: string, token: string): Promise<void> {
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

	async updateName(id: string, name: string): Promise<void> {
		await prisma.user.update({
			where: {
				id: id
			},
			data: {
				name: name
			}
		});
	}

	async destroy(id: string): Promise<void> {
		await prisma.user.delete({
			where: {
				id: id
			}
		});
	}

	async findEmailById(id: string): Promise<string> {
		const user = await prisma.user.findUnique({
			where: {
				id: id
			}
		});

		return user.email;
	}

	async findEmailByEmail(email: string): Promise<string> {
		const user = await prisma.user.findUnique({
			where: {
				email: email
			}
		});

		return user.email;
	}

	async getId(email: string): Promise<string> {
		const user = await prisma.user.findUnique({
			where: {
				email: email
			}
		});

		return user.id;
	}

	async getPasswordByEmail(email: string): Promise<string> {
		const user = await prisma.user.findUnique({
			where: {
				email: email
			}
		});

		return user.password;
	}

	async getPasswordById(id: string): Promise<string> {
		const user = await prisma.user.findUnique({
			where: {
				id: id
			}
		});

		return user.password;
	}

	async getVerificationTokenById(id: string): Promise<string> {
		const user = await prisma.user.findUnique({
			where: {
				id: id
			}
		});

		return user.verificationToken;
	}

	async getVerificationTokenByEmail(email: string): Promise<string> {
		const user = await prisma.user.findUnique({
			where: {
				email: email
			}
		});

		return user.verificationToken;
	}

	async updateVerificationTokenById(id: string, verificationToken: string): Promise<void> {
		await prisma.user.update({
			where: {
				id: id
			},
			data: {
				verificationToken: verificationToken
			}
		});
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
		const user = await prisma.user.findUnique({
			where: {
				id: id
			}
		});

		return user.verificationTokenExpiryTime;
	}

	async getVerificationTokenExpiryDateByEmail(email: string): Promise<bigint> {
		const user = await prisma.user.findUnique({
			where: {
				email: email
			}
		});

		return user.verificationTokenExpiryTime;
	}

	async updateVerificationTokenExpiryDateById(id: string, verificationTokenExpiryDate: bigint): Promise<void> {
		await prisma.user.update({
			where: {
				id: id
			},
			data: {
				verificationTokenExpiryTime: verificationTokenExpiryDate
			}
		});
	}

	async updateVerificationTokenExpiryDateByEmail(email: string, verificationTokenExpiryDate: bigint): Promise<void> {
		await prisma.user.update({
			where: {
				email: email
			},
			data: {
				verificationTokenExpiryTime: verificationTokenExpiryDate
			}
		});
	}

	async updateEmail(id: string, email: string): Promise<void> {
		await prisma.user.update({
			where: {
				id: id
			},
			data: {
				email: email
			}
		});
	}

	async updatePasswordById(id: string, password: string): Promise<void> {
		await prisma.user.update({
			where: {
				id: id
			},
			data: {
				password: password
			}
		});
	}

	async updatePasswordByEmail(email: string, password: string): Promise<void> {
		await prisma.user.update({
			where: {
				email: email
			},
			data: {
				password: password
			}
		});
	}
}