const { composer, middleware } = require('../../core/bot');
const { yes } = require('../../views/messages');

composer.command('yes', async ctx => {
    ctx.replyWithHTML(yes())
})


middleware(composer)
