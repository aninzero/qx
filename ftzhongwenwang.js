/******************************
FT中文网  
***********************

[rewrite_local]
^https:\/\/[a-zA-Z0-9]+\.cloudfront\.net\/index\.php\/jsapi\/paywall url script-response-body https://raw.githubusercontent.com/aninzero/qx/main/ftzhongwenwang.js
[mitm] 
hostname = *.cloudfront.net

*******************************/
var aninzero = JSON.parse($response.body);

aninzero.paywall = 0;
aninzero.premium = 1;
aninzero.expire = "409259934999";
aninzero.standard = 1;
aninzero.v = 888888;
aninzero.campaign_code = "";
aninzero.latest_duration = "yearly";
aninzero.addon = 0;

$done({body: JSON.stringify(aninzero)});
