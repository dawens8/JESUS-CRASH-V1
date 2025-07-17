// dont fucking copie my bot thank you 
// created by GOD DAWENS HELLO GUYS 
//╔══════════════════╗
//║   𝐃𝐀𝐖𝐄𝐍𝐒 𝐁𝐎𝐘   ║
//║          ║
//  fuck you      ║
//╚══════════════════╝
// lib/antispam.js
const usersMap = new Map();

const LIMIT = 3;
const TIME_WINDOW = 8 * 1000;
const BLOCK_TIME = 60 * 1000;

function checkSpam(userId) {
  const now = Date.now();
  const userData = usersMap.get(userId);

  if (userData && userData.blockedUntil && now < userData.blockedUntil) {
    return { blocked: true };
  }

  if (!userData || now - userData.firstMsgTime > TIME_WINDOW) {
    usersMap.set(userId, {
      count: 1,
      firstMsgTime: now,
      blockedUntil: null,
    });
    return { blocked: false };
  }

  usersMap.get(userId).count += 1;

  if (usersMap.get(userId).count > LIMIT) {
    usersMap.get(userId).blockedUntil = now + BLOCK_TIME;
    return { blocked: true };
  }

  return { blocked: false };
}

module.exports = checkSpam;
