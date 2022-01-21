const Command = require('../../structures/Command')
const { MessageEmbed } = require('discord.js')



module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'yu',
            description: 'CATEGORIA YOUTUBE',
            options: [

                {
                    name: 'link',
                    type: 'STRING', 
                    description: 'LINK DO SEU VIDEO NOVO. ',
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
            .setColor('#ff0000')
            .setImage("https://cdn.discordapp.com/attachments/639869522387664896/889553319402537080/2404603.png")
         //   .setURL(link)
            .setTimestamp()
            .setThumbnail("https://cdn.discordapp.com/attachments/639869522387664896/889552680417112144/youtube.png")
            .setFooter(`Youtube `,)
           
            
            


            
            interaction.reply({ content: `Video novo no canal. ${todo}` })
            interaction.channel.send({ embeds: [embed] })
                
                

    }
}