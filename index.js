const Bot = require('./bot.js');
const botScreenName = process.env.BOT_SCREEN_NAME;

console.log(`${botScreenName} is running`);

Bot.replyMentions();