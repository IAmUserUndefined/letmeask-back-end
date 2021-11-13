interface IQuestionTestRepository {
    createTestQuestion(): Promise<void>;
    deleteTestQuestion(): Promise<void>;
}

export default IQuestionTestRepository;