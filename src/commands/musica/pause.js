const Command = require('../../structures/Command')
const { MessageEmbed} = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'pause',
            description: '🎶 Pausa a música que está tocando.'
        })
    }

    run = (interaction) => {
        const player = this.client.manager.get(interaction.guild.id)
        if (!player) return interaction.reply({ content: '\**`Não estou tocando neste servidor.\`** 😭 ', ephemeral: true })

        const memberVoiceChannel = interaction.member.voice.channel
        if (!memberVoiceChannel) return interaction.reply({ content: '\**`Voce presta estar em um canal de voz para me chamar!\`** 🙄 ', ephemeral: true })
        if (memberVoiceChannel.id !== player.voiceChannel) return interaction.reply({ content: 'Você precisa estar no mesmo canal de voz que eu.', ephemeral: true })

        if (player.paused) return interaction.reply({ content: '\**`A musica ja esta pausa!\`** 🙄 ', ephemeral: true })

        const title = player.queue.current.title
        player.pause(true)
        let embed = new MessageEmbed()
        .setTitle(`Vou descansar um pouco os ouvido dei uma pausa para ti 🧡.`)
        .setDescription(`* Musica: ${title} Pulada.\n* Musica pulada pelo: ${interaction.user.toString()}`)
        .setAuthor(`Bigodon PAUSE`, 'https://cdn.discordapp.com/attachments/639869522387664896/882420587341963366/bigodon_1.png', )
        .setTimestamp()
        .setColor('#FF4500 ')
        .setThumbnail('https://cdn.discordapp.com/attachments/639869522387664896/882708636487516260/media-pause-64.png')
        
     

        interaction.reply({  embeds: [embed]  })
    }
}