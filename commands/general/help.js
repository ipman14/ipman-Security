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
      .setFooter(message.author.tag, message.author.displayAvatarURL())
      .setTimestamp()
      .setThumbnail();
    embed
      .setTitle(`• To get help on a specific command type **s?help <command>!**`)
  .addField("General", "`invite`, `serverinfo`, `botinfo`, `userinfo`")
    .addField("Moderation", "`lock`, `unlock`")
    .addField("Config", "`prefix`")
    .addField("Security", "`settings`, `punishment`, `whitelist`, `anti`")
    message.channel.send(embed);
  }
}
