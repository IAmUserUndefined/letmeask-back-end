import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Rooms1634237393406 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: "rooms",
			columns: [
				{
					name: "id",
					type: "varchar",
					isPrimary: true
				},
				{
					name: "userId",
					type: "varchar",
				},
				{
					name: "code",
					type: "varchar",
				},
				{
					name: "name",
					type: "varchar",
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
			],
			foreignKeys: [
				{
					name: "FKUserId",
					referencedTableName: "users",
					referencedColumnNames: ["id"],
					columnNames: ["userId"],
					onDelete: "CASCADE",
					onUpdate: "CASCADE"
				}
			]
		}), true);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("rooms");
	}
}
