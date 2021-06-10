const { composer, middleware } = require('../../core/bot');
const { which, which_cb } = require('../../views/messages');
const { which_btn } = require('../../views/keyboards');

composer.command('which', async ctx => {
    ctx.replyWithHTML(which(ctx), which_btn())
})

composer.action('which()', async ctx => {
    if(ctx.from.id === 326183032)
        return ctx.answerCbQuery(which_cb(true, ctx), { show_alert: true });

    return ctx.answerCbQuery(which_cb(null, ctx), { show_alert: true})
})

middleware(composer)
