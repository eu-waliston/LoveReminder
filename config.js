require("dotenv").config();

let numero = process.env.NUMERO; 
module.exports = {
    numero: numero, //numero de telefone da pessoa que irá receber os lembretes

    //Horários dos lembretes (cron pattern)
    horarios : {
        cafe: "0 8 * * *", //08h00
        almoco: "0 12 * * *", //12h00
        jantar: "0 19 * * *", //19h00

        carinho1: "30 10 * * *", // 10h30
        carinho2: "0 15 * * *",  // 15h00
        carinho3: "0 21 * * *"   // 21h00
    }
}