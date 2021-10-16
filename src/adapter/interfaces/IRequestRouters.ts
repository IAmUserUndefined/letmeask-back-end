interface IRequestRouters {
    body: { 
        email ?: string 
    };
    query: {
         email ?: string 
        };
    params: { 
        id ?: string 
    };
    userId: string;
}

export default IRequestRouters;