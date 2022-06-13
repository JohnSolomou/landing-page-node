require("dotenv").config();
module.exports = {
  development: {
    username: "postgres",
    password: process.env.PG_PASSWORD,
    database: "express-mvp-db",
    host: "127.0.0.1",
    dialect: "postgres",
    port: 5432,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
