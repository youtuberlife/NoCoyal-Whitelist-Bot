const noblox = require('noblox.js')
async function startApp () {
	const currentUser = await noblox.setCookie('Roblox token')

}
startApp()
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('blacklist')
        .setDescription('bkaclist people')
      .addIntegerOption(option =>
          option.setName('user_id')
              .setDescription('The targets roblox asset')),              
    async execute(interaction) {
        if(!interaction.member.roles.cache.some(role => role.id === 'roblox id')) return interaction.reply("any msg u want")
        const currentUser = await noblox.setCookie('Roblox token')
let user_id = interaction.options.getInteger('user_id')
console.log(noblox.exile(group id,(user_id))) 
await interaction.reply('Think Blacklisted that person ✅',user_id)



        
       
        

		
		

		

	},
};