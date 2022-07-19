const config = require('../config.json');
module.exports = {
  giveaway:
    (config.everyoneMention ? "@everyone\n\n" : "") +
    "<:taday:996255695420797048> **GIVEAWAY** <:taday:996255695420797048>",
  giveawayEnded:
    (config.everyoneMention ? "@everyone\n\n" : "") +
    "<:error:996259473465294930> **GIVEAWAY ENDED**",
  drawing:  `Ends: **{timestamp}**`,
  color: "#2F3136",
  inviteToParticipate: `React with <:taday:996255695420797048> to participate in the giveaway!`,
  winMessage: "Congratulations, {winners}! You won **{this.prize}**!",  
  embedFooter: "Giveaways",
  noWinner: "Giveaway cancelled, no valid participations.",
  hostedBy: "Hosted by: {this.hostedBy}",
  winners: "winner(s)",
  endedAt: "Ended at"
}