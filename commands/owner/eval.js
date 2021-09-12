const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
  name: "eval",
  aliases: [],
  enabled: true,			
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: true,			
  cooldown: 1000,
  run: async (bot, message, dev, prefix) => { 
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
    
    if (!args[1]) {
      return message.channel
        .send("Write Something!!")
        .then(m => m.delete(5000));
    }

    try {
      if (
        args
          .join(" ")
          .toLowerCase()
          .includes("token")
      )
        return;

      let input = `const Discord = require("discord.js");
const { Client, Collection, MessageEmbed } = require("discord.js");

\n\n`;
      input += args.slice(1).join(" ");

      //let input = args.join(" ")

      let output = eval(input);

      if (typeof output !== "string") output = inspect(output);

      if (output.size > 1024) output = `${output.substr(0, 1024)}...`;

      const embed = new Discord.MessageEmbed()
        .setTitle("Eval")
        .setColor("29ffed")
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        //.addField("📥 Input", `\`\`\`js\n${input}\n\`\`\``)
        .addField("📤 Output", `\`\`\`js\n${output}\n\`\`\``)
        .setDescription(
          `**📥 Input: **\n\`\`\`js\n${beautify(input, {
            format: "js"
          })}\n\`\`\`\n**📤 Output: **\n\`\`\`js\n${output}\n\`\`\`\n**Type: **\n\`\`\`js\n${typeof output}\n\`\`\``
        );

      //message.channel.send(`**Output: **\n\`\`\`js\n${output}\n\`\`\``)
      message.channel.send(embed);
    } catch (e) {
      let embed = new Discord.MessageEmbed()
        .setColor("29ffed")
        .setTitle(":x: Error!")
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        .setDescription(e);

      message.channel.send(embed);
    }
        }}
