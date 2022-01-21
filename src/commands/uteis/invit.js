const Command = require('../../structures/Command')
const { MessageEmbed, Channel } = require('discord.js')



module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'invite',
            description: '📩 Link para convidar  Bigondo para outro servidor'
        })
    }

    run = (interaction) => {
        const embed = new MessageEmbed()
        .setTitle(`🧔 El Bigodon 🧔`)
        .setDescription('**​Estou muito feliz por estar me convidando espero que sejamos bons amigos, bata clicar sobre meu nome em azul ja irei para o seu servidor.**​​​')
        .setColor('#FF4500 ')
        .setAuthor('Bigodon', 'https://cdn.discordapp.com/attachments/639869522387664896/882420587341963366/bigodon_1.png')
        .setThumbnail('https://cdn.discordapp.com/attachments/639869522387664896/882658195431125042/bigodon-copiar.png')
        .setFooter('Bigodon', 'https://discord.com/oauth2/authorize?=&client_id=880855226456891422&scope=bot&permissions=8&scope=bot%20applications.commands')
        .setURL(`https://discord.com/oauth2/authorize?=&client_id=880855226456891422&scope=bot&permissions=8&scope=bot%20applications.commands`)
        .setTimestamp()

           
        interaction.reply({  embeds: [embed]  })
        
        }
    }
