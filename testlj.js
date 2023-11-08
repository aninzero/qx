/*************************************

项目名称：lanjiyin
脚本作者：aninzero
使用声明：学习交流使用

**************************************

[rewrite_local]
^https?:\/\/edu\.lezaitizhong\.com\/(shop|vod|tiku|classify)\/(goods|class_list|getclassifychapter|get_question_media) url script-response-body https://raw.githubusercontent.com/aninzero/qx/main/testlj.js

[mitm]
hostname = edu.lezaitizhong.com

*************************************/

const CryptoJS = loadCryptoJS();
const ciphertext = $response.body;
const key = CryptoJS.enc.Utf8.parse("lanjiyin20500423");
const iv = CryptoJS.enc.Utf8.parse("8765432187654322");

const decryptedText = CryptoJS.AES.decrypt(ciphertext, key, { iv: iv }).toString(CryptoJS.enc.Utf8);

let modifiedText = decryptedText;
modifiedText = modifiedText.replace(/is_unlock":"\d/g, 'is_unlock":"1');
modifiedText = modifiedText.replace(/is_buy":"\d/g, 'is_buy":"1');

const encryptedBody = CryptoJS.AES.encrypt(modifiedText, key, { iv: iv }).toString();

$done({ body: encryptedBody });
