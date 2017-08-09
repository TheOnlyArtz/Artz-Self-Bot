const Discord = require("discord.js"),
      moment = require("moment")
      client = new Discord.Client(),
      token = require("./private.json"),
      fs = require("fs"),
      winstonLogger = require('./classes/logger.js')
      winston = require ("winston"),
      chalk = require("chalk")
      const snekfetch = require('snekfetch');

const winstonClass = new winstonLogger
global.logger = winstonClass.logger
client.login(token.token)
client.on("ready", async() => {
  logger.verbose(`${client.user.username} Is up and ready to work`);
  logger.verbose(`Connected as: ${client.user.tag}`)
  logger.verbose(`Client ID: ${client.user.id}`)
  logger.verbose(`====================================`)
  await client.user.setGame("</[0-9]\w+/g>", "https://www.twitch.tv/theonlyartz");
});
client.commands = new Discord.Collection();

fs.readdir("./commands", (err, files) => {
  if(err) logger.error(err);
  let jsFiles = files.filter(f => f.split(".").pop() === "js");
  if(jsFiles.length <= 0) {
    logger.info("No commands to load");
    return;
  }
  logger.info(`Loading ${jsFiles.length} commands`);

  try {
    jsFiles.forEach((f, i) => {
      let props = require(`./commands/${f}`)
      logger.info(`${i + 1}) => ${f} Has been loaded successfully`)
      client.commands.set(props.help.name, props)
    });
  } catch (e) {
    logger.error(e)
  }
});
let prefix = ";"
client.on("message", async(message) => {
  if (message.author.id !== "208936898566160384") return;
  if (message.author.bot) return;
  let guild = message.guild;
  let args = message.content.split(" ").slice(1).join(" ");
  let command = message.content.split(" ")[0];
  if(!command.startsWith(prefix)) return;

  let cmd = client.commands.get(command.slice(prefix.length));
  if (cmd) {
    try {
      cmd.run(client, message, args);
      logger.info(`${chalk.cyan(cmd['help']['name'])} just been executed by ${chalk.magenta(message.author.username)} inside ${chalk.yellow(message.guild.name)}`)
    } catch (e) {
      logger.error(e);
    }
  }
    // .catch(e => {
    //   logger.error(e)
    // })
});
