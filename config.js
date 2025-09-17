const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "JESUS~CRASH~V1~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU0wQnVXVkVYMU96aVBMYzllTFhQT1IwQzhGTkxNd3o3U3RoUW9UMVRVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0hvVWwyZXkrNGJoTW8rditQN1hyTE5wWTVVT0VFYklLS3ljcUVLS0JRcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTkgrcGRPbEJqMjREektsSURFMzBaMlVnTndtakFOZW1ocExHSWx1cFZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVd1NZRTY0SVlmUzVtQTdiMEM3cmZ5NmFrcGdFQUhBbHN6WHA3L2FPM2wwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVHdmZrYUY4cW5TS0k0U3NyRmN0eUdRRi9yM1lTY1lEMkxLa1RzTGpjWEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJzTnRJVk4yZ1FNKzdoLzEzOEU4VHVNcGVkRWEvcUtZNXFOWXkvZ2NuajA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0Z6a0tRekVGUExXVVNqdmhKbDNDdXVEUGNseWswNzdKb0VZVWpXSFBYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ3JCdXRPM3FNY0laeE1WejBIUzd4Y2pjcVVsNGJwUUVoNlBucHUyN3RTdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inlld3ppL0N5a3EwRkprLzRGNzVUZ0ZaY2RBclIvTUJWeTVITXd3KzVucTdIMlFjY3RKMTU4bDVVb25HNEJEcVUyWmtxdDhxcXZjS01NTVdzaWVJQWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ0LCJhZHZTZWNyZXRLZXkiOiJvZVRQcDNPc3BFdVUwZkxhN2p2YUx2VFI1ZWJ5cGE2WndNZU9rOWpTdVhjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjEzMDU4OTYyNDQzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBNkIxRTlGMzgzOEE4RjhFQ0RFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTgxNTIyNjR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ik5DQkxRWTdIIiwibWUiOnsiaWQiOiIxMzA1ODk2MjQ0Mzo5OEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIzNDU3NDM3MDA2NjUzNjo5OEBsaWQiLCJuYW1lIjoiLiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGZDK1lzREVNS01yY1lHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRmZtTjN6N0VjSjNPS0FTQTBnQ3RaOW1MWTlYaW5MZWdrUlF4TFdkQW1tUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoia0VBMHV6bTkrRHl6R2Q0eFNlWFV4VTdyUGhRd0dDd1ZnSjdUR0NnSDVrZkRiaXRTYUYvcFZZR3pvbndWck9iaXVaMzZodnRTV3d0UEUxT1pyOERwZ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IkpXNW4yNURLMTN1N0NLckdEdFVVMERNY0psc2FySGFMNllkOXZIMnJIWVlqaEpRZFYvQnl5NEhrYi9tdU5OZlM4RzkzcUVsMlhtMnRxSHV2WC9ZVGd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTMwNTg5NjI0NDM6OThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUlg1amQ4K3hIQ2R6aWdFZ05JQXJXZlppMlBWNHB5M29KRVVNUzFuUUpwayJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTgxNTIyNjAsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQkJrIn0=",
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY JESUS-CRASH-V1*",
// set the auto reply massage on status reply  
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "true",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/fuoqii.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "JESUS-CRASH-V1",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "JESUS-CRASH-V1",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "13058962443",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "DAWENS BOY",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ by dawens boy*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/fuoqii.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *JESUS-CRASH-V1*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "true",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "50942241547",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
// make it true for auto recoding 
ANTICALL: process.env.ANTICALL || "true"
// true for anticall
};
