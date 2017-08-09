const Discord = require('discord.js')
module.exports.run = async (client, message) => {
  let cm = message.content.split(' ').slice(1)[0]
  let prefix = ';'
  const names = [];
  const commandNames = Array.from(client.commands.keys());
  const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
  if (!cm) {
    const embed = new Discord.RichEmbed()
    .addField('Comands', `${client.commands.map(c => `${prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`)
    message.channel.send({embed})
  } else {
    if (client.commands.has(cm)) {
      cm = client.commands.get(cm);
      message.channel.send(`= Info for ${cm.help.name} =\n\n [Description: ${cm.help.description}]`, {code : asciidoc})
    }
  }
}

module.exports.help = {
  name: "help",
  description: 'current message that will show all the commands'
}
