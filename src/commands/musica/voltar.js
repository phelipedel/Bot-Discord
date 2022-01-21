const Command = require('../../structures/Command')
const { MessageEmbed} = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'return',
            description: '🎶 voltar a música que está tocando.'
        })
    }

    run = (interaction) => {
        const player = this.client.manager.get(interaction.guild.id)
        if (!player) return interaction.reply({ content: '\**`Não estou tocando neste servidor.\`** 😭 ', ephemeral: true })

        const memberVoiceChannel = interaction.member.voice.channel
        if (!memberVoiceChannel) return interaction.reply({ content: '\**`Voce presta estar em um canal de voz para me chamar!\`** 🙄 ', ephemeral: true })
        if (memberVoiceChannel.id !== player.voiceChannel) return interaction.reply({ content: 'Você precisa estar no mesmo canal de voz que eu.', ephemeral: true })

        if (!player.paused) return interaction.reply({ content: '\**`A nao esta mais pausada!\`** 😁 ', ephemeral: true })

        const title = player.queue.current.title
        player.pause(false)
        let embed = new MessageEmbed()
        .setTitle(`Opaa ja voltei com a musica! 🧡.`)
        .setDescription(`* Musica: ${title}\n* Removeu a pause: ${interaction.user.toString()}`)
        .setAuthor(`Bigodon VOLTAR`, 'https://cdn.discordapp.com/attachments/639869522387664896/882420587341963366/bigodon_1.png', )
        .setTimestamp()
        .setColor('#FF4500 ')
        .setThumbnail('https://cdn.discordapp.com/attachments/639869522387664896/882711891896598578/play-128.png')
        
     

        interaction.reply({  embeds: [embed]  })
    }
}