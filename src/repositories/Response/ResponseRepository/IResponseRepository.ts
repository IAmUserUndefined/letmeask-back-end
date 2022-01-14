interface IResponseRepository {
    store(id: string, response: string): Promise<void>;
}

export default IResponseRepository;