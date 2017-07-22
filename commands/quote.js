/*
  quote person's message with the message ID
*/
const Discord = require("discord.js");
module.exports.run = async (client, message) => {
  let id = message.content.split(" ")[1];
  let text = message.content.split(" ").slice(2).join(" ");
    if(!id) return logger.error(`Command => quote just failed due to invalid id`);
    if(!text) return logger.error(`Command => quote just failed due to invalid text`);
    message.channel.fetchMessages({around:id,limit:1}).then(msg => {
      const firstmsg = msg.first();
      const embed = new Discord.RichEmbed()
         .setColor(3654543)
         .setAuthor(`Message by ${firstmsg.author.tag}`, firstmsg.author.displayAvatarURL)
         .setDescription(firstmsg.content);
      message.edit(text,{embed});
    })
};

module.exports.help = {
  name: "quote",
  description: 'Quote a message by the ID and attach a custom reply'
}
