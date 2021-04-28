const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.on("ready", async () => {
    log("Durum başarıyla ayarlandı")
       client.user.setActivity("🤔 -yardım", 
         { url: 'https://www.twitch.tv/.',
         type: 'STREAMING' }); 
 })
  }, 2 * 2500;
;