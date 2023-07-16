const router = require("express").Router();
const {
  addNote,
  getNote,
  deleteNote,
} = require("../controllers/noteController");

router.post("/api/v1/add-note", addNote);
router.get("/api/v1/get-note", getNote);
router.delete("/api/v1/delete-note/:id", deleteNote);

module.exports = router;
