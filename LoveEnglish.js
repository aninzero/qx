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


const a = {};
const b = JSON.parse(typeof $response != "undefined" && $response.body || null);

const name = "pro";
const appid = "igrammar_199_1y_v1";

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  a.headers = $request.headers;
} else if (b && b.subscriber) {
  b.subscriber.subscriptions = b.subscriber.subscriptions || {};
  b.subscriber.entitlements = b.subscriber.entitlements || {};
  const data = {
	"product_identifier": (appid),
	"expires_date": "8888-08-08T09:09:09Z",
	"purchase_date": "2022-09-09T09:09:09Z"
	};
  b.subscriber.entitlements[(name)] = (data);
  b.subscriber.subscriptions[(appid)] = {  ...data,	"original_purchase_date": "2022-09-09T09:09:09Z",	"store": "app_store",	"ownership_type": "PURCHASED"};
  a.body = JSON.stringify(b);
}

$done(a);
