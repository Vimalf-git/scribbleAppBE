import express from 'express';
import UserCreate from '../../Controller/UserController/UserCreate.js'
import Login from '../../Controller/UserController/Login.js'
const route=express();

route.post('/createuser',UserCreate.create)
route.post('/login',Login.Login)
export default route;