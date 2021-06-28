/**
 * Messages manager
 * @module views/messages
 */

/**
 * Mentions docs exist
 * Answers to the replied user
 * @param {Function} bool Boolean
 * @param {Function} ctx ctx
 * @returns String
 */

const doc = (bool, ctx) => {
  if (!bool) return `Kimga dono maslahatimiz kerak bo'lib qoldi ekan...`;

  return (
    `Demak, <a href='tg://user?id=${ctx.message.reply_to_message.from.id}'>` +
    `${ctx.message.reply_to_message.from.first_name}</a>, ` +
    `bir bor ekan, bir yo'q ekan...\n` +
    `\n` +
    `Qadim qadim zamonda dokumentatsiya degan narsa bo'lgan ekan.` +
    `Undan deyarli barcha savollarga javob topsa bo'larkan.\n` +
    `\n` +
    `Unga avtorlar shunchalik ko'p vaqt sarflashar ekanlar-u,` +
    `lekin faqat sanoqlilargina uni o'qisharkan...`
  );
};

/**
 * Mentions google exists
 * Ansers to the replied user
 * @param {Function} bool Boolean
 * @param {Function} ctx ctx
 * @returns String
 */

const google = (bool, ctx) => {
  if (!bool) return "Kimga hikmatli maslahatlar kerak bo'lib qoldi ekaan...";

  return (
    `Xo'o'sh <a href='tg://user?id=${ctx.message.reply_to_message.from.id}'>` +
    `${ctx.message.reply_to_message.from.first_name} </a>,` +
    `shuni so'rashdan oldin bir bora googledan qidirdingizmi? -_-`
  );
};

/**
 * Callback to get chat id
 * @param {Function} ctx ctx
 * @returns String
 */

const which = (ctx) =>
  `Buyruq <a href='tg://user?id=${ctx.from.id}'> ` +
  `${ctx.from.first_name}</a> tomonidan ishga tushurildi.`;

/**
 * Checks if the user has access to
 * get chat id and returns it if so
 * @param {Function} bool Boolean
 * @param {Function} ctx ctx
 * @returns String
 */

const which_cb = (bool, ctx) =>
  !bool ? `Sizga mumkin emas buni ko'rish` : ctx.chat.id;

/**
 * Provokes on /yes command
 * @returns String
 */

const yes = () =>
  `Ha, ismim Umar (Jo'shqin deb ham chaqirishadi)\n` +
  `\n` +
  `Ha, Angular frontend dasturchiman\n` +
  `\n` +
  `Ha, AQShning EPAM systems kompaniyasi Toshkent filialida ishlayman\n` +
  `\n` +
  `Va bularning hammasi kanalimda "info" qismida turibdi :)`;

/**
 * Source code
 * @returns String
 */

const src = () =>
  `Mening kodlarim ushbu github sahifada:\n` +
  `\n` +
  `https://github.com/Jakhongiirr/all_it_bot`;

module.exports = {
  doc,
  google,
  which,
  which_cb,
  yes,
  src,
};
