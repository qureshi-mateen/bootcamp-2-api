const nodemailer = require('nodemailer');

const initializeMailer = async () => {
    const testAccount = await nodemailer.createTestAccount();

    const transporter = await nodemailer.createTransport(
        {
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass, // generated ethereal password
            },
        }
    );

    return transporter;
};

const sendEmail = async (body) => {
    const transporter = await initializeMailer();

    const response = await transporter.sendMail({
        from: body.from || '"bootcamp" <foo@example.com>', // sender address
        to: body.to || "mateen@troontechnologies.com, faizan@troontechnologies.com", // list of receivers
        subject: body.subject || "Test Email", // Subject line
        html: body.html || "<b>This is an email body</b>", // html body
    });

    console.log('Message Sent', response.messageId);
    return nodemailer.getTestMessageUrl(response);
};

module.exports = {
    sendEmail
}