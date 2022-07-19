const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js")

module.exports = {
  name: 'help',
  description: '📜 View all the commands available to the bot!',
  run: async (client, interaction) => {
    const embed = new MessageEmbed()
      .setTitle(`Commands of ${client.user.username}`)
      .setColor('BLUE')
      .setDescription('**Please Select a category to view all its commands**')
      .setImage("https://images.discordapp.net/avatars/704072889342885938/1b4339e20535fd5b889e8a3b46544f5c.png?size=512")
      .setThumbnail(process.env.THUMBNAIL)
      .setTimestamp()
      .setFooter({
        text: `©️ Giveaways`, 
        iconURL: (process.env.FOOTERIMG)
    })

    const giveaway = new MessageEmbed()
      .setTitle("Categories » Giveaway")
      .setColor('BLUE')
      .setDescription("**Here are giveaway commands**")
      .addFields(
    { name: 'Create / Start'  , value: `Start a giveaway in your guild!\n > **Types: \`/start\`**`, inline: true },
    { name: 'Edit' , value: `Edit an already running giveaway!\n > **Types: \`/edit\`**`, inline: true },
    { name: 'End' , value: `End an already running giveaway!\n > **Types: \`/end\`**`, inline: true },
    { name: 'Pause' , value: `Pause an already running giveaway!\n > **Type: \`/pause\`**`, inline: true },
    //{ name: 'Reroll' , value: `Reroll an ended giveaway!\n > **Types: \`/reroll\`**`, inline: true },
    //{ name: 'Resume' , value: `Resume a paused giveaway!\n > **Type: \`/resume\`**`, inline: true },
  )
      .setTimestamp()
      .setFooter({
        text: `©️ Giveaways`, 
        iconURL: (process.env.FOOTERIMG),
        emoji: `<:taday:996255695420797048>`
    })

    const general = new MessageEmbed()
      .setTitle("Categories » General")
      .setColor('BLUE')
      .setDescription("**General Bot Commands**")
      .addFields(
        { name: 'Help', value: `Show the help menu.\n > **Types: \`/help\`**`, inline: true },
        { name: 'Invite', value: `Get the bot's invite link.\n > **Types: \`/invite\`**`, inline: true },
        { name: 'Ping', value: `Check the bot's ping!\n > **Types: \`/ping\`**`, inline: true },
        { name: 'System', value: `Check the bot's System info.\n > **Types: \`/info\`**`, inline: true },
      )
      .setTimestamp()
      .setFooter({
        text: `©️ Giveaways`, 
        iconURL: (process.env.FOOTERIMG)
    })

    const components = (state) => [
      new MessageActionRow().addComponents(
        new MessageSelectMenu()
          .setCustomId("help-menu")
          .setPlaceholder("Please Select a Category")
          .setDisabled(state)
          .addOptions([{
            label: `Giveaways`,
            value: `giveaway`,
            description: `View all the giveaway based commands!`,
            emoji: `<:taday:996255695420797048>`
          },
          {
            label: `General`,
            value: `general`,
            description: `View all the general bot commands!`,
            emoji: `<:users:996256074917224589>`
          }
          ])
      ),
    ];

    const initialMessage = await interaction.reply({ embeds: [embed], components: components(false) });

    const filter = (interaction) => interaction.user.id === interaction.member.id;

    const collector = interaction.channel.createMessageComponentCollector(
      {
        filter,
        componentType: "SELECT_MENU",
        idle: 300000,
        dispose: true,
      });

    collector.on('collect', (interaction) => {
      if (interaction.values[0] === "giveaway") {
        interaction.update({ embeds: [giveaway], components: components(false) }).catch((e) => { });
      } else if (interaction.values[0] === "general") {
        interaction.update({ embeds: [general], components: components(false) }).catch((e) => { });
      }
    });
    collector.on('end', (collected, reason) => {
      if (reason == "time") {
        initialMessage.edit({
          content: "Collector Destroyed, Try Again!",
          components: [],
        });
      }
    })
  }
}
