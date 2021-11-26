const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
  message.channel.send("örnek komut");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["örnek1", "örnek2", "örnek3"],
  permLevel: 0
};

exports.help = {
  name: "örnek",
  description: "Örnek açıklama.",
  usage: ".örnek <kullanım>"
};
