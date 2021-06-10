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

module.exports = {
    doc,
    google
}
