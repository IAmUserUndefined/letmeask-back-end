import prisma from "../../../../prisma/index";
import { Question } from "../../../entities/Question";
import IQuestionRepository from "./IQuestionRepository";

export class QuestionRepository implements IQuestionRepository {
	
	async store(id: string, userId: string, roomCode: string, name: string): Promise<void> {
		await prisma.question.create({
			data: {
				id: id,
				userId: userId, 
				roomCode: roomCode,
				name: name
			}
		});
	}

	async getQuestions(roomCode: string): Promise<Question[]> {
		const questions = await prisma.question.findMany({
			where: {
				roomCode: roomCode
			}
		});
		return questions;
	}

	async getUserQuestions(userId: string): Promise<Question[]> {
		const questions = await prisma.question.findMany({
			where: {
				userId: userId
			}
		});
		return questions;
	}

	async destroy(id: string): Promise<void> {
		await prisma.question.delete({
			where: {
				id: id
			}
		});
	}
}