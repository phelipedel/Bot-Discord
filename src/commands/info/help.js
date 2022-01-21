const Command = require('../../structures/Command')
const { MessageEmbed, Channel } = require('discord.js')



module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'help',
            description: '🆘 Comandos basicos do bot'
        })
    }

    run = (interaction) => {

        const embed = new MessageEmbed()
        .setTitle(` Codigos Cores permitidas `)
        .setDescription ("Olá eu sou El Bigodon ou pode me chamar só de Bigodon, sou um bot focado em musica e mensagens customizadas .\n\nAqui vou explicar um pouco sobre algumas funções eu possuo as seguinte funções")
        .setColor('#FF4500 ')
        .setAuthor('Bigodon', 'https://cdn.discordapp.com/attachments/639869522387664896/882420587341963366/bigodon_1.png')
        .addFields(
            { name: '/me', value: 'Disponível para todos poderem usar, porem para aqueles engraçadinhos não abusarem ele ira mencionar em todas as mensagem que o usuário enviar com seu nome  e ID de usuário então não se preocupem ADMS 🧡. ' },
            { name: '/avisar', value: 'Esse comando e divertido, ele permite a todos que possuem cargo com permissão de `gerenciar mensagem ` tenha mais liberdade podem escolher em qual canal enviar a mensagem e ele não ira te mencionar então será marco, e ótimo para anuncio de eventos ou avisar seu amigos que você esta ao vivo, seja criativo s2. '},
            { name: '/notificao', value: 'Esse comando e mais limitado, se esta tendo aquela encrenca em um canal e você quer dar uma bronca ou ate mesmo anunciar algo com uma certa urgência use o /notificar você poderá enviar rapidamente a mensagem e escolher o canal que quer lhe enviar de forma mais dinâmica .'},
            { name: '/cor', value: 'Bom /cor e um comando muito importante para dar aquele charme na sua mensagens, sempre que for usar o `/me` ou `/avisar` use esse comando caso queria mudar a cor da barrinha lateral, ele lhe informara o código das cores disponíveis para uso.'},
            { name: '/invite', value: 'Me convidar para outro servidor.'},
            { name: '/play', value: 'Buscar uma musica ou um link de alguma musica que deseja ouvir. '},
            { name: '/stop', value: 'Parar a musica que esta ouvindo'},
            { name: '/skip', value: 'Pular para próxima faixa musical.'},
            { name: '/pause ', value: 'Pausar a musica atual.'},
            { name: '/fila', value: 'Ver quais musicas estão na fila.'},
            { name: '/ban /kick', value: 'São comando de moderadores simples banimento e expulsar.'},
            { name: '/clear', value: 'Limpar o chat ate 100 mensagens.'},
            { name: '/tw /face /nimo', value: 'Aviso de live.'},
            
        )
        .setFooter('Bigodon', 'https://cdn.discordapp.com/attachments/639869522387664896/882420587341963366/bigodon_1.png')
        

        //-------------------------------------------------------------------------------------------------

        const embed2 = new MessageEmbed()
        .setTitle(` /me `)
        .setDescription('​​​ Exemplo:\n**/me titulo:Ola mundo cor:16711680 mensagem:Tenha um bom dia. **  ')
        .setColor('#FF4500 ')
        //.setAuthor('Bigodon', 'https://cdn.discordapp.com/attachments/639869522387664896/882420587341963366/bigodon_1.png')
        .setImage(`https://cdn.discordapp.com/attachments/639869522387664896/883121545562714142/me1_1.gif`)
        //.setFooter('Bigodon', 'https://cdn.discordapp.com/attachments/639869522387664896/882420587341963366/bigodon_1.png')
        

        //-------------------------------------------------------------------------------------------------

        const embed3 = new MessageEmbed()
        .setTitle(`/notificao `)
        .setColor('#FF4500 ')
        //.setAuthor('Bigodon', 'https://cdn.discordapp.com/attachments/639869522387664896/882420587341963366/bigodon_1.png')
        .setImage(`https://cdn.discordapp.com/attachments/639869522387664896/883134369882062918/notificao.gif`)
        //.setFooter('Bigodon', 'https://cdn.discordapp.com/attachments/639869522387664896/882420587341963366/bigodon_1.png')
        

        //-------------------------------------------------------------------------------------------------

        const embed4 = new MessageEmbed()
        .setTitle(` /aviso `)
        .setColor('#FF4500 ')
        //.setAuthor('Bigodon', 'https://cdn.discordapp.com/attachments/639869522387664896/882420587341963366/bigodon_1.png')
        .setImage(`https://cdn.discordapp.com/attachments/639869522387664896/883387316142506104/GIF-210903_132038.gif`)
       // .setFooter('Bigodon', 'https://cdn.discordapp.com/attachments/639869522387664896/882420587341963366/bigodon_1.png')
        

        //-------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------

        const embed6 = new MessageEmbed()
        .setTitle(` /face /tw /nimo `)
        .setColor('#FF4500 ')
        //.setAuthor('Bigodon', 'https://cdn.discordapp.com/attachments/639869522387664896/882420587341963366/bigodon_1.png')
        .setImage(`https://cdn.discordapp.com/attachments/639869522387664896/887418837144834088/Meu_Video.gif`,`https://cdn.discordapp.com/attachments/639869522387664896/887418956216930334/Meu_Video1.gif`,`https://cdn.discordapp.com/attachments/639869522387664896/887418725471514624/Meu_Video2_1.gif`)
        // .setFooter('Bigodon', 'https://cdn.discordapp.com/attachments/639869522387664896/882420587341963366/bigodon_1.png')
        

        //-------------------------------------------------------------------------------------------------

        const embed5 = new MessageEmbed()
        .setTitle(` Codigos Cores permitidas `)
        .setDescription('​​​Siga tabela de cores❗ .\n Exemplo a ser serguido:\n**/me titulo:Ola mundo cor:16711680 mensagem:Tenha um bom dia. **  ')
        .setColor('#FF4500 ')
      //  .setAuthor('Bigodon', 'https://cdn.discordapp.com/attachments/639869522387664896/882420587341963366/bigodon_1.png')
        .setThumbnail('https://cdn.discordapp.com/attachments/639869522387664896/883051650258964520/pngwing.com_10.png')
        .setFooter('Bigodon Help', 'https://cdn.discordapp.com/attachments/639869522387664896/882420587341963366/bigodon_1.png')
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



        interaction.reply({  embeds: [embed]  })
        interaction.channel.send({ embeds: [embed2] });
        interaction.channel.send({ embeds: [embed3] });
        interaction.channel.send({ embeds: [embed4] });
        interaction.channel.send({ embeds: [embed6] });
        interaction.channel.send({ embeds: [embed5] });
        }
    }
