
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://www.pdawiki.com/forum/plugin.php?id=are_yqs_money:getaward&typeid=1&formhash=b4a3f602`;
const method = `GET`;
const headers = {
'Cookie' : `fn_switch_cookie=1; usoK_2132_connect_is_bind=0; usoK_2132_lastact=1624540336%09misc.php%09patch; usoK_2132_checkpm=1; usoK_2132_sid=Dgiv9X; usoK_2132_sendmail=1; usoK_2132_lip=170.187.228.133%2C1624540014; usoK_2132_nofavfid=1; usoK_2132_auth=3d1cZbmE1%2FdoAmXZG4sIH8po06ga%2BaM5gxXMRdxMQaiGc2%2Fp2xEfztpFiz8aAJYK3iH9abmjGbx23RXfiMuqtep3mgQ; usoK_2132_lastcheckfeed=335060%7C1624539499; usoK_2132_ulastactivity=d80cgDrIyU6Td1slXZcp5Y4YaEsPs5aUYIp%2F0xDFazPUY9WTdQe3; usoK_2132_st_p=0%7C1624539450%7Ca33506b877ba5ed1d8efb4444011ae2b; usoK_2132_viewid=tid_29976; usoK_2132_lastvisit=1623422996; usoK_2132_saltkey=gpf53g19`,
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
  if(response.body.indexOf("恭喜")!= -1){
    $notify("pdawiki兑换米粒", "", "成功[庆祝]")
  }if(response.body.indexOf("还差")&&("返回") != -1){
    $notify("pdawiki兑换米粒", "失败👇🏻", "果实暂时不够🤞")
  }else {
    $notify("pdawiki兑换米粒", "失败👇", "可能要更新一下请求头信息了")
  }  
}
)
