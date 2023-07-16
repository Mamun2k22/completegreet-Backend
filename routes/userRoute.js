const express = require("express");
const router = express.Router();
const {
  registration,
  login,
  getUser,
  forgotPassword,
  resetPassword,
  greetMsgUpdate,
  checkEmailExist,
  checkToken,
  uploadUserImage,
  updateUserInfo,
} = require("../controllers/userController");
const { upload } = require("../middlewares/imageUpload");

router.post("/register", registration);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/email-check", checkEmailExist);
router.post("/token-check", checkToken);

router.get("/api/v1/get-user", getUser);
router.patch("/api/v1/greet-msg-update", greetMsgUpdate);
router.patch("/api/v1/image-upload", upload, uploadUserImage);
router.patch("/api/v1/updateuserinfo", updateUserInfo);

module.exports = router;
