interface IRoomTestRepository {
    createTestRoom(): Promise<void>;
    deleteTestRoom(): Promise<void>;
}

export default IRoomTestRepository;