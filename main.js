import express from "express";
import connectDB from "./connect.model.js";


const app = express();
const sequelize = connectDB("users")

app.listen("4333" , ( )=> {
    console.log("listening at port 4333");
})

