const Command = require('../../structures/Command')
const { MessageEmbed } = require('discord.js')
const cooldown = new Set()

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'play',
            description: '🎶 Faz com que o bot toque uma música no canal em que você está.',
            options: [
                {
                    name: 'música',
                    description: '🎶 Música que você deseja que o bot toque.',
                    type: 'STRING',
                    required: true
                }
            ]
            
        })
    }

    run = async (interaction) => {
        if (!interaction.member.voice.channel) return interaction.reply({ content: `Você precisa estar em um canal de voz para utilizar este comando!`, ephemeral: true })
        if (interaction.guild.me.voice.channel && interaction.guild.me.voice.channel.id !== interaction.member.voice.channel.id) return interaction.reply({ content: `Você precisa estar no mesmo canal de voz que eu para utilizar este comando!`, ephemeral: true })
        if (cooldown.has()) {
            interaction.reply({ content: `Aguarde 5 segundo para adicionar a próxima musica a fila`, ephemeral: true })
        }else{
        
        const search = interaction.options.getString('música')
        


        let res;

                try {
            res = await this.client.manager.search(search, interaction.user)
            

            if (res.loadType === "LOAD_FAILED") 
            
            return interaction.reply({ content: `Aconteceu um erro ao tentar buscar a música/playlist: ${err.message}`, ephemeral: true })
           //"DISCORD_APIERROR","RANGE_ERROR","INTERACTION_ALREADY_REPLIED "

        } catch (err) {
            console.error(`algum consegiu errar o comando simples`);
            return interaction.reply({ content: `Aconteceu um erro ao tentar buscar a música/playlist `, ephemeral: true })

        }


        

        const player = this.client.manager.create({
            guild: interaction.guild.id,
            voiceChannel: interaction.member.voice.channel.id,
            textChannel: interaction.channel.id
        })

        if (player.state === "DISCONNECTED") player.connect();
        if (res.loadType === "PLAYLIST_LOADED") {
            const playlist = res.playlist;
            for (const track of res.tracks) player.queue.add(track);}
            
        player.queue.add(res.tracks[0])

        if (!player.playing && !player.paused) player.play()

        // return interaction.reply({ content: `\`${res.tracks[0].title}\` adicionada à fila.` })
        const embed = new MessageEmbed()
                    


        .setDescription(`${res.tracks[0].title}  adicionada à fila.`)
        .setColor('00ff00')

        
    interaction.reply({  embeds: [embed]  })
    cooldown.add()
    setTimeout(() => {
        cooldown.delete()
    },5000)

        }}
        
        }