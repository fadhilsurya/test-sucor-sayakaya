const nodemailer = require('nodemailer');

// for this simple purpose we will use SMTP

function SendEmaiSMTP(customerEmail, promoCode) {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASS,
        },
    });

    // email content
    const emailOptions = {
        from: process.env.EMAIL_ADDRESS_SMTP,
        to: customerEmail,
        customerEmail: 'Happy Birthday!',
        html: `<p>Your Promo Code ${promoCode}.</p>`,
    };

    // send email
    transporter.sendMail(emailOptions, (error, info) => {
        if (error) {
            return error;
        } else {
            return info;
        }
    });


}

module.exports = { SendEmaiSMTP }