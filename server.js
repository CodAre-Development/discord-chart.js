const express = require('express');
const app = express();
const http = require('http');
const Discord = require('discord.js');
let client = new Discord.Client();
app.use(express.static('public'));
app.listen(8000)
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
res.render('index', {
client: client,
aktif:client.guilds.cache.get('sunucuid').members.cache.filter(m => !m.user.bot && (m.user.presence.status !== "offline")).size,
offline: client.guilds.cache.get('sunucuid').members.cache.filter(m => !m.user.bot && (m.user.presence.status == "offline")).size,
mobil: client.guilds.cache.get('sunucid').members.cache.filter(m => !m.user.bot && (m.user.presence.status !== "offline")).filter(m => Object.keys(m.user.presence.clientStatus).includes("web")).size,
web: client.guilds.cache.get('sunucuid').members.cache.filter(m => !m.user.bot && (m.user.presence.status !== "offline")).filter(m => Object.keys(m.user.presence.clientStatus).includes("mobile")).size,
pc: client.guilds.cache.get('sunucuid').members.cache.filter(m => !m.user.bot && (m.user.presence.status !== "offline")).filter(m => Object.keys(m.user.presence.clientStatus).includes("desktop")).size,
bot: client.guilds.cache.get('sunucuid').members.cache.filter(x=>x.user.bot).size,
kişi: client.guilds.cache.get('sunucid').members.cache.filter(x=>!x.user.bot).size
})

})
console.log("basladim CodAre")
client.login('Token');
