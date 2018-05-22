var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
  colorize: true
});
logger.level = 'debug';
// Init new bot
var bot = new Discord.Client({
  token: auth.token,
  autorun: true
});
bot.on('ready', function (evt) {
  logger.info('Connected');
  logger.info('Logged in as: ');
  logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Bot listens for commands
    if (message.substring(0,1) == '!') {
      var args = message.substring(1).split(' ');
      var cmd = args[0];

      args = args.splice(1);
      switch(cmd) {

        // template
        case 'case template':
        bot.sendMessage({
          to: channelID,
          message: 'hey'
        });
        break;

        // !ping
        case 'ping':
          bot.sendMessage({
            to: channelID,
            message: 'Pong! :ping_pong:'
          });
        break;

        // !cards
        case 'cards':
          bot.sendMessage({
            to: channelID,
            message: 'Welcome to the card encyclopedia! To find a card, type !card <name> to see info on it! To see cards in a category, type !cards <Damage, Healing, Other>.'
          });
          break;

      }
    }
});
