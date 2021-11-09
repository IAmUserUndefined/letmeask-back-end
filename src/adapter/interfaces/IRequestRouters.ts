interface IRequestRouters {
    body: { 
        id ?: string,
        email ?: string,
        name ?: string,
        password ?: string,
        passwordConfirm ?: string,
        passwordCurrent ?: string,
        newPassword ?: string,
        newPasswordConfirm ?: string,
    };
    query: {
         email ?: string,
         token ?: string,
        };
    params: { 
        id ?: string 
    };
    userId: string
}

export default IRequestRouters;