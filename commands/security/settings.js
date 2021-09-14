const fs = require("fs");
const Discord = require("discord.js");
module.exports = {  
    name: "settings",  
    aliases: ["config"], 
    enabled: true,
    memberPermissions: [ "SEND_MESSAGES" ],			
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
    ownerOnly: false,			
    guilOwnerOnly: true,
    cooldown: 10000,
run: async (bot, message, args, dev) => {
    let data = await Guild.findOne({ guildID: message.guild.id })
      let embed = new Discord.MessageEmbed()
        .setColor("#34eb46")
        .setThumbnail(message.guild.iconURL())
        .setFooter(message.author.tag, message.author.displayAvatarURL());

      let falsee = `<:7518E8AEB81247D1A6C339A88CC2E5A6:887451224062971974>`;
      let truee = `<:B668F955B63E499AAA665C47ED199AE7:887451242228494339>`;

      if (data.ban.onoff === "on") {
        embed.addField(
          `AntiBan:`,
          `${truee} Enabled \n Maximum ban: ${data.ban.lmite}`
        );
      } else if (data.ban.onoff === "off") {
        embed.addField(
          `AntiBan:`,
          `${falsee} Disabled \n Maximum ban: ${data.ban.lmite}`
        );
      }

      if (data.kick.onoff === "on") {
        embed.addField(
          `AntiKick:`,
          `${truee} Enabled \n Maximum kick: ${data.kick.lmite}`
        );
      } else if (data.kick.onoff === "off") {
        embed.addField(
          `AntiKick:`,
          `${falsee} Disabled \n Maximum kick: ${data.kick.lmite}`
        );
      }

      if (data.role.onoff === "on") {
        embed.addField(
          `AntiRole:`,
          `${truee} Enabled \n Maximum roleC: ${data.role.lmite}\n Maximum roleD: ${data.role.lmite}`
        );
      } else if (data.role.onoff === "off") {
        embed.addField(
          `AntiRole:`,
          `${falsee} Disabled \n Maximum roleC: ${data.role.lmite}\n Maximum roleD: ${data.role.lmite}`
        );
      }

      if (data.channel.onoff === "on") {
        embed.addField(
          `AntiChannel:`,
          `${truee} Enabled \n Maximum channelC: ${data.channel.lmite}\n Maximum channelD: ${data.channel.lmite}`
        );
      } else if (data.channel.onoff === "off") {
        embed.addField(
          `AntiChannel:`,
          `${falsee} Disabled \n Maximum channelC: ${data.channel.lmite}\n Maxdata channelD: ${data.channel.lmite}`
        );
      }
      
      let data3 = data.bot.onoff
      if (data3 === "on") {
        embed.addField(
          `AntiBot:`,
          `${truee} Enabled`
        );
      } else if (data3 === "off") {
        embed.addField(
          `AntiBot:`,
          `${falsee} Disabled`
        );
      }
      
      
      let data2 = data.spam.onoff
      if (data2 === "on") {
        embed.addField(`AntiSpam:`, `${truee} Enabled `);
      } else if (data2 === "off") {
        embed.addField(`AntiSpam:`, `${falsee} Disabled`);
      }

      if (data.punishment === "kick") {
        embed.addField(`punishment:`, `${truee} kick member`);
      } else if (data.punishment === "ban") {
        embed.addField(`punishment:`, `${truee} ban member`);
      }
      embed.setDescription(
        `**This embed is settings security and settings your server**`
      );

      message.channel.send(embed);
    }}
