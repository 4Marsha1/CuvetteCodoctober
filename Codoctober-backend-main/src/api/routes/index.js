const router = require("express").Router();

router.use("/users", require("./user"));
router.use("/tracks", require("./track"));
router.use("/resource", require("./resource"));
router.use("/notes", require("./notes"));

module.exports = router;
 