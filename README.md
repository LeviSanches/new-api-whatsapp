# 📲 API de Envio de Mensagens WhatsApp

Este repositório contém uma API simples e funcional para envio de mensagens via **WhatsApp**, utilizando [Venom-Bot](https://github.com/orkestral/venom) e **Node.js + Express**. Ideal para automatizações, notificações e integrações com outros sistemas.

---

### 🚀 Funcionalidades

- Inicialização automática de sessão WhatsApp
- Endpoint REST `/enviar` para envio de mensagens
- Verificação de disponibilidade do cliente Venom
- Tratamento de erros e respostas claras

---

### 🛠 Tecnologias utilizadas

- **Node.js**
- **Express**
- **Venom-Bot**

---

### 📦 Instalação e execução

1. Clone este repositório:
   ```bash
   git clone https://github.com/LeviSanches/new-api-whatsapp.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute a aplicação:
   ```bash
   node app.js
   ```

🧪 Como testar
Com a aplicação rodando em http://localhost:3000, envie uma requisição POST para:
```text
  /enviar
  Content-Type: application/json
```
Corpo da requisição:
```
  {
    "numero": "5511999999999",
    "mensagem": "Olá! Essa mensagem foi enviada via minha API com Venom 🤖"
  }
```
## E seja feliz!

Consulte a documentação oficial do Venom-bot: https://github.com/orkestral/venom




