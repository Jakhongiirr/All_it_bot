const doc = (bool, ctx) => {
    if(!bool)
        return(`Kimga dono maslahatimiz kerak bo'lib qoldi ekan...`)

    return(
        `Demak, <a href='tg://user?id=${ctx.message.reply_to_message.from.id}'>` + 
        `${ctx.message.reply_to_message.from.first_name}</a>, ` +
        `bir bor ekan, bir yo'q ekan...\n` +
        `\n` + 
        `Qadim qadim zamonda dokumentatsiya degan narsa bo'lgan ekan.` +
        `Undan deyarli barcha savollarga javob topsa bo'larkan.\n` +
        `\n` +
        `Unga avtorlar shunchalik ko'p vaqt sarflashar ekanlar-u,` +
        `lekin faqat sanoqlilargina uni o'qisharkan...`
    )
}

const google = (bool, ctx) => {
    if(!bool)
        return 'Kimga hikmatli maslahatlar kerak bo\'lib qoldi ekaan...'

    return(
        `Xo'o'sh <a href='tg://user?id=${ctx.message.reply_to_message.from.id}'>` + 
        `${ctx.message.reply_to_message.from.first_name} </a>,` +
        `shuni so'rashdan oldin bir bora googledan qidirdingizmi? -_-`
    )
}

const which = ctx => `Buyruq <a href='tg://user?id=${ctx.from.id}'> ` +
                     `${ctx.from.first_name}</a> tomonidan ishga tushurildi.`

const which_cb = (bool, ctx) => !bool ? `Sizga mumkin emas buni ko'rish` : ctx.chat.id

const yes = () => `Ha, ismim Umar (Jo'shqin deb ham chaqirishadi)\n` +
                  `\n` +
                  `Ha, Angular frontend dasturchiman\n` +
                  `\n` +
                  `Ha, AQShning EPAM systems kompaniyasida ishlayman` +
                  `\n` +
                  `Va bularning hammasi kanalimda "info" qismida turibdi :)`

const src = () => `Mening kodlarim ushbu github sahifada:\n` +
                  `\n` +
                  `https://github.com/Jakhongiirr/all_it_bot`

module.exports = {
    doc,
    google,
    which,
    which_cb,
    yes,
    src
}
