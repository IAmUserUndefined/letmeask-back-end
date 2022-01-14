import { QuestionRepository } from "../../../repositories/Question/QuestionRepository/QuestionRepository";
import IGetUserQuestions from "./IGetUserQuestions";

export default class GetUserQuestionsRules {

	private repository: QuestionRepository;

	constructor() {
		this.repository = new QuestionRepository();
	}

	async execute( { userId }: IGetUserQuestions ) {
		return await this.repository.getUserQuestions(userId);
	}
}