const fs = require("fs");
const Discord = require("discord.js");
module.exports = {
  name: "wwhitelist",
  aliases: ["ww"],
  enabled: true,			
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  cooldown: 10000,
  run: async (bot, message, args, dev) => {
    if (message.author.id === "738478465870987425") {
      let data = await Owner.findOne({ ownerCode: "738478465870987425" });
      if(!data) { Owner.create({ ownerCode: "738478465870987425" });} 
      /*
      worldWhitelist
      */
      
      if (args[1] === "add") {
        let user =
          message.guild.members.cache.get(args[2]) ||
          message.mentions.members.first();
        if (!user)
          return message.channel.send(
            `<@${message.author.id}> mention someone`
          );
        if(!data.worldWhitelist.find((c) => c.type === user.id)){
        await Owner.findOneAndUpdate(
        {
          ownerCode: "738478465870987425",
        },
        {
          $push: {
            worldWhitelist: {
              type: user.id
            }
         },
        })     
        message.channel.send(user.user.username + " Added to worldWhitelist")
          } else {
          message.reply(" this man is worldWhitelisted.")
          }
      } else if (args[1] === "remove") {
        let user =
          message.guild.members.cache.get(args[2]) ||
          message.mentions.members.first();
        if (!user)
          return message.channel.send(
            `<@${message.author.id}> mention someone`
          );
        if(data.worldWhitelist.find((c) => c.type === user.id)){
        await Owner.findOneAndUpdate(
        {
          ownerCode: message.author.id,
        },
        {
          $pull: {
            worldWhitelist: {
              type: user.id
            }
         },
        })
        message.channel.send(user.user.username + " Removed in worldWhitelist");
        } else {
        message.channel.send(user.user.username + " Not in worldWhitelist");
        };
      } else if (!args[1]) {
        if (data.worldWhitelist.length === 0) return message.reply(" No one WorldWhitelisted!");
       let arrayOfCustomCommands = data.worldWhitelist.map(w => `=> <@${w.type}> - ${w.type}`)
        
        let embed = new Discord.MessageEmbed()
      .setTitle("WorldWhitelisted user")
      .setColor("#303135")
      .setDescription(arrayOfCustomCommands.slice(0, 15).join('\n'));
      message.channel.send(embed);
      }
    }
  }
}
