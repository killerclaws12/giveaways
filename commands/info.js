const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const config = require('../config.json');


module.exports.run = async (client, message, args) => {
  let m = await message.reply("Sending request to databases...")
  let ccount = client.channels.cache.size;
  let mcount = 0; 
client.guilds.cache.forEach((guild) => {
    mcount += guild.memberCount 
})  

  const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel(`Invite ${client.user.username}`)
    .setStyle("LINK")
    .setURL("https://discord.com/api/oauth2/authorize?client_id=992674952979415130&permissions=406881561681&scope=bot%20applications.commands")
    .setEmoji('<:check:996260712559149116>'),
      );

  let server = new MessageEmbed()
    .setAuthor({name: "Giveaways", iconURL: "https://images.discordapp.net/avatars/704072889342885938/1b4339e20535fd5b889e8a3b46544f5c.png?size=512"})
    .setTitle('Information')
    .setColor('#2F3136')
    .setThumbnail(process.env.THUMBNAIL)
    .setTimestamp()
    .addField("\Server", `\`\`\`ini\n[ ${client.guilds.cache.size} ]\n\`\`\``, true)
    .addField("Users", `\`\`\`ini\n[ ${mcount} ]\n\`\`\``, true)
    .addField("Channels", `\`\`\`ini\n[ ${ccount} ]\n\`\`\``, true)
    .setDescription(`
**= STATISTICS =**
> **• Discord.js** : v13.6.0
> **• Node**       : v17.7.2

**= SYSTEM =**
> **• Hosted**     : Private Server
> **• Platform**   : Windows

`)
    .setFooter({
        text: `©️ Giveaways`, 
        iconURL: (process.env.FOOTERIMG)
    });
     m.delete()
  message.reply({ content: " ", embeds: [server], components: [row] })
}