const { respostas } = require("./messages");

function setupResponses(client) {
    client.on("message", msg => {
        const texto = msg.body.toLowerCase();

        if(texto.includes("fome")) {
            msg.reply(Response.fome);
        }

        if(texto.includes("já comi") || texto.includes("comi")) {
            msg.reply(respostas.comi);
        }

        if(texto.includes("bebi agua") || texto.includes("bebi água")) {
            msg.reply(respostas.agua);
        }
    });
}

module.exports = { setupResponses}