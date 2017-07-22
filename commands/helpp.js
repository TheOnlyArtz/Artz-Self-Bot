const Discord = require('discord.js')
module.exports.run = async (client, message) => {
  let cm = message.content.split(' ').slice(1)[0]
  let prefix = ';'
  const names = [];
  const commandNames = Array.from(client.commands.keys());
  const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
  if (!cm) {
    message.channel.send(`= Command List =\n\n[Use ${prefix}help <commandname> for details]\n\n${client.commands.map(c => `${prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`, {code:'asciidoc'});
  } else {
    if (client.commands.has(cm)) {
      cm = client.commands.get(cm);
      message.channel.send(`= Info for ${cm.help.name} =\n\n [Description: ${cm.help.description}]`, {code : asciidoc})
    }
  }
}

module.exports.help = {
  name: "helpp",
  description: 'current message that will show all the commands'
}
