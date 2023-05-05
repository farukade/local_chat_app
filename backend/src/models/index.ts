import { Sequelize } from 'sequelize';
import { IDatabase } from '../types/database-connect-data.interface';
import { config } from 'dotenv';
config();

const dbConnectionData: IDatabase = {
  host: process.env.POSTGRES_HOST || "",
  user: process.env.POSTGRES_USER || "",
  password: process.env.POSTGRES_PASSWORD || "",
  database: process.env.POSTGRES_DB || "",
  dialect: process.env.DIALECT || ""
}

const { host, user, password, database } = dbConnectionData;

export const sequelize = new Sequelize(database, user, password, {
  dialect: "postgres",
  host,
  pool: {
    max: 10,
    min: 0,
    acquire: 20000,
    idle: 5000
  },
  logging: false
});

export const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync({
    //   alter: true,
    //   // force: true
    // });
    console.log(`\x1b[33m[HOST] ${host}\n[DIALECT] postgres\n[DATABASE] ${database}\n[USER] ${user}\n[STATUS] CONNECTED \x1b[0m`)
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

