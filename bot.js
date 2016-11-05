var boykey = require('./key').botkey;

var SlackBot = require('slackbots');

// create a bot
var bot = new SlackBot({
    token: botkey,
    name: 'Shia La Bot'
});

bot.on('start', function() {

    bot.on('message', function(data) {
        // all ingoing events https://api.slack.com/rtm
        //console.log(data);

        if (data.type == 'message') {
            var text = data.text;
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