import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Responses1634237800391 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: "responses",
			columns: [
				{
					name: "id",
					type: "varchar",
					isPrimary: true
				},
				{
					name: "questionId",
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
					name: "FKQuestionId",
					referencedTableName: "questions",
					referencedColumnNames: ["id"],
					columnNames: ["questionId"],
					onDelete: "CASCADE",
					onUpdate: "CASCADE"
				}
			]
		}), true);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("responses");
	}
}
