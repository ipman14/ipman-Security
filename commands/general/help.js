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
      .setColor("#34eb46")
      .setFooter(message.author.tag, message.author.displayAvatarURL())
      .setTimestamp()
      .setThumbnail(message.author.displayAvatarURL());
    embed
      .setTitle(`Search Commands`)
      .setDescription(
        '**Info**\n**`m!help`**\n**`m!botinfo`**\n**`m!invite`**\n\n**Moderation**\n**`m!ban [user]`**\n**`m!kick [user]`**\n**`m!lock`**\n**`m!unlock`**\n**`m!allbots`**\n\n**security [on/off]**\n**`m!anti-bot [on/off]`**\n**`m!anti-ban [on/off]`**\n**`m!anti-kick [on/off]`**\n**`m!anti-spam [on/off]`**\n**`m!anti-role [on/off]`**\n**`m!anti-channel [on/off]`**\n\n**security <number>**\n**`m!anti-ban <number>`**\n**`m!anti-kick <number>`**\n**`m!anti-role <number>`**\n**`m!anti-channel <number>`**\n\n**security**\n**`m!settings`**\n**`m!whitelist [add/remove] @user`**\n**`m!punishment [kick/ban]`**\n'
      );
    message.channel.send(embed);
  }
}