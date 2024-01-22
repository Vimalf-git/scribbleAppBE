import express from 'express';
import userRoute from './UserRouter/User.js';
import NotesRoute from './NotesRouter/Notes.js'
import Forget from './Forget/Forget.js'
const route=express();
route.use('/',userRoute);
route.use('/',NotesRoute);
route.use('/forgetpass',Forget)
export default route;
