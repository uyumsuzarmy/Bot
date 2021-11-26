const discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const request = require("request")
const cheerio = require("cheerio")

module.exports.run = async (client, message, params, perms) => {
    
    const embed = new discord.MessageEmbed()
    .setTitle('Telegram Adresimiz')
    .setAuthor('deneme')
    .setURL('https//t.me/azginpenguenler')
    .setColor('RANDOM')
    .setFooter(`${message.author.username} tarafından kullanıldı.`)
    message.channel.send(embed); 
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['telegram'],
  permLevel: 0,
    kategori: "kullanıcı",
  category: "user"
};

exports.help = {
  name: 'telegram',
  description: 'Telegram adresini atar.',
  usage: 'telegram',

};