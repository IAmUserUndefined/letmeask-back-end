import { ResponseRepository } from "../../../repositories/Response/ResponseRepository/ResponseRepository";
import IDeleteResponse from "./IDeleteResponse";

export default class DeleteResponseRules {

	private repository: ResponseRepository;

	constructor() {
		this.repository = new ResponseRepository();
	}

	async execute( { responseId }: IDeleteResponse ) {
		await this.repository.destroy(responseId);
		return "Resposta excluída com sucesso";
	}
}