const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("639405515314561057")
setInterval(function() {
channel.send(`ابي شوي كريديت والله`);
}, 30)
})

client.login(process.env.BOT_TOKEN);