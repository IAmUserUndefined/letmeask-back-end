import { ResponseRepository } from "../../../repositories/Response/ResponseRepository/ResponseRepository";
import IGetResponses from "./IGetResponses";

export default class GetResponsesRules {

	private repository: ResponseRepository;

	constructor() {
		this.repository = new ResponseRepository();
	}

	async execute( { questionId }: IGetResponses ) {
		return await this.repository.getResponse(questionId);
	}
}