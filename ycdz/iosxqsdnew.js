/*******************************

脚本功能：心情树洞——解锁VIP
下载地址：https://is.gd/4PemJT
软件版本：1.0
脚本作者：彭于晏💞
更新时间：2024-10—8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/iosxqsdnew.sanwubeixin.cn\/ct\/user\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/iosxqsdnew.js

[mitm] 

hostname = iosxqsdnew.sanwubeixin.cn

*******************************/

var body = $response.body.replace(/isVip":\w+/g,'isVip":true')
.replace(/vip_time":\d+/g,'vip_time":8888888888')
.replace(/vip_type":\d/g,'vip_type":1')
.replace(/vip_money":\d/g,'vip_money":1')
.replace(/username":".*?"/g,'username":"彭于晏Crack"')
$done({ body });