
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
'Cookie' : `usoK_2132_connect_is_bind=0; usoK_2132_lastact=1611410176%09misc.php%09patch; Hm_lpvt_346381cad752cdb294c1dd3544d1d65a=1611410176; Hm_lvt_346381cad752cdb294c1dd3544d1d65a=1611114577,1611116043,1611159364,1611410162; _ga=GA1.2.1334470196.1610409781; _gid=GA1.2.735512033.1611410164; usoK_2132_noticeTitle=1; usoK_2132_sid=ErbdER; _gat_gtag_UA_120281465_1=1; usoK_2132_sendmail=1; usoK_2132_lip=223.91.28.160%2C1611410083; usoK_2132_ulastactivity=fc64dxGf65kBgcV9n6A3%2BeuXETyrG8eAJqEByoW9kiKA74vZm4ji; usoK_2132_nofavfid=1; usoK_2132_auth=fa07c2amEQWJaoXE2PtjrvJ7KrEozBMLQSPP2rOhMh%2BLBLZZGwH6vYiM6TypS%2F3q1btcQ1nxLZgi%2F%2FgaO3XB6NlXsMw; usoK_2132_lastcheckfeed=335060%7C1611075046; usoK_2132_lastvisit=1611071358; usoK_2132_saltkey=akh19hi2`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Host' : `www.pdawiki.com`,
'Connection' : `keep-alive`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1`,
'Referer' : `https://www.pdawiki.com/forum/plugin.php?id=dsu_paulsign:sign`,
'Accept-Language' : `zh-cn`
};
const body = `formhash=3b76551f&qdxq=kx&qdmode=3&todaysay=&fastreply=0`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {  
  if(response.body.indexOf("恭喜你签到成功!") != -1){
    $notify("今日pdawiki签到", "", "成功👍")
  }if(response.body.indexOf("明日") != -1){
    $notify("今日pdawiki签到", "", "签过了🤞")
  }else {
    $notify("今日pdawiki签到", "失败👇", "可能要更新一下请求头信息了")
  }  
}
)
