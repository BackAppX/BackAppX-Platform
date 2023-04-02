// const pushNotificationService = require('../services/pushNotificationService');
//
// exports.sendNotification = async (req, res,next) => {
//     try {
//         const message = {
//             app_id: process.env.ONE_SIGNAL_APP_ID,
//             contents: {"en": req.body.message},
//             included_segments: ["All"],
//             content_available: true,
//             small_icon: "ic_notification_icon",
//             data: {
//                 PushTitle: req.body.title,
//                 PushMessage: req.body.message,
//                 PushType: req.body.type,
//             }
//         };
//         await pushNotificationService.sendNotification(message, function (err, response) {
//             if (err) {
//                 console.log("Something went wrong...");
//                 return next(err);
//             } else {
//                 console.log(response);
//                 return res.status(200).json({
//                     message: 'Notification sent successfully',
//                     response: response
//                 });
//             }
//         });
//     } catch (err) {
//         res.status(500).json({
//             error: err
//         });
//     }
// }
//
// exports.sendNotificationToDevice = async (req, res,next) => {
//     try {
//         const message = {
//             app_id: process.env.ONE_SIGNAL_APP_ID,
//             contents: {"en": req.body.message},
//             included_segments: ["include_player_ids"],
//             include_player_ids: [req.body.devices],
//             content_available: true,
//             small_icon: "ic_notification_icon",
//             data: {
//                 PushTitle: req.body.title,
//                 PushMessage: req.body.message,
//                 PushType: req.body.type,
//             }
//         };
//         await pushNotificationService.sendNotification(message, function (err, response) {
//             if (err) {
//                 console.log("Something went wrong...");
//                 return next(err);
//             } else {
//                 console.log(response);
//                 return res.status(200).json({
//                     message: 'Notification sent successfully',
//                     response: response
//                 });
//             }
//         });
//     } catch (err) {
//         res.status(500).json({
//             error: err
//         });
//     }
// }