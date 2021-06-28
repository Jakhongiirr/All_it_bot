const { composer, middleware } = require("../../core/bot");
const { src } = require("../../views/messages");

composer.command("src", async (ctx) => ctx.replyWithHTML(src()));

middleware(composer);
