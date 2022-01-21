const Event = require('../../structures/Event')



module.exports = class extends Event {
    constructor(client) {
        super(client, {
            name: 'ready'
        })
    }
                     
    run = async () => {                     
        console.log(`-----------------------BIGODON BOT-----------------------\n`);
        console.log(`- Del seu bot ${this.client.user.username} foi ligado com sucesso. |ok| \n- Em esta em  ${this.client.guilds.cache.size} servidores. |N| `, )
        var dataAtual = new Date();
        let horas = dataAtual.getHours();
        let minutos = dataAtual.getMinutes(); 
        console.log("- Bot iniciado as " + horas + ":" + minutos + "h. |H|")
        
        console.log(`--------------------------------------------------------`);
        this.client.registryCommands()
    // - Setadn Status do El Bigodon

       this.client.user.setPresence({ activities: [{ type: 'LISTENING', name: `☕ /help` }], status: 'online' });
    // - Conecatando o DataBae

     //  await this.client.connectToDatabase()
       

    // - Conectando o livalink

        this.client.manager.init(this.client.user.id)
		
    }
}


/*
----------------------------------------------------------------------------------
setPresence => https://discord.js.org/#/docs/main/stable/class/PresenceManager
PARÂMETRO	MODELO	OPCIONAL	PREDEFINIÇÃO	DESCRIÇÃO
status	
Status do usuário

afk	
Se o usuário é AFK

Atividades	
Atividade que o usuário está jogando

shardId	
ID (s) de fragmento para ter a atividade definida
----------------------------------------------------------------------------------
*/