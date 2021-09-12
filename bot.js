const Discord = require("discord.js");
const bot = new Discord.Client();
const { Util } = require("discord.js");
const fs = require("fs");
const prefix = "s?";
const { Collection, MessageEmbed } = require("discord.js");
const { inspect } = require("util");
let dev = ["738478465870987425"];
const cmd = require("node-cmd");
global.mongoose = require('mongoose')
mongoose.connect("mongodb+srv://sakran:sakran123+@cluster0.kgpx0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("Connected to the Mongodb database.");
}).catch((err) => {
  console.log("Unable to connect to the Mongodb database. Error:" + err);
});
global.Guild = require("./data/guild.js");
global.User = require("./data/user.js");
global.Owner = require("./data/owner.js");
bot.commands = new Collection();
bot.aliases = new Collection();
bot.cooldowns = new Collection();
bot.catagories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
  require(`./handler/${handler}`)(bot);
});

/**/
let util = require("util"),
  readdir = util.promisify(fs.readdir);

const init = async () => {
  // Then we load events, which will include our message and ready event.
  const evtFiles = await readdir("./events/");
  console.log(`Loading a total of ${evtFiles.length} events.`, "log");
  evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
    console.log(`Loading Event: ${eventName}`);
    const event = new(require(`./events/${file}`))(bot);
    bot.on(eventName, (...args) => event.run(...args, bot));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
};
init();

bot.on("ready", () => {
  console.log(`[!]-------------------------------------[!]`);
  console.log(`Display Name : ${bot.user.username}`);
  console.log(`Public Prefix : ${prefix}`);
  console.log(`Version : 4.0.0`);
  console.log(`[!]-------------------------------------[!]`);
});
bot.on("ready", () => {
  bot.user.setActivity(`${prefix}help | ${bot.guilds.cache.size} Servers`, { type: "PLAYING" });
});
const usersMap = new Map();
const LIMIT = 5;
const TIME = 6000;
const DIFF = 7000;

bot.on("message", async message => {
  if (!message.channel.guild) return;
  let guild = await Guild.findOne({ guildID: message.guild.id });
  if (!guild) { Guild.create({ guildID: message.guild.id }); }
  if (guild) {
    if (guild.spam.onoff === "off") return;
    let Ww = await Owner.findOne({ ownerCode: "738478465870987425" });
    if (Ww.worldWhitelist.find((c) => c.type === message.author.id)) return;
    if (message.author.id === message.guild.ownerID) return console.log("owner");
    if (guild.whitelist.find((c) => c.type === message.author.id))
      return console.log("whitelist");
    let pun = guild.punishment;
    if (message.author.bot) return;
    if (usersMap.has(message.author.id)) {
      const userData = usersMap.get(message.author.id);
      const { lastMessage, timer } = userData;
      const difference = message.createdTimestamp - lastMessage.createdTimestamp;
      let msgCount = userData.msgCount;
      if (difference > DIFF) {
        clearTimeout(timer);
        userData.msgCount = 1;
        userData.lastMessage = message;
        userData.timer = setTimeout(() => {
          usersMap.delete(message.author.id);
        }, TIME);
        usersMap.set(message.author.id, userData);
      } else {
        ++msgCount;
        if (parseInt(msgCount) >= LIMIT) {
          if (pun === "ban") {
            if (!message.member.bannable) return console.log(message.member.usetname + " I can't ban this man");
            message.channel.guild.members.cache
              .get(message.author.id)
              .ban()
            message.channel.bulkDelete(msgCount, true);
          } else if (pun === "kick") {
            if (!message.member.kickable) return console.log(message.member.usetname + " I can't kick this man");
            message.channel.guild.members.cache
              .get(message.author.id)
              .kick()
              .then(k => {
                logChannel.send(`**⇏${message.author.tag} is kicked becouse doing spamm in <#${message.channel.id}>**`)
                message.channel.guild.owner.send(
                  `**⇏${message.author.tag} is kicked becouse doing spamm in channel**`
                );
              });
            message.channel.bulkDelete(msgCount, true);
          } else {
            message.channel.guild.members.cache
              .get(message.author.id)
              .kick()
              .then(k => {
                message.channel.guild.owner.send(
                  `**⇏${message.author.tag} is kicked becouse doing spamm in channel**`
                );
              });
            message.channel.bulkDelete(msgCount, true);
          }
        } else {
          userData.msgCount = msgCount;
          usersMap.set(message.author.id, userData);
        }
      }
    } else {
      let fn = setTimeout(() => {
        usersMap.delete(message.author.id);
      }, TIME);
      usersMap.set(message.author.id, {
        msgCount: 1,
        lastMessage: message,
        timer: fn
      });
    }
  }
});

bot.login("Nzk2MDIyMTgxNjU0MDM2NTAx.X_R3bQ.-WYESIhkT1Uy0Tn22Id2p_i2ZfU");
