import dotenv from "dotenv"
dotenv.config()
import express from "express";
import cors from "cors"
import { adminJs, adminJsRouter } from "./adminjs";
import { sequelize } from "./database";
import { router } from "./routes";

const app = express()
// load dependencies  
// const session = require("express-session");

// initalize sequelize with session store
// const SequelizeStore = require("connect-session-sequelize")(session.Store);

// create database, ensure 'sqlite3' in your package.json 
// const myStore = new SequelizeStore({
// db: sequelize,
// });
// configure express 
// app.use(
//     session({
//         secret: "this is a very good secret",
//         store: myStore,
//         resave: false, // we support the touch method so per the express-session docs this should be set to false
//         proxy: true, // if you do SSL outside of node.
//         saveUninitialized: false
//     })
// );
// myStore.sync()

app.use(cors())

app.use(express.static('public'))

app.use(express.json())

app.use(router)

app.use(adminJs.options.rootPath, adminJsRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log('DB connection successfull')
    })
    console.log(`Server started successfully at ${PORT}`)
})