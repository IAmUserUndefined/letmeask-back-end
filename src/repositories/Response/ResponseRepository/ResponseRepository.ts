import { Response } from "../../../entities/Response";
import prisma from "../../../../prisma/index";
import IResponseRepository from "./IResponseRepository";

export class ResponseRepository implements IResponseRepository {

	async store(id: string, questionId: string, name: string): Promise<void> {
		await prisma.response.create({
			data: {
				id: id,
				questionId: questionId,
				name: name
			}
		});
	}

	async getResponse(questionId: string): Promise<Response[]> {
		const response = await prisma.response.findMany({
			where: {
				questionId: questionId
			}
		});
		return response;
	}

	async destroy(id: string): Promise<void> {
		await prisma.response.delete({
			where: {
				id: id
			}
		});
	}
}