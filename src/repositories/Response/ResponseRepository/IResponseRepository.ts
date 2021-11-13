import { Response } from "../../../entities/Response";

interface IResponseRepository {
    store(id: string, userId: string, roomId: string, name: string): Promise<void>;
    getResponse(questionId: string): Promise<Response[]>;
    destroy(questionId: string): Promise<void>;
}

export default IResponseRepository;