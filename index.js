const config = require("./config/main");
const mongoose = require('mongoose');
const TelegramBot = require('node-telegram-bot-api');
const token = config.getConfig('tg_api_key');
const Users = require("./models/users");

mongoose.connect('mongodb+srv://sayron97:vk2232772@cluster0.mo36r.mongodb.net/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

    let bot = new TelegramBot(token, {polling: true});

    //ROUTER
    //Text url router  (from onText func)
    bot.onText(/\/start/, function (msg, match) {
        let chat = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;

        bot.sendMessage(chat, 'Зачем меня призвали???', getButtonOptions([
            [{ text: 'Траты', callback_data: 'spends' }],
            [{ text: 'Напоминания', callback_data: 'events' }]
        ]));
    });

    //Button url router  (from msg.data)
    bot.on('callback_query', function (msg) {
        let chat = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;

        switch (msg.data) {
            case 'spends':
                bot.sendMessage(chat, 'ggg')
                break
            default:
        }
    });

    //ENDROUTER

    function getButtonOptions(buttons) {
        return {
            reply_markup: JSON.stringify({
                inline_keyboard: buttons,
                parse_mode: 'Markdown'
            })
        };
    }

    function getEnterTextOption() {
        return {
            reply_markup: JSON.stringify({ force_reply: true }
            ),
        };
    }

    /*let user = new Users ({
        name: 'Ju',
        tgId: 111
    })

    user.save(function (err) {if (err) console.log ('Error on save!')});*/
});