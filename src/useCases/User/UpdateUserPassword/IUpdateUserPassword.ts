interface IUpdateUserPassword {
    id: string,
    passwordCurrent: string,
    password: string,
    passwordConfirm: string
}

export default IUpdateUserPassword;