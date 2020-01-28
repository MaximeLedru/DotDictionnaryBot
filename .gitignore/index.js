const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(process.env.TOKEN);
var parler = true; 

bot.on('ready', () => {
    bot.user.setActivity("Traduit le langage Nyarlathotep");
    console.log('Le bot est prêt pour être utilisé !');

});
bot.on('message', message => {
    if (parler == true) {
    if (message.content === '.') {
        message.react("👍")
        message.reply('*Cela veut dire : Content*');
        }
    }
});
client.on('message', message => {
   if (message.content === '.clear') {
       
      message.delete(1000); //Supposed to delete message
      message.reply('Messages supprimés maître');
   }
});
bot.on('message', message => {

        if (message.content === '.help') {
            message.react("👍")
            message.author.send('Voici mes commandes maître : \n***Ta gueule DotDictionnary*** : je ferme ma bouche \n ***Parle DotDictionnary***: J ouvre ma bouche');
        
    }
});
bot.on('message', message => {
    if (parler == true) {
    if (message.content === '..') {
        message.react("👍")
        message.reply('*Cela veut dire : je m en fou*');
        }
    }
});
bot.on('message', message => {
    if (parler == true) {
    if (message.content === '....') {
        message.react("👍")
        message.reply("*Cela veut dire : Suicide*");
        }
    }
});
bot.on('message', message => {
    if (parler == true) {
        if (message.content === '...') {
            message.react("👍")
            message.reply("*Cela veut dire : Dépression*");
        }
    }
});
bot.on('message', message => {

        if (message.content === 'ta gueule DotDictionnary') {
            message.react("👍")
            message.reply("D'accord maître, je ferme ma gueule :)");
            bot.user.setActivity("Je ferme ma gueule");
            parler = false;
        }
 
});
bot.on('message', message => {

    if (message.content === 'parle DotDictionnary') {
        message.react("👍")
        bot.user.setActivity("Traduit le langage Nyarlathotep");
        message.reply("D'accord maître suprême :)");
        parler = true;
    }

});
