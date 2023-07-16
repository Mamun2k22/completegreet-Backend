const router = require("express").Router();
const { getAllPlans, getSinglePlans } = require("../controllers/planController");

router.get("/get_all_plan", getAllPlans);
router.route("/api/v1/get_single_plan/:id").get(getSinglePlans)

module.exports = router;
