// ==UserScript==
// @name         北邮人BT趣味盒图片放大(首页+日志）
// @namespace    http://tampermonkey.net/
// @version      0.4.0
// @description  放大北邮人趣味盒的图片
// @author       shadows & camedeus
// @updateURL    https://cdn.jsdelivr.net/gh/zhongfly/Tampermonkey@master/%E5%8C%97%E9%82%AE%E4%BA%BABT%E8%B6%A3%E5%91%B3%E7%9B%92%E5%9B%BE%E7%89%87%E6%94%BE%E5%A4%A7.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/zhongfly/Tampermonkey@master/%E5%8C%97%E9%82%AE%E4%BA%BABT%E8%B6%A3%E5%91%B3%E7%9B%92%E5%9B%BE%E7%89%87%E6%94%BE%E5%A4%A7.user.js
// @homepage     https://github.com/zhongfly/Tampermonkey
// @include       /^https?://byr\.pt/index\.php.*$/
// @include      /^https?://byr\.pt/log\.php\?action=funbox.*$/
// @icon         https://byr.pt/favicon.ico
// @grant        none
// ==/UserScript==
'use strict';
var path = window.location.pathname;
if (path==="/index.php"){
    console.log("/index.php")
    window.addEventListener('load', function() {
        var e = document.querySelector("iframe[src='fun.php?action=view']");
        var a = e.contentDocument.querySelectorAll('.shoutrow')[1].querySelectorAll('img');
        for(var i=0;i<a.length;i++){
            var x = a[i].src;
            a[i].style.maxWidth="100%";
            if(x.match('thumb.jpg')){a[i].src = x.slice(0,-10)}
        }
    });
}else if (path==="/log.php"){
    console.log("/log.php")
    window.addEventListener('load', function() {
        var e = document.querySelectorAll("#outer > table >tbody>tr:nth-child(3)>td.rowfollow");
        for (var i=0;i<e.length;i++){
            var a = e[i].querySelectorAll('img[src]');
            for (var j=0;j<a.length;j++){
                var x = a[j].src;
                a[j].style.maxWidth="100%";
                //console.log(x);
                if(x.match('thumb.jpg')){a[j].src = x.slice(0,-10)}
            }
        }
    });
}
