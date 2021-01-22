
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://ir.zhangyue.com/zywx/activity/shareexchange?usr=S2258104&zysid=02Q9L6jxqTkyDszDicXdQq6Y%2F1y3AJ63vRKFGd3Pyb6nsQjsXnWHpTZ9XJv48ouH&p4=501658&p3=11090058`;
const method = `GET`;
const headers = {
'Accept' : `*/*`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Referer' : `https://servicewechat.com/wxd0f67760b952b3ad/37/page-frame.html`,
'Content-Type' : `application/json`,
'Host' : `ir.zhangyue.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.21(0x17001525) NetType/WIFI Language/zh_CN`,
'Accept-Language' : `zh-cn`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    if(response.body.indexOf("success") != -1){
    $notify("掌阅精选130
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://ir.zhangyue.com/zywx/activity/shareexchange?usr=S2258104&zysid=02Q9L6jxqTkyDszDicXdQq6Y%2F1y3AJ63vRKFGd3Pyb6nsQjsXnWHpTZ9XJv48ouH&p4=501658&p3=11090058`;
const method = `GET`;
const headers = {
'Accept' : `*/*`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Referer' : `https://servicewechat.com/wxd0f67760b952b3ad/37/page-frame.html`,
'Content-Type' : `application/json`,
'Host' : `ir.zhangyue.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.21(0x17001525) NetType/WIFI Language/zh_CN`,
'Accept-Language' : `zh-cn`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://ir.zhangyue.com/zywx/activity/shareexchange?usr=S2258104&zysid=02Q9L6jxqTkyDszDicXdQq6Y%2F1y3AJ63vRKFGd3Pyb6nsQjsXnWHpTZ9XJv48ouH&p4=501658&p3=11090058`;
const method = `GET`;
const headers = {
'Accept' : `*/*`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Referer' : `https://servicewechat.com/wxd0f67760b952b3ad/37/page-frame.html`,
'Content-Type' : `application/json`,
'Host' : `ir.zhangyue.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.21(0x17001525) NetType/WIFI Language/zh_CN`,
'Accept-Language' : `zh-cn`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    if(response.body.indexOf("success") != -1){
    $notify("掌阅精选130赠送币兑换", "", "成功👍")
  }if(response.body.indexOf("501") != -1){
    $notify("掌阅精选130", "", "暂时没有赠送币可以兑换")
  }else {
    $notify("掌阅精选130赠送币兑换", "失败👇", "可能要更新一下请求头信息了")
  }  
}
)
