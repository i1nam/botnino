module.exports.config = {
    name: "تعليم",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ǺᎩᎧᏬᏰ",
    description: "تعليم نينو الكلام",
    commandCategory: "sim",
    usages: "[كلمة] | [ردها]",
    cooldowns: 2,
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    let { messageID, threadID, senderID, body } = event;
    let tid = threadID,
    mid = messageID;
    const input = args.join(" ").split("|");

    if (input.length < 2) {
        if(args.length == 0){
            return api.sendMessage("الاستخدام: تعليم [سؤال] | [اجابته]", tid, mid);
        } else if(args.join(" ").includes("|")) {
            return api.sendMessage("يرجى تقديم سؤال وإجابة.", tid, mid);
        } else {
            return api.sendMessage("الرجاء استخدام '|' حرف للفصل بين السؤال والجواب", tid, mid);
        }
    }

    const ask = encodeURIComponent(input[0].trim());
    const answer = encodeURIComponent(input[1].trim());

    try {
        const res = await axios.get(`https://simsimi.fun/api/v2/?mode=teach&lang=ar&message=${ask}&answer=${answer}`);
        const respond = res.data.success;
        if (res.data.error) {
            api.sendMessage(`Error: ${res.data.error}`, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        } else {
            api.sendMessage(respond, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage("حدث خطأ أثناء جلب البيانات.", tid, mid);
    }
};