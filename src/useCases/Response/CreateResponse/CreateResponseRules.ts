import { ResponseRepository } from "../../../repositories/Response/ResponseRepository/ResponseRepository";
import { MissingParamError } from "../../../utils/errors";
import ICreateResponse from "./ICreateResponse";

export default class CreateResponseRules {

	private repository: ResponseRepository;

	constructor() {
		this.repository = new ResponseRepository();
	}

	async execute( { response, questionId }: ICreateResponse ) {
		
		if (!response)
			return new MissingParamError("Preencha o nome da resposta");

		await this.repository.store(
			questionId,
			response
		);

		return "Resposta enviada com sucesso";
	}
}