import { Sequelize } from "sequelize";
import { DATABASE_URL } from "../config/environment";

// const DATABASE_URL = process.env.DATABASE_URL;
// const PGPORT = Number(process.env.PGPORT);
// const PGDATABASE = process.env.PGDATABASE;
// const PGHOST = process.env.PGHOST;
// const PGUSER = process.env.PGUSER;
// const PGPASSWORD = process.env.PGPASSWORD;

export const sequelize = new Sequelize(DATABASE_URL, {
    define: {
        underscored: true
    }
})