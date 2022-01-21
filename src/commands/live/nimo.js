const Command = require('../../structures/Command')
const { MessageEmbed } = require('discord.js')



module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'nimo',
            description: 'CATEGORIA NIMO TV',
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
            .setColor('#9768c4')
            .setImage("https://cdn.discordapp.com/attachments/639869522387664896/887070358476292177/i3258.png")
         //   .setURL(link)
            .setTimestamp()
            .setThumbnail("https://cdn.discordapp.com/attachments/639869522387664896/887070953706770452/imagen-nimo-tv-a-watch-game-live-streaming-0big-removebg-preview.png")
            .setFooter(`Nimo `,)
           
            
            


            interaction.channel.send({ embeds: [embed] })
            interaction.reply({ content: `Estou em live agora. ${todo}` })
            
                
                

    }
}