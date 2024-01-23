module.exports.config = {
    name: "autorestart",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "ǺᎩᎧᏬᏰ",
    description: "ايوب عمك معدب ربليت",
    usePrefix: true,
    commandCategory: "System",
    cooldowns: 0
}
module.exports.handleEvent = async function({ api, event, args, Users,Threads }) {
  const moment = require("moment-timezone");
  var timeNow = moment.tz("Africa/Casablanca").format("hh:mm:ss");
  var idad = global.config.ADMINBOT;
  console.log(timeNow)
  var seconds = moment.tz("Africa/Casablanca").format("ss");
  var timeRestart1 = `01:00:${seconds}`
  var timeRestart2 = `01:30:${seconds}`
  var timeRestart3 = `02:00:${seconds}`
  var timeRestart4 = `02:30:${seconds}`
  var timeRestart5 = `03:00:${seconds}`
  var timeRestart6 = `03:30:${seconds}`
  var timeRestart7 = `04:00:${seconds}`
  var timeRestart8 = `04:30:${seconds}`
  var timeRestart9 = `05:00:${seconds}`
  var timeRestart10 = `05:30:${seconds}`
  var timeRestart11 = `06:00:${seconds}`
  var timeRestart12 = `06:30:${seconds}`
  var timeRestart13 = `07:00:${seconds}`
  var timeRestart14 = `07:30:${seconds}`
  var timeRestart15 = `08:00:${seconds}`
  var timeRestart16 = `08:30:${seconds}`
  var timeRestart17 = `09:00:${seconds}`
  var timeRestart18 = `09:30:${seconds}`
  var timeRestart19 = `10:00:${seconds}`
  var timeRestart20 = `10:30:${seconds}`
  var timeRestart21 = `11:00:${seconds}`
  var timeRestart22 = `11:30:${seconds}`
  var timeRestart23 = `12:00:${seconds}`
  var timeRestart24 = `12:30:${seconds}`
  var timeRestart25 = `13:00:${seconds}`
  var timeRestart26 = `13:30:${seconds}`
  var timeRestart27 = `14:00:${seconds}`
  var timeRestart28 = `14:30:${seconds}`
  var timeRestart29 = `15:00:${seconds}`
  var timeRestart30 = `15:30:${seconds}`
  var timeRestart31 = `16:00:${seconds}`
  var timeRestart32 = `16:30:${seconds}`
  var timeRestart33 = `17:00:${seconds}`
  var timeRestart34 = `17:30:${seconds}`
  var timeRestart35 = `18:00:${seconds}`
  var timeRestart36 = `18:30:${seconds}`
  var timeRestart37 = `19:00:${seconds}`
  var timeRestart38 = `19:30:${seconds}`
  var timeRestart39 = `20:00:${seconds}`
  var timeRestart40 = `20:30:${seconds}`
  var timeRestart41 = `21:00:${seconds}`
  var timeRestart42 = `21:30:${seconds}`
    var timeRestart43 = `22:00:${seconds}`
  var timeRestart44 = `22:30:${seconds}`
  var timeRestart45 = `23:00:${seconds}`
  var timeRestart46 = `23:30:${seconds}`
  var timeRestart47 = `24:00:${seconds}`
  var timeRestart48 = `24:30:${seconds}`

  //console.log(timeNowRestart)
    if ((timeNow == timeRestart1 || timeNow == timeRestart2 || timeNow == timeRestart3|| timeNow == timeRestart4|| timeNow == timeRestart5|| timeNow == timeRestart6 || timeNow == timeRestart7|| timeNow == timeRestart8 || timeNow == timeRestart9 || timeNow == timeRestart10 || timeNow == timeRestart11 || timeNow == timeRestart12 || timeNow == timeRestart13 || timeNow == timeRestart14 || timeNow == timeRestart15 || timeNow == timeRestart16 || timeNow == timeRestart17 || timeNow == timeRestart18 || timeNow == timeRestart19 || timeNow == timeRestart20 || timeNow == timeRestart21 || timeNow == timeRestart22 || timeNow == timeRestart23 || timeNow == timeRestar24 || timeNow == timeRestart25 || timeNow == timeRestart26 || timeNow == timeRestart27 || timeNow == timeRestart28 || timeNow == timeRestart29 || timeNow == timeRestart30 || timeNow == timeRestart31 || timeNow == timeRestart32 || timeNow == timeRestart33 || timeNow == timeRestart34 || timeNow == timeRestart35 || timeNow == timeRestart36 || timeNow == timeRestart37 || timeNow == timeRestart38 || timeNow == timeRestart39 || timeNow == timeRestart40 || timeNow == timeRestart41 || timeNow == timeRestart42 || timeNow == timeRestart43 || timeNow == timeRestart44 || timeNow == timeRestart45 || timeNow == timeRestart46 || timeNow == timeRestart47 || timeNow == timeRestar48) && seconds < 6 ) {
    for( let ad of idad) {
  setTimeout(() =>
          api.sendMessage(`الآن: ${timeNow}\n سيبدأ الروبوت في إعادة التشغيل`,ad, () =>process.exit(1)), 1000);
    }
    }
}
module.exports.run = async  ({ api, event, args }) => {
      const moment = require("moment-timezone");
      var timeNow = moment.tz("Africa/Casablanca").format("hh:mm:ss");
api.sendMessage(`${timeNow}`, event.threadID)
}