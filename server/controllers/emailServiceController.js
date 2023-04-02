const Email = require("../models/email");
const Client = require("../models/clientModel");
const User = require("../models/User");
const Project = require("../models/projectModel");

const nodemailer = require("nodemailer");


// Create and Save a new email
exports.createEmail = async (req, res) => {

const { sender, recipients, subject, body,scheduleDate,project } = req.body;
    const scheduleTime = new Date(scheduleDate?scheduleDate:Date.now());

  const newEmail = new Email({ sender, recipients, subject, body,scheduleTime,project});

  try {
    const savedEmail = await newEmail.save();
    res.status(200).json({status:"created",savedEmail});
  } catch (err) {
    res.status(500).json(err);
  }
}

// Retrieve all emails from the database.
exports.findAllEmails = async (req, res) => {
    try {
        const emails = await Email.find();
        return res.status(200).json(emails);
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
}

// Find a single email with an id
exports.findOneEmail = async (req, res) => {
    try {
        const email = await Email.findById(req.params.id);
        return res.status(200).json(email);
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
}


// Update an email by the id in the request
exports.updateEmail = async (req, res) => {
    try {
        const { sender, recipients, subject, body,scheduleTime,project } = req.body;
        const newEmail = await Email.findByIdAndUpdate(req.params.id,
            { sender,
                recipients,
                subject,
                body,
                scheduleTime,
                project
            });
        return res.status(200).json({
            });
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
}


// Delete an email with the specified id in the request
exports.deleteEmail = async (req, res) => {
    try{
        await Email.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            status: "deleted",
            msg: "Email deleted" });

    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
}

// send email to clients
exports.sendEmail = async (req, res) => {
    try {
        const email = await Email.findById(req.params.id);
        const clients_ids = await email.recipients;
        const clientEmails = await Client.find({ _id: { $in: clients_ids } }).select('email');
        const user = await User.findById(email.sender);
        if (email) {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "zaghouani.yosri@gmail.com",
                    pass: "yimktgkvxvbbylzp",
                },
            });
            const mailOptions = {
                from: user.email,
                to: clientEmails.map((client) => client.email),
                subject: email.subject,
                html: email.body,
            };
            transporter.sendMail(mailOptions, (err, data) => {
                if (err) {
                    console.log("error occurs", err);
                    res.send(err);
                } else {
                    console.log("email sent!");
                    res.send(email);

                }
            });
        }
        else {
            return res.status(404).json({ msg: "Email not found" });
        }
    }
    catch (err) {
        return res.status(500).json({ msg: err.message });
    }
}

exports.sendScheduledEmail = async (emailId) => {
    try {
        const email = await Email.findById(emailId);
        const clients_ids = await email.recipients;
        const clientEmails = await Client.find({ _id: { $in: clients_ids } }).select('email');
        const user = await User.findById(email.sender);
        if (email) {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "zaghouani.yosri@gmail.com",
                    pass: "yimktgkvxvbbylzp",
                },
            });
            const mailOptions = {
                from: user.email,
                to: clientEmails.map((client) => client.email),
                subject: email.subject,
                html: email.body,
            };
            transporter.sendMail(mailOptions, (err, data) => {
                if (err) {
                    console.log("error occurs", err);
                } else {
                    console.log("email sent!");

                }
            });
        }
        else {
            console.log("Email not found");
        }
    }
    catch (err) {
        console.log(err.message);
    }
}