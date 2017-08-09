module.exports.run = async (client, message, args) => {
	message.delete();
	const code = message.content.split(' ').slice(1).join(' ');
	try {
		let evaled = eval(code);
		if (evaled && evaled.constructor.name == 'Promise') {
			evaled = await evaled;
		}
		if (typeof evaled !== 'string') {
			evaled = require('util').inspect(evaled);
		}
		message.channel.send(`\nInput📥: \`\`\`xl\n${code}\`\`\`\nOutput📤\n\`\`\`\`xl\n${clean(client, evaled)}\n\`\`\``).catch(console.error);
	} catch (err) {
		message.channel.send(`__ERROR__\nInput📥: \`\`\`xl\n${code}\`\`\`\nOutput📤\n\`\`\`xl\n\`\`\`${clean(client, err)}\n\`\`\``);
	}
};

function clean(client, text) {
	if (typeof (text) === 'string') {
		return text.replace(/`/g, '`' + String.fromCharCode(8203))
       .replace(/@/g, '@' + String.fromCharCode(8203))
       .replace(client.token, 'You\'re-really-thinking-that-I\'m-that-DUMB?');
	}
	return text;
}
module.exports.help = {
	category: 'misc',
	name: 'eval',
	description: 'Runs a snippet of code'
};
