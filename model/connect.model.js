import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === 'production' });


    const user = process.env.DB_USERNAME;
    const database = "users"
    const host = process.env.DB_HOST;
    const password = process.env.DB_PASSWORD;
    const port = 5432;
    const sequelize = new Sequelize(database,user,password,{
        host,
        port,
        dialect: "postgres",
        logging: false
    });

    try {
        await sequelize.authenticate();
        console.log('Connection with DB has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }



export default sequelize;