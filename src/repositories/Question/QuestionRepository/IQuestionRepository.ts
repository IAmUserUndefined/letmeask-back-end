import { Question } from "../../../entities/Question";

interface IQuestionRepository {
    store(id: string, roomId: string, name: string): Promise<void>;
    getQuestions(roomId: string): Promise<Question[]>;
    destroy(roomId: string): Promise<void>;
}

export default IQuestionRepository;