export default class UnathorizedError extends Error {
	constructor(paramName: string){
		super(paramName);
		this.name = "UnathorizedError";
	}
}