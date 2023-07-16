const knex = require("../db/db");
module.exports.checkLimit = async function (req, res, next) {
  console.log("payload is ", req.user.user_id);
  const user_id = req.user.user_id;
  const bubbleData = await knex("Bubbles").select().where({
    user_id: req.user.user_id,
    is_deleted: 0,
  });
  const total_video = bubbleData.length;
  const subscriber = await knex("Subscribers").select("plan_id").first().where({
    user_id: req.user.user_id,
    is_active: 1,
  });
  const plan_id = subscriber.plan_id;
  if (plan_id == 1 || plan_id == 6) {
    if (total_video > 0) {
      return res.status(401).json({
        error: true,
        message: "Video upload limit crossed",
        data: null,
      });
    }
  }
  //   console.log("sub", subscriber);
  //   req.user = payload;
  next();
};
