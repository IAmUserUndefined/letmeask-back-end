export default {
	"type": "mariadb",
	"host": "localhost",
	"port": 3306,
	"username": "root",
	"password": "20304545",
	"database": "letmeask",
	"migrations": ["src/database/migrations/*.ts"],
	"entities": ["src/entities/*.ts"],
	"cli": {
		"migrationsDir": "src/database/migrations"
	}
};