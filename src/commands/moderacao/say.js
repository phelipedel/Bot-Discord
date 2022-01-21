const Command = require('../../structures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'aviso',
            description: '⚠️ Personalise seus avisoes da forma que mais lhe agradar.',
            options: [
                {
                    name: 'canal',
                    type: 'CHANNEL', // modelos de types => https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandOptionType
                    description: 'Canal aonde a mensagem sera enviada.',
                    required: true
                },
                {
                    name: 'titulo',
                    type: 'STRING', 
                    description: 'TITULO DA MENSAGEM. ',
                    required: true
                },
				                {
                    name: 'mensagem',
                    type: 'STRING', 
                    description: 'DIGITE O CORPO DA MENSAGEM  ',
                    required: true
                },
                {
                    name: 'cor',
                    type: 'NUMBER', 
                    description: 'ADICIONAR BARRINHA COLORIDA, DIGITE /COR PARA VER OS CODIGOS  ',
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

    run = (interaction) => {       /*MANAGE_MESSAGES PERMISSAO PARA GERENCIAR MENSAGEM */              
        if (!interaction.member.permissions.has('MANAGE_MESSAGES')) return interaction.reply({ content: 'Você não tem permissão para usar este comando!', ephemeral: true })
        const canal = interaction.options.getChannel('canal')
        // - verificando se posso enviar mensagem nesse
        if (!['GUILD_TEXT','GUILD.ANNOUCEMENTS'].includes(canal.type)) return interaction.replay({content: '\```ERRO! | Informe um canal valido.\```', ephemeral: true})
        const channels = interaction.guild.channels.cache
        .filter(c => c.type === 'GUILD_TEXT' && c.permissionsFor(this.client.user.id).has(['SEND_MESSAGES', 'EMBED_LINKS']) && c.permissionsFor(interaction.user.id).has('SEND_MESSAGES'))

        if (!channels.size) return interaction.reply({ content: 'Não consigo enviar a mensagem em nenhum dos canais do servidor.', ephemeral: true })
        // - enviadno a mensagem solicitada
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
            //.setAuthor(autor)

        canal.send({ embeds: [embed] })
            .then(() => interaction.reply({ content: `Mensagem enviada com sucesso no canal \`${canal.name}\`✅`,ephemeral: true}))
            // erro caso a pessoa nao tenha permisao de enviar mensagem no canal ou canal nao se encontrou etc...
            .catch(() => interaction.reply({ content: `ERRO 😞 | Erro ao tentar enviar a mensagem no canal.`,ephemeral: true }))
    }
}