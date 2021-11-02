const express =require('express');
const notesController = require('../contollers/notes');
const auth=require("../middleware/auth");
const router = express.Router();

//post 
router.post("/add", auth, notesController.add);


//get 
router.get("/getAll", auth, notesController.getAll);


// delete 
router.delete("/", auth, notesController.deleteAll);
router.delete("/:noteId", auth, notesController.deleteOne);
module.exports=router;
