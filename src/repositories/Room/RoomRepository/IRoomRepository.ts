import { Room } from "../../../entities/Room";

interface IRoomRepository {
    store(id: string, userId: string, code: string, name: string): Promise<void>;
    getRooms(): Promise<Room[]>;
    getManageRoomId(id: string): Promise<string>;
    destroy(roomId: string): Promise<void>;
}

export default IRoomRepository;