const asyncHandler = require("express-async-handler");
const NoteService = require("../services/notes.service");
// const MailService = require("../services/vendor/MailService");

const noteService = new NoteService({});

const taskController = {
    
    // post 
    add: asyncHandler(async (req, res) => {
        const { Content } = req.body;
        
        const result = await noteService.add(req.user._id,Content);
        res.status(200).json({ message:"Notes Created successfully", result:result });
    }),


    // get
    getAll: asyncHandler(async (req, res) => {
        const result = await noteService.getAllNotes(req.user._id);
        res.status(200).json({ result });
    }),


    // delete 
    deleteAll: asyncHandler(async (req, res) => {
        const result = await noteService.deleteAll();
        res.status(200).json({message:"deleted succucssfully" ,result:result});
    }),
    deleteOne: asyncHandler(async (req, res) => {
        const {noteId}=req.params
        const result = await noteService.deleteOne(req.user._id,noteId);
        res.status(200).json({message:"deleted succucssfully" ,result:result});
    }),
}

module.exports=taskController;