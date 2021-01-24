
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url1 = `https://www.pdawiki.com/forum/plugin.php?id=are_yqs_money:spend&typeid=3&formhash=3b76551f`;
const url2 = `https://www.pdawiki.com/forum/plugin.php?id=are_yqs_money:spend&typeid=2&formhash=3b76551f`;
const url3 = `https://www.pdawiki.com/forum/plugin.php?id=are_yqs_money:spend&typeid=1&formhash=3b76551f`;
const method = `GET`;
const headers = {
'Cookie' : `usoK_2132_connect_is_bind=0; usoK_2132_lastact=1611414502%09misc.php%09patch; usoK_2132_noticeTitle=1; usoK_2132_sendmail=1; Hm_lpvt_346381cad752cdb294c1dd3544d1d65a=1611414490; Hm_lvt_346381cad752cdb294c1dd3544d1d65a=1611114577,1611116043,1611159364,1611410162; _ga=GA1.2.1334470196.1610409781; _gid=GA1.2.735512033.1611410164; usoK_2132_lip=223.91.28.160%2C1611414488; usoK_2132_sid=h3W6Ed; usoK_2132_ulastactivity=fc64dxGf65kBgcV9n6A3%2BeuXETyrG8eAJqEByoW9kiKA74vZm4ji; usoK_2132_nofavfid=1; usoK_2132_auth=fa07c2amEQWJaoXE2PtjrvJ7KrEozBMLQSPP2rOhMh%2BLBLZZGwH6vYiM6TypS%2F3q1btcQ1nxLZgi%2F%2FgaO3XB6NlXsMw; usoK_2132_lastcheckfeed=335060%7C1611075046; usoK_2132_lastvisit=1611071358; usoK_2132_saltkey=akh19hi2`,
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
    url: url1,
    url: url2,
    url: url3,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
