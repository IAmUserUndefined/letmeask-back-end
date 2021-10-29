import Helper from "./src/utils/helper/Helper";

export default {
	"type": Helper.getDatabaseTypeEnvironmentVariable(),
	"host": Helper.getHostEnvironmentVariable(),
	"port": Helper.getDatabasePortEnvironmentVariable(),
	"username": Helper.getDatabaseUsernameEnvironmentVariable(),
	"password": Helper.getDatabasePasswordEnvironmentVariable(),
	"database": Helper.getDatabaseNameEnvironmentVariable(),
	"migrations": ["src/database/migrations/*.ts"],
	"entities": ["src/entities/*.ts"],
	"cli": {
		"migrationsDir": "src/database/migrations"
	}
};