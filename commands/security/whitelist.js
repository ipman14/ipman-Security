const Discord = require("discord.js");
module.exports = {
  name: "whitelist",
  aliases: "whitelist",
  enabled: true,
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  guilOwnerOnly: true,
  cooldown: 10000,
  run: async (bot, message, args, dev) => {
      let data = await Guild.findOne({ guildID: message.guild.id })
      if (args[1] === "add") {
        let user =
          message.guild.members.cache.get(args[2]) ||
          message.mentions.members.first();
        if (!user)
          return message.channel.send(
            `<@${message.author.id}> mention someone`
          );
        if(!data.whitelist.find((c) => c.type === user.id)){
        await Guild.findOneAndUpdate(
        {
          guildID: message.guild.id,
        },
        {
          $push: {
            whitelist: {
              type: user.id
            }
         },
        })     
        message.channel.send(user.user.username + " Added to whitelist")
          } else {
          message.reply(" this man is whitelisted.")
          }
      } else if (args[1] === "remove") {
        let user =
          message.guild.members.cache.get(args[2]) ||
          message.mentions.members.first();
        if (!user)
          return message.channel.send(
            `<@${message.author.id}> mention someone`
          );
        if(data.whitelist.find((c) => c.type === user.id)){
        await Guild.findOneAndUpdate(
        {
          guildID: message.guild.id,
        },
        {
          $pull: {
            whitelist: {
              type: user.id
            }
         },
        })
        message.channel.send(user.user.username + " Removed in whitelist");
        } else {
        message.channel.send(user.user.username + " Not in whitelist");
        };
      }  else if (!args[1]) {
        if (data.whitelist.length === 0) return message.reply(bot.reva.get(data.lang, "security","whitelist-zero"));
       let arrayOfCustomCommands = data.whitelist.map(w => `=> <@${w.type}> - ${w.type}`)
        
        let embed = new Discord.MessageEmbed()
      .setTitle("Whitelisted user")
      .setColor("#34eb46")
      .setDescription(arrayOfCustomCommands.slice(0, 15).join('\n'));
      message.channel.send(embed);
      }
  }
};
