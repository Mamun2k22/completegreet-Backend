const router = require("express").Router();
const { addVisitor, getVisitor, deleteVisitor } = require("../controllers/visitorController");

router.post("/add-visitor", addVisitor);
router.get("/api/v1/get-visitor", getVisitor);
router.delete("/api/v1/delete-visitor/:id", deleteVisitor);

module.exports = router;
