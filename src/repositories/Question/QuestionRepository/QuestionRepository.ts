import prisma from "../../../../prisma/index";
import { Question } from "../../../entities/Question";
import IQuestionRepository from "./IQuestionRepository";

export class QuestionRepository implements IQuestionRepository {
	
	async store(id: string, userId: string, roomCode: string, name: string): Promise<void> {
		try {
			await prisma.question.create({
				data: {
					id: id,
					userId: userId, 
					roomCode: roomCode,
					name: name
				}
			});
		}

		catch(e) {
			console.log(e);
		}
	}

	async getQuestions(roomCode: string): Promise<Question[]> {
		try {
			const questions = await prisma.question.findMany({
				where: {
					roomCode: roomCode
				}
			});
			return questions;
	
		}

		catch(e) {
			console.log(e);
		}
	}

	async getUserQuestions(userId: string): Promise<Question[]> {
		try {
			const questions = await prisma.question.findMany({
				where: {
					userId: userId
				}
			});
			return questions;
		}

		catch(e) {
			console.log(e);
		}
	}

	async destroy(id: string): Promise<void> {
		try {
			await prisma.question.delete({
				where: {
					id: id
				}
			});
		}

		catch(e) {
			console.log(e);
		}
	}
}