
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `http://bbs.zhiyoo.net/plugin.php?id=dsu_paulsign:sign&operation=qiandao&infloat=1&inajax=1`;
const method = `POST`;
const headers = {
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate`,
'Upgrade-Insecure-Requests' : `1`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Origin' : `http://bbs.zhiyoo.net`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1`,
'Cookie' : `ikdQ_9242_checkpm=1; ikdQ_9242_connect_is_bind=0; ikdQ_9242_lastact=1612453420%09home.php%09spacecp; ikdQ_9242_noticeTitle=1; ikdQ_9242_sid=fERb0R; ikdQ_9242_mobile=no; ikdQ_9242_sendmail=1; ikdQ_9242_home_diymode=1; ikdQ_9242_nofavfid=1; ikdQ_9242_onlineusernum=1474; ikdQ_9242_auth=f55csaX2kc3Bzq8WFwkUj213egz%2BhKrL1k2BpiE12IES2elfGsaHe%2FiNUv5p9OSQAqEr%2BHOLV9fF5h%2BfjYY%2BJU9EFCs; ikdQ_9242_ulastactivity=9015bmV7y%2F6P%2BahRfMsXEQjw4XLX2Wp4bDXsiHvq3NufKI21S3En; ikdQ_9242_seccode=2017.6c76364a4864a6b67d; ikdQ_9242_lastvisit=1612449565; ikdQ_9242_saltkey=DGU6hhO6`,
'Host' : `bbs.zhiyoo.net`,
'Referer' : `http://bbs.zhiyoo.net/plugin.php?id=dsu_paulsign:sign`,
'Accept-Language' : `zh-cn`,
'Accept' : `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`
};
const body = `formhash=cc0a519a`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
  
  if(response.body.indexOf("成功") != -1){
    $notify("今日智友签到", "", "成功✌️")
  }if(response.body.indexOf("明天") != -1){
    $notify("今日智友已经签到过了", "", "签过到了👌")
  }else {
    $notify("今日智友签到", "失败", "可能要更新一下cookie信息了")
  }  
}
)
