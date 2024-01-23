import express, { json } from 'express';
import route from './Router/index.js'
import cors from 'cors'
const app=express();
app.use(express.json());
app.use(cors({
    origin:"https://scribblehere.netlify.app/",
    methods:["GET","POST","PUT","DELETE"]
}))
app.use('/',route);
app.listen( process.env.PORT,()=>console.log('your app listen '+ process.env.PORT));