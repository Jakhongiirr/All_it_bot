require('dotenv').config();
const { Telegraf, Composer } = require('telegraf');

// heroku config:set --app allit-bot BOT_TOKEN='1846915822:AAFkgQPuWpylMOImQRDA5KNzRLgwXWzTjVM'

const token = process.env.BOT_TOKEN;

if(!token){
    console.log(`No bot token`)
}

const bot = new Telegraf(token)

const composer = new Composer();
const middleware = composer => {
    bot.use(composer.middleware())
}


try {
    if (process.env.ENV === 'heroku') {
        bot.launch({
            webhook: {
                domain: process.env.DOMAIN,
                hookPath: '/bot',
                port: parseInt(process.env.PORT)
            }
        })
            .then(async () => {
                console.log(`Bot launched: ${process.env.ENV}`)
            })
            .catch((error) => consoles.errors(error))
        } else if (process.env.ENV === 'local') {
            bot.launch()
                .then(() => console.log(`Bot launched: ${process.env.ENV}`))
                .catch((error) => console.log(error))
        } else console.log(`Bot didn't launch. wrong ENV or it doesn't exist in .env file`)
} catch (e) {
    console.log(e)
}

module.exports = {
    bot,
    middleware,
    composer
}
