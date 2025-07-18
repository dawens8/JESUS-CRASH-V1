const { cmd } = require('../command');

const emojis = ['😼', '😫', '😹', '😏', '😍', '🙄', '🤨'];

// 📥 .dame-un-grrr
cmd({
  pattern: 'dame un grrr',
  category: 'spam',
  react: '😼',
  desc: 'Reponn ak un que',
  filename: __filename,
}, async (conn, m, { reply }) => {
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  await reply(`un que ${emoji}`);
});

// 📥 .un-grrr
cmd({
  pattern: 'un-grrr',
  category: 'spam',
  react: '😹',
  desc: 'Reponn ak un que',
  filename: __filename,
}, async (conn, m, { reply }) => {
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  await reply(`un que un que ${emoji}`);
});
