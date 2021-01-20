hostname＝*

#美图秀秀 解锁限制 A+
https://api\.xiuxiu\.meitu\.com/v1/user/show.json.+ url script-response-body xxxx.js

body = $response.body.replace(/"vip_type":0/g, '"vip_type":1');
$done({body});
