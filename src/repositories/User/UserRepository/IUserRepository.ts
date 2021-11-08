interface IUserRepository {
    store(id: string, email: string, name:string, hash: string, token: string): Promise<void>;
    verifyEmail(email: string, token: string): Promise<void>;
    updateName(id: string, name: string): Promise<void>;
    destroy(id: string): Promise<void>;
    findEmailById(id: string): Promise<string>;
    findEmailByEmail(email: string): Promise<string>;
    findByEmailVerified(email: string): Promise<string>
    getId(email: string): Promise<string>;
    getPasswordByEmail(email: string): Promise<string>;
    getPasswordById(id: string): Promise<string>;
    getVerificationTokenById(id: string): Promise<string>;
    getVerificationTokenByEmail(email: string): Promise<string>;
    updateVerificationTokenById(id: string, verificationToken: string): Promise<void>;
    updateVerificationTokenByEmail(email: string, verificationToken: string): Promise<void>;
    getVerificationTokenExpiryDateById(id: string): Promise<bigint>;
    getVerificationTokenExpiryDateByEmail(email: string): Promise<bigint>;
    updateVerificationTokenExpiryDateById(id: string, verificationTokenExpiryDate: bigint): Promise<void>;
    updateVerificationTokenExpiryDateByEmail(email: string, verificationTokenExpiryDate: bigint): Promise<void>;
    updateEmail(id: string, email: string): Promise<void>;
    updatePasswordById(id: string, password: string): Promise<void>;
    updatePasswordByEmail(email: string, password: string): Promise<void>;
}

export default IUserRepository;