const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "kickallfast",
    alias: ["kickall", "kickrush"],
    desc: "*⚡ ʀᴇᴍᴏᴠᴇ ᴀʟʟ ɴᴏɴ-ᴀᴅᴍɪɴ ᴍᴇᴍʙᴇʀs ᴍᴏᴍᴇɴᴛᴀɴᴇᴍᴇɴᴛ*",
    react: "💣",
    category: "group",
    filename: __filename,
}, 
async (conn, mek, m, {
    from, isGroup, senderNumber, groupMetadata, groupAdmins, isBotAdmins, reply
}) => {
    try {
        if (!isGroup) return reply("*📛 ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜsᴇᴅ ɪɴ ɢʀᴏᴜᴘs*");
        const botOwner = conn.user.id.split(":")[0];
        if (senderNumber !== botOwner) return reply("*⛔ ᴏɴʟʏ ᴛʜᴇ ʙᴏᴛ ᴏᴡɴᴇʀ ᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ*");
        if (!isBotAdmins) return reply("*🤖 ɪ ɴᴇᴇᴅ ᴛᴏ ʙᴇ ᴀɴ ᴀᴅᴍɪɴ ᴛᴏ ᴇxᴇᴄᴜᴛᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ*");

        const allParticipants = groupMetadata.participants;
        const botJid = conn.user.id;
        const nonAdmins = allParticipants
            .filter(p => !groupAdmins.includes(p.id) && p.id !== botJid);

        if (nonAdmins.length === 0) return reply("*ℹ️ ɴᴏ ᴍᴇᴍʙᴇʀs ᴛᴏ ʀᴇᴍᴏᴠᴇ ғʀᴏᴍ ᴛʜᴇ ɢʀᴏᴜᴘ*");

        const idsToKick = nonAdmins.map(p => p.id);
        await conn.groupParticipantsUpdate(from, idsToKick, "remove");

        reply(`*✅ ${idsToKick.length} ᴍᴇᴍʙʀᴇs ᴇxᴘᴜʟsᴇ́s ᴅᴜ ɢʀᴏᴜᴘᴇ ${groupMetadata.subject} ᴇɴ 1 sᴇᴄᴏɴᴅᴇ*`);
    } catch (err) {
        console.error("Erreur dans kickallfast:", err);
        reply("*⚠️ ᴀɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ ᴡʜɪʟᴇ ᴛʀʏɪɴɢ ᴛᴏ ʀᴇᴍᴏᴠᴇ ɴᴏɴ-ᴀᴅᴍɪɴ ᴍᴇᴍʙᴇʀs. ᴘʟᴇᴀsᴇ ᴛʀʏ ᴀɢᴀɪɴ*");
    }
});
