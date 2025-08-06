const { getAntiLeft } = require('./lib/db');

conn.ev.on('group-participants.update', async (update) => {
  const { id, participants, action } = update;

  if (action === 'remove') {
    const antiLeft = getAntiLeft(id);
    if (antiLeft) {
      for (const user of participants) {
        // You can add them back (if allowed)
        await conn.groupParticipantsUpdate(id, [user], 'add').catch(() => {});
        await conn.sendMessage(id, {
          text: `🚫 ${user.split('@')[0]} tried to leave but anti-left is enabled!`,
          mentions: [user]
        });
      }
    }
  }
});
