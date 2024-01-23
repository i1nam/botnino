module.exports = async ({ api }) => {
  const logger = require('./utils/log');
  const cron = require('node-cron');
  const fs = require('fs');
  const yandeva = {
    autoRestart: {
      status: true,
      time: 40, //40 minutes
      note: '𝐓𝐨 𝐚𝐯𝐨𝐢𝐝 𝐩𝐫𝐨𝐛𝐥𝐞𝐦𝐬, 𝐞𝐧𝐚𝐛𝐥𝐞 𝐩𝐞𝐫𝐢𝐨𝐝𝐢𝐜 𝐛𝐨𝐭 𝐫𝐞𝐬𝐭𝐚𝐫𝐭𝐬'
    },
    accpetPending: {
      status: false,
      time: 30, //30 minutes
      note: '𝐀𝐩𝐩𝐫𝐨𝐯𝐞 𝐰𝐚𝐢𝐭𝐢𝐧𝐠 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬 𝐚𝐟𝐭𝐞𝐫 𝐚 𝐜𝐞𝐫𝐭𝐚𝐢𝐧 𝐭𝐢𝐦𝐞'
    }
  }
  function autoRestart(config) {
    if (config.status) {
      setInterval(async () => {
        logger(`𝐒𝐭𝐚𝐫𝐭 𝐫𝐞𝐛𝐨𝐨𝐭𝐢𝐧𝐠 𝐭𝐡𝐞 𝐬𝐲𝐬𝐭𝐞𝐦!`, "[ Auto Restart ]")
        process.exit(1)
      }, config.time * 60 * 1000)
    }
  }
  function accpetPending(config) {
    if (config.status) {
      setInterval(async () => {
        const list = [
          ...(await api.getThreadList(1, null, ['PENDING'])),
          ...(await api.getThreadList(1, null, ['OTHER']))
        ];
        if (list[0]) {
          api.sendMessage('𝐘𝐨𝐮 𝐡𝐚𝐯𝐞 𝐛𝐞𝐞𝐧 𝐚𝐩𝐩𝐫𝐨𝐯𝐞𝐝 𝐟𝐨𝐫 𝐭𝐡𝐞 𝐪𝐮𝐞𝐮𝐞. (𝐓𝐡𝐢𝐬 𝐢𝐬 𝐚𝐧 𝐚𝐮𝐭𝐨𝐦𝐚𝐭𝐞𝐝 𝐦𝐞𝐬𝐬𝐚𝐠𝐞)', list[0].threadID);
        }
      }, config.time * 60 * 1000)
    }
  }
  autoRestart(yandeva.autoRestart)
  accpetPending(yandeva.accpetPending)

  cron.schedule('*/30 * * * *', () => {
    api.getThreadList(25, null, ['INBOX'], async (err, data) => {
      if (err) return console.error("Error [Thread List Cron]: " + err);
      let i = 0;
      let j = 0;

      async function message(thread) {
        try {
          api.sendMessage(`› 𝐓𝐡𝐚𝐧𝐤𝐬 𝐟𝐨𝐫 𝐮𝐬𝐢𝐧𝐠 𝐦𝐲 𝐛𝐨𝐭!\n${global.config.OWNERLINK}`, thread.threadID, (err) => { if (err) return });
        } catch (error) {
          console.error("𝐄𝐫𝐫𝐨𝐫 𝐬𝐞𝐧𝐝𝐢𝐧𝐠 𝐚 𝐦𝐞𝐬𝐬𝐚𝐠𝐞:", error);
        }
      }

      while (j < 20 && i < data.length) {
        if (data[i].isGroup && data[i].name != data[i].threadID) {
          await message(data[i]);
          j++;
        }
        i++;
      }
    });
  }, {
    scheduled: true,
    timezone: "Asia/Dhaka"
  });

  cron.schedule('*/25 * * * *', () => {
    api.getThreadList(25, null, ['INBOX'], async (err, data) => {
      if (err) return console.error("Error [Thread List Cron]: " + err);
      let i = 0;
      let j = 0;

      async function message(thread) {
        try {
          api.sendMessage(`›কেমন আছো সবাই? (ᴗ˳ᴗ)`, thread.threadID, (err) => { if (err) return });
        } catch (error) {
          console.error("Error sending a message:", error);
        }
      }

      while (j < 20 && i < data.length) {
        if (data[i].isGroup && data[i].name != data[i].threadID) {
          await message(data[i]);
          j++;
        }
        i++;
      }
    });
  }, {
    scheduled: true,
    timezone: "Asia/Dhaka"
  });
};
