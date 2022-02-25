const {Composer , Telegraf} = require('micro-bot')

const bot = new Composer()


bot.command('contract',ctx=>{
    ctx.reply('0x043b79ad9501658747f9090b421f00fe9e345167').catch((e)=>console.log(e))
})

bot.command('presale',ctx=>{
    ctx.reply('https://opensea.io/collection/thetrophyclub').catch((e)=>console.log(e))
})

bot.command('tokens',ctx=>{
    ctx.reply('TheTrophyToken.com').catch((e)=>console.log(e))
})

bot.command('website',ctx=>{
    ctx.reply('https://trophyclubnft.com/').catch((e)=>console.log(e))
})



module.exports = bot