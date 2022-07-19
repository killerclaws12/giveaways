const Discord = require("discord.js")
module.exports = {
  async execute(giveaway, winners) {
    winners.forEach((member) => {
      member.send({
        embeds: [new Discord.MessageEmbed()
          .setAuthor({name: "Congratulations!"})
          .setColor("BLUE")
          .setThumbnail(process.env.THUMBNAIL)
          .setDescription(`${member.user}\n Congrats!! you have won **${giveaway.prize}!** on **[This Server](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId})**\nDM the host to claim your prize!)`)
          .setTimestamp()
          .setFooter({
            text: `©️ Giveaways`, 
            iconURL: (process.env.FOOTERIMG)
           })
        ]
      }).catch(e => {})
    });

  }
}
