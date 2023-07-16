const router = require("express").Router();
const { addSubscriber, getSubscriber, deleteSubscriber, getSubscriberById } = require("../controllers/subscriberController");

router.post("/api/v1/add-subscriber", addSubscriber);
router.get("/api/v1/get-subscriber", getSubscriber);
router.get("/get-subscriber-by-id/:id", getSubscriberById);
router.delete("/api/v1/delete-subscriber/:id", deleteSubscriber);

module.exports = router;
