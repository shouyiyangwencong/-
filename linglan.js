*/

var body = $response.body;
var obj = JSON.parse(body);

obj.isFree = true;
body = JSON.stringify(obj);
$done({body});
