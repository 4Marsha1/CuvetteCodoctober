const express =require('express');
const TrackController = require('../contollers/track');
const auth=require("../middleware/auth");
const router = express.Router();

router.get("/", auth, TrackController.getAllTracks);
router.get("/:id", auth, TrackController.getTrack);
router.post("/create", auth, TrackController.createTrack);
router.delete("/:id", auth, TrackController.deleteTrack);

// Important: This router is for development only. To be removed in production
router.delete("/", auth, TrackController.deleteAllTracks);

module.exports=router;
