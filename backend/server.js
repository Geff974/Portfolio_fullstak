const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3001;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})


app.post('/', (req, res) => {
    console.log(req.body.name);
    const transporter = nodemailer.createTransport({
        host: 'kitten.o2switch.net',
        port: 465,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'contact@codaid.com',
        subject: `Message de ${req.body.name}: ${req.body.project}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (err, info)=> {
        if(err) {
            console.log(err);
            res.send('error')
        } else {
            console.log('Email send: ' + info.response);
            res.send('success');
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`);
})