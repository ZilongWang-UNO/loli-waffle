const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 10086;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/sendEmail', (req, res) => {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        auth: {
            user: 'shawn565404751@gmail.com',
            pass: 'fcrr jdof pzwb zbqm',
        },
    });

    const mailOptions = {
        from: 'restmesh <shawn565404751@gmail.com>',
        to: 'jw565404751@gmail.com',
        subject: `${subject}`,
        text: `${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error.message);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.send('Email sent successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     auth: {
//         user: 'shawn565404751@gmail.com',
//         pass: 'fcrr jdof pzwb zbqm',
//     },
//   });

//   const mailOptions = {
//     from: 'restmesh <shawn565404751@gmail.com>',
//     to: 'jw565404751@gmail.com',
//     subject: 'New message from',
//     text: '123',
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error.message);
//       res.status(500).send('Error sending email');
//     } else {
//       console.log('Email sent:', info.response);
//       res.send('Email sent successfully');
//     }
//   });