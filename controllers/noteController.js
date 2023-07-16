const asyncHandler = require("express-async-handler");
const knex = require("../db/db");
const { makeid } = require("../helpers/common");

// Add note
module.exports.addNote = asyncHandler(async (req, res) => {
  try {
    const { body, user } = req;
    if (body.note_text !== "") {
      const payload = {
        note_text: body.note_text,
        note_code: makeid(7),
        user_id: user.user_id,
        is_deleted: 0,
      };
      const note = await knex("Notes").insert(payload);
      if (!note) {
        return res
          .status(400)
          .json({ error: true, message: "Note Add Failed!", data: [] });
      }

      res.json({
        error: false,
        message: "Note Added Successfully",
        data: note,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: true,
      message: "Something went wrong!!",
      data: null,
    });
  }
});

// Get All notes
module.exports.getNote = asyncHandler(async (req, res) => {
  try {
    const { user } = req;
    const notes = await knex("Notes")
      .where({
        user_id: user.user_id,
        is_deleted: 0,
      })
      .orderBy("id", "desc");
    if (!notes) {
      return res
        .status(400)
        .json({ error: true, message: "Note Retrive Failed!", data: [] });
    }

    res.json({
      error: false,
      message: "Note Retrive Successfully",
      data: notes,
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

// Delete note
module.exports.deleteNote = asyncHandler(async (req, res) => {
  try {
    const { params, user } = req;
    if (!params.id) {
      return res
        .status(400)
        .json({ error: true, message: "Note id not provide!", data: [] });
    }
    const note = await knex("Notes")
      .update({
        is_deleted: 1,
        user_id: user.user_id,
      })
      .where({
        id: params.id,
      });
    if (!note) {
      return res
        .status(400)
        .json({ error: true, message: "Note Ddelete Failed!", data: [] });
    }

    res.json({
      error: false,
      message: "Note Delete Successfully",
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
