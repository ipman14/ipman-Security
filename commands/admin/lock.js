module.exports = {
  name: "lock",
  aliases: ["close"],
  enabled: true,			  
  memberPermissions: [ "MANAGE_MESSAGES","MANAGE_CHANNELS" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","MANAGE_CHANNELS" ],		
  ownerOnly: false,			
  cooldown: 10000,
  run: async (bot, message, args, dev) => {
    message.channel
      .updateOverwrite(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.channel.send(
          `🔒** <#${message.channel.id}> has been locked.**`
        );
     });
   }
}
