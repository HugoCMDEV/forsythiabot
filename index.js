const Discord = require ('discord.js');

var bot = new Discord.Client();
var prefix = ('^');

bot.on('ready', () => {
    bot.user.setPresence ({ game: { name: '^help in Forsythia', type: 0 } })
    console.log("Bot Ready !");

});

bot.login('NDE0NzM1NTc4NDE2OTM5MDIw.DWtxnw.UeLie9K8WYRszQkzg2TzWEiEVlk')

bot.on('message' , message => {
    if (message.content === prefix + "ping"){
        message.channel.sendMessage("```pong```")
        console.log('ping pong');
    }
    
    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
                .setColor('#F49300')
                .addField("__Commandes du Bot Forsythia__", "-")
                .addField("^help", "Affiche les commandes du bot ")
        message.channel.sendEmbed(help_embed);        
        //message.channel.sendMessage("**Bienvenue dans l'interface des commandes du bot** \n**- f-help** ~ te permets de voir les commandes utilisables");
        console.log("commande help demandée !");
    }
});
