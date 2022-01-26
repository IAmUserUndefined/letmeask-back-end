import prisma from "../../../../prisma/index";
import IRoomTestRepository from "./IRoomTestRepository";

export class RoomTestRepository implements IRoomTestRepository {

	async createTestRoom(){
		try {
			await prisma.user.create({
				data: {
					id: "hh98bc1b-22f4-4fc6-be64-3d830068beec",
					email: "joao@teste.com",
					name: "João Pedro",
					password: "$2a$10$qccZ2L8csoUcHQR1mMFkJulToLLZTe7Xo7DnM19dV4Ly3r1OkBg6S",
					verificationToken: "544f818f5f5cd4cde44c611683fc71",
					verifiedEmail: true
				}
			});
		
			await prisma.user.create({
				data: {
					id: "hh98bc1b-22f8-4fc6-be64-3d830068beec",
					email: "joao1000@teste.com",
					name: "João Pedro",
					password: "$2a$10$qccZ2L8csoUcHQR1mMFkJulToLLZTe7Xo7DnM19dV4Ly3r1OkBg6S",
					verificationToken: "544f818f5f5cd4cde44c611683fc71",
					verifiedEmail: true
				}
			});
	
			await prisma.room.create({
				data: {
					id: "hh98bc1b-22f4-4fc6-be64-3d830068beec",
					userId: "hh98bc1b-22f4-4fc6-be64-3d830068beec",
					code: "hh98bc1b-22f4-4fc6-be64-3d830068beec",
					name: "História"
				}
			});
		}

		catch(e) {
			console.log(e);
		}
	}

	async deleteTestRoom(){
		try {
			await prisma.room.deleteMany({});
			await prisma.user.deleteMany({});
		}

		catch(e) {
			console.log(e);
		}
	}
}