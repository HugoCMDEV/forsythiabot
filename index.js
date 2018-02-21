const Discord = require ('discord.js');

var bot = new Discord.Client();const Discord = require ('discord.js');

var bot = new Discord.Client();
var prefix = ('^');

bot.on('ready', () => {
console.log("Bot Ready !");  

bot.login('NDE1ODkzNzc3MTk0OTQyNDk0.DW8nKg.QRdreu5Gr4grMGQKqIbVZAv4nTc')

bot.user.setPresence ({ game: { name: '^help in Forsythia', type: 0 } })
    
});

