const u = "https://ir.zhangyue.com/zyuc/api/welfare/dailysign";

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
  if(response.body.indexOf(""msg": "success"") != -1){
    $notify("今日掌阅139签到", "", "成功👍")
  }if(response.body.indexOf("今日已签到，请明日再来") != -1){
    $notify("今日掌阅139已经签到过了", "", "")
  }else {
    $notify("今日掌阅139签到", "失败👇", "可能要更新一下请求头信息了")
  }  
}
)
