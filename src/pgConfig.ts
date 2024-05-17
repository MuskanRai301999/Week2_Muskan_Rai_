// import { Pool } from 'pg';

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: "postgres",
//     password: "54321",
//     port: 5432,
// });

// export default pool;
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres://postgres:54321@localhost:5432/TestOrder', {
  logging: false // Disable logging to the console
});

export default sequelize;