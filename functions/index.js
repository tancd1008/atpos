/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "oderfood333@gmail.com", // Điền email của bạn
        pass: "oderfood121" // Điền mật khẩu của bạn
    }
});

exports.sendContactEmail = functions.database.ref('/contacts/{contactId}')
    .onCreate((snapshot, context) => {
        const contact = snapshot.val();

        const mailOptions = {
            from: "oderfood333@gmail.com",
            to: "caotan1008@gmail.com", // Điền địa chỉ email mà bạn muốn nhận thông báo
            subject: "New Contact Form Submission",
            text: `Name: ${contact.name}\nEmail: ${contact.email}\nMessage: ${contact.message}`
        };

        return transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log("Email sent:", info.response);
        });
    });