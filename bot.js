import 'babel-register';
import { token } from './token';
import SlackBot from 'slackbots';

// create a bot
const bot = new SlackBot({
  token,
  name: 'Shia La Bot'
});

bot.on('start', () => {

  bot.on('message', (data) => {

    if (data.type === 'message') {
      const text = data.text;
      console.log("Text: ", text);

      if (text) {
        text = text.toLowerCase();

        if (text.indexOf('should') > -1) {
          bot.postMessageToChannel('general', 'DO IT!');
        }
      }
    }
  });
});