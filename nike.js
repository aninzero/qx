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
aninzero.data.model.priceCouponItemVO.starts = "2023-10-27 20:50:00";
aninzero.data.model.priceCouponDetailDescVO.canBuy = "true";
aninzero.data.model.priceCouponDetailDescVO.buttonDesc = "1.0元购买";
$done({ body: JSON.stringify(aninzero)});
