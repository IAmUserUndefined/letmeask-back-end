import { UserRepository } from "../../../repositories/User/UserRepository/UserRepository";
import Cache from "../../../providers/Cache/Cache";
import IGetUsername from "./IGetUsername";

export default class GetUsernameRules {

	private repository: UserRepository;

	constructor() {
		this.repository = new UserRepository;
	}

	async execute({ userId }: IGetUsername) {

		const name = Cache.get(`username-${userId}`);
		
		if(name === undefined){
			const repositoryName = await this.repository.getName(userId);

			Cache.set(
				`username-${userId}`, 
				repositoryName, 
				3600 // 1 hours
			);

			return repositoryName;
		}

		return name;

	}
}