const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(process.env.TOKEN);
var parler = true;



const Bot = new Discord.Client()



bot.on('ready', () => {
    bot.user.setActivity("Traduit le langage Nyarlathotep");
    console.log('Le bot est prêt pour être utilisé !');

});


bot.on('message', message => {

    if (message.content === '.clear') {
        message.react("👍");
        message.channel.bulkDelete(100);
        message.reply('Les messages ont été supprimé maître !');




    }
});
bot.on('message', message => {

    if (message.content === '.info') {
        message.react("👍")
        message.channel.send('```Mon créateur : Wukimos#0762\n Ma version ! 1.0.2 \nMes fonctions : Je joue de la musique, je traduit le langage . , et je répond à tout mes maîtres.```');

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
        if (message.content === '.') {
            message.react("👍")
            message.reply('*Cela veut dire : content*');
        }
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

    if (message.content === 'ta gueule Esclave' || message.content === 'ta gueule esclave') {
        message.react("👍")
        message.reply("D'accord maître, je ferme ma gueule :)");
        bot.user.setActivity("Je ferme ma gueule");
        parler = false;
    }

});
bot.on('message', message => {

    if (message.content === 'parle Esclave' || message.content === 'parle esclave') {
        message.react("👍")
        bot.user.setActivity("Traduit le langage Nyarlathotep");
        message.reply("D'accord maître suprême :)");
        parler = true;
    }

});
//Message de bienvenue

bot.on('guildMemberAdd', member => {
    member.guild.channels.get('671687716622303251').send("Bienvenue sur le serveur " + member + " ! \n\n\n pour connaître mes commandes, il faut que tu fasse **.help**");
});

bot.on('guildMemberRemove', member => {
    member.guild.channels.get('671687716622303251').send(member + " a quitté le royaume.. Dommage pour lui :'(");
});
