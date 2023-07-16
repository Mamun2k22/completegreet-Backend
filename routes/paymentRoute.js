const router = require("express").Router();
const { paymentIntent, getCheckout, afterPayment } = require("../controllers/paymentController");

router.post("/api/v1/create-payment-intent", paymentIntent);
router.get("/api/v1/checkout/:id", getCheckout);
router.post("/api/v1/webhook", afterPayment);

module.exports = router;
