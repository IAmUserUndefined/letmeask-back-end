class User {
	readonly id: string;
	name: string;
	email: string;
	password: string;
	verifiedEmail: boolean;
	verificationToken: string;
	verificationTokenExpiryDate: string;
	admin: string;
	createdAt: Date;
	updatedAt: Date;
}
  
export { User };