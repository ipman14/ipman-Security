const fs = require("fs");
const Discord = require("discord.js");
module.exports = {
  name: "anti-ban",
  aliases: ["antiban"],
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
       guild.ban.onoff = "on";
       guild.save();
       return message.channel.send("You have **enabled** the anti ban");
     } else if (args[1] === "off") {
       guild.ban.onoff = "off";
       guild.save();
       return message.channel.send("You have **disabled** the anti ban");
     }
    if (isNaN(num) || parseInt(num) < 1){
      return message.reply(` error syntax \n ${guild.prefix}anti-bot [\`on\`,\`off\`,\`<number>\`]`)
    }
    guild.ban.lmite = num;
    guild.save()
    return message.reply(` Successfully changed the anti ban to ${guild.ban.lmite}`)
  }
}

