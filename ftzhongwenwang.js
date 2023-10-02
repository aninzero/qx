/******************************
FT中文网  
***********************

[rewrite_local]
^https:\/\/*\.cloudfront\.net\/index\.php\/jsapi\/paywall url script-response-body https://raw.githubusercontent.com/aninzero/qx/main/ftzhongwenwang.js
[mitm] 
hostname = *.cloudfront.net

*******************************/
var aninzero = JSON.parse($response.body);

aninzero = {
  "paywall": 0,
  "premium": 1,
  "expire": "409259934999",
  "standard": 1,
  "v": 888888,
  "campaign_code": "",
  "latest_duration": "yearly",
  "addon": 0
};

$done({ body: JSON.stringify(aninzero) });
