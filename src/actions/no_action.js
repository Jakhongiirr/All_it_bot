require('dotenv').config()
const { composer, middleware } = require('../core/bot')

composer.on('new_chat_members', async (ctx, next) => {
    if (
        ctx.chat.type !== 'private' &&
        ctx.chat.id !== parseInt(-1001282844686)
    ) {
        await ctx.reply(`Fuu nimadir sasidimi...`)
        return (
                
                ctx
                    .leaveChat()
                    .then()
                    .catch((err) => console.log(err)))
    } else {
        return next()
    }
})

middleware(composer)
