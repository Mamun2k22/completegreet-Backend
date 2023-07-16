const asyncHandler = require("express-async-handler");
const knex = require("../db/db");

module.exports.getSubscriberOverview = asyncHandler(async (req, res) => {
  try {
    const { user, params } = req;
    const date = new Date();
    date.setHours(0, 0, 0);

    const chats = await knex("Chats")
      .count("id as total")
      .where({
        // hoster_id: user.user_id,
        hoster_id: params.id,
      })
      .first();

    const newChat = await knex("Chats")
      .count("id as total")
      .where({
        // hoster_id: user.user_id,
        hoster_id: params.id,
        new_chat: 1,
      })
      .first();

    const visitors = await knex("Visitors")
      .count("id as total")
      .where({
        subscriber_id: params.id,
      })
      .first();

    const newVisitor = await knex("Visitors")
      .count("id as total")
      .where({
        subscriber_id: params.id,
      })
      .where("created_at", ">=", date)
      .first();

    const Subscribers = await knex("Subscribers")
      .select("Plans.visitor", "Subscribers.plan_id")
      .where({
        subscriber_id: params.id,
        is_active: 1
      })
      .leftJoin("Plans", "Plans.id", "Subscribers.plan_id")
      .first();

    res.json({
      error: false,
      message: "Data Retrive Successfully",
      data: {
        chat: chats.total,
        new_chat: newChat.total,
        old_chat: chats.total - newChat.total,
        visitor: visitors.total,
        new_visitor: newVisitor.total,
        old_visitor: visitors.total - newVisitor.total,
        visitor_capacity: Subscribers.visitor,
        visitor_percent: ((visitors.total / Subscribers.visitor) * 100).toFixed(1),
        plan_id: Subscribers.plan_id,
      },
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
