const router = require("express").Router();
const { addBug, getBug, deleteBug } = require("../controllers/bugController");

router.post("/api/v1/add-bug", addBug);
router.get("/api/v1/get-bug", getBug);
router.delete("/api/v1/delete-bug/:id", deleteBug);

module.exports = router;
