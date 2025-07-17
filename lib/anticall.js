const config = require('../config');

async function handleAnticall(sock, update) {
    if (config.ANTICALL !== 'true') return;

    for (const call of update) {
        const callerId = call.from;
        if (call.status === 'offer') {
            console.log(`Blocked a call from: ${callerId}`);
            await sock.sendMessage(callerId, {
                text: `🚫 *Don't fucking call the bot!*\nYou have been auto blocked.\n\nTo unblock, contact the owner: wa.me/${config.OWNER_NUMBER}`,
            });
            await sock.updateBlockStatus(callerId, 'block');
        }
    }
}

module.exports = handleAnticall;
