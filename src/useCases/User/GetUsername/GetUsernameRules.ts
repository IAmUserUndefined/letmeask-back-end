import { UserRepository } from "../../../repositories/User/UserRepository/UserRepository";
import IGetUsername from "./IGetUsername";

export default class GetUsernameRules {
	private repository: UserRepository;

	constructor() {
		this.repository = new UserRepository;
	}

	async execute({ userId }: IGetUsername) {

		return await this.repository.getName(userId);
	}
}