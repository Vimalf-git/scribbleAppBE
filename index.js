import express, { json } from 'express';
import route from './Router/index.js'
import cors from 'cors'
const app=express();
app.use(express.json());
app.use(cors())
app.use('/',route);
app.listen( process.env.PORT,()=>console.log('Engine Start '+ process.env.PORT));