require('dotenv').config();

module.exports = {
  database: {
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
  },
  server: {
    url: process.env.SERVER_URL,
    port: process.env.SERVER_PORT,
    dns: process.env.SERVER_DNS,
  },
};
