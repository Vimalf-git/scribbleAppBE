import mongoose from "../index.js";

const notesSchema=new mongoose.Schema({
    email:{type:String,require:[true,'mention mail']},
    heading:{type:String,require:[true,'please enter your heading']},
    content:{type:String},
    date:{type:String}
},{
    versionKey:false
})

const notesModel=mongoose.model('notesData',notesSchema);
export default notesModel;