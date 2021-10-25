import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity("users")
class User {

@PrimaryColumn()
	readonly id: string;
  
@Column()
	name: string;
  
@Column()
	email: string;

@Column()
	password: string;

@Column()
	verifiedEmail: boolean;

@Column()
	verificationToken: string;
    
@Column()
	verificationTokenExpiryDate: string;

@Column()
	admin: string;
  
@CreateDateColumn()
	createdAt: Date;
  
@UpdateDateColumn()
	updatedAt: Date;

}
  
export { User };