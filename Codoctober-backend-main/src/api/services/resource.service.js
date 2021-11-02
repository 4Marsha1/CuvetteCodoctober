const TrackModel=require("../models/track")


class ResourceService {
    constructor({ resourceModel}) {
        this._Resource = resourceModel;
    }
    async getAllResourcesUser(userId) {
        try {
            const resources =await this._Resource.find({createdBy:userId}).populate("createdBy");
            return resources
        } catch (error) {
            console.error(error);
            throw new Error(error.message)
        }
    }
    async getAllPublicResources() {
        try {
            const resources =await this._Resource.find({visibility:true}).populate("createdBy");;
            return resources
        } catch (error) {
            console.error(error);
            throw new Error(error.message)
        }
    }
    async getOneResourcesUser(reSrc) {
        try {
            const resources =await this._Resource.findById(reSrc).populate("createdBy");
            return resources
        } catch (error) {
            console.error(error);
            throw new Error(error.message)
        }
    }


    async getResourcesTrack(track) {
        try {
            const resources =await this._Resource.find({track:track}).populate("createdBy");
            return resources
        } catch (error) {
            console.error(error);
            throw new Error(error.message)
        }
    }
    // post 
    async addResources(userId,title,links,articles,visibility,Domain,track) {
        try {
            const reSrc= await  this._Resource.create({
                createdBy:userId,
                track,
                title,
                links,
                articles,
                Domain,
                visibility
            })
            await  TrackModel.findOneAndUpdate(track,{
                $push: {
                    resoources: reSrc._id 
                }  
            })
            return reSrc;

        } catch (error) {
            console.error(error);
            throw new Error(error.message)
        }
    }
    
    // async addNotes(userId,reSrc,Content) {
    //     try {
    //         const notes =await NotesModel.create({
    //             createdBy:userId,
    //             Content
    //         })
    //         console.log(notes,"notes")
            // const reSrc= await  this._Resource.findOneAndUpdate(reSrc,{
            //     $push: {
            //         Notes: {
            //             notes
            //         }
            //     }  
            // })
            // return reSrc;

    //     } catch (error) {
    //         console.error(error);
    //         throw new Error(error.message)
    //     }
    // }

    // delete
    async deleteResources(userId,srcId) {
        try {

            const result =await this._Resource.findOneAndDelete({createdBy:userId,_id:srcId})
            console.log(result,"resul")
            return true;

        } catch (error) {
            console.error(error);
            throw new Error(error.message)
        }
    }

    
}

module.exports = ResourceService;