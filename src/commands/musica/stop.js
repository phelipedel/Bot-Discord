const Command = require('../../structures/Command')
const { MessageEmbed} = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'stop',
            description: '🎶 Parar a música que está tocando.'
        })
    }

    run = (interaction) => {
        const player = this.client.manager.get(interaction.guild.id)
        if (!player) return interaction.reply({ content: '\**`Não estou tocando neste servidor.\`** 😭 ', ephemeral: true })

        const memberVoiceChannel = interaction.member.voice.channel
        if (!memberVoiceChannel) return interaction.reply({ content: '\**`Voce presta estar em um canal de voz para me chamar!\`** 🙄 ', ephemeral: true })
        if (memberVoiceChannel.id !== player.voiceChannel) return interaction.reply({ content: 'Você precisa estar no mesmo canal de voz que eu.', ephemeral: true })

        if (player.paused) return interaction.reply({ content: '\**`A musica ja esta parada!\`** 🙄 ', ephemeral: true })

        const title = player.queue.current.title
        player.destroy();
        let embed = new MessageEmbed()
        .setTitle(`Opaa amigao ja parei com a musica  🧡.`)
        .setDescription(`* Musica: ${title}\n* Parada pelo: ${interaction.user.toString()}`)
        .setAuthor(`Bigodon STOP`, 'https://cdn.discordapp.com/attachments/639869522387664896/882420587341963366/bigodon_1.png', )
        .setTimestamp()
        .setColor('#FF4500 ')
        .setThumbnail('https://cdn.discordapp.com/attachments/639869522387664896/882716252366332024/stop-icon-11-128.png')
        
     

        interaction.reply({  embeds: [embed]  })
    }
}