//const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
import express from "express"
import userRouter from "./routes/user-routes";
//import mongoose from "mongoose";
//const app = express();
//import dotenv from 'dotenv'

const app = express();

//middlewares
app.use("/user", userRouter)

mongoose.connect(`mongodb+srv://umadevi263119:MONGODB_PASSWORD:${process.env.MONGODB_PASSWORD}@umadevi-project.hrj5c5v.mongodb.net/`)
    .then(() => app.listen(5000, () => console.log("connected sucessfully")
    )
    ).catch(e => console.log(e));
