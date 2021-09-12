const fs = require("fs");
const Discord = require("discord.js");
module.exports = {
  name: "prefix",
  aliases: ["setprefix"],
  enabled: true,			
  memberPermissions: [ "ADMINISTRATOR" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  cooldown: 30000,
  run: async (bot, message, args, dev) => {
        if(!args[1]) return message.reply(` Type something!!`)
        if(args[1].length > 5) return message.reply(` You need set prefix lower 5 length`)
        let data = await Guild.findOne({ guildID: message.guild.id })

        let embed = new Discord.MessageEmbed()
        .setColor("#34eb46")
        .setDescription(`new prefix inthis guild is \`${args[1]}\``)
        message.channel.send(embed)
        data.prefix = args[1];
        data.save();
    }};
