const asyncHandler = require("express-async-handler");
const resourceModel = require("../models/resource");
const trackModel = require("../models/track");
const ResourceService = require("../services/resource.service");


const resourceService = new ResourceService({
  resourceModel: resourceModel,
});

const resourceController = {
  // post
  addResources: asyncHandler(async (req, res) => {
    const { title, links, articles, visibility, Domain ,track} = req.body;
    const reSrc = await resourceService.addResources(
      req.user._id,
      title,
      links,
      articles,
      visibility,
      Domain,
      track
    );
    res.status(200).json({ message: "created successfully", data: reSrc });
  }),

  

  // get
  getAllResourcesUser: asyncHandler(async (req, res) => {
    const reSrc = await resourceService.getAllResourcesUser(req.user._id);
    res.status(200).json({ data: reSrc });
  }),
  getAllPublicResources: asyncHandler(async (req, res) => {
    const reSrc = await resourceService.getAllPublicResources();
    res.status(200).json({ data: reSrc });
  }),
  getOneResourcesUser: asyncHandler(async (req, res) => {
    const { reSrc } = req.params;
    const reSrcData = await resourceService.getOneResourcesUser(reSrc);
    res.status(200).json({ data: reSrcData });
  }),
  getResourcesTrack:asyncHandler(async (req, res) => {
    const { track } = req.params;
    const reSrcData = await resourceService.getResourcesTrack(track);
    res.status(200).json({ data: reSrcData });
  }),

  // delete
  deleteResources: asyncHandler(async (req, res) => {
    const { srcId ,track} = req.params;
    const reSrc = await resourceService.deleteResources(req.user._id,srcId);
    const trackData= await trackModel.findByIdAndUpdate(track,  {
        $pull: {
            resoources:srcId
        }
    },
    { safe: true, upsert: true });

    res.status(200).json({ message: "Deleted  successfully", resdata: reSrc,trackData:trackData });
  }),
};

module.exports = resourceController;
