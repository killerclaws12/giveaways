const Discord = require("discord.js")
module.exports = {
  async execute(giveaway, winners) {
    winners.forEach((member) => {
      member.send({
        embeds: [new Discord.MessageEmbed()
          .setAuthor({name: "Congratulations!", iconURL: (process.env.THUMBNAIL)})
          .setThumbnail(process.env.THUMBNAIL)
          .setColor("BLUE")
          .setDescription(`${member.user}\n Host of the giveaway rerolled and you have won the Giveaway on **[This Server](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId})**\n Good Job On Winning **${giveaway.prize}!** <:confetti:973495590921043968><:confetti:973495590921043968>\nDirect Message the host to claim your prize!!)`)
          .setTimestamp()
          .setFooter({
            text: "©️ Giveaways", 
            iconURL: (process.env.FOOTERIMG)
          })
        ]
      }).catch(e => {})
    });
  }
}
