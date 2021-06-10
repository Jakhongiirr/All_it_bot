const { composer, middleware } = require('../../core/bot');

composer.command('me', ctx => {
    return ctx.reply(ctx.from.id)
})

middleware(composer)
