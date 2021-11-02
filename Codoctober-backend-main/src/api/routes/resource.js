const express =require('express');
const resourceController = require('../contollers/resource');
const auth=require("../middleware/auth");
const router = express.Router();

//post 
router.post("/add", auth, resourceController.addResources);
// router.post("/note/:reSrcId", auth, resourceController.addNotes);

//get 
router.get("/all", auth, resourceController.getAllPublicResources);
router.get("/my", auth, resourceController.getAllResourcesUser);
router.get("/one/:reSrc", auth, resourceController.getOneResourcesUser);
router.get("/track/:track", auth, resourceController.getResourcesTrack);

// delete 
router.delete("/:srcId/:track", auth, resourceController.deleteResources);
module.exports=router;
