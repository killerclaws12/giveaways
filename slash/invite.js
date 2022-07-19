const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'invite',
    description: '➕ Invite Giveaway to your server!',
    run: async (client, interaction) => {
    const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setLabel(`Invite ${client.user.username}`)
        .setStyle('LINK')
      .setEmoji('<:check:996260712559149116>')
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=992674952979415130&permissions=406881561681&scope=bot%20applications.commands`),
      new MessageButton()
        .setLabel(`Join the support server!`)
        .setStyle('LINK')
      .setEmoji('<:check:996260712559149116>')
        .setURL(`https://discord.gg/9BevmgSsNd`),
    )
    let invite = new MessageEmbed()
      .setAuthor({ 
          name: `Invite ${client.user.username}`, 
          iconURL: client.user.displayAvatarURL() 
      })    
    .setTitle("Invite & Discord Link!")
    .setDescription(`Invite ${client.user} to your server today and host seamless giveaways in your server!`)
    .setColor('#2F3136')
    .setTimestamp()
    .setThumbnail(process.env.THUMBNAIL)
    .setFooter({
        text: `©️ giveaways`, 
        iconURL: (process.env.FOOTERIMG)
    })
    
    interaction.reply({ embeds: [invite], components: [row]});
}
}
