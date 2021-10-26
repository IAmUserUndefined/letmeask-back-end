import { EntityRepository, Repository } from "typeorm";
import { Response } from "../../entities/Response";

@EntityRepository(Response)
class ResponseRepository extends Repository<Response>{}

export default ResponseRepository;