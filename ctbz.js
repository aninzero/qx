/******************************
陈t八字
***********************

[rewrite_local]
^https?:\/\/api\.chentuanbazi\.cn\/user\/userInfo url script-response-body https://raw.githubusercontent.com/aninzero/qx/main/ctbz.js
[mitm] 
hostname = *.chentuanbazi.cn

*******************************/
var aninzero = $response.body;

aninzero = aninzero.replace(/"vipType"\s*:\s*"\w+/g, '"vipType":
normal');
aninzero = aninzero.replace(/"allAuthority"\s*:\s*\w+/g, '"allAuthority":true');

$done({ body: aninzero });