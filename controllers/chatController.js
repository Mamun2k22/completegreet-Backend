const asyncHandler = require("express-async-handler");
const knex = require("../db/db");
const { makeid } = require("../helpers/common");

// Add chat
module.exports.addChat = asyncHandler(async (req, res) => {
  try {
    const { body, user } = req;
    const payload = { ...body, chat_code: makeid(5) };
    const chat = await knex("Chats").insert(payload);
    if (!chat) {
      return res
        .status(400)
        .json({ error: true, message: "Chat Add Failed!", data: [] });
    }

    res.json({
      error: false,
      message: "Chat Added Successfully",
      data: chat,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: true,
      message: "Something went wrong!!",
      data: null,
    });
  }
});

// Get All chats
module.exports.getChat = asyncHandler(async (req, res) => {
  try {
    const { query } = req;
    const chats = await knex("Chats").where(query).orderBy("id", "desc");
    if (!chats) {
      return res
        .status(400)
        .json({ error: true, message: "Chat Retrive Failed!", data: [] });
    }

    res.json({
      error: false,
      message: "Chat Retrive Successfully",
      data: chats,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: true,
      message: "Something went wrong!!",
      data: null,
    });
  }
});

// Delete chat
module.exports.deleteChat = asyncHandler(async (req, res) => {
  try {
    const { params, user } = req;
    if (!params.id) {
      return res
        .status(400)
        .json({ error: true, message: "Chat id not provide!", data: [] });
    }
    const chat = await knex("Chats").del().where({
      id: params.id,
    });
    if (!chat) {
      return res
        .status(400)
        .json({ error: true, message: "Chat Ddelete Failed!", data: [] });
    }

    res.json({
      error: false,
      message: "Chat Delete Successfully",
      data: params.id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: true,
      message: "Something went wrong!!",
      data: null,
    });
  }
});

// Delete chat
module.exports.getChatInfo = asyncHandler(async (req, res) => {
  try {
    const { Cookies, BubbleID, CGuser } = req.body;
    const chat = await knex("Chats")
      .where({ chat_cookie_id: Cookies, bubble_id: BubbleID })
      .first()
      .orderBy("created_at", "desc");
    const Bubble = await knex("Bubbles")
      .where({ id: BubbleID })
      .first()
      .orderBy("id", "desc");
    const BubbleOwner = await knex("Users")
      .where({ id: Bubble.user_id })
      .first()
      .orderBy("id", "desc");

    var GreetMsg = BubbleOwner.greet_msg;
    if (chat) {
      if (CGuser) {
        let allmessages = await knex("Messages")
          .where({ chat_id: chat.id, user_id: chat.hoster_id })
          .orderBy("created_at", "asc");
        chat.new_chat = 0;
        await knex("Chats")
          .update({ new_chat: 0 })
          .where({ chat_cookie_id: Cookies, bubble_id: BubbleID });
        allmessages.forEach(function (msg) {
          msg.is_read = 1;
        });
        await knex("Messages")
          .update({ is_read: 1 })
          .where({ chat_id: chat.id, user_id: chat.hoster_id });
      }
      var Messages = await knex("Messages")
        .where({ chat_id: chat.id })
        .orderBy("created_at", "asc");
      let CurrentUser = await knex("Users")
        .where({ id: chat.hoster_id })
        .first()
        .orderBy("id", "desc");
      var ImageURL = CurrentUser.image;

      res.json({ Status: "ChatFound", chat, Messages, GreetMsg, ImageURL });
    } else {
      res.json({ Status: "ChatNotFound", GreetMsg });
    }

    // res.json({
    //   error: false,
    //   message: "Chat Delete Successfully",
    //   data: params.id,
    // });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: true,
      message: "Something went wrong!!",
      data: null,
    });
  }
});
