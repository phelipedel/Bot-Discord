const Command = require('../../structures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'clear',
            description: 'Limpar mensagens',
            options: [
                    {
                        name : "quantidade",
                        type: "NUMBER",
                        description: "Quantidade de mensagens que serao apagadas",
                        required: true
                    }
            ]
        })
    }

    run = async (interaction) => {
        if (!interaction.member.permissions.has("MANAGE_CHANNELS")) { return interaction.reply("Voce nao tem permissao para apagar mensagens ")}
        const quantidade = interaction.options.getNumber('quantidade')
        if (!quantidade || quantidade < 1 || quantidade > 100 ) return  interaction.reply({ content: `Informe entre 1 a 100 mensagens para serem deletadas.🗑`,ephemeral: true})
       
        const fetched = await interaction.channel.messages.fetch({  limit: quantidade  })
       
       
        interaction.channel.bulkDelete(fetched).catch(error => {
            
            return  interaction.reply({ content: ` \*❌ **ERRO!** || Mensagens mais de 14 dias, antiga de mais .🗑 \n Tente novamente!`,ephemeral: true})
            
        })
        
        
       const embed = new MessageEmbed()
            .setDescription(`${quantidade} mensagem(s) apagada(s) \🗑`)
            .setColor('#FF4500') // Borda da mensagem 
            .setTimestamp()
            .addFields(
                { name: 'Apagadas por :', value: `${interaction.member}`, inline: true },
                )
         
            interaction.channel.send({ embeds: [embed] });
        
}
    

}
