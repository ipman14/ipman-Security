const fs = require("fs");
const Discord = require("discord.js");
const { stripIndents } = require("common-tags");
const moment = require("moment-timezone");
 function duration(ms) {
    const sec = Math.floor((ms / 1000) % 60).toString();
    const min = Math.floor((ms / (1000 * 60)) % 60).toString();
    const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString();
    const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString();
    return `${days.padStart(1, "0")}-${hrs.padStart(2, "0")}-${min.padStart(
      2,
      "0"
    )}-${sec.padStart(2, "0")}`;
  }
module.exports = {
  name: "botinfo",
  aliases: ["bot"],
  enabled: true,			
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  cooldown: 10000,
  run: async (bot, message, args, dev) => {
  
    const created = moment(bot.user.createdAt).format("YYYY-MM-DD");

    message.channel.send(`🏓 **Pinging...**`).then(m => {
      const embed = new Discord.MessageEmbed()
        .setTitle(`${bot.user.username} Info`)
        .setColor("#34eb46")
        .setThumbnail(bot.user.displayAvatarURL())
        .setDescription(`> Bot name: **${bot.user.username}**
Bot ID: **${bot.user.id}**
Bot Birthday: **${created}**
Bot Owner: 
**IPMAN**
Bot Invite: **\`s?invite\`**
Uptime: **${duration(bot.uptime)}**
**🏓 Ping**
Latency: **${Math.floor(m.createdAt - message.createdAt)}ms**
API Latency: **${Math.round(bot.ping)}ms**
Developed Language: **Javascript**
Node.js Version: **V12**
Discord.js Version: **v12.5.2**`);
.setTitle("Click Invite")
.setURL(
  `https://discord.com/api/oauth2/authorize?client_id=796022181654036501&permissions=8&scope=bot`
.setTitle("Server Supporter")
.setURL(
  `https://discord.gg/Wy7K4hyZ5p `        

      m.edit(embed);
    });
    }}
