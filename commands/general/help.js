const fs = require("fs");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "help",
  cmdHelp: "show help command",
  cmdUsage: "m!help \nm!help [commandName/commandAliasesName]",
  cmdCatagory: "General",
  aliases: [],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 3000,
  run: async (bot, message, args, dev) => {
    const embed = new MessageEmbed()
      .setColor("#")
      .setFooter(message.author.tag, message.author.displayAvatarURL())
      .setTimestamp()
      .setThumbnail(message.author.displayAvatarURL());
    embed
      .setTitle(`Search Commands`)
      .setDescription(
`**General Commands**;
invite,botinfo,allbots,
**Modration Commands**;
ban,kick,lock,unlock
**Config Commands**;
prefix
**Security Commands**;
settings,whitelist,punishment,anti`
      );
    message.channel.send(embed);
  }
}
