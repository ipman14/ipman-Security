const fs = require("fs");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "anti",
  aliases: [],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 3000,
  run: async (bot, message, args, dev) => {
    const embed = new MessageEmbed()
      .setColor("#34eb46")
      .setFooter(message.author.tag, message.author.displayAvatarURL())
      .setTitle("**list of all commands Security**")
      .setDescription(`Type: [<number>,on,off]\n\n**anti-ban, anti-kick, anti-role, anti-channel, anti-bot, anti-spam**`)
    message.channel.send(embed);
  }
}
