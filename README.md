# NoCoyal-Whitelist-Bot
I have made a discord whitelist bot roblox to discord!

Thank you for using my NoCoyal Whitelist ServerSide Bot i will teach
you step by step on how to use it or if u need help Coyal#5433 [949686408317112381]

0] first install these 
npm install noblox
npm install discord.js 

I] Important make sure when inviting the bot it must have applications.commands very Important 
if u dont invite it wont work!

1] config.josn
configure all of this 
defention 

guild id = 'server id'
client id ' the bot id this can be found in OAUTH2/Genral then you should see client infomation'
token = 'token' 

2] commands folder
once u have done that there 3 things u need to done
Get ur group id
Cookie
and Role id
First of all u should see const currentUser = await noblox.setCookie('Roblox token') in all of these folders
this is where u have to fill out ur roblox token

then once u done that u can see 
if(!interaction.member.roles.cache.some(role => role.id === 'role id')) return interaction.reply("any msg u want ig")
role.id==='roleid')) replace role id with ur **discord role id**
this will make it so if u have that role u can use that command 

Then the last step is 
console.log(noblox.exile(group id,(user_id))) 
where u see Group Id add ur **Roblox** group id!

5] last part
once u done all of that how to run it?
firstly do node deploy-commands.js
then node index.js

Hope this Works for again if it dont work contact me 
Coyal#5433 [949686408317112381]
BYE xx uwu

##Discord Server Support:
https://discord.gg/8McqZCcv5f
