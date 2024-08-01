// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    client: "postgresql",
    connection: {
      host: "localhost",
      port: "5432",
      database: "todoapp",
      user: "postgres",
      password: "      ",
    },
    pool: { min: 2, max: 10 },
    migrations: { tableName: "knex_migrations" },
  },
  production: {
    client: "postgresql",
    connection: {
      host: "database.cr4oyk2eypan.us-east-1.rds.amazonaws.com",
      port: "5432",
      database: "credipay",
      user: "postgres",
      password: "kkVItPCHIVTtGJ5uVgaH",
      ssl: true,
    },
    pool: { min: 2, max: 10 },
    migrations: { tableName: "knex_migrations" },
  },
}
