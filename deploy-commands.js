const fs = require('node:fs');
const path = require('node:path');
const { REST } = require("@discordjs/rest")
const {Client, Intents} = require('discord.js')
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');
const rest = new REST({ version: '9' }).setToken(token);
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);

	client.on('interactionCreate', async interaction => {
		if (!interaction.isCommand()) return;
	
		const command = client.commands.get(interaction.commandName);
	
		if (!command) return;
	
		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'Something went wrong', ephemeral: true });
		}
	});
	