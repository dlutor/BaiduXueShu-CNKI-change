// ==UserScript==
// @id           BaiduXueShu-CNKI-change
// @name         百度学术知网旧版链接转换
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  解决百度学术搜索结果中旧版知网链接替换为新版知网链接,https://github.com/dlutor/BaiduXueShu-CNKI-change
// @author       dlutor
// @match        *://xueshu.baidu.com/*
// @include      */usercenter/paper/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //if (len(document.getElementsByClassName('dl_item_span'))){
    var dl_item_span=document.getElementsByClassName('dl_item_span');
    var new_base_url='https://kns.cnki.net/KCMS/detail/detail.aspx?dbcode=';//CJFQ&filename=
    for (var i=0, len=dl_item_span.length;i<len;i++){
        var element=dl_item_span[i];
        if(element.innerText==" 知网"){
            var pre_url=element.childNodes[1].href;
            if(pre_url.match('cnki.com.cn')){
               var filename=pre_url.split('-').slice(-1)[0].split('.ht')[0];
               var dbcode=pre_url.split('-')[0].split('/').slice(-1)[0].slice(0,4);
               var new_url;
               //debugger;
               if (dbcode=='CDMD'){
               new_url=new_base_url+'CDMD&filename='+filename+'.nh';
               }else{
               new_url=new_base_url+dbcode+'&filename='+filename;
              }
               //alert(new_url);

               //}
        //}
                element.childNodes[1].href=new_url;
            }
    }}
})();
