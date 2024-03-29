const Discord = require("discord.js")
module.exports = {
  name: "invite",
  aliases: ["invites"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 3000,
  run: async (bot, message, args, dev) => {
    let embed = new Discord.MessageEmbed()
      .setTitle("Click to invite")
      .setColor("#303135")
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=${bot.user.id}&permissions=8&scope=bot`
      )
      .setFooter(message.author.username, message.author.avatarURL());
      
      message.channel.send(embed).catch(err=>{
      message.channel.send(embed)
      })
  }
}
