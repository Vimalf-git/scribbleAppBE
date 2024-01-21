import express from 'express';
import userRoute from './UserRouter/User.js';
import NotesRoute from './NotesRouter/Notes.js'
const route=express();
route.use('/',userRoute);
route.use('/',NotesRoute);
export default route;
