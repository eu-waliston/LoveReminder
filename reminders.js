const cron = require("node-cron");
const { horario, numero } = require("./config");
const { lembretes, carinhos } = require("./messages");

//Função pra pehar mensagem aleatória de carinho
function mensagemAleatoria() {
    const index = Math.floor(Math.random() * carinhos.length);
    return carinhos[index];
}

function setupReminder(client) {
    // Café
    cron.schedule(horario.cafe, () => {
        client.sendMessage(numero, lembretes.cafe);
    })

    //almoço
    cron.schedule(horarios.almoco, () => {
        client.sendMessage(numero, lembretes.almoco);
    })

    //jantar
    cron.schedule(horarios.janta, () => {
        client.sendMessage(numero, lembretes.jantar);
    })

    // Mensagens de carinho aleatórias
    cron.schedule(horarios.carinho1, () => {
        client.sendMessage(numero, mensagemAleatoria());
    });

    cron.schedule(horarios.carinho2, () => {
        client.sendMessage(numero, mensagemAleatoria());
    });

    cron.schedule(horarios.carinho3, () => {
        client.sendMessage(numero, mensagemAleatoria());
    });
}

module.exports = { setupReminder }