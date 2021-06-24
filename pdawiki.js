
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://www.pdawiki.com/forum/plugin.php?id=dsu_paulsign:sign&operation=qiandao&infloat=1&inajax=1`;
const method = `POST`;
const headers = {
'Accept' : `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`,
'Origin' : `https://www.pdawiki.com`,
'Accept-Encoding' : `gzip, deflate, br`,
'Cookie' : `usoK_2132_connect_is_bind=0; usoK_2132_lastact=1624539508%09home.php%09spacecp; usoK_2132_sid=Fh9yH1; usoK_2132_nofavfid=1; usoK_2132_onlineusernum=548; usoK_2132_auth=3d1cZbmE1%2FdoAmXZG4sIH8po06ga%2BaM5gxXMRdxMQaiGc2%2Fp2xEfztpFiz8aAJYK3iH9abmjGbx23RXfiMuqtep3mgQ; usoK_2132_lastcheckfeed=335060%7C1624539499; usoK_2132_sendmail=1; usoK_2132_ulastactivity=d80cgDrIyU6Td1slXZcp5Y4YaEsPs5aUYIp%2F0xDFazPUY9WTdQe3; usoK_2132_st_p=0%7C1624539450%7Ca33506b877ba5ed1d8efb4444011ae2b; usoK_2132_viewid=tid_29976; usoK_2132_lastvisit=1623422996; usoK_2132_saltkey=gpf53g19`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Host' : `www.pdawiki.com`,
'Connection' : `keep-alive`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1`,
'Referer' : `https://www.pdawiki.com/forum/plugin.php?id=dsu_paulsign:sign`,
'Accept-Language' : `zh-cn`
};
const body = `formhash=b4a3f602&qdxq=kx&qdmode=3&todaysay=&fastreply=0`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {  
  if(response.body.indexOf("恭喜你签到成功!") != -1){
    $notify("今日pdawiki签到", "", "成功👍")
  }if(response.body.indexOf("明天") != -1){
    $notify("今日pdawiki签到", "失败👇🏻", "已经签过了🤞")
  }else {
    $notify("今日pdawiki签到", "失败👇", "可能要更新一下请求头信息了")
  }  
}
)
