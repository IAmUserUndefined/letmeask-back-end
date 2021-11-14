interface IRequestMiddleware {
	headers: {
		authorization ?: string 
	}
	params: {
		roomId ?: string
	}
}

export default IRequestMiddleware;