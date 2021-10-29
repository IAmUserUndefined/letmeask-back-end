import IQuestionRepository from "./IQuestionRepository";
import QuestionModel from "../../../database/models/Question";
import { Question } from "../../../entities/Question";
import { EntityRepository, getCustomRepository } from "typeorm";

@EntityRepository(Question)
export class QuestionRepository implements IQuestionRepository {
	
	private repository: QuestionModel;

	constructor(){
		this.repository = getCustomRepository(QuestionModel);
	}

	async store(id: string, roomId: string, name: string): Promise<void> {
		const room = this.repository.create({
			id: id,
			roomId: roomId,
			name: name
		});

		await this.repository.save(room);
	}

	async getQuestions(): Promise<Question[]> {
		const questions = await this.repository.find();
		return questions;
	}

	async destroy(id: string): Promise<void> {
		await this.repository.delete(id);
	}

}