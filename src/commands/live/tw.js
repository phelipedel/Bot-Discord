const Command = require('../../structures/Command')
const { MessageEmbed } = require('discord.js')



module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'tw',
            description: 'CATEGORIA TWITCH',
            options: [

                {
                    name: 'link',
                    type: 'STRING', 
                    description: 'LINK DA SUA LIVE. ',
                    required: true
                },
                {
                    name: 'jogando',
                    type: 'STRING', 
                    description: 'Digite a categoria ou nome do jogo',
                    required: true
                }

                


            ]
        })
    }

    run = (interaction) => {  
        
        if (!interaction.member.permissions.has('MANAGE_CHANNELS')) return interaction.reply({ content: 'Voce nao tem permissao (Gerenciar mensagens) para divulgar. ', ephemeral: true })
        
        
        const texto = interaction.options.getString('mensagem')
        const link = interaction.options.getString('link') 
        const jogando = interaction.options.getString('jogando') 
         let todo = interaction.guild.roles.everyone.toString()
        
        const embed = new MessageEmbed()
            
           .setAuthor(interaction.guild.name , interaction.guild.iconURL)
            .setTitle(link) 
            .setDescription(`\n**jOGANDO:**\n*${jogando}*`)
            .setColor('#9400D3')
            .setImage("https://cdn.discordapp.com/attachments/639869522387664896/887025468748988416/twitchlogo.png")
         //   .setURL(link)
            .setTimestamp()
            .setThumbnail("https://cdn.discordapp.com/attachments/639869522387664896/887023510948577370/kisspng-twitch-tv-streaming-media-computer-icons-video-gam-streamio-discord-bots-5ba42c941553b1.5159.png")
            .setFooter(`Twitch `,)
           
            
            

            interaction.reply({ content: `Estou em live agora. ${todo}` })
            interaction.channel.send({ embeds: [embed] })
            
            
                
                

    }
}