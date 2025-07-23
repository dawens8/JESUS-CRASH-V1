const { cmd } = require('../command');

cmd({
  pattern: 'antileft',
  desc: 'Prevent users from leaving the group',
  category: 'group',
  filename: __filename
}, async (message, match, { isGroup, isAdmin, botAdmin }) => {
  if (!isGroup) return message.reply('❗ This command can only be used in groups.');
  if (!isAdmin) return message.reply('🔒 Only group admins can use this command.');
  if (!botAdmin) return message.reply('🤖 I need admin rights to manage anti-left feature.');

  const db = require('../lib/db'); // Make sure you have a database or JSON file
  const groupId = message.chat;
  
  if (match === 'on') {
    db.setAntiLeft(groupId, true);
    return message.reply('✅ Anti-left is now *enabled*.');
  } else if (match === 'off') {
    db.setAntiLeft(groupId, false);
    return message.reply('🚫 Anti-left is now *disabled*.');
  } else {
    return message.reply('⚙️ Usage: `.antileft on` or `.antileft off`');
  }
});
