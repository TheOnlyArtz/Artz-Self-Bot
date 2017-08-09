module.exports.run = async (client, message, args) => {
	const user = (message.mentions.users.first() || message.client.users.get(args[0]) || null);
	const amount = user ? parseInt(message.content.split(' ')[2], 10) : parseInt(message.content.split(' ')[1], 10);
	if (!amount) {
		return message.edit('Must specify an amount to delete!').then(message.delete(2000));
	}
	if (!amount && !user) {
		return message.edit('Must specify a user and amount, or just an amount, of messages to purge!').then(message.delete(2000));
	}
	await message.delete();
	let messages = await message.channel.fetchMessages({limit: 100});
	if (user) {
		messages = messages.array().filter(m => m.author.id === user.id);
		messages.length = amount;
	} else {
		messages = messages.array();
		messages.length = amount + 1;
	}
	messages.map(async m => await m.delete().catch(console.error));
};

module.exports.help = {
	category: 'fun',
	name: 'purge',
	description: 'Purge will delete specific amount of messages by someone'
};
