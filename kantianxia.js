*/

var body = $response.body;
var obj = JSON.parse(body);

obj.subscription = true;
obj.isfree = 1;
obj.isFreeMag = 1;
obj.prevAble = true;
obj.isOffical = true;
obj.isFree = 1;
obj.couponCountAboutToExpire = 1;
obj.couponCountUsed = 1;
obj.couponUser = true;
obj.isBuyMag = 1;
obj.nextAble = true;
obj.isPreview = 1;
obj.nextAble = true;
obj.isBuyMag = true;
obj.isBuyArticle = true;
body = JSON.stringify(obj);
$done({body});
