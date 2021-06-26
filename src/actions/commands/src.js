const { composer, middleware } = require('../../core/bot');
const { src } = require('../../views/messages');

composer.command('src', async ctx => {
    return ctx.replyWithHTML(src())
})


middleware(composer)
