const asyncHandler = require("express-async-handler");
const knex = require("../db/db");

const getAllPlans = asyncHandler(async (req, res) => {
  try {
    const queryResult = await knex("Plans").select();
    res.status(201).json({
      error: false,
      status: "success",
      message: "successfully get all plans",
      data: queryResult
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "Something went wrong!!",
      data: null,
    });
  }
});
const getSinglePlans = asyncHandler(async(req,res)=>{
  const id = req.params.id;
  try {
    const queryResult = await knex("Plans").select().first().where({'id':id});
    res.status(201).json({
      error: false,
      status: "success",
      message: "successfully get all plans",
      data: queryResult
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "Something went wrong!!",
      data: null,
    });
  }
})
module.exports = {
  getAllPlans,
  getSinglePlans
};
