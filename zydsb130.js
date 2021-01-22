/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://ir.zhangyue.com/zyuc/api/welfare/readtimeexchange?idfa=5B114B62-94A8-4A65-B844-3633A369AD02&p1=4ABB5649072A4F15A716C66E43B4314A&p11=584&p12=&p16=iPhone10,2&p2=123002&p21=00003&p22=iOS,14.3&p25=11140058&p3=11140058&p4=501658&p5=1001&p6=AAAAAAAAAAAAAAAAAAAA&p7=AAAAAAAAAAAAAAA&p9=0&pc=10&rgt=&usr=S2258104&zysid=7cdd8f0e9fbdf5daf1baec1d7fd2f924&sign=DjrhrgW55R%2BTBQE0sWxJaElgeV3iOn6X8LMCmOVsnx9NXFs8qfm4xKxcZKHxjtIGVomIBcvSdp1pOGyz2sVcobj%2BQQH1DeCvC//nY/co7wmjg1uZFGkJiHua2UPqBX6NfnuB2ZjjdHeXjZpyhAaByBX5WkmXH5rNfG5t8%2BbLuNI%3D&timestamp=1611307744788&usr=S2258104`;
const method = `GET`;
const headers = {
'User-Agent' : `iReader/1.14.0 (iPhone; iOS 14.3; Scale/3.00)`,
'Host' : `ir.zhangyue.com`,
'Connection' : `keep-alive`,
'Accept-Language' : `zh-Hans-TW;q=1, zh-Hant-TW;q=0.9`,
'Accept-Encoding' : `gzip, deflate, br`,
'Accept' : `*/*`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    if(response.body.indexOf("success") != -1){
    $notify("掌阅精选130读书币兑换", "", "成功👍")
  }if(response.body.indexOf("没有") != -1){
    $notify("掌阅精选130", "", "没有多余的读书币可以兑换")
  }else {
    $notify("掌阅精选130读书币兑换", "失败👇", "可能要更新一下请求头信息了")
  }  
}
)
