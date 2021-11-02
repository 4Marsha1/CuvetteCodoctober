const NotesModel=require("../models/notes");

class notesService {
    
    // post 
    async add(userId,Content) {
        try {
            const resources =await NotesModel.create({createdBy:userId,Content});

            return resources
        } catch (error) {
            console.error(error);
            throw new Error(error.message)
        }
    }

    async getAllNotes(userId) {
        try {
            const resources =await NotesModel.find({createdBy:userId});
            
            return resources
        } catch (error) {
            console.error(error);
            throw new Error(error.message)
        }
    }

    
    async deleteAll() {
        try {
            const resources =await NotesModel.deleteMany();
            cosnt 
            return resources
        } catch (error) {
            console.error(error);
            throw new Error(error.message)
        }
    }


    
    async deleteOne(userId,noteId) {
        try {
            const resources =await NotesModel.findOneAndDelete({createdBy:userId,_id:noteId});
            return resources
        } catch (error) {
            console.error(error);
            throw new Error(error.message)
        }
    }
}


module.exports=notesService;