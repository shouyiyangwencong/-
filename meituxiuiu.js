
圈X配置：

[rewrite_local]
^https:\/\/api.xiuxiu.meitu.com\/v1\/user\/show.json$ url script-response-body https://raw.githubusercontent.com/shouyiyangwencong/-/main/meituxiuiu.js

[mitm]
hostname = api.xiuxiu.meitu.com

*/

var body = $response.body; //声明一个变量body并以响应消息体赋值
body=body.replacebody=body.replace(/"vip_type":0/g, '"vip_type":1');
$done({body});
