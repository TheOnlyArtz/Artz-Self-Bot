const Discord = require("discord.js")
const google = require("google")
module.exports.run = async (client, message) => {

google.resultsPerPage = 3
let args= message.content.split(" ").slice(1).join(" ")
google(args, function (err, res){
  if (err) console.error(err)
  var link = res.links;
  if (link[0] === undefined) return message.reply("Didnt find")
  const embed = new Discord.RichEmbed()
  .setAuthor(`Google search for ${args}`, "http://supple.image.newsru.com/images/big/101_33_1013381_1441378803.jpg")
  .addField("This what I found", `**${link[0].title}:** ${link[0].href}`)
  .addField("More results", `**${link[1].title}:** ${link[1].href}\n**${link[2].title}:** ${link[2].href}`)
  message.channel.send({
    embed
  })
  .catch(e => {
    message.channel.send(`Google search results => ${link[0].href}`)
  })
  });
}

module.exports.help = {
  category: 'misc',
  name: "google",
  description: 'Will give you the ability to look for things on the internet'
}
