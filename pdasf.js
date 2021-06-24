
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://www.pdawiki.com/forum/plugin.php?id=are_yqs_money:spend&typeid=2&formhash=b4a3f602`;
const method = `GET`;
const headers = {
'Cookie' : `fn_switch_cookie=1; usoK_2132_checkpm=1; usoK_2132_connect_is_bind=0; usoK_2132_lastact=1624540897%09home.php%09spacecp; usoK_2132_sid=NmB0kr; usoK_2132_auth=67d9ErEihlEy48jUgk4o4UK5KerzhDDKU8vOlTDrJ6RGlKJgrvAUvtToOipjnt2ihgncX25q8y2bBpTa%2BUVRES6jRGg; usoK_2132_checkfollow=1; usoK_2132_lastcheckfeed=335060%7C1624540893; usoK_2132_sendmail=1; usoK_2132_nofavfid=1; usoK_2132_ulastactivity=d80cgDrIyU6Td1slXZcp5Y4YaEsPs5aUYIp%2F0xDFazPUY9WTdQe3; usoK_2132_lastvisit=1623422996; usoK_2132_saltkey=gpf53g19`,
'Accept' : `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`,
'Connection' : `keep-alive`,
'Referer' : `https://www.pdawiki.com/forum/plugin.php?id=are_yqs_money:are_yqs_money`,
'Accept-Encoding' : `gzip, deflate, br`,
'Host' : `www.pdawiki.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1`,
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
  if(response.body.indexOf("恭喜") != -1){
    $notify("今日pdawiki施肥", "", "成功👍")
  }if(response.body.indexOf("明日") != -1){
    $notify("今日pdawiki施肥", "失败👇🏻", "今日施过肥了🤞")
  }else {
    $notify("今日pdawiki施肥", "失败👇", "可能要更新一下请求头信息了")
  }  
}
)
