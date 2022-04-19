import express from "express";
import {User} from "./model/User.model.js";


const app = express();

app.get("/", (req,res)=> res.send("SCAC"))

app.listen("4333" , ( )=> {
    console.log("listening at port 4333");
})

