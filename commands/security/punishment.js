const fs = require("fs");
const Discord = require("discord.js");
module.exports = {
  name: "punishment",
  aliases: [],
  enabled: true,
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  guilOwnerOnly: true,
  cooldown: 10000,
  run: async (bot, message, args, dev) => {
      if (!args[1])
        return message.channel.send(
          "**Type a punishment like a `kick` or `ban` or `removeRole`**"
        );
      let data = await Guild.findOne({ guildID: message.guild.id })
      if (args[1] === "kick" || args[1] === "ban") {
        data.punishment = args[1];
        
        message.channel.send(
          `** :lock: | changed ⇏ ${data.punishment}**`
        );
      data.save();
      } else {
        message.channel.send(
          `Usage : \n \<prefix>punishment ban\` \n \`<prefix>punishment kick\``
        );
      }
  }};
