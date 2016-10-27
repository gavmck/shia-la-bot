var SlackBot = require('slackbots');

// create a bot
var bot = new SlackBot({
    token: 'xoxb-97138802375-xRUsZIsmpWRHp8dOnnUmiB5J', // Add a bot https://my.slack.com/services/new/bot and put the token
    name: 'Shia La Bot'
});

bot.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    var params = {
        icon_emoji: ':cat:'
    };

    // define channel, where bot exist. You can adjust it there https://my.slack.com/services
    //bot.postMessageToChannel('general', 'DO IT!');

    // define existing username instead of 'user_name'
    //bot.postMessageToUser('user_name', 'meow!', params);

    // If you add a 'slackbot' property,
    // you will post to another user's slackbot channel instead of a direct message
    //bot.postMessageToUser('user_name', 'meow!', { 'slackbot': true, icon_emoji: ':cat:' });

    // define private group instead of 'private_group', where bot exist
    //bot.postMessageToGroup('private_group', 'meow!', params);

    bot.on('message', function(data) {
        // all ingoing events https://api.slack.com/rtm
        console.log(data);

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