const { composer, middleware } = require('../../core/bot');
const { doc } = require('../../views/messages');

composer.command('doc', async ctx => {
    if(!ctx.message.reply_to_message) {
        return ctx.replyWithHTML(doc(null, ctx))
    } else {
    return ctx.replyWithHTML(doc(true, ctx))
    }
})

middleware(composer)
