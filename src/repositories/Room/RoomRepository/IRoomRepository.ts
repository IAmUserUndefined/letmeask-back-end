import { Room } from "../../../entities/Room";

interface IRoomRepository {
    store(id: string, userId: string, code: string, name: string): Promise<void>;
    getRooms(): Promise<Room[]>;
    getManageRoom(id: string): Promise<Room>;
    destroy(roomId: string): Promise<void>;
}

export default IRoomRepository;