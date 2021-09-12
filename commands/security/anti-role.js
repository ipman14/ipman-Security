const fs = require("fs");
const Discord = require("discord.js");
module.exports = {
  name: "anti-role",
  aliases: ["antirole"],
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
       guild.role.onoff = "on";
       guild.save();
       return message.channel.send("You have **enabled** the anti role");
     } else if (args[1] === "off") {
       guild.role.onoff = "off";
       guild.save();
       return message.channel.send("You have **disabled** the anti role");
     }
    if (isNaN(num) || parseInt(num) < 1){
      return message.reply(` error syntax \n ${guild.prefix}anti-role [\`on\`,\`off\`,\`<number>\`]`)
    }
    guild.role.lmite = num;
    guild.save()
    return message.reply(` Successfully changed the anti role to ${guild.role.lmite}`)
  }
}

