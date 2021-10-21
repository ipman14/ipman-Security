const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
const moment = require('moment');



const regions = {

	brazil: 'Brazil',

	europe: 'Europe',

	hongkong: 'Hong Kong',

	india: 'India',

	japan: 'Japan',

	russia: 'Russia',

	singapore: 'Singapore',

	southafrica: 'South Africa',

	sydeny: 'Sydeny',

	'us-central': 'US Central',

	'us-east': 'US East',

	'us-west': 'US West',

	'us-south': 'US South'

};

module.exports = {
  name: "serverinfo",
  aliases: ["server"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 3000,
  run: async (bot, message, args, dev) => {

		const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());

		const members = message.guild.members.cache;

	        const channels = message.guild.channels.cache;

		const emojis = message.guild.emojis.cache;

		const serverinfo = new MessageEmbed()
                      .setTitle("Server info")

		         .setThumbnail(message.guild.iconURL({ dynamic: true }))
                          
                         .setColor("#303135")
           
		         .addField('**General**', [

				`Name\n${message.guild.name}`,

				`ID\n${message.guild.id}`,

				`Owner\n<@${message.guild.ownerID}>`,

				`Region\n${regions[message.guild.region]}`,

		                `Time Created\n${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,

				`Role Count\n${roles.length}`,

			        `Member Count\n${message.guild.memberCount}`,

				`Text Channels\n${channels.filter(channel => channel.type === 'text').size}`,

				`Voice Channels\n${channels.filter(channel => channel.type === 'voice').size}`,

                                `Emoji Count\n${emojis.size}`,
				
				''
			])


		return message.channel.send(serverinfo);

	}

};
