
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://www.pdawiki.com/forum/plugin.php?id=mogu_lottery:result`;
const method = `POST`;
const headers = {
'X-Requested-With' : `XMLHttpRequest`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'Content-Type' : `application/x-www-form-urlencoded; charset=UTF-8`,
'Origin' : `https://www.pdawiki.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.7(0x18000731) NetType/WIFI Language/zh_CN`,
'Cookie' : `usoK_2132_connect_is_bind=0; usoK_2132_lastact=1626088982%09plugin.php%09; usoK_2132_sid=s72iDt; usoK_2132_auth=4a7cYyD8D0%2FvgO66At1%2FvULVOyop%2BMMgqqXlDfAZ4lFQ0BPZyvqBhSEOiSMyeEtmc0y3TZldFKjfyQMshEjhoWtl%2Bjg; usoK_2132_checkfollow=1; usoK_2132_lastcheckfeed=335060%7C1626088976; usoK_2132_lip=139.162.33.147%2C1626087602; usoK_2132_ulastactivity=46a33JyIJr8FhwlwvfSDVMi2fkNvn4JwJOo3XLcmrfGwZUx1NReh; usoK_2132_sendmail=1; usoK_2132_marks=e5ea1e947326d1410fc79712d2c90b4b; usoK_2132_lastvisit=1626085240; usoK_2132_saltkey=VK39X1zA`,
'Host' : `www.pdawiki.com`,
'Referer' : `https://www.pdawiki.com/forum/plugin.php?id=mogu_lottery:home&actid=1`,
'Accept-Language' : `zh-cn`,
'Accept' : `application/json, text/javascript, */*; q=0.01`
};
const body = `actid=1&lottery=&formhash=38bfcbdd`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};
$task.fetch(myRequest).then(response => {  
  if(response.body.indexOf("congrats") != -1){
    $notify("今日pdawiki抽奖", "成功👍", "具体奖励请到网站查看")
  }if(response.body.indexOf('"result":0') != -1){
    $notify("今日pdawiki抽奖", "失败👇🏻", "今日抽奖次数已经用完🤞")
  }if(response.body.indexOf("空") != -1){
    $notify("今日pdawiki抽奖", "成功👍", "很遗憾你什么也没抽到")
  }
}
)
