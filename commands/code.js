/*
  Write a message with javascript code style
*/
module.exports.run = async (client, message, args) => {
	await message.delete()
   .catch(console.error);
	await message.channel.send('Formatting sir...').then(sent => {
		setTimeout(() => {
			sent.edit(`\`\`\`js\n\n${args}\`\`\``);
		}, 1000);
	})
    .catch(e => {
	logger.error(e);
});
};

module.exports.help = {
	category: 'fun',
	name: 'code',
	description: 'The bot will format to javascript syntax'
};
