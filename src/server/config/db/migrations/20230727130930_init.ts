import { Knex } from "knex"

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex: Knex<[]>) {
  return knex.schema.createTable("users", (table: Knex.CreateTableBuilder) => {
    table.increments("id").primary().unique()
    table.string("first_name").notNullable()
    table.string("last_name").notNullable()
    table.string("email").notNullable().unique()
    table.string("phone").notNullable()
    table.string("profile").nullable()
    table.string("password").notNullable()
    table.timestamps(true, true)
    table.timestamp("deleted_at", { useTz: true }).nullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex: Knex<[]>) {
  return knex.schema.dropTable("users")
}
