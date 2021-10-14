export default class NotAllowedCors extends Error {
	constructor(paramName: string){
		super(paramName);
		this.name = "NotAllowedCors";
	}
}