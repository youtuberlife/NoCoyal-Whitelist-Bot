const noblox = require('noblox.js')
async function startApp () {
	const currentUser = await noblox.setCookie('Roblox token')
    console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)

}
startApp()
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('account')
		.setDescription('Replies with roblox account!'),
	async execute(interaction) {
		if(!interaction.member.roles.cache.some(role => role.id === 'role id')) return interaction.reply("any msg u want ig")
		const currentUser = await noblox.setCookie('Roblox token') 
		await interaction.reply(`Hello ${currentUser.UserName}, Welcome back`)
		
		

		

	},
};