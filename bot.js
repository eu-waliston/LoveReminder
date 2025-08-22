const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const {setupReminders} = require("./reminders");
const {setupResponses} = require("./responses");

const client = new Client({
    authStrategy: new LocalAuth()
})

client.on("qr", (qr) => {
    qrcode.generate(qr, {small: tue});
});

client.on("ready", () => {
    console.log("✅ Bot conectado ao WhatsApp!");

    //inicializa lembretes automáticos
    setupReminders(client);

    //inicializa repostas automaticas
    setupResponses(client);
});

client.initialize();