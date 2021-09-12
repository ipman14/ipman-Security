const fs = require("fs");
const Discord = require("discord.js");
module.exports = {
  name: "anti-spam",
  aliases: ["antispam"],
  enabled: true,			
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  guilOwnerOnly: true,
  cooldown: 5000,
  run: async (bot, message, args) => {
    let guild = await Guild.findOne({ guildID: message.guild.id });
     let num = args[1]
     if (args[1] === "on") {
       guild.spam.onoff = "on";
       guild.save();
       return message.channel.send("You have **enabled** the anti spam");
     } else if (args[1] === "off") {
       guild.spam.onoff = "off";
       guild.save();
       return message.channel.send("You have **disabled** the anti spam");
     }
    return message.reply(` error syntax \n ${guild.prefix}anti-spam [\`on\`,\`off\`]`)
   }
}

