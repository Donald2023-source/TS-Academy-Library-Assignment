const express = require("express");
const {
  createAttendant,
  getAllAttendants,
} = require("../controllers/libraryAttendantControler");
const router = express.Router();

router.post("/create", createAttendant);
router.get("/get-all", getAllAttendants);
module.exports = router;
