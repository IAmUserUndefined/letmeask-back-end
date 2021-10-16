interface IRequestMiddleware {
	headers: {
		authorization ?: string 
	}
}

export default IRequestMiddleware;