console.log('process.env.DATABASEE__URL :>> ', process.env.DATABASE_URL)
module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities": [
    "./dist/models/*.js"
  ],
  "migrations": [
    "./dist/database/migrations/*.js"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  },
  "entitiesDir": "src/models"
}
