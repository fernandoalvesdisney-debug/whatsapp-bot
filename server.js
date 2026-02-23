const express = require('express');
const { MessagingResponse } = require('twilio').twiml;

const app = express();
app.use(express.urlencoded({ extended: false }));

app.post('/webhook', (req, res) => {
  const twiml = new MessagingResponse();
  twiml.message('Olá! Seja bem-vindo. Qual seu nome?');
  res.type('text/xml');
  res.send(twiml.toString());
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor rodando');
});
