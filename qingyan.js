轻颜相机圈X规则by守一
转载请注明出处
[rewrite_local]
https://commerce-api.faceu.mobi/commerce/v1/subscription/user_info url script-response-body https://raw.githubusercontent.com/shouyiyangwencong/-/main/qingyan.js
hostname = commerce-api.faceu.mobi
*/

var body = $response.body;
var obj = JSON.parse(body);

obj.flag = true;
obj.start_time = 1605316215;
obj.end_time = 1639446065;
body = JSON.stringify(obj);
$done({body});
