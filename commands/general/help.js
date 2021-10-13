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
      .setColor("#FF808080")
      .setTimestamp()
      .setThumbnail();
    embed
      .setTitle(`• To get help on a specific command type **s?help <command>!**`)

  .addField("General Commands;", "`invite`, `serverinfo`, `botinfo`, `userinfo`, `allbots`")
    .addField("Moderation Commands;", "`lock`, `unlock`, `lockall`, `unlockall`, `ban`, `unban`, `kick`")
    .addField("Config Commands;", "`prefix`")
    .addField("Security Commands;", "`settings`, `punishment`, `whitelist`, `anti`")
    message.channel.send(embed);
  }
}
