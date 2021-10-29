import IResponseRepository from "./IResponseRepository";
import ResponseModel from "../../../database/models/Response";
import { Response } from "../../../entities/Response";
import { EntityRepository, getCustomRepository } from "typeorm";

@EntityRepository(Response)
export class ResponseRepository implements IResponseRepository {
	
	private repository: ResponseModel;

	constructor(){
		this.repository = getCustomRepository(ResponseModel);
	}

	async store(id: string, questionId: string, name: string): Promise<void> {
		const room = this.repository.create({
			id: id,
			questionId: questionId,
			name: name
		});

		await this.repository.save(room);
	}

	async getResponse(questionId: string): Promise<Response[]> {
		const response = await this.repository.find({ questionId: questionId });
		return response;
	}

	async destroy(id: string): Promise<void> {
		await this.repository.delete(id);
	}

}