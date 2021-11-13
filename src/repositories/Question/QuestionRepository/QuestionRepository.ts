import prisma from "../../../../prisma/index";
import { Question } from "../../../entities/Question";
import IQuestionRepository from "./IQuestionRepository";

export class QuestionRepository implements IQuestionRepository {
	
	async store(id: string, userId: string, roomId: string, name: string): Promise<void> {
		await prisma.question.create({
			data: {
				id: id,
				userId: userId, 
				roomId: roomId,
				name: name
			}
		});
	}

	async getQuestions(roomId: string): Promise<Question[]> {
		const questions = await prisma.question.findMany({
			where: {
				roomId: roomId
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