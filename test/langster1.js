/***************************************
项目名称：Langster
声明：学习交流使用
**************************************
[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/aninzero/qx/main/langster.js
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header  https://raw.githubusercontent.com/aninzero/qx/main/langster.js

[MITM]
hostname = api.revenuecat.com

***************************************/
const aninzero1 = {};
const aninzero2 = JSON.parse(typeof $response != "undefined" && $response.body || null);

const name = "premium";
const anin = "com.langster.universal.lifetime";

  
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  aninzero1.headers = $request.headers;
} else if (aninzero2 && aninzero2.subscriber) {
  data = {
 "purchase_date": "2022-09-09T09:09:09Z"
 };
  aninzero2.subscriber.subscriptions[(anin)] = {
 "original_purchase_date": "2022-09-09T09:09:09Z",
 "period_type" : "1",
 "purchase_date": "2022-09-09T09:09:09Z",
 "store" : "app_store",
 "ownership_type": "PURCHASED"
 };
  aninzero2.subscriber.entitlements[(name)] = JSON.parse(JSON.stringify(data));
  aninzero2.subscriber.entitlements[(name)].product_identifier = (anin);
  aninzero1.body = JSON.stringify(aninzero2);
}

$done(aninzero1);
