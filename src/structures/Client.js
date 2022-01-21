const { Client } = require('discord.js')
const { readdirSync } = require('fs')
const { join } = require('path')
//--------------------------------------

//const { connect } = require('mongoose')
const erelaManager = require('./Manager')

module.exports = class extends Client {
    constructor(options) {
        super(options)

        this.commands = []
        this.loadCommands()
        this.loadEvents()
        this.manager = erelaManager(this)
    
    }

    //Mostrar na lista como uma opcao de comando 
    registryCommands() {
      // this.guilds.cache.get('821514810960117780').commands.set(this.commands).catch
       
        // COMANDO GLOBAL PARA TODOS OS SEVER PODE DEMORAR ATE 1H PARA CARREGAR USAR VERSAO FINAL
        this.application.commands.set(this.commands)
    }


    // lendo todas as categorias dentro da pasta commands 
    loadCommands(path = 'src/commands') {
        const categories = readdirSync(path)

        for (const category of categories) {
            const commands = readdirSync(`${path}/${category}`)

            for (const command of commands) {
                // ajudando os comando para uma leitura generalizada 
                const commandClass = require(join(process.cwd(), `${path}/${category}/${command}`))
                const cmd = new (commandClass)(this)

                this.commands.push(cmd)
            }
        }
    }

    loadEvents(path = 'src/events') {
        const categories = readdirSync(path)

        for (const category of categories) {
            const events = readdirSync(`${path}/${category}`)

            for (const event of events) {
                // ajudando os comando para uma leitura generalizada 
                const eventClass = require(join(process.cwd(), `${path}/${category}/${event}`))
                const evt = new (eventClass)(this)

                this.on(evt.name, evt.run)
            }
        }
    }
//     -- Connect data base 
//    async connectToDatabase() {
//        const connection = await connect(process.env.MONGO_URL, {
//            useNewUrlParser: true,
//            useUnifiedTopology: true,
//            useFindAndModify: false,
//            useCreateIndex: true
//        })
//       console.log(`- Database conectada com exito. |ok|\n `);
//        console.log(`--------------------------------------------------------`);

//        this.db = {connection}
//        this.Client.db.connection
//    }
}