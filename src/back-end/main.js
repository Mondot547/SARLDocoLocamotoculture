const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config(); // charger les variables d'environnement depuis .env

const app = express();
app.use(bodyParser.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // configuration du transporter de nodemailer
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_ENTREPRISE,
    subject: `Nouveau message de ${name}`,
    text: message,
  };

  // envoi de l'email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Email envoyé: ' + info.response);
      res.send('success');
    }
  });
});

const port = process.env.PORT || 3000; // utiliser le port défini dans les variables d'environnement ou le port 3000 par défaut
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});