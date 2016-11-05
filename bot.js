import 'babel-register';
import { token } from './token';
import SlackBot from 'slackbots';

// Post as shialabot
const params = {
  as_user: true,
};

const greetings = [
  'Some people dream of success, while you\'re gonna get up and work hard at it',
  'Yes you can, just do it',
  'If you\'re tired for starting over, stop giving up',
  'Don\'t let your dreams be dreams',
  'I have a hard time with free time',
  'My mom is at my house every day, and she nags me about everything, especially hygiene',
  'I can\'t tell you how many hot dogs I\'ve eaten in my life',
  'If I have enough money to eat, I\'m good'
];

const randomGreeting = () => {
  return greetings[Math.floor(Math.random()*greetings.length)];
}

// create a bot
const bot = new SlackBot({
  token,
  name: 'Shia La Bot'
});

bot.on('start', () => {
  // Send a greeting when we boot up
  bot.postMessageToChannel('general', randomGreeting(), params);
});

bot.on('message', (data) => {
  const { type, text, channel } = data;

  console.log(data);
  console.log(bot.getChannels()._value.channels[0]);

  if (type === 'message') {
    console.log("Text: ", text);

    if (text) {
      if (text.toLowerCase().indexOf('should') > -1) {
        const channels = bot.getChannels()._value.channels.filter((item) => {
          return item.id = channel;
        });

        bot.postMessageToChannel(channels[0].name, 'DO IT!', params);
      }
    }
  }
});