  
const { Manager } = require('erela.js')
const { MessageEmbed, Channel } = require('discord.js')
const Spotify  = require("erela.js-spotify");
const clientID = "5287005e29454a9880bde3209af0b085"; // clientID from your Spotify app
const clientSecret = "4b88a4fc050c49399191aef768cf7bf2"; // clientSecret from your Spotify app


module.exports = (client) => {
    return new Manager({
        nodes: [
            {
                host: "localhost",   
                password: "0n53oFeIzr",
                port: 2333
                
                
            }
        ],
        plugins: [
            // Initiate the plugin and pass the two required options.
            new Spotify({
              clientID,
              clientSecret
            })
          ],
        
        send: (id, payload) => {
            const guild = client.guilds.cache.get(id)
            if (guild) guild.shard.send(payload)
        }
        
    })
        .on("nodeConnect", node => console.log(`Node "${node.options.identifier}" conectado.`))
        .on("nodeError", (node, error) => console.log(
            `Node "${node.options.identifier}" encountered an error: ${error.message}.`
        ))
        .on("trackStart", (player, track) => {
            const channel = client.channels.cache.get(player.textChannel)
            const embed = new MessageEmbed()
            .setTitle(`Musica: ${track.title}  🎶`)
            .setDescription(`Solicitado por: ${track.requester.toString()}`)
            .setAuthor(`Bigodon Music`, 'https://cdn.discordapp.com/attachments/639869522387664896/882420587341963366/bigodon_1.png')
            .setTimestamp()
            .setColor('#FF4500 ')
            .setFooter(`Cola call`)
            .setThumbnail('https://cdn.discordapp.com/attachments/639869522387664896/882681621516517437/pngwing.com_8.png')
            
           // .channel.send({ embeds: [embed] });

            channel.send({ embeds: [embed] })
        })
        .on("queueEnd", player => {
            const channel = client.channels.cache.get(player.textChannel)
            channel.send("**Lista de reprodução finalizada.**")
            player.destroy()
        })
}


