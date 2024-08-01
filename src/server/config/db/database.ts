import knex from "knex"
import knexfile from "./knexfile"

const ENVIRONMENT = process.env.NODE_ENV

const database = knex(ENVIRONMENT === "production" ? knexfile.production : knexfile.development)

export default database
