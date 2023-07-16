const asyncHandler = require("express-async-handler");
const knex = require("../db/db");
const { makeid } = require("../helpers/common");

// Add message
module.exports.addMessage = asyncHandler(async (req, res) => {
  try {
    const { body, user } = req;
    const payload = { ...body };
    const message = await knex("Messages").insert(payload);
    if (!message) {
      return res
        .status(400)
        .json({ error: true, message: "Message Add Failed!", data: [] });
    }

    res.json({
      error: false,
      message: "Message Added Successfully",
      data: message,
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

// Get All messages
module.exports.getMessage = asyncHandler(async (req, res) => {
  try {
    const { query } = req;
    const messages = await knex("Messages")
      .where(query)
      .orderBy("created_at", "asc");
    if (!messages) {
      return res
        .status(400)
        .json({ error: true, message: "Message Retrive Failed!", data: [] });
    }

    res.json({
      error: false,
      message: "Message Retrive Successfully",
      data: messages,
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

// Delete message
module.exports.deleteMessage = asyncHandler(async (req, res) => {
  try {
    const { params, user } = req;
    if (!params.id) {
      return res
        .status(400)
        .json({ error: true, message: "Message id not provide!", data: [] });
    }
    const message = await knex("Messages").del().where({
      id: params.id,
    });
    if (!message) {
      return res
        .status(400)
        .json({ error: true, message: "Message Ddelete Failed!", data: [] });
    }

    res.json({
      error: false,
      message: "Message Delete Successfully",
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
