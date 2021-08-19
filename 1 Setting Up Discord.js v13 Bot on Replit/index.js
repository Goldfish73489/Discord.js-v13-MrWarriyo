const Token = process.env['token'];
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_INVITES']});


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
})


client.login(Token)
