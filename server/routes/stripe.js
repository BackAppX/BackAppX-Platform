const express = require("express");
require("dotenv").config();
const router = express.Router();
const User = require("../models/User");
const userController = require("../controllers/user");
const paymentController = require("../controllers/paymentsMailing");

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)


router.get("/config", async (req, res) => {
    const public_key = process.env.STRIPE_PUBLIC_KEY;
    res.send({
        public_key

    });
});

router.post("/create-payment-intent", async (req, res) => {
    const { items, email } = req.body;
    const user =  User.findOne(email);
    console.log('email= '+ email)
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 4000,
        currency: "usd",

        }).then((paymentIntent) => {
        res.send({
            clientSecret: paymentIntent.client_secret,
        });
        // update user subscription on server
         userController.updateUserSubscription(email)
         
        // send email to user after payment
        paymentController.sendEmailConfirmationPayment(email)
    });
});

module.exports = router;


//----------------------------------------------------------------------//
//------------------------- Swagger Documentation ----------------------//
//----------------------------------------------------------------------//

/**
 * @swagger
 * tags:
 *   name: Stripe
 *   description: The Stripe management API
 * /payment :
 *   get:
 *     summary: Retrieve stripe key
 *     description: Retrieve stripe public key.
 *     tags:
 *       - Stripe
 *     responses:
 *       200:
 *         description: get stripe public key from server.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *
 *
 *
 *
 *
 * /payment/create-payment-intent:
 *   post:
 *     summary: Create payment intent
 *     description: Create payment intent.
 *     tags:
 *       - Stripe
 *
 */













































//
//
// router.post("/create-checkout-session-pro", async (req, res) => {
//     const session = await stripe.checkout.sessions.create({
//        mode: "subscription",
//         line_items: [
//             {
//                 price: "price_1MdKakF6RxBlwxAlsO5acLa9",
//                 quantity: 1,
//             },
//         ],
//     }
//     ).then((session) => {
//         const payment = new paymentController({
//             userId: req.body.userId,
//             subscriptionId: session.subscription,
//             status: session.payment_status,
//             createdAt: session.created,
//             endDate: session.created + 2592000
//         });
//         payment.save();
//     });
//     res.redirect(303, session.url);
// });

// router.post("/create-checkout-session-free", async (req, res) => {
//     const customer = await stripe.customers.create({
//         email: req.body.email,
//         name: req.body.name,
//     }).then(async (customer) => {
//         const session = await stripe.checkout.sessions.create({
//             mode: "subscription",
//             line_items: [
//                 {
//                     price: "price_1MdKYqF6RxBlwxAlbcfVDvzH",
//                     quantity: 1,
//                 },
//             ],
//             success_url: "http://localhost:3000/success",
//             cancel_url: "http://localhost:3000/cancel",
//         }).then((session) => {
//             const payment = new paymentController({
//                 userId: req.body.userId,
//                 subscriptionId: session.subscription,
//                 status: session.payment_status,
//                 createdAt: session.created,
//                 endDate: session.current_period_end
//             });
//             payment.save();
//         });
//     });
// });

// // webhook
// router.post("/webhook", async (req, res) => {
//     const sig = req.headers["stripe-signature"];
//     let event;
//     try {
//         event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
//     } catch (err) {
//         return res.status(400).send(`Webhook Error: ${err.message}`);
//     }
//     if (event.type === "checkout.session.completed") {
//         const session = event.data.object;
//         console.log(session);
//     }
//     res.json({ received: true });
// });
//
// // subscription expired webhook
// router.post("/webhook-subscription-expired", async (req, res) => {
//     const sig = req.headers["stripe-signature"];
//     let event;
//     try {
//         event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
//     } catch (err) {
//         return res.status(400).send(`Webhook Error: ${err.message}`);
//     }
//     if (event.type === "invoice.payment_failed") {
//         const session = event.data.object;
//         console.log(session);
//     }
//     res.json({ received: true });
// });
//
// // invoice paid webhook
// router.post('/webhooks', async (req, res) => {
//     const event = req.body;
//
//     if (event.type === 'invoice.upcoming') {
//         const subscriptionId = event.data.object.subscription;
//         const subscription = await stripe.subscriptions.retrieve(subscriptionId);
//         const customer = await stripe.customers.retrieve(subscription.customer);
//
//         // Send a reminder email to the customer
//         // Use your preferred email sending method (e.g. Nodemailer, SendGrid, etc.)
//
//     }
//
//     res.send({ received: true });
// });
//
// // subscription updated webhook
// router.post("/webhook-subscription-updated", async (req, res) => {
//     const sig = req.headers["stripe-signature"];
//     let event;
//     try {
//         event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
//     } catch (err) {
//         return res.status(400).send(`Webhook Error: ${err.message}`);
//     }
//     if (event.type === "customer.subscription.updated") {
//         const session = event.data.object;
//         console.log(session);
//
//         paymentController.findOneAndUpdate({ subscriptionId: session.id }, { endDate: session.current_period_end }, { new: true }, (err, doc) => {
//             if (err) {
//                 console.log("Something wrong when updating data!");
//             }
//             console.log(doc);
//         });
//     }
//     res.json({ received: true });
// })



module.exports = router;



