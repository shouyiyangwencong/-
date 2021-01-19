const u = "https://ir.zhangyue.com/zyuc/api/welfare/info?idfa=5B114B62-94A8-4A65-B844-3633A369AD02&p1=4ABB5649072A4F15A716C66E43B4314A&p11=584&p12=&p16=iPhone10,2&p2=123002&p21=00003&p22=iOS,14.3&p25=11140058&p3=11140058&p4=501658&p5=1001&p6=AAAAAAAAAAAAAAAAAAAA&p7=AAAAAAAAAAAAAAA&p9=0&pc=10&rgt=&usr=S2222908&zysid=046bc5e5737ceec0d2f0c3c6cf803e5f&sign=Vj1LkEpEyutg5PzQ6vN6JtFZ9/%2BaJogTOUqVMEJNcbIlkWVCueX7HqnQR1xCmT3fTfklTvZGgzEzlTpzhTX%2BFw1PHTDOqKWEKI3Cn/TtZo2cnVcS8oUN1sEAXh81zQCJE1Nq%2BH3Q%2BK1u7OFA2%2Bh0ZY8MMY0C%2Br0wso6qM65voao%3D&timestamp=1611041461356&usr=S2222908";

const h = {
"Accept" : "*/*",
"Host" : "ir.zhangyue.com",
"Connection" : "keep-alive",
"Accept-Language" : "zh-Hans-TW;q=1, zh-Hant-TW;q=0.9",
"Accept-Encoding" : "gzip, deflate, br",
"User-Agent" : "iReader/1.14.0 (iPhone; iOS 14.3; Scale/3.00)"
} // 字典形式的请求头
          // 如果有Cookie的话一个就行，也就是{"Cookie":"123456"}

const m = "GET" //或者 "POST" 最常用就这两种

// POST的情况一般会有请求消息体，你也得去复制，可能是作为字符串也可能是字典形式的
// 那就再定义一个变量 const b = "字符串请求消息体" 或 {"A":"a", "B":"b" }


var myRequest = {url: u, method: m, headers: h};
    // 如果还定义了变量b的话就再加后面这对body:b的键值
    
    
$task.fetch(myRequest).then(response => {  
  if(response.body.indexOf("success") != -1){
    $notify("今日掌阅139签到", "", "成功👍")
  }if(response.body.indexOf("今日掌阅已签到，请明日再来") != -1){
    $notify("今日掌阅139已经签到过了", "", "")
  }else {
    $notify("今日掌阅139签到", "失败👇", "可能要更新一下请求头信息了")
  }  
}
)
