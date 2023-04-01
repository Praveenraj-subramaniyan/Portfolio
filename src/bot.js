const { Telegraf } = require('telegraf');
const TelegramBot = require('node-telegram-bot-api');
const  Token= '6102043056:AAGSXHVBjbsKG9c1RKRlb1F5m7Olmd_5sRE';
const bot = new TelegramBot(Token, { polling: true });
const chatId = '1048759782';
bot.sendMessage(chatId, 'Hello, world5!')
  .then(() => {
    console.log('Message sent successfully!');
  })
  .catch((error) => {
    console.error('Error sending message:', error);
  });
  

