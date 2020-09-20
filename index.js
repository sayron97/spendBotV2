const config = require("./config/main");
const mongoose = require('mongoose');
const TelegramBot = require('node-telegram-bot-api');
const token = config.getConfig('tg_api_key');
const Products = require("./models/products");
const blocks = require("./blocks");

mongoose.connect('mongodb+srv://sayron97:vk2232772@cluster0.mo36r.mongodb.net/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

    let bot = new TelegramBot(token, {polling: true});

    //ROUTER
    //Text url router  (from onText func)
    bot.onText(/\/start/, function (msg, match) {
        let chat = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;
        let block = blocks.getBlock('start')

        bot.sendMessage(chat, block.title, config.getButtonOptions(block.buttons));
    });

    //Button url router  (from msg.data)
    bot.on('callback_query', function (msg) {
        let chat = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;

        // Get extra data and buttons (Actions)
        switch (msg.data) {
            case 'add_new_product':
                bot.sendMessage(chat, 'Введите название продукта', config.getEnterTextOption())
                    .then(response => {
                        bot.onReplyToMessage(response.chat.id, response.message_id, ({reply_to_message, from: {id}, text}) => {
                            let products = new Products({
                                name: text,
                                date: new Date()
                            })
                            products.save()
                                .then(response => {
                                    let block = blocks.getBlock('go_to_main')
                                    bot.sendMessage(chat, block.title, config.getButtonOptions(block.buttons));
                                })

                        })
                    })
                break
            default:
        }

        // Just get buttons
        let block = blocks.getBlock(msg.data)
        bot.sendMessage(chat, block.title, config.getButtonOptions(block.buttons));
    });

    //ENDROUTER
});