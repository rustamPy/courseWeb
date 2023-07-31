// app.js
const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config(); // Load environment variables from .env

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/submit', (req, res) => {
  const form = req.body;
  const botId = process.env.BOT_ID;
  const text = `Name: ${form.name}\nSurname: ${form.surname}\nAge: ${form.age}\nEmail: ${form.email}\nTelegram Account: ${form.telegram_acc}\nMessage: ${form.message}`;

  // Make the API call to the Telegram API
  fetch(`https://api.telegram.org/bot${botId}/sendMessage?chat_id=@yeqanaL&text=${encodeURIComponent(text)}`)
    .then(response => response.json())
    .then(data => {
      res.json({ success: true, data });
    })
    .catch(error => {
      console.error("Error:", error);
      res.status(500).json({ success: false, error: "An error occurred" });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});