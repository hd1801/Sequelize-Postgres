import express from "express";
import {User} from "./model/User.model.js";

const app = express();

app.use(express.urlencoded({extended:true}))

app.use(async (req,res,next)=>{
await User.sync();
next();
})

app.get("/", (req,res)=> res.send("This route is not valid, try using a proper route."))



app.get("/users", async (req,res)=>{
    const users = await User.findAll();
    res.json(users);
});

app.get("/users/:id", async (req,res)=>{
    
    const users = await User.findAll( {where: { id:req.params.id }} );
    res.json(users);
});

app.post("/users", async (req,res)=>{

    console.log(req.body);
    const newUser = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob:req.body.dob,
        address: req.body.address,
        occupation:req.body.occupation
    });
    res.send("added new user.")
    
});


app.listen("4333" , ( )=> {
    console.log("listening at port 4333");
})

