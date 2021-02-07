

/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://du.163.com/activity/201907/activityCenter/sign.json`;
const method = `POST`;
const headers = {
'Accept' : `application/json, text/plain, */*`,
'Origin' : `https://du.163.com`,
'Accept-Encoding' : `gzip, deflate, br`,
'Cookie' : `JSESSIONID-WNYD-WEB=1611490024205-654C348ECF052896FEF15C.hzabj-snailprotocolpre; X-Auth-Token=0bc75b8e6cde4b18882fb647123f83be; _xsrf=cd0bcc6b-7abd-4ef4-b1cc-c78ce37201c5; _cid=cce6266a-64f9-4757-affa-64c1371819a7`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Host' : `du.163.com`,
'Connection' : `keep-alive`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 NEJSBridge/2.0 NeteaseSnailReader/1.9.8 NetType/WIFI (e87f3e9009abd1ec281410e4a92c5bf2;appstore)`,
'Referer' : `https://du.163.com/fe/client/welfare-exchange/dist/index.html`,
'Accept-Language' : `zh-cn`
};
const body = `csrfToken=cd0bcc6b-7abd-4ef4-b1cc-c78ce37201c5`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};
$task.fetch(myRequest).then(response => {
if(response.body.indexOf("成功") != -1){
    $notify("今日蜗牛读书签到", "", "成功👍")
  }if(response.body.indexOf("签过") != -1){
    $notify("今日蜗牛读书签到", "失败👇🏻", "今天已经签过到了🤞")
  }
}
)
