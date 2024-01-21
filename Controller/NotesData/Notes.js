import notesModel from "../../Model/NotesModel/Notes.js"
const saveNote = async (req, res) => {
    try {
        await notesModel.create(req.body);
        res.status(201).send({ message: 'data saved' })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}
const updateNote = async (req, res) => {
    let user = await notesModel.findOne({ _id: req.body.id });
    try {
        if (user) {
            user.heading = req.body.heading;
            user.content = req.body.content;
            user.date = req.body.date;
            await user.save()
            res.status(204).send({ message: 'your data updated' });
        } else {
            res.status(400).send({ message: 'data is not exist' })
        }
    } catch (error) {
        res.status(500).status({ message: error.message })
    }
}
const getData = async (req, res) => {
    try {
        let resData = await notesModel.find({ email: req.params.email });
        if (resData) {
            res.status(200).send({ message: 'data fetched successfully', cardData: resData })
        } else {
            res.status(400).send({ message: "User is not exist" });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}
const deleteData=async(req,res)=>{
    console.log(req);
    try {
        await notesModel.findOneAndDelete({_id:req.params.id});
res.status(200).send({message:'success removed data'})
    } catch (error) {
        res.status(500).send({message:error.message})

    }
}
export default { saveNote, updateNote, getData,deleteData }