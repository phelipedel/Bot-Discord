const Command = require('../../structures/Command')
const { MessageEmbed, Channel } = require('discord.js')



module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'cor',
            description: '🌈 Mostra codigo de cores'
        })
    }

    run = (interaction) => {
        const embed = new MessageEmbed()
        .setTitle(` Codigos Cores permitidas `)
        .setDescription('​​​Bom /cor e um comando muito importante para dar aquele charme na sua mensagens, sempre que for usar o `/me` ou `/avisar` use esse comando caso queria mudar a cor da barrinha lateral, ele lhe informara o código das cores disponíveis para uso.\n Exemplo:\n**/me titulo:Ola mundo cor:16711680 mensagem:Tenha um bom dia. **  ')
        .setColor('#FF4500 ')
        .setAuthor('Bigodon', 'https://cdn.discordapp.com/attachments/639869522387664896/882420587341963366/bigodon_1.png')
        .setThumbnail('https://cdn.discordapp.com/attachments/639869522387664896/883051650258964520/pngwing.com_10.png')
        .setFooter('Bigodon', 'https://cdn.discordapp.com/attachments/639869522387664896/882420587341963366/bigodon_1.png')
        .setURL(`https://www.w3schools.com/cssref/css_colors.asp`)
        .setTimestamp()
        .addFields(
          //  { name: '\u200B', value: '\u200B' },
            //{ name: 'Codigo cores:', value: `**​\n​16729344 =>   🟧\n​16776960 =>   🟨\n​60928 =>    🟩\n​238 =>     🟦\n​9715926 =>    🟪​​\n16777215 =>    ⬜\n9127187 =>     🟫\n​1 =>      ⬛**`, inline: true },
            { name: 'OBS: ', value: '`O código de cores NÂO aceita código de cores como hexadecimal e  RGB, são apenas os códigos que estão na tabela.`'},
            { name: '> 16729344', value: `:orange_square: laranja`, inline: true },
            { name: '​ 16776960', value: `:yellow_square: amarelo`, inline: true },
            { name: '> 60928', value: `:green_square: verde`, inline: true },
            { name: '> 238', value: `:blue_square: azul`, inline: true },
            { name: ' ​​9715926 ', value: `:purple_square: roxo`, inline: true },
            { name: '> 16777215 ', value: `:white_large_square: branco`, inline: true },
            { name: '> 9127187', value: `:brown_square: marrom`, inline: true },
            { name: '> 1', value: `:black_large_square: preto`, inline: true },
            { name: '> 16711680', value: `:red_square: vermelho`, inline: true },
        

        
        )


        interaction.reply({  embeds: [embed]  });
        }
    }
