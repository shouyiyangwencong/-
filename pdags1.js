
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://www.pdawiki.com/forum/plugin.php?id=are_yqs_money:time_slot&typeid=1&formhash=3b76551f`;
const method = `GET`;
const headers = {
'Cookie' : `usoK_2132_connect_is_bind=0; usoK_2132_lastact=1611419397%09misc.php%09patch; Hm_lpvt_346381cad752cdb294c1dd3544d1d65a=1611419396; Hm_lvt_346381cad752cdb294c1dd3544d1d65a=1611114577,1611116043,1611159364,1611410162; _ga=GA1.2.1334470196.1610409781; _gid=GA1.2.735512033.1611410164; usoK_2132_noticeTitle=1; usoK_2132_sid=O4hdhx; usoK_2132_sendmail=1; usoK_2132_lip=223.91.28.160%2C1611419331; usoK_2132_onlineusernum=467; usoK_2132_marks=e2d8026358fc3571667d17bf74fe35ec; usoK_2132_ulastactivity=fc64dxGf65kBgcV9n6A3%2BeuXETyrG8eAJqEByoW9kiKA74vZm4ji; usoK_2132_nofavfid=1; usoK_2132_auth=fa07c2amEQWJaoXE2PtjrvJ7KrEozBMLQSPP2rOhMh%2BLBLZZGwH6vYiM6TypS%2F3q1btcQ1nxLZgi%2F%2FgaO3XB6NlXsMw; usoK_2132_lastcheckfeed=335060%7C1611075046; usoK_2132_lastvisit=1611071358; usoK_2132_saltkey=akh19hi2`,
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
  if(response.body.indexOf("领取到") != -1){
    $notify("今日pdawiki第一个时间段的果实", "", "领取成功👍")
  }if(response.body.indexOf("已领取") != -1){
    $notify("今日pdawiki第一个时间段的果实", "领取失败👇🏻", "已经领取过了🤞")
  }else {
    $notify("今日pdawiki第一个时间段的果实", "失败👇", "可能要更新一下请求头信息了")
  }  
}
)
