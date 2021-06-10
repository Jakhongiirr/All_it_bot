const { Markup } = require('telegraf');

const which_btn = () => Markup.inlineKeyboard([
        Markup.button.callback('Ko\'rish', 'which()')
  ])


module.exports = {
    which_btn
}
