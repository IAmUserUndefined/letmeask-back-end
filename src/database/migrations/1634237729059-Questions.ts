import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Questions1634237729059 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: "questions",
			columns: [
				{
					name: "id",
					type: "varchar",
					isPrimary: true
				},
				{
					name: "roomId",
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
					name: "FKRoomId",
					referencedTableName: "rooms",
					referencedColumnNames: ["id"],
					columnNames: ["roomId"],
					onDelete: "CASCADE",
					onUpdate: "CASCADE"
				}
			]
		}), true);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("questions");
	}
}
