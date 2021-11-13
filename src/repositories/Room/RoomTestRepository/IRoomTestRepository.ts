interface IUserTestRepository {
    createTestRoom(): Promise<void>;
    deleteTestRoom(): Promise<void>;
}

export default IUserTestRepository;