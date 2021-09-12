const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "userinfo",
  aliases: ["user"],
  enabled: true,			    
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  cooldown: 2000,
  run: async (bot, message, args) => {

let member = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username == args[0]) || message.guild.members.cache.find(r => r.displayName == args[0]) || message.guild.members.cache.find(r => r.id == args[0]) || message.member;
////
let nickname = member.nickname !== undefined && member.nickname !== null ? member.nickname : "None";
///


      const userinfo = new MessageEmbed()
     .setColor("GREEN")
     .setThumbnail(member.user.displayAvatarURL())
     .addField("Username", `${member.user.username}`, true)
     .addField("Discriminator", `${member.user.discriminator}`, true)
     .addField("Nickname", `${nickname}`, true)
     .addField("User Id", `${member.id}`, true)
     .addField("Avatar Link", `[png](${member.user.displayAvatarURL({format: "png",dynamic: true})}) | [jpg](${member.user.displayAvatarURL({format: "jpg", dynamic: true})}) | [webp](${member.user.displayAvatarURL({format: "webp", dynamic: true})})`)
     .addField("Join", member.joinedAt.toDateString())
     .addField("Creation", member.user.createdAt.toDateString())
      
  return message.channel.send(userinfo);
 }
}
