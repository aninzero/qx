/******************************

脚本名称: 爱英语
脚本作者: aninzero
更新时间：2023.10.6
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

https://revenuecat-cn.fastools.cn/v1/(receipts|subscribers)/* url script-response-body https://raw.githubusercontent.com/aninzero/qx/main/LoveEnglish.js
https://revenuecat-cn.fastools.cn/v1/(receipts|subscribers)/* url script-request-header https://raw.githubusercontent.com/aninzero/qx/main/LoveEnglish.js

[mitm] 

hostname = revenuecat-cn.fastools.cn

*******************************/


const aninzero1 = {};
const aninzero2 = JSON.parse(typeof $response != "undefined" && $response.body || null);

const name = "default";
const appid = "igrammer_199_ly_v1";

  
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  chxm1023.headers = $request.headers;
} else if (aninzero2 && aninzero2.subscriber) {
  data = {
 "original_purchase_date": "2022-09-09T09:09:09Z",
 "purchase_date": "2022-09-09T09:09:09Z",
 "expires_date": "2099-09-09T09:09:09Z",
 "store" : "app_store",
 "ownership_type": "PURCHASED"
 };
  aninzero2.subscriber.subscriptions[(appid)] = data
  aninzero2.subscriber.entitlements[(name)] = JSON.parse(JSON.stringify(data));
  aninzero2.subscriber.entitlements[(name)].product_identifier = (appid);
  aninzero1.body = JSON.stringify(aninzero2);
}

$done(aninzero1);
