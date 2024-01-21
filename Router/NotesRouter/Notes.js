import express from 'express';
import notes from '../../Controller/NotesData/Notes.js'
import Auth from '../../Auth/Auth.js';

const routes=express();
routes.post('/saveData',Auth.validate,notes.saveNote);
routes.put('/updatenote',Auth.validate,notes.updateNote)
routes.get('/getData/:email',Auth.validate,notes.getData)
routes.delete('/removeData/:id',Auth.validate,notes.deleteData)
export default routes;
