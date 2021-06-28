/**
 * Core module of the app
 * @core @module
 * @exports { bot, middlware, composer }
 */

require("dotenv").config();
const { Telegraf, Composer } = require("telegraf");

const token = process.env.BOT_TOKEN;

if (!token) {
  console.log(`No bot token`);
}

// Creating new bot
const bot = new Telegraf(token);
const composer = new Composer();
const middleware = (composer) => {
  bot.use(composer.middleware());
};

// defining the environment
// and deciding to use either
// polling (local) or webhook (production) mode

try {
  if (process.env.ENV === "heroku") {
    bot
      .launch({
        webhook: {
          domain: process.env.DOMAIN,
          hookPath: "/bot",
          port: parseInt(process.env.PORT, 10),
        },
      })
      .then(async () => {
        console.log(`Bot launched: ${process.env.ENV}`);
      })
      .catch((error) => console.error(error));
  } else if (process.env.ENV === "local") {
    bot
      .launch()
      .then(() => console.log(`Bot launched: ${process.env.ENV}`))
      .catch((error) => console.log(error));
  } else
    console.log(
      `Bot didn't launch. wrong ENV or it doesn't exist in .env file`
    );
} catch (e) {
  console.log(e);
}

module.exports = {
  bot,
  middleware,
  composer,
};
