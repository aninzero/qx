/*************************************

项目名称：WSJ
使用声明：学习使用

**************************************

[rewrite_local]
^https?:\/\/shared-data\.dowjones\.io\/gateway\/graphql url script-response-body https://raw.githubusercontent.com/aninzero/qx/main/WSJ.js

[mitm]
hostname = shared-data.downjones.io

*************************************/


var aninzero = JSON.parse($response.body);

aninzero.replace(/articleIsFree":\w+/g,'articleIsFree":true');


$done({ body: JSON.stringify(aninzero)});
