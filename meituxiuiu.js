
圈X配置：

[rewrite_local]
^https:\/\/api\\.xiuxiu\\.meitu\\.com\/v1\/user\/show.json$ url script-response-body https://raw.githubusercontent.com/shouyiyangwencong/-/main/meituxiuiu.js

[mitm]
hostname = api.xiuxiu.meitu.com

*/

var body = $response.body;
var url = $request.url;

const path1 = "\/v1\/user\/show.json";

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
	obj.data["vip_type"] = 1;
	body = JSON.stringify(obj);  
 }

$done({body});
