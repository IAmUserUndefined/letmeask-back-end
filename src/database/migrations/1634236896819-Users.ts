import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class User1634234317919 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: "users",
			columns: [
				{
					name: "id",
					type: "varchar",
					isPrimary: true
				},
				{
					name: "email",
					type: "varchar",
				},
				{
					name: "name",
					type: "varchar",
				},
				{
					name: "password",
					type: "varchar",
				},
				{
					name: "admin",
					type: "varchar",
					default: false
				},
				{
					name: "verifiedEmail",
					type: "boolean",
					default: false
				},
				{
					name: "verificationToken",
					type: "varchar",
				},
				{
					name: "verificationTokenExpiryDate",
					type: "bigint",
					default: false
				},
				{
					name: "createdAt",
					type: "timestamp",
					default: "now()",
				},
				{
					name: "updatedAt",
					type: "timestamp",
					default: "now()",
				},
			]
		}), true);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("users");
	}

}
