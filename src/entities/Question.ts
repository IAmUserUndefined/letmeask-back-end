import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity("questions")
class Question {

@PrimaryColumn()
	readonly id: string;
  
@Column()
	roomId: string;

@Column()
	name: string;

@CreateDateColumn()
	createdAt: Date;
  
@UpdateDateColumn()
	updatedAt: Date;

}
  
export { Question };