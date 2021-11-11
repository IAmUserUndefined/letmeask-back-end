interface IRecoverUserPassword {
    email: string,
    token: string,
    password: string,
    passwordConfirm: string,
}

export default IRecoverUserPassword;