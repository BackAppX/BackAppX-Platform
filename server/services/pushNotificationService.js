// const OneSignal = require('@onesignal/node-onesignal');
// const json = require('express');
//
//
//
//
// async function sendNotification(data, callback) {
//     var headers = {
//         "Content-Type": "application/json; charset=utf-8",
//         "Authorization": "Basic"+ process.env.ONE_SIGNAL_REST_API_KEY
//     }
//
//     var options = {
//         host: "onesignal.com",
//         port: 443,
//         path: "/api/v1/notifications",
//         method: "POST",
//         headers: headers
//     };
//
//     var https = require('https');
//     var req = https.request(options, function(res) {
//         res.on('data', function(data) {
//             console.log("Response:");
//             console.log(JSON.stringify(data));
//             return callback(null,JSON.stringify(data));
//         });
//     });
//
//     req.on('error', function(e) {
//         console.log("ERROR:");
//         console.log(e);
//         return callback(e,null);
//     });
//
//     req.write(JSON.stringify(data));
//     req.end();
// }
//
// exports.sendNotification = sendNotification;