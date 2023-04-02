const express = require('express');
const router = express.Router();
const paymeeKey = process.env.PAYMEE_KEY;
// const axios = require('axios');
//
// const headers = {
//     "Authorization": `${paymeeKey}`,
//     "Content-Type": "application/json"
// };
//
//
// router.post('/create', (req, res) => {
//     const data ={
//         "vendor": 1265,
//         "amount": 45,
//         "note": "Commande #1324"
//     };
//     axios.post("https://sandbox.paymee.tn/api/v1/payments/create", data, { headers })
//         .then(response => {
//             const responseData = response.data;
//             res.json(responseData);
//         })
//         .catch(error => {
//             console.error(error);
//             res.status(500).send("Internal Server Error");
//         });
// });
//
//
// router.get('/check', (req, res) => {
//     axios.get("https://sandbox.paymee.tn/api/v1/payments/9D320F732CE972A47E8C73E0A4D23BB0947/check", { headers })
//         .then(response => {
//             const responseData = response.data;
//             if (responseData['data']['payment_status'] === true) {
//                 // Payment successful
//                 res.send("Payment successful");
//             } else {
//                 // Payment failed
//                 res.send("Payment failed");
//             }
//         })
//         .catch(error => {
//             console.error(error);
//             res.status(500).send("Internal Server Error");
//         });
// });

module.exports = router;

//----------------------------------------------------------------------//
//------------------------- Swagger Documentation ----------------------//
//----------------------------------------------------------------------//
/**
 * @swagger
 * tags:
 *   name: Paymee
 *   description: The Paymee management API
 * /paymee/check :
 *   get:
 *     summary: Retrieve paymee key
 *     description: Retrieve paymee public key.
 *     tags:
 *       - Paymee
 *
 *
 *
 *
 *
 *
 * /paymee/create:
 *   post:
 *     summary: Create paymee payment intent
 *     description: Create paymee payment intent.
 *     tags:
 *       - Paymee
 *
 */