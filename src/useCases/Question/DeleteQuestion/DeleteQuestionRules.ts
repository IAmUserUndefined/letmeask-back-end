import { QuestionRepository } from "../../../repositories/Question/QuestionRepository/QuestionRepository";
import IDeleteQuestion from "./IDeleteQuestion";

export default class DeleteQuestionRules {

	private repository: QuestionRepository;

	constructor() {
		this.repository = new QuestionRepository();
	}

	async execute( { questionId }: IDeleteQuestion ) {
		await this.repository.destroy(questionId);
		return"Questão excluída com sucesso";
	} 
}