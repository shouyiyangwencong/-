知悦公众号圈X规则by守一
转载请注明出处
[rewrite_local]
http://zhiyueclass.com/resource/fg/course-library/relation-resource url script-response-body https://raw.githubusercontent.com/shouyiyangwencong/-/main/zhiyue.js
hostname = zhiyueclass.com
*/

var body = $response.body;
var obj = JSON.parse(body);

obj.priceOption = 0;
body = JSON.stringify(obj);
$done({body});
