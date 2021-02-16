知悦公众号圈X规则by守一
转载请注明出处
[rewrite_local]
http://zhiyueclass.com/resource/fg/course-library/relation-resource url script-response-body https://raw.githubusercontent.com/shouyiyangwencong/-/main/zhiyue.js
hostname = zhiyueclass.com

*/

var body = $response.body;
var url = $request.url;

const path1 = '\/resource\/fg\/course-library\/relation-resource';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
	obj.data["priceoption"] = 0;
	body = JSON.stringify(obj);  
 }

$done({body});
