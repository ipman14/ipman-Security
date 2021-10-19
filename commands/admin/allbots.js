const Discord = require("discord.js")
module.exports = {
  name: "allbots",
  aliases: ["bots"],
  enabled: true,			    
  memberPermissions: [ "MANAGE_SERVER" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","MANAGE_CHANNELS" ],		
  ownerOnly: false,			
  cooldown: 15000,
  run: async (bot, message, args, dev) => {
    let i = 1;
    const botssize = message.guild.members.cache
      .filter(m => m.user.bot)
      .map(m => `${i++} - <@${m.id}>`);
    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setColor("#303135")
      .setDescription(
        `**Found ${
          message.guild.members.cache.filter(m => m.user.bot).size
        } bots in this Server**
${botssize.join("\n")}`
      )
      .setFooter(bot.user.username, bot.user.avatarURL())
      .setTimestamp();
    message.channel.send(embed);
   }
}
