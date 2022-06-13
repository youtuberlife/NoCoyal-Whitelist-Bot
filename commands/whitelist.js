const noblox = require('noblox.js')
async function startApp () {
	const currentUser = await noblox.setCookie('Roblox token')

  //made by Coyal#5433


}

startApp()
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('whitelist')
        .setDescription('Whitelist people')
      .addIntegerOption(option =>
          option.setName('user_id')
              .setDescription('The targets roblox asset')),              
    async execute(interaction) {
        if(!interaction.member.roles.cache.some(role => role.id === 'role id')) return interaction.reply("AMOGUS")
        const currentUser = await noblox.setCookie('Roblox token')
let user_id = interaction.options.getInteger('user_id')
console.log(noblox.handleJoinRequest(group id,(user_id), true))    
await interaction.reply('Think whitelisted that person ✅',user_id)



        
       

		
		

		

	},
};