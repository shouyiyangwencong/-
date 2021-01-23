
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
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1`,
'Cookie' : `Hm_lpvt_346381cad752cdb294c1dd3544d1d65a=1611416601; Hm_lvt_346381cad752cdb294c1dd3544d1d65a=1611114577,1611116043,1611159364,1611410162; _ga=GA1.2.1334470196.1610409781; _gid=GA1.2.735512033.1611410164; usoK_2132_connect_is_bind=0; usoK_2132_lastact=1611416600%09plugin.php%09; usoK_2132_sid=ItRq17; _gat_gtag_UA_120281465_1=1; usoK_2132_marks=e2d8026358fc3571667d17bf74fe35ec; usoK_2132_lip=223.91.28.160%2C1611416517; usoK_2132_ulastactivity=fc64dxGf65kBgcV9n6A3%2BeuXETyrG8eAJqEByoW9kiKA74vZm4ji; usoK_2132_nofavfid=1; usoK_2132_auth=fa07c2amEQWJaoXE2PtjrvJ7KrEozBMLQSPP2rOhMh%2BLBLZZGwH6vYiM6TypS%2F3q1btcQ1nxLZgi%2F%2FgaO3XB6NlXsMw; usoK_2132_lastcheckfeed=335060%7C1611075046; usoK_2132_lastvisit=1611071358; usoK_2132_saltkey=akh19hi2`,
'Host' : `www.pdawiki.com`,
'Referer' : `https://www.pdawiki.com/forum/plugin.php?id=mogu_lottery:home&actid=1`,
'Accept-Language' : `zh-cn`,
'Accept' : `application/json, text/javascript, */*; q=0.01`
};
const body = `actid=1&lottery=&formhash=3b76551f`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {  
  if(response.body.indexOf("congrats") != -1){
    $notify("今日pdawiki抽奖", "成功👍", "具体奖励请到网站查看")
  }if(response.body.indexOf("明天") != -1){
    $notify("今日pdawiki抽奖", "失败👇🏻", "今日抽奖次数已经用完🤞")
  }else {
    $notify("今日pdawiki抽奖", "失败👇", "可能要更新一下请求头信息了")
  }  
}
)
