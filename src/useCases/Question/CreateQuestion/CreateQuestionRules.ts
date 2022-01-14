import { QuestionRepository } from "../../../repositories/Question/QuestionRepository/QuestionRepository";
import { MissingParamError } from "../../../utils/errors";
import Helper from "../../../utils/helper/Helper";
import ICreateQuestion from "./ICreateQuestion";

export default class CreateQuestionRules {

	private repository: QuestionRepository;

	constructor() {
		this.repository = new QuestionRepository();
	}

	async execute( { question, userId, roomCode }: ICreateQuestion ) {
        
		if(!question) 
			return new MissingParamError("Preencha o nome da questão");

		await this.repository.store(
			Helper.createId(),
			userId,
			roomCode,
			question
		);

		return "Pergunta criada com sucesso";
	}
} 