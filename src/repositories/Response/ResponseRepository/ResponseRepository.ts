import prisma from "../../../../prisma/index";
import IResponseRepository from "./IResponseRepository";

export class ResponseRepository implements IResponseRepository {

	async store(id: string, response: string): Promise<void> {
		await prisma.question.update({
			where: {
				id: id
			},
			data: {
				response: response
			}
		});
	}
}