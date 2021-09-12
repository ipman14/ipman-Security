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
      .setThumbnail();
    embed
      .setTitle(`• To get help on a specific command type **s?help <command>!`)
      .setDescription(
```.addField("General Section", "`invite`, `support`, `stats`, `serverinfo`, `ping`, `userinfo`, `bots`, `vote`, `premium`")
    .addField("Moderation Section", "`kick`, `ban`, `purge`, `unbanall`, `mute`, `lock`, `unlock`, `lockall`, `unlockall`")
    .addField("Config Section", "`setprefix`, `setlang`")
    .addField("Security Section", "`settings`, `punishment`, `whitelist`, `anti`, `logs`")```
      );
    message.channel.send(embed);
  }
}
