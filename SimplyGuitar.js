/*************************************

项目名称：SimplyGuitar
脚本作者：aninzero
使用声明：学习交流使用

**************************************

[rewrite_local]
^https?:\/\/sg\.joytunes\.com\/server\/accounts\/accountAuthenticate url script-response-body https://raw.githubusercontent.com/aninzero/qx/main/SimplyGuitar.js

[mitm]
hostname = sg.joytunes.com

*************************************/


var aninzero = JSON.parse($response.body);

aninzero.replace(/isPurchasingProfile":\w+/g,'isPurchasingProfile":true');
aninzero.isPremium = true;
aninzero.accountInfo.membershipInfo = {
      "membershipDescription" : "高级会员",
      "familyIapID" : "com.joytunes.sg.subscription_onemonth_20_FamilyPlan_Individual_trial_bundle_family",
      "membershipTier" : "premium_home",
      "profilesAccess" : "INDIVIDUAL",
      "planDuration" : "onemonth",
      "membershipType" : "JOYTUNESBUNDLE",
      "daysRemaining" : 8888,
      "autoRenewable" : 0,
      "dateStarted" : "2023-10-29",
      "isTrialPeriod" : 0,
      "currentIapID" : "com.joytunes.sg.subscription_onemonth_20_FamilyPlan_Individual_trial_bundle",
      "upgradeIapID" : "com.joytunes.sg.subscription_onemonth_30_FamilyPlan_FiveProfiles_trial_bundle",
      "daysPassed" : 1,
      "dateExpire" : "2123-11-05",
      "isAutoRenew" : false
    };

$done({ body: JSON.stringify(aninzero)});
