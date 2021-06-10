const { composer, middleware } = require('../../core/bot');
const { google, google_false } = require('../../views/messages');

composer.command('google', async ctx => {
    if(!ctx.message.reply_to_message) {
        return ctx.replyWithHTML(google(null, ctx))
    } else {
        return ctx.replyWithHTML(google(true, ctx))
    }
})

middleware(composer)
