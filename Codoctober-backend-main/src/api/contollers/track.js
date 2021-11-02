const asyncHandler = require("express-async-handler");
const TrackSerice = require('../services/track.service');
const resourceModel = require('../models/resource');
const trackService = new TrackSerice();

const TrackController = {
    getAllTracks: asyncHandler(async (req, res) => {
        const tracks = await trackService.getAllTracks();
        res.json(tracks);
    }),
    getTrack: asyncHandler(async (req, res) => {
        const track = await trackService.getTrackById(req.params.id);
        res.json(track);
    }),
    createTrack: asyncHandler(async (req, res) => {
        req.body.created_by = req.user._id;
        const track = await trackService.createTrack(req.body);
        res.status(200).json({message:"Created track",result:track});
    }),
    deleteAllTracks: asyncHandler(async (req, res) => {
        await trackService.deleteAllTracks();
        await resourceModel.deleteMany
        res.json({
            message: "All tracks deleted"
        });
    }),
    deleteTrack: asyncHandler(async (req, res) => {
        await trackService.deleteTrack(req.params.id);
        await resourceModel.deleteMany({track:req.params.id});
        res.json({
            message: "Track deleted"
        });
    }),
}

module.exports = TrackController;