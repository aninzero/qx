/*************************************

项目名称：nike抢劵
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.alibaba\.mktview\.trade\.pricecoupon\.queryitem\/1\.0 url script-response-body https://raw.githubusercontent.com/aninzero/qx/main/nike.js

[mitm]
hostname = guide-acs.m.taobao.com

*************************************/


var aninzero = JSON.parse($response.body);
aninzero.data.model.priceCouponDetailDescVO.canBuy = "true";

$done({ body: JSON.stringify(aninzero)});
