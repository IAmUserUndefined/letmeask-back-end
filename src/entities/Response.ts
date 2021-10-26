import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity("responses")
class Response {

@PrimaryColumn()
	readonly id: string;
  
@Column()
	questionId: string;

@Column()
	name: string;

@CreateDateColumn()
	createdAt: Date;
  
@UpdateDateColumn()
	updatedAt: Date;

}
  
export { Response };