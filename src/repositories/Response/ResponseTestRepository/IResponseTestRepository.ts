interface IResponseTestRepository {
    createTestResponse(): Promise<void>;
    deleteTestResponse(): Promise<void>;
}

export default IResponseTestRepository;