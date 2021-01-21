
圈X配置：

[rewrite_local]
^https:\/\/api\.xiuxiu\.meitu\.com\/v1\/user\/show\.json url script-response-body https://raw.githubusercontent.com/shouyiyangwencong/-/main/meituxiuiu.js

[mitm]
hostname = api.xiuxiu.meitu.com

*/
let obj = JSON.parse($response.body);
obj = {"vip_type":1}
$done({body: JSON.stringify(obj)};
