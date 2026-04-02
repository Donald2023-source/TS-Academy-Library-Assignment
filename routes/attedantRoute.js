const express = require("express");
const { createAttendant } = require("../controllers/libraryAttendantControler");
const router = express.Router();

router.post("/create", createAttendant);
module.exports = router;
