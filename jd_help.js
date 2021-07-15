/*

https://wbbny.m.jd.com/babelDiy/Zeus/2rtpffK8wqNyPBH6wyUDuBKoAbCt/index.html

cron 14/41 7-14 * * * https://raw.githubusercontent.com/smiek2221/scripts/master/jd_summer_movement_help.js

*/


const $ = new Env('燃动夏季_SH助力');
const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';

const https = require('https');
const fs = require('fs/promises');
const { R_OK } = require('fs').constants;
const vm = require('vm');
let smashUtils;

const UA =  'JD4iPhone/167724 (iPhone; iOS 14.2; Scale/3.00)'
// 助力码
$.ShInviteLists = [''];

class MovementFaker {
  constructor(cookie) {
      this['cookie'] = cookie;
      this['ua'] = UA;
  }
  async ['run']() {
      var _0x25b230 = {
          'qiaSw': 'utf-8',
          'iMWZM': function(_0x2ee856, _0x13faed) {
              return _0x2ee856 !== _0x13faed;
          },
          'Khkhw': 'http',
          'fIYiA': 'error',
          'hjRop': function(_0x10df05, _0x4ff726) {
              return _0x10df05 !== _0x4ff726;
          },
          'mvkxF': 'iUVzE',
          'OiyFH': function(_0x377419, _0x3bc980) {
              return _0x377419 + _0x3bc980;
          },
          'sEUli': function(_0x502104, _0x2e2c24) {
              return _0x502104 * _0x2e2c24;
          },
          'NYaGc': function(_0x1cd38f, _0x3b1fa2) {
              return _0x1cd38f || _0x3b1fa2;
          },
          'fvHea': 'OY217hPageh5'
      };
      if (!smashUtils) {
          if (_0x25b230['hjRop']('iUVzE', _0x25b230['mvkxF'])) {
              var _0x3f7fcd = {
                  'lIhRj': _0x25b230['qiaSw'],
                  'cjAHq': 'end',
                  'fFIwV': function(_0x462d09, _0x1d8b08) {
                      return _0x25b230['iMWZM'](_0x462d09, _0x1d8b08);
                  },
                  'YxKiN': _0x25b230['Khkhw'],
                  'hbhqG': function(_0x2c27fa, _0x174e11) {
                      return _0x2c27fa + _0x174e11;
                  },
                  'IEqll': _0x25b230['fIYiA']
              };
              return new Promise((_0x59823c, _0x1cbc14) => {
                  var _0x531f1c = {
                      'bbaFq': _0x3f7fcd['lIhRj'],
                      'BeygC': 'error',
                      'UXass': _0x3f7fcd['cjAHq']
                  };
                  const _0x38b912 = _0x3f7fcd['fFIwV'](url['indexOf'](_0x3f7fcd['YxKiN']), 0x0) ? 'https:' : '';
                  const _0x6e1d40 = https['get'](_0x3f7fcd['hbhqG'](_0x38b912, url), _0x3abdca => {
                      _0x3abdca['setEncoding'](_0x531f1c['bbaFq']);
                      let _0x53de25 = '';
                      _0x3abdca['on'](_0x531f1c['BeygC'], _0x1cbc14);
                      _0x3abdca['on']('data', _0x5eccaf => _0x53de25 += _0x5eccaf);
                      _0x3abdca['on'](_0x531f1c['UXass'], () => _0x59823c(_0x53de25));
                  });
                  _0x6e1d40['on'](_0x3f7fcd['IEqll'], _0x1cbc14);
                  _0x6e1d40['end']();
              });
          } else {
              await this['init']();
          }
      }
      var _0x15f544 = Math['floor'](_0x25b230['OiyFH'](0x989680, _0x25b230['sEUli'](0x55d4a80, Math['random']())))['toString']();
      var _0x587268 = smashUtils['get_risk_result']({
          'id': _0x15f544,
          'data': {
              'random': _0x15f544
          }
      })['log'];
      var _0x253a3f = JSON['stringify']({
          'extraData': {
              'log': _0x25b230['NYaGc'](_0x587268, -0x1),
              'sceneid': _0x25b230['fvHea']
          },
          'random': _0x15f544
      });
      return _0x253a3f;
  }
  async ['init']() {
      var _0x397d15 = {
          'tYBgM': function(_0x478eab, _0x4a0331) {
              return _0x478eab(_0x4a0331);
          },
          'EqYOs': 'MovementFaker',
          'IeNUH': 'https://wbbny.m.jd.com/babelDiy/Zeus/2rtpffK8wqNyPBH6wyUDuBKoAbCt/index.html',
          'rrNDa': function(_0x22da25, _0xb0fbeb) {
              return _0x22da25 !== _0xb0fbeb;
          },
          'kmSby': 'PwHLj',
          'SClOJ': '50085',
          'ZqWyl': 'OY217hPageh5'
      };
      console['time'](_0x397d15['EqYOs']);
      process['chdir'](__dirname);
      const _0x3176eb = _0x397d15['IeNUH'];
      const _0x590c8f = /<script type="text\/javascript" src="([^><]+\/(app\.\w+\.js))\">/gm;
      const _0x1fea3 = await MovementFaker['httpGet'](_0x3176eb);
      const _0xc41b09 = _0x590c8f['exec'](_0x1fea3);
      if (_0xc41b09) {
          if (_0x397d15['rrNDa'](_0x397d15['kmSby'], 'PwHLj')) {
              this['cookie'] = cookie;
              this['ua'] = _0x397d15['tYBgM'](require, './USER_AGENTS.js')['USER_AGENT'];
          } else {
              const [, _0x4cd127, _0x2e7e91] = _0xc41b09;
              const _0x1dbb42 = await this['getJSContent'](_0x2e7e91, _0x4cd127);
              const _0x5ebc95 = new Function();
              const _0x29d2e5 = {
                  'window': {
                      'addEventListener': _0x5ebc95
                  },
                  'document': {
                      'addEventListener': _0x5ebc95,
                      'removeEventListener': _0x5ebc95,
                      'cookie': this['cookie']
                  },
                  'navigator': {
                      'userAgent': this['ua']
                  }
              };
              vm['createContext'](_0x29d2e5);
              vm['runInContext'](_0x1dbb42, _0x29d2e5);
              smashUtils = _0x29d2e5['window']['smashUtils'];
              smashUtils['init']({
                  'appid': _0x397d15['SClOJ'],
                  'sceneid': _0x397d15['ZqWyl']
              });
          }
      }
      console['timeEnd'](_0x397d15['EqYOs']);
  }
  async ['getJSContent'](_0x4c49c6, _0x4a635d) {
      var _0x550264 = {
          'iqTRo': 'Module not found.',
          'MAtMG': function(_0x495e09, _0x3f230d) {
              return _0x495e09 !== _0x3f230d;
          },
          'RDNgA': 'CtcEd',
          'sungo': 'utf8',
          'TbHUX': function(_0x385ed0, _0x21f578) {
              return _0x385ed0 && _0x21f578;
          }
      };
      try {
          if (_0x550264['MAtMG'](_0x550264['RDNgA'], _0x550264['RDNgA'])) {
              throw new Error(_0x550264['iqTRo']);
          } else {
              await fs['access'](_0x4c49c6, R_OK);
              const _0x106f20 = await fs['readFile'](_0x4c49c6, {
                  'encoding': _0x550264['sungo']
              });
              return _0x106f20;
          }
      } catch (_0x34d8b3) {
          const _0x3e4f16 = '!function(n){var r={};function o(e){if(r[e])';
          const _0x2b1ae6 = /(__webpack_require__\(__webpack_require__\.s=)(\d+)(?=\)})/;
          const _0x14de9f = 0x164;
          let _0x554f49 = await MovementFaker['httpGet'](_0x4a635d);
          const _0x37eb53 = _0x554f49['indexOf'](_0x3e4f16, 0x1);
          const _0x484054 = _0x2b1ae6['test'](_0x554f49);
          if (!_0x550264['TbHUX'](_0x37eb53, _0x484054)) {
              throw new Error('Module not found.');
          }
          _0x554f49 = _0x554f49['replace'](_0x2b1ae6, '$1' + _0x14de9f);
          fs['writeFile'](_0x4c49c6, _0x554f49);
          return _0x554f49;
      }
  }
  static['httpGet'](_0x3df4a5) {
      var _0x53b6ca = {
          'KFFWa': 'utf-8',
          'DCvBk': 'data',
          'CqGnN': 'http',
          'xuEDC': 'error'
      };
      return new Promise((_0x5e1b9b, _0x30770b) => {
          var _0x248ccd = {
              'QKwvO': _0x53b6ca['KFFWa'],
              'lBpVX': 'error',
              'sKYGJ': _0x53b6ca['DCvBk'],
              'rLBka': 'end'
          };
          const _0x5acde4 = _0x3df4a5['indexOf'](_0x53b6ca['CqGnN']) !== 0x0 ? 'https:' : '';
          const _0x512f15 = https['get'](_0x5acde4 + _0x3df4a5, _0x3b2daf => {
              _0x3b2daf['setEncoding'](_0x248ccd['QKwvO']);
              let _0x49edd9 = '';
              _0x3b2daf['on'](_0x248ccd['lBpVX'], _0x30770b);
              _0x3b2daf['on'](_0x248ccd['sKYGJ'], _0x436add => _0x49edd9 += _0x436add);
              _0x3b2daf['on'](_0x248ccd['rLBka'], () => _0x5e1b9b(_0x49edd9));
          });
          _0x512f15['on'](_0x53b6ca['xuEDC'], _0x30770b);
          _0x512f15['end']();
      });
  }
}
async function getBody() {
  const _0x1a8221 = new MovementFaker($['cookie']);
  const _0x1d0edb = await _0x1a8221['run']();
  return _0x1d0edb;
};
let cookiesArr = [

];
$.cookie = '';
$.secretpInfo = {};
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => { };
} else {
  cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}

$.appid = 'o2_act';
!(async () => {
  if (!cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', { "open-url": "https://bean.m.jd.com/bean/signIndex.action" });
    return;
  }
  for (let i = 0; i < cookiesArr.length; i++) {
    $.cookie = cookiesArr[i];
    $.canHelp = true;
    $.UserName = decodeURIComponent($.cookie.match(/pt_pin=([^; ]+)(?=;?)/) && $.cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);

    $.index = i + 1;
    for (let i = 0; i < $.ShInviteLists.length && $.canHelp; i++) {
      console.log(`${$.UserName} 去助力SH码 ${$.ShInviteLists[i]}`);
      $.inviteId = $.ShInviteLists[i];
      await takePostRequest('shHelp');
      await $.wait(1000);
    }
     $.canHelp = true;
  }


})()
  .catch((e) => {
    $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
  })
  .finally(() => {
    $.done();
  })


async function movement() {
  try {
    $.signSingle = {};
    $.homeData = {};
    $.secretp = ``;
    $.taskList = [];
    $.shopSign = ``;
    $.userInfo = ''
    $.hundred = false
    if (new Date().getUTCHours() + 8 >= 8) {
      console.log('\n百元守卫战')
      if(Number(summer_movement_ShHelpFlag) === 1 || Number(summer_movement_ShHelpFlag) === 2){
        $.Shend = false
        await $.wait(1000);
        await takePostRequest('olypicgames_guradHome');
        await $.wait(1000);
        if($.Shend){
          await takePostRequest('olympicgames_receiveCash');
          await $.wait(1000);
        }
      }
    }else{
      console.log('\n未开启百元守卫战')
    }

  } catch (e) {
    $.logErr(e)
  }
}

async function takePostRequest(type) {
  let body = ``;
  let myRequest = ``;
  switch (type) {
    case 'olympicgames_home':
      body = `functionId=olympicgames_home&body={}&client=wh5&clientVersion=1.0.0&appid=${$.appid}`;
      myRequest = await getPostRequest(`olympicgames_home`, body);
      break;
    case 'olympicgames_receiveCash':
      let id = 6
      if ($.Shend) id = 4
      body = `functionId=olympicgames_receiveCash&body={"type":${id}}&client=wh5&clientVersion=1.0.0&appid=${$.appid}`;
      myRequest = await getPostRequest(`olympicgames_receiveCash`, body);
      break
    case 'olypicgames_guradHome':
      body = `functionId=olypicgames_guradHome&body={}&client=wh5&clientVersion=1.0.0&appid=${$.appid}`;
      myRequest = await getPostRequest(`olypicgames_guradHome`, body);
      break
    case 'shHelp':
    case 'help':
      body = await getPostBody(type);
      myRequest = await getPostRequest(`zoo_collectScore`, body);
      break;
    default:
      console.log(`错误${type}`);
  }
  if (myRequest) {
    return new Promise(async resolve => {
      $.post(myRequest, (err, resp, data) => {
        try {
          // console.log(data);
          dealReturn(type, data);
        } catch (e) {
          $.logErr(e, resp)
        } finally {
          resolve();
        }
      })
    })
  }
}


async function dealReturn(type, res) {
  try {
    data = JSON.parse(res);
  } catch (e) {
    console.log(`返回异常：${res}`);
    return;
  }
  switch (type) {
    case 'olympicgames_home':
    if (data.code === 0 && data.data && data.data.result) {
        if (data.data['bizCode'] === 0) {
          $.homeData = data.data;
          $.secretpInfo[$.UserName] = true
        }
      } else if (data.data && data.data.bizMsg) {
        console.log(data.data.bizMsg);
      } else {
        console.log(res);
      }
      break;
    case 'olympicgames_receiveCash':
      if (data.code === 0 && data.data && data.data.result) {
        if (data.data.result.couponVO) {
          console.log('升级成功')
          let res = data.data.result.couponVO
          console.log(`获得[${res.couponName}]优惠券：${res.usageThreshold} 优惠：${res.quota} 时间：${res.useTimeRange}`);
        }else if(data.data.result.userActBaseVO){
          console.log('结算结果')
          let res = data.data.result.userActBaseVO
          console.log(`当前金额：${res.totalMoney}\n${JSON.stringify(res)}`);
        }
      } else if (data.data && data.data.bizMsg) {
        console.log(data.data.bizMsg);
      } else {
        console.log(res);
      }
      break;
    case 'olypicgames_guradHome':
      if (data.data && data.data.bizCode === 0) {
        console.log(`SH互助码：${data.data.result && data.data.result.inviteId || '助力已满，获取助力码失败\n'}`);
        if (data.data.result && data.data.result.inviteId) {
          let look = data.data.result
          look.assistanceVOList = (look.assistanceVOList && look.assistanceVOList.length) || 0
          console.log(JSON.stringify(look))
          if (look.inviteId) $.ShInviteList.push(look.inviteId);
          console.log(`守护金额：${Number(look.activityLeftAmount || 0)} 助力次数：${look.assistanceVOList} 护盾剩余：${timeFn(Number(look.guardLeftSeconds || 0) * 1000)} 离结束剩：${timeFn(Number(look.activityLeftSeconds || 0) * 1000)}`)
          if(look.activityLeftSeconds == 0) $.Shend = true
        }
        $.taskList = data.data.result && data.data.result.taskVos || [];
      } else if (data.data && data.data.bizMsg) {
        console.log(data.data.bizMsg);
      } else {
        console.log(res);
      }
      break;
    case 'shHelp':
    case 'help':
      if (data.data && data.data.bizCode === 0) {
        let cash = ''
        if (data.data.result.hongBaoVO && data.data.result.hongBaoVO.withdrawCash) cash = `，并获得${Number(data.data.result.hongBaoVO.withdrawCash)}红包`
        console.log(`助力成功${cash}`);
      } else if (data.data && data.data.bizMsg) {
        if (data.data.bizMsg.indexOf('今天用完所有') > -1) {
          $.canHelp = false;
        }
        console.log(data.data.bizMsg);
      } else {
        console.log(res);
      }
      break;
    default:
      console.log(`未判断的异常${type}`);
  }
}

async function getPostBody(type) {
  return new Promise(async resolve => {
    let taskBody = '';
    try {
      const log = await getBody()
      if (type === 'help' || type === 'shHelp') {
        taskBody = `functionId=olympicgames_assist&body=${JSON.stringify({"inviteId":$.inviteId,"type": "confirm","ss" :log})}&client=wh5&clientVersion=1.0.0&appid=${$.appid}`
      }
    } catch (e) {
      $.logErr(e)
    } finally {
      resolve(taskBody);
    }
  })
}

async function getPostRequest(type, body) {
  let url = `https://api.m.jd.com/client.action?advId=${type}`;
  const method = `POST`;
  const headers = {
    "Accept": "application/json",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    'Cookie': $.cookie,
    "Origin": "https://wbbny.m.jd.com",
    "Referer": "https://wbbny.m.jd.com/",
    "User-Agent": UA,

  };
  return {url: url, method: method, headers: headers, body: body};
}



function getAuthorShareCode(url) {
  return new Promise(async resolve => {
    const options = {
      "url": `${url}?${new Date()}`,
      "timeout": 10000,
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"
      }
    };
    if ($.isNode() && process.env.TG_PROXY_HOST && process.env.TG_PROXY_PORT) {
      const tunnel = require("tunnel");
      const agent = {
        https: tunnel.httpsOverHttp({
          proxy: {
            host: process.env.TG_PROXY_HOST,
            port: process.env.TG_PROXY_PORT * 1
          }
        })
      }
      Object.assign(options, { agent })
    }
    let res = []
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
        } else {
          if (data) res = JSON.parse(data)
        }
      } catch (e) {
        // $.logErr(e, resp)
      } finally {
        resolve(res || []);
      }
    })
    await $.wait(10000)
    resolve(res);
  })
}

/**
 * 随机从一数组里面取
 * @param arr
 * @param count
 * @returns {Buffer}
 */
 function getRandomArrayElements(arr, count) {
  var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}

// 随机数
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

// 计算时间
function timeFn(dateBegin) {
  //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
  var dateEnd = new Date(0);//获取当前时间
  var dateDiff = dateBegin - dateEnd.getTime();//时间差的毫秒数
  var leave1 = dateDiff % (24 * 3600 * 1000)    //计算天数后剩余的毫秒数
  var hours = Math.floor(leave1 / (3600 * 1000))//计算出小时数
  //计算相差分钟数
  var leave2 = leave1 % (3600 * 1000)    //计算小时数后剩余的毫秒数
  var minutes = Math.floor(leave2 / (60 * 1000))//计算相差分钟数
  //计算相差秒数
  var leave3 = leave2 % (60 * 1000)      //计算分钟数后剩余的毫秒数
  var seconds = Math.round(leave3 / 1000)

  var timeFn = hours + ":" + minutes + ":" + seconds;
  return timeFn;
}

// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
