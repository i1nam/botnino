function _0x182f(){const _0x5a678f=['OTPKEY','98tWVFCa','25564RJTGGl','writeFileSync','3874JrJdgh','continue','login-approval','Nhập\x20mã\x20xác\x20minh\x202\x20lớp:','872MQYeRm','EMAIL','APPSTATEPATH','15ukYGYb','@miraipr0ject/fca-unofficial','replace','stdin','3339ZTGKLb','1206880uPnjbJ','./config.json','silent','stdout','869iCJPBy','102684ECdQkY','close','line','fs-extra','getAppState','error','7528545CxxTWZ','length','532JixzCc','2006478NiEHpM','argv','readline','PASSWORD'];_0x182f=function(){return _0x5a678f;};return _0x182f();}const _0x5e6e63=_0x3578;(function(_0x4eccb2,_0x19e096){const _0x394624=_0x3578,_0x505352=_0x4eccb2();while(!![]){try{const _0x78b448=-parseInt(_0x394624(0x20a))/0x1*(parseInt(_0x394624(0x20d))/0x2)+parseInt(_0x394624(0x1f6))/0x3*(-parseInt(_0x394624(0x204))/0x4)+parseInt(_0x394624(0x1f2))/0x5*(parseInt(_0x394624(0x205))/0x6)+-parseInt(_0x394624(0x20b))/0x7*(parseInt(_0x394624(0x1ef))/0x8)+parseInt(_0x394624(0x202))/0x9+parseInt(_0x394624(0x1f7))/0xa+parseInt(_0x394624(0x1fb))/0xb*(-parseInt(_0x394624(0x1fc))/0xc);if(_0x78b448===_0x19e096)break;else _0x505352['push'](_0x505352['shift']());}catch(_0x476f17){_0x505352['push'](_0x505352['shift']());}}}(_0x182f,0x85e9a));const fs=require(_0x5e6e63(0x1ff)),login=require(_0x5e6e63(0x1f3)),readline=require(_0x5e6e63(0x207)),totp=require('totp-generator');let configPath='',argv=process[_0x5e6e63(0x206)]['slice'](0x2);if(argv[_0x5e6e63(0x203)]!==0x0)configPath=argv[0x0];else configPath=_0x5e6e63(0x1f8);var rl=readline['createInterface']({'input':process[_0x5e6e63(0x1f5)],'output':process[_0x5e6e63(0x1fa)]});const option={'logLevel':_0x5e6e63(0x1f9),'forceLogin':!![],'userAgent':'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/90.0.4430.72\x20Safari/537.36'},config=require('./'+configPath);let email=config[_0x5e6e63(0x1f0)],password=config[_0x5e6e63(0x208)],otpkey=config[_0x5e6e63(0x209)][_0x5e6e63(0x1f4)](/\s+/g,'')['toLowerCase']();function _0x3578(_0x5cb313,_0xa9eed6){const _0x182f62=_0x182f();return _0x3578=function(_0x357871,_0x100e26){_0x357871=_0x357871-0x1ed;let _0xdf4fe1=_0x182f62[_0x357871];return _0xdf4fe1;},_0x3578(_0x5cb313,_0xa9eed6);}login({'email':email,'password':password},option,(_0x37d567,_0x3004b2)=>{const _0x22e678=_0x5e6e63;if(_0x37d567){switch(_0x37d567['error']){case _0x22e678(0x1ed):if(otpkey)_0x37d567['continue'](totp(otpkey));else console['log'](_0x22e678(0x1ee)),rl['on'](_0x22e678(0x1fe),_0x23f31c=>{const _0x2bab90=_0x22e678;_0x37d567[_0x2bab90(0x20e)](_0x23f31c),rl[_0x2bab90(0x1fd)]();});break;default:console[_0x22e678(0x201)](_0x37d567),process['exit'](0x1);}return;}const _0x3aefc2=JSON['stringify'](_0x3004b2[_0x22e678(0x200)]());fs[_0x22e678(0x20c)]('./'+config[_0x22e678(0x1f1)],_0x3aefc2),console['log']('Đã\x20ghi\x20xong\x20appstate!'),process['exit'](0x0);});