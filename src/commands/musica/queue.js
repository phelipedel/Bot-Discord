const Command = require('../../structures/Command')

const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'fila',
            description: 'Mostra a fila de músicas atual.'
        })
    }

    run = (interaction) => {
        const player = this.client.manager.get(interaction.guild.id)
        if (!player) return interaction.reply({ content: 'Não estou tocando neste servidor.', ephemeral: true })

        const queue = player.queue

        const embed = new MessageEmbed()
            .setTitle(`Fila de músicas do servidor`)
            .setAuthor(`Bigodon SKIP`, 'https://cdn.discordapp.com/attachments/639869522387664896/882420587341963366/bigodon_1.png', )
            .setColor('#FF4500 ')
            .setThumbnail(`https://cdn.discordapp.com/attachments/639869522387664896/882713430577016842/NicePng_checklist-icon-png_1973185.png`)
            .setTimestamp()

        const tracks = queue.slice(0, 10)

        if (queue.current) embed.addField(`Tocando agora:`, `[${queue.current.title}](${queue.current.uri})`)
        if (!tracks.length) embed.setDescription(`Não há nenhuma música na fila.`)
        else embed.setDescription(
            tracks.map((t, i) => {
                return `${i + 1} - [${t.title}](${t.uri})`
            })
            .join('\n')
        )

        interaction.reply({ embeds: [embed] })
    }
}