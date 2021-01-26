
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://amsmp.qq.com/index.php?s=api/vote/getMyVoteCount&openid=o0eCH5CGGDMaFIATXrTZjn2nJW6Y`;
const method = `GET`;
const headers = {"Accept": "*/*","Accept-Encoding": "gzip, deflate, br","Accept-Language": "zh-cn","Connection": "keep-alive","Content-Type": "application/json","Host": "amsmp.qq.com","Referer": "https://servicewechat.com/wx55ef71110c0d9cb2/46/page-frame.html","User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.1(0x18000122) NetType/WIFI Language/zh_CN",};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
