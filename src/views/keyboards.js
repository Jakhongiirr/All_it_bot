/**
 * Keyboard manager of the app
 */

const { Markup } = require("telegraf");

/**
 * Provokes on /which command
 * @returns String in callback button
 */

const which_btn = () => Markup.inlineKeyboard([Markup.button.callback("Ko'rish", "which()")]);

module.exports = {
  which_btn,
};
