/*************************************

项目名称：悟饭游戏厅
脚本作者：aninzero
使用声明：禁止售卖，请 24h 删除

**************************************

[rewrite_local]
^https?:\/\/iosv2\.cjapi\.5fun\.com\/user\/ios_store_pay_edition\/members_login\/get_member_info url script-response-body https://raw.githubusercontent.com/aninzero/qx/main/wfyxt.js

[mitm]
hostname = iosv2.cjapi.5fun.com

*************************************/


var aninzero = JSON.parse($response.body);;
aninzero = {"error":0,"data":{"error_msg":"","is_success":true,"user_info":{"is_vip":"9A0684792021D73BE42B71491469ADFA","expired_time":2147483647,"member_state":2,"reg_time":"1698559700"},"error_code":"","data_info":[]}};

$done({ body: JSON.stringify(aninzero)});
