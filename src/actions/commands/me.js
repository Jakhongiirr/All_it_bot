const { composer, middleware } = require("../../core/bot");

composer.command("me", (ctx) => ctx.reply(ctx.from.id));

middleware(composer);
