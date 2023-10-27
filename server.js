const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { email } = req.body;

    // E-posta gönderim işlemi
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'steptest226@gmail.com',
            pass: 'hibihdeorcokmndd'
        }
    });

    const mailOptions = {
        from: 'steptest226@gmail.com',
        to: 'rasulsha@code.edu.az',
        subject: 'Test E-posta',
        text: pass
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.json({ message: 'E-posta gönderimi başarısız oldu.' });
        } else {
            console.log('E-posta gönderildi: ' + info.response);
            res.json({ message: 'E-posta gönderimi başarılı oldu.' });
        }
    });
});

app.listen(3000, () => {
    console.log('Sunucu çalışıyor...');
});