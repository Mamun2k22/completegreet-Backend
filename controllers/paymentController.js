const asyncHandler = require("express-async-handler");
const knex = require("../db/db");
const stripe = require("stripe")(
  "sk_test_51MhzlcJggWefJ04ANPv4Gf4MCvQCWWyjeeAWByiT8ncL3FgYbMfQ0HZYoihqDYXIqltVKsBwUFkhaMwyhxbaTeTk002Z92cnlV"
);

const paymentIntent = asyncHandler(async (req, res) => {
  const { Plan } = req.body;
  const loggedUser = req.user.user_id;
  const selectedPlan = await knex("Plans")
    .select()
    .first()
    .where({ code: Plan.code });
  if (selectedPlan) {
    let amount;
    let description = selectedPlan.PName;

    if (Plan.duration == 12) {
      // For annual plans, apply a discount of 20%
      amount = Math.round(selectedPlan.price * 12  * 100);
    } else if (Plan.duration == 1) {
      amount = selectedPlan.price * 100;
    } else {
      // Return an error if an invalid plan duration is specified
      return res.status(400).json({ message: "Invalid plan duration" });
    }
    // Create the payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      description: description,
      metadata: {
        UserID: loggedUser,
        Code: selectedPlan.code,
        Duration: Plan.duration,
      },
      payment_method_types: ['card'],
      // automatic_payment_methods: {
      //   enabled: true,
      // },
    });
    const clientSecret = paymentIntent.client_secret;
    res.status(201).json({
      error: false,
      status: "success",
      message: "successfully payement intent",
      data: {
        clientSecret: clientSecret,
      },
    });
  } else {
    //Return an error if the specified plan code doesn't exist
    return res.status(400).json({ message: "Invalid plan code" });
  }
});
const getCheckout = asyncHandler(async (req, res) => {
  var geturlinfo = req.query.dur;
  let Duration = geturlinfo;

  console.log("duration is ", Duration);
  const Plan = await knex("Plans")
    .select()
    .first()
    .where({ code: req.params.id });
  console.log(Plan);
  if (Plan) {
    if (Plan.price == 0) {
      res.redirect("/users/dashboard");
    } else {
      console.log("else block ", Duration)
      if (Duration == 1 || Duration == 12) {
        res.status(201).json({
          error: false,
          status: "success",
          message: "successfully checkout",
          data: {
            Plan: Plan,
            Duration: Duration,
            geturlinfo: geturlinfo,
            pid: req.params.id,
          },
        });
      } else {
        res.status(400).json({
          error: true,
          status: "error",
          message: "Invalid Duration",
          data: [],
        });
      }
    }
  } else {
    res.status(400).json({
      error: true,
      status: "error",
      message: "Invalid Plan",
      data: [],
    });
  }
});
const afterPayment = asyncHandler(async(req,res)=>{
  const {payment_status,code,user_id,price,duration} = req.body;
  try {
    switch(payment_status){
      case 'succeeded':
        // console.log("here")
        const plan = await knex('Plans').select().first().where({'code':code});
        // var User=await user.findOne({where:{id:event.data.object.metadata.UserID}})
        const user = await knex('Users').select().first().where({'id':user_id})
        const subscriber = await knex('Subscribers').select().where({'user_id':user_id,'is_finished':0});
        // console.log("subscriber ", subscriber)
        if(subscriber){
          let date = new Date();
          let finishdateTimestamp = duration==12?date.setDate(date.getDate() + 360):date.setDate(date.getDate() + 30);
          let finishdate = new Date(finishdateTimestamp);
          let formattedFinishDate = formatDate(finishdate);
          const ids = [];
          subscriber.map((item)=>{
            ids.push(item.id);
          })
          //console.log(formattedFinishDate);
          //update the current one
          // console.log(ids)
          const rest = await knex('Subscribers').update({is_active:0,is_finished:1}).whereIn('id',ids);
          // console.log("rest",rest)
          const insertableData = {
            pname:plan.pname,
            pcode: plan.code,
            subscriber: user.name,
            subscriber_id: user.id,
            user_id: user.id,
            plan_id: plan.id,
            price: price,
            duration: duration,
            end_subscribe_date: formattedFinishDate,
            is_active: 1,
            is_finished: 0,
          }
          const best = await knex('Subscribers').insert(insertableData);
          // console.log("best",best)
          const bubbles = await knex('Bubbles').select().where({"user_id": user_id,"bubble_available":0});
          if(bubbles.length>0){
            for(let i=0;i<bubbles.length;i++){
                 await knex('Bubbles').update({"bubble_available":1})
            }
          }
        }
        break;
      case 'attached': 
         const test =0;
         break;
      default: 
     
    }
    res.status(201).json({
      error: false,
      status: "success",
      message: "successfully effected",
      data: true
    });
  } catch (error) {
    console.log(error)
  }
})

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

module.exports = {
  paymentIntent,
  getCheckout,
  afterPayment
};
