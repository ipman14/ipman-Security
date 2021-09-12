const schema = mongoose.Schema({
    guildID: String,
    prefix: { type: String, default: "m!"},
    ban: {
        onoff: { type: String, default: "on"},
        lmite: { type: Number, default: "3"}
   },
    kick: {
        onoff: { type: String, default: "on"},
        lmite: { type: Number, default: "3"}
    },
    channel: {
        onoff: { type: String, default: "on"},
        lmite: { type: Number, default: "3"}
    },
    role: {
        onoff: { type: String, default: "on"},
        lmite: { type: Number, default: "3"}
    },
    spam: {
        onoff: { type: String, default: "on"}      
    },
    bot: {
        onoff: { type: String, default: "on"}
    },
    punishment: { type: String, default: "ban"},
    whitelist: { type: Array, default: [] },
    time: { type: Number, default: 60}
});
module.exports = mongoose.model("Guild", schema)
