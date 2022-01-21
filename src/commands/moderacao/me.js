const Command = require('../../structures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'me',
            description: '😀 Mostre para seus amigos algo legla.',
            options: [

                {
                    name: 'titulo',
                    type: 'STRING', 
                    description: 'Titulo da mensagem. ',
                    required: true
                },
                {
                    name: 'mensagem',
                    type: 'STRING', 
                    description: 'A mensagem que sera enviada no canal.',
                    required: true
                },
                {
                    name: 'cor',
                    type: 'NUMBER', 
                    description: 'ADICIONAR COR NA BARRINHA LATERAL DA MENSAGEM, EXEMPLO: #FF8C00 ',
                    required: false
                },
                {
                    name: 'img',
                    type: 'STRING', 
                    description: 'ADICIONAR URL DA IMAGEM ',
                    required: false
                },
                {
                    name: 'link',
                    type: 'STRING', 
                    description: 'TRASFORMAR A MESAGEM EM LINK ',
                    required: false
                }
                


            ]
        })
    }

    run = (interaction) => {  
        
        
        
        const texto = interaction.options.getString('mensagem')
        const titulo = interaction.options.getString('titulo') 
        const cor = interaction.options.getNumber('cor')
        const img = interaction.options.getString('img')
        const link = interaction.options.getString('link')
       


       

        const embed = new MessageEmbed()
            .setTitle(titulo) 
            .setDescription(texto)
            .setColor(cor) // Borda da mensagem 
            .setImage(img)
            .setURL(link)
            .setTimestamp()
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'User:', value: `${interaction.member}`, inline: true },
            
                { name: 'User Tag:', value: `\`#${interaction.member.user.discriminator}\``, inline: true },
                { name: 'User ID:', value: `\`${interaction.member.id}\``, inline: true },
            
            )
            
            
            


            interaction.reply({  embeds: [embed]  })
                
                

    }
}