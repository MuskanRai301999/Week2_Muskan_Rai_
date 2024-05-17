"use strict";
// import { Pool } from 'pg';
Object.defineProperty(exports, "__esModule", { value: true });
// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: "postgres",
//     password: "54321",
//     port: 5432,
// });
// export default pool;
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('postgres://postgres:54321@localhost:5432/TestOrder', {
    logging: false // Disable logging to the console
});
exports.default = sequelize;
//# sourceMappingURL=pgConfig.js.map