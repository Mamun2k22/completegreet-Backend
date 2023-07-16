const express = require("express");
const router = express.Router();
const {
  createBubble,
  uploadVideo,
  editBubble,
  deleteBubble,
  getAllBubble,
  getSingleBubble,
  getBubbleInfo,
  deactivatedBubble,
  bubbleConnect,
  bubbleSendMail,
} = require("../controllers/bubbleController");
const { checkLimit } = require("../middlewares/limit");

router.route("/bubble/connect").post(bubbleConnect);
router.route("/bubble/send-mail").post(bubbleSendMail);

router.route("/api/v1/bubble/create").post(checkLimit, createBubble);
router.route("/api/v1/bubble/edit/:id").patch(editBubble);
router.route("/api/v1/bubble/delete/:id").patch(deleteBubble);
router.route("/api/v1/bubble/video_upload").post(uploadVideo);
router.route("/api/v1/bubble/single_bubble/:bubble_code").get(getSingleBubble);
router
  .route("/api/v1/bubble/deactivated/:bubble_code")
  .patch(deactivatedBubble);
router.route("/api/v1/bubble/all_bubble").get(getAllBubble);
router.route("/bubble/bubble_info").post(getBubbleInfo);
module.exports = router;
