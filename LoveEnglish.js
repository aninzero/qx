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

var aninzero = JSON.parse($response.body);
delete $request.headers["x-revenuecat-etag"];
delete $request.headers["X-RevenueCat-ETag"];
    aninzero = {
  "request_date_ms": 1696509937149,
  "request_date": "2023-10-05T12:45:37Z",
  "subscriber": {
    "non_subscriptions": {
    },
    "first_seen": "2023-10-05T12:39:19Z",
    "original_application_version": "1",
    "other_purchases": {
    },
    "management_url": "https:\/\/apps.apple.com\/account\/subscriptions",
    "subscriptions": {
      "igrammar_199_ly_v1": {
        "original_purchase_date": "2023-10-05T12:43:01Z",
        "expires_date": "2099-10-12T12:43:00Z",
        "is_sandbox": false,
        "refunded_at": null,
        "store_transaction_id": "190001746507030",
        "unsubscribe_detected_at": null,
        "grace_period_expires_date": null,
        "period_type": "trial",
        "purchase_date": "2023-10-05T12:43:00Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "auto_resume_date": null
      }
    },
    "entitlements": {
      "default": {
        "grace_period_expires_date": null,
        "purchase_date": "2023-10-05T12:43:00Z",
        "product_identifier": "$rc_annual",
        "expires_date": "2099-10-12T12:43:00Z"
      }
    },
    "original_purchase_date": "2023-10-05T12:38:34Z",
    "original_app_user_id": "$RCAnonymousID:9e000cbdd73942ccbe08f755b94f6dcc",
    "last_seen": "2023-10-05T12:43:47Z"
  }
}

$done({body : JSON.stringify(aninzero)});
