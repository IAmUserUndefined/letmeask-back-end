interface IUserTestRepository {
    createTestUsers(): Promise<void>;
    deleteTestUsers(): Promise<void>;
}

export default IUserTestRepository;