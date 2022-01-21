require('dotenv').config()


const Client = require('./src/structures/Client')

const client = new Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_MESSAGES',
        'GUILD_INVITES',
        'GUILD_VOICE_STATES',
        'GUILD_MEMBERS',
        'DIRECT_MESSAGES',
        'GUILD_INTEGRATIONS',
        
        'GUILD_PRESENCES'
    ],
    allowedMentions: {
        parse: ["roles", "users", "everyone"],
        repliedUser: true,
      }
})



client.login(process.env.BOT_TOKEN)
