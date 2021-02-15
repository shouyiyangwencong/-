
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `http://bbs.zhiyoo.net/plugin.php?id=dsu_paulsign:sign&operation=qiandao&infloat=0&inajax=0&mobile=yes`;
const method = `POST`;
const headers = {
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate`,
'Upgrade-Insecure-Requests' : `1`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Origin' : `http://bbs.zhiyoo.net`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1`,
'Cookie' : `ikdQ_9242_connect_is_bind=0; ikdQ_9242_lastact=1613405490%09plugin.php%09; ikdQ_9242_sid=LtT8RM; ikdQ_9242_lip=39.144.29.53%2C1613405401; ikdQ_9242_ulastactivity=8f837RoP69m8zpujf3eTuIeOJwM2IhjujZfwtfYM9AGEBx%2FvuQXY; ikdQ_9242_visitedfid=2; ikdQ_9242_auth=bbd6AaNEdoA3SRBkCqYrqthjr3SwHKLWlxMQ091YNyct0ngybb5GySDPnkgPmlLpYH4V%2FLN5w4pTMeBeayrz8iaWRGE; ikdQ_9242_lastcheckfeed=137509%7C1612495150; ikdQ_9242_nofavfid=1; ikdQ_9242_lastvisit=1612449565; ikdQ_9242_saltkey=DGU6hhO6`,
'Host' : `bbs.zhiyoo.net`,
'Referer' : `http://bbs.zhiyoo.net/plugin.php?id=dsu_paulsign:sign`,
'Accept-Language' : `zh-cn`,
'Accept' : `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`
};
const body = `formhash=cc0a519a&qdxq=kx`;

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
