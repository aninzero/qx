/******************************
FT中文网  
***********************

[rewrite_local]
^https:\/\/*\.cloudfront\.net\/index\.php\/jsapi\/paywall url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/FTzhongwenwang.js
[mitm] 
hostname = *.cloudfront.net

*******************************/
var aninzero = JSON.parse($response.body);

baby = {
  "paywall": 0,
  "premium": 1,
  "expire": "4092599349",
  "standard": 1,
  "v": 2099,
  "campaign_code": "",
  "latest_duration": "yearly",
  "addon": 0
};

$done({ body: JSON.stringify(aninzero) });
