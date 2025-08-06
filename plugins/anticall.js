const { cmd } = require('../command');
const config = require("../config");

cmd({
  pattern: "anticall",
  alias: ["callblock", "rejectcall"],
  desc: "Enable or disable call blocking.",
  category: "owner",
  use: "anticall on/off",
  filename: __filename,
  fromMe: true, // Only bot owner can run this
  async: true,

  execute: async (m, { text, Matrix }) => {
    const lowerText = text.trim().toLowerCase();
    let responseMessage;

    if (lowerText === "on") {
      config.REJECT_CALL = true;
      responseMessage = "✅ Anti-Call has been *enabled*.";
    } else if (lowerText === "off") {
      config.REJECT_CALL = false;
      responseMessage = "🚫 Anti-Call has been *disabled*.";
    } else {
      responseMessage = "❓ Usage:\n- `anticall on`: Enable Anti-Call\n- `anticall off`: Disable Anti-Call";
    }

    await m.reply(responseMessage);
  },
});
