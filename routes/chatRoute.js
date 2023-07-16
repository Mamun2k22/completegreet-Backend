const router = require("express").Router();
const { addChat, getChat, deleteChat,getChatInfo } = require("../controllers/chatController");

router.post("/get-chat-info", getChatInfo);

router.post("/api/v1/add-chat", addChat);
router.get("/api/v1/get-chat", getChat);
router.delete("/api/v1/delete-chat/:id", deleteChat);

module.exports = router;
