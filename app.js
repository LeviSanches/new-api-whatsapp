const express = require('express');
const venom = require('venom-bot');

const app = express();
const PORT = 3000;

app.use(express.json());

let clientVenom;

venom
  .create({ session: 'whatsapp-session', headless: 'new' })
  .then((client) => {
    clientVenom = client;
    console.log('🟢 Venom conectado e pronto!');
  })
  .catch((erro) => {
    console.error('Erro ao iniciar o Venom:', erro);
  });

app.post('/enviar', async (req, res) => {
  const { numero, mensagem } = req.body;

  if (!clientVenom) {
    return res.status(503).json({ erro: 'Cliente do Venom ainda não está pronto.' });
  }

  try {
    const resultado = await clientVenom.sendText(`${numero}@c.us`, mensagem);
    console.log('Resultado:', resultado);
    res.json({ sucesso: true, resultado });
  } catch (erro) {
    console.error('Erro ao enviar mensagem:', erro);
    res.status(500).json({ sucesso: false, erro: erro.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
