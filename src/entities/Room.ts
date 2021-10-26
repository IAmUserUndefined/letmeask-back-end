import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity("rooms")
class Room {

@PrimaryColumn()
	readonly id: string;
  
@Column()
	userId: string;

@Column()
	code: string;

@Column()
	name: string;

@CreateDateColumn()
	createdAt: Date;
  
@UpdateDateColumn()
	updatedAt: Date;

}
  
export { Room };