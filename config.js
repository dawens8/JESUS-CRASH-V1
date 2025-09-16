const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "JESUS~CRASH~V1~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQURDVndMMVhpYnE0NytscDJLZVA1NmRCU0xSOVBISmNxdVY0dFNBdFBuRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDBnQzQ5SDltYUg1ZmpoeXVDSXNuZ01pbFM2cDBXRUd3WE5BWHVqWkVTST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRTYrSU1iNnpPZysyWFMybVRaRWlHU2prUDhIdm9oc0ZmSXRlOVhIUzJjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSFNEUzlqYkRSMzlGa1Vka05aNmdTRnF1OFJCczVDSDFwMXk1YWFZSTN3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBHZVJScUNRTS9vL1EzWWgvYkQ3ck96U054VzlmUmVZUitXV0Y5U0xZblk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRyVkt0S0ZBQ3FVVU43cVpUMUJxWjF3dDJuM3BhbzNDejk5QUJZdnZGbW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkNOaHZRdVVtY3ZUc2tqbnZoUmpOUjRvTlVPVkgrZURHV1Nwc0ZRczlsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3E0YWZEaFZkVnlZR1ZLbDZPUnkzL3IvSS8vNUNoOTRKVjZNWjVtZGZUWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFkazdUYnQxbGtvQ3R0anN3NEN2UC8ybVZ3TTlBdktHMmd2UTlqQmtBVEhSNVpPZDBNZWF4L0hmazJtYzdGek9OQjNXaHJxRVVYUkM5SjhQQllNYmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzYsImFkdlNlY3JldEtleSI6IjJLaGVMVnRkQ2plbEFYbFhpL29Tckw3SENIeVBrSFc4MVo4aWpVMlR1TVU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMTMwNTg5NjI0NDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0FGODJDQjdFMTI2MzY0ODU5MDcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1ODA1NTQwMn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiUjdMRFRSV0wiLCJtZSI6eyJpZCI6IjEzMDU4OTYyNDQzOjk1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjM0NTc0MzcwMDY2NTM2Ojk1QGxpZCIsIm5hbWUiOiIuIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQYkMrWXNERU9HWHA4WUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGZm1OM3o3RWNKM09LQVNBMGdDdFo5bUxZOVhpbkxlZ2tSUXhMV2RBbW1RPSIsImFjY291bnRTaWduYXR1cmUiOiJWZHZ0dWZQZVF0bjhJc0dwWUxQNGc0Ti9UTHN2WEZyUVJEUUlVcVJ4RjMzaUJreGgxUU1qeW9peDFMSDBKYkhoTW00UGpjMktialc1NUNvbjZpelNqZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZTRhQmZXcVJsb1gvaDRvMGtkYk16TjdWTWdZQUlmUlhhaFphS0pya0UxUmpkUSt0TFJmbXRtVlNDSnRMMU5CQ0dTUmlDaVRWT0VmVkJRWXBYSXV3Z0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxMzA1ODk2MjQ0Mzo5NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSWDVqZDgreEhDZHppZ0VnTklBcldmWmkyUFY0cHkzb0pFVU1TMW5RSnBrIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1ODA1NTM5NywibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKeHQifQ==",
// add your Session Id 
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
