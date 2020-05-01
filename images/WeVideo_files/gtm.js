
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"318",
  
  "macros":[{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OptanonActiveGroups"
    },{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.pathname+window.location.search+window.location.hash})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[\"accounts.google.*\",\"accounts.youtube.*\",\"accounts.blogger.*\",\"facebook.com.*oauth.*\"],b=\/https?:\\\/\\\/([^\/:]+)\/.exec(",["escape",["macro",3],8,16],");if(b)for(var c=a.length;c--;)if((new RegExp(a[c]+\"$\")).test(b[1]))return null;return ",["escape",["macro",3],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=5,b=9,d=\"_ga_originalSendHitTask\";return function(a){window[d]=window[d]||a.get(\"sendHitTask\");\"number\"===typeof c\u0026\u0026a.set(\"dimension\"+c,a.get(\"clientId\"));\"number\"===typeof b\u0026\u0026a.set(\"dimension\"+b,a.get(\"hitType\"));a.set(\"sendHitTask\",function(a){var c=a,b=window[d],e=!0;try{e\u0026\u0026b(a)}catch(f){b(c)}})}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Subscription-Product-Code"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=(new Date).getTime();return a.toString()+\".\"+Math.random().toString(36).substring(2,7)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"false",
      "vtp_name":"hasUserSession"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm_start_saved"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.start"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",8],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":["macro",9],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","null|undefined","value",["macro",10]]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date;return a.getTime()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date,c=-a.getTimezoneOffset(),d=0\u003C=c?\"+\":\"-\",b=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a};return a.getFullYear()+\"-\"+b(a.getMonth()+1)+\"-\"+b(a.getDate())+\"T\"+b(a.getHours())+\":\"+b(a.getMinutes())+\":\"+b(a.getSeconds())+d+b(c\/60)+\":\"+b(c%60)})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"sign up"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",14],
      "vtp_defaultValue":"Visitor",
      "vtp_map":["list",["map","key","true","value","User"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageVariant"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"p_id",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",17],8,16],";return a?a.charAt(0).toUpperCase()+a.slice(1).toLowerCase():void 0})();"]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",2]],["map","fieldName","referrer","value",["macro",4]],["map","fieldName","customTask","value",["macro",5]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",6]],["map","index","6","dimension",["macro",7]],["map","index","8","dimension",["macro",11]],["map","index","10","dimension",["macro",12]],["map","index","11","dimension",["macro",13]],["map","index","12","dimension",["macro",15]],["map","index","13","dimension",["macro",16]],["map","index","14","dimension",["macro",18]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-25627126-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionTotal"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return!0})();"]
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionProducts.0.sku"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",28],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","12m","value","annual"],["map","key","1m","value","monthly"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",28],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","bizoc","value","business plan"],["map","key","unl","value","unlimited plan"],["map","key","single","value","power plan"],["map","key","flex","value","flex plan"],["map","key","k12","value","education plan"],["map","key","bizindiv","value","professional  plan"]]
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",31],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","Explore features","value","true"],["map","key","Explore plans","value","true"],["map","key","Learn more","value","true"],["map","key","See how","value","true"],["map","key","Explore academy","value","true"],["map","key","Get in touch","value","true"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.impressions"
    },{
      "function":"__e"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",35],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":["macro",35],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","ecommerce_event","value","purchase"],["map","key","CookiePreferencesLoaded","value","impression"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",36],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","purchase","value",["macro",21]]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",36],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":["macro",35],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","purchase","value",["template",["macro",20]," - ",["macro",28]]],["map","key","impression","value","impression"]]
    },{
      "function":"__d",
      "convert_case_to":1,
      "vtp_elementSelector":".tabButtons .tabButtonTitle",
      "vtp_selectorType":"CSS"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",40],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","sso-button.gp","value","Sign up with Google"],["map","key","sso-button.fb","value","Sign up with Facebook"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",35],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","gtm\\.linkClick","value",["macro",31]],["map","key","gtm\\.click","value",["macro",41]]]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",35],
      "vtp_map":["list",["map","key","ecommerce_event","value",["macro",20]]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",35],
      "vtp_map":["list",["map","key","ecommerce_event","value",["macro",21]]]
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",46],8,16],",b;a.match(\/plan=wv_free\/i)\u0026\u0026a.match(\/tier=business\/i)?b=\"Business Trial\":a.match(\/plan=wv_free\/i)\u0026\u0026(b=\"Free\");return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",35],8,16],",b=",["escape",["macro",47],8,16],"?",["escape",["macro",47],8,16],":\"none\";return a+\"\/\"+b})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",28],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","bizindiv_12m","value","LQO4CK6uxqYBEMyxkLgD"],["map","key","bizindiv_1m","value","VvdmCIePuqYBEMyxkLgD"],["map","key","bizoct.*12m","value","eJimCOjb848BEMyxkLgD"],["map","key","bizoct.*1m","value","kDjYCJiIuqYBEMyxkLgD"],["map","key","single.*12m","value","0EJUCNWJuqYBEMyxkLgD"],["map","key","single.*1m","value","3zuSCNe6vaYBEMyxkLgD"],["map","key","unl.*12m","value","_fIxCLywxqYBEMyxkLgD"],["map","key","unl.*1m","value","Dd9WCJSvxqYBEMyxkLgD"],["map","key","flex","value","Oa1KCMiwxqYBEMyxkLgD"],["map","key","k12","value","JJFBCIOK06YBEMyxkLgD"],["map","key","biz","value","_fIxCLywxqYBEMyxkLgD"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",48],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","gtm.elementVisibility\\\/.*buy","value","W-5fCKS8xqYBEMyxkLgD"],["map","key","gtm.elementVisibility","value","W_mpCNmlyGYQzLGQuAM"],["map","key","gtm\\.(link)?Click","value","9jUeCNnf_JIBEMyxkLgD"],["map","key","ecommerce_event","value",["macro",49]]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",43],8,16],".getAttribute(\"onclick\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",42],8,16],".match(\/buy.now\/i)?Number(",["escape",["macro",51],8,16],".match(\/\\d\\d?\\d?\\.\\d\\d?\/ig)[0]):0;return a})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",51],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","unlimited","value","Unlimited"],["map","key","power","value","Power"],["map","key","free","value","Free"],["map","key","professional","value","Professional"],["map","key","business","value","Business"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\".termSwitch .term.monthly\")?document.querySelector(\".termSwitch .term.monthly\").className:\"none\";document.querySelector(\".termSwitch .term.annual\")\u0026\u0026document.querySelector(\".termSwitch .term.annual\");return a.match(\/selected\/i)?\"mo\":\"yr\"})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",42],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":["macro",42],
      "vtp_map":["list",["map","key","buy.now","value",["template",["macro",53]," - ",["macro",54]]],["map","key","try.it","value","Free trial  - Personal plan"],["map","key","start.a.teacher.trial","value","Free trial - Education plan"],["map","key","start.your.free.plan","value","Free trial  - Personal plan"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",56],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"External links",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","wevideo\\.com","value","Internal links"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"luna.ajax.url"
    },{
      "function":"__c",
      "vtp_value":"136995080275316"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"CancelButtonClicked"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"PlanUpgradeButtonClicked"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ChangePlanButtonClicked"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userSessionLoaded"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cookiePreferencesLoaded"
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",68],8,16],".add.products[0].name;return a})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_medium",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"false",
      "vtp_name":"isInternalWeVideoIP"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"multiplePageViews"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){a=new RegExp(a+\"\\x3d([^;]+)\");a=a.exec(document.cookie);return null!=a?unescape(a[1]):null}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,e,f,b,c){if(d\u0026\u0026e){b=b?\"; path\\x3d\"+b:\"\";c=c?\"; domain\\x3d\"+c:\"\";var a=\"\";f\u0026\u0026(a=new Date,a.setTime(a.getTime()+f),a=\"; expires\\x3d\"+a.toUTCString());document.cookie=d+\"\\x3d\"+e+a+b+c}}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Subscription-Price"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Adwords-Label"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"newUrlFragment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dimension2"
    },{
      "function":"__c",
      "vtp_value":"UA-25627126-1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.parentElement.className"
    },{
      "function":"__c",
      "vtp_value":"UA-25627126-5"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_ga"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"luna.ajax.response.ip"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",84],
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key","31.185.7.216","value","true"],["map","key","73.231.33.80","value","true"],["map","key","172.68.246.198","value","true"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",83],8,16],",b=",["escape",["macro",25],8,16],";return a+b})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",82],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","(00|01|02|03|04)\/$","value","true"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__r"
    },{
      "function":"__hid"
    }],
  "tags":[{
      "function":"__html",
      "priority":1000,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",74],8,16],"(\"_ga\")||(window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:\"first_time_vist\"}));",["escape",["macro",75],8,16],"(\"multiplePageViews\",!0,432E5,\"\/\",\".wevideo.com\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":237
    },{
      "function":"__img",
      "priority":100,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=136995080275316\u0026ev=PageView",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",27],
      "tag_id":192
    },{
      "function":"__cvt_2170256_502",
      "priority":1,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_pixelId":["macro",59],
      "vtp_objectPropertyList":["list",["map","name","signup_type","value","'free'"]],
      "vtp_disableAutoConfig":false,
      "vtp_userProperties":false,
      "vtp_eventName":"custom",
      "vtp_objectPropertiesFromVariable":false,
      "vtp_customEventName":"SignUp",
      "vtp_consent":true,
      "vtp_advancedMatching":false,
      "tag_id":221
    },{
      "function":"__cvt_2170256_502",
      "priority":1,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_pixelId":["macro",59],
      "vtp_objectPropertyList":["list",["map","name","signup_type","value","'paid'"]],
      "vtp_disableAutoConfig":false,
      "vtp_userProperties":false,
      "vtp_eventName":"custom",
      "vtp_objectPropertiesFromVariable":false,
      "vtp_customEventName":"SignUp",
      "vtp_consent":true,
      "vtp_advancedMatching":false,
      "tag_id":252
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"!==typeof fbq\u0026\u0026fbq(\"trackCustom\",\"",["escape",["macro",35],7],"\",{page:\"",["escape",["macro",24],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":196
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"!==typeof fbq\u0026\u0026fbq(\"trackCustom\",\"Buy now - Button click\",{product_name:",["escape",["macro",69],8,16],",page:",["escape",["macro",24],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":220
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"!==typeof fbq\u0026\u0026fbq(\"trackCustom\",\"Google Ads\",{page:\"",["escape",["macro",24],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":225
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":5
    },{
      "function":"__ua",
      "metadata":["map"],
      "setup_tags":["list",["tag",15,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",19],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":7
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":18
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":21
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":25
    },{
      "function":"__gclidw",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":33
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",20],
      "vtp_conversionValue":["macro",21],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"923015372",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"04agCJy4wo8BEMyxkLgD",
      "vtp_url":["macro",22],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "tag_id":34
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"923015372",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":false,
      "vtp_url":["macro",22],
      "vtp_enableRdpCheckbox":true,
      "tag_id":65
    },{
      "function":"__opt",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":"GTM-5J48FVN",
      "vtp_gaSettings":["macro",19],
      "tag_id":191
    },{
      "function":"__baut",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_goalValue":["macro",21],
      "vtp_eventValue":["macro",21],
      "vtp_eventCategory":"Purchase",
      "vtp_tagId":"25058153",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":["template",["macro",29]," - ",["macro",30]],
      "vtp_eventLabel":["macro",28],
      "tag_id":194
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":200
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",37],
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":["macro",36],
      "vtp_eventLabel":["macro",38],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":208
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",44],
      "vtp_conversionValue":["macro",45],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"923015372",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":["macro",50],
      "vtp_url":["macro",22],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "tag_id":210
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",52],
      "vtp_eventCategory":"Button clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":["macro",42],
      "vtp_eventLabel":["macro",55],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":212
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Links clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":["macro",57],
      "vtp_eventLabel":["template",["macro",31]," --\u003E ",["macro",56]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":213
    },{
      "function":"__ua",
      "metadata":["map"],
      "teardown_tags":["list",["tag",94,0]],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Sign up",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":214
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Enhanced Bounce Rate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Enhanced Bounce Rate",
      "vtp_eventLabel":"Enhanced Bounce Rate",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":216
    },{
      "function":"__baut",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_eventCategory":"Sign up",
      "vtp_tagId":"25058153",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":["macro",47],
      "tag_id":217
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":218
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Contact us",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"submit",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":219
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":222
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",19],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":224
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":226
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"AB test",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",16],
      "vtp_eventLabel":["macro",24],
      "vtp_trackingId":["macro",19],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":229
    },{
      "function":"__pntr",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_tagId":"2614227160372",
      "vtp_eventName":"",
      "tag_id":231
    },{
      "function":"__pntr",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_setCustomParams":false,
      "vtp_tagId":"2614227160372",
      "vtp_eventName":"pagevisit",
      "tag_id":232
    },{
      "function":"__pntr",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_setCustomParams":false,
      "vtp_tagId":"2614227160372",
      "vtp_eventName":"addtocart",
      "vtp_currency":"USD",
      "tag_id":233
    },{
      "function":"__pntr",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_setCustomParams":true,
      "vtp_tagId":"2614227160372",
      "vtp_values":["list",["map","name","","value",""]],
      "vtp_product_id":["macro",28],
      "vtp_eventName":"checkout",
      "vtp_currency":"USD",
      "vtp_value":["macro",21],
      "vtp_order_id":["macro",20],
      "tag_id":234
    },{
      "function":"__bzi",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_id":"1471290",
      "tag_id":235
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":236
    },{
      "function":"__cvt_2170256_502",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_pixelId":["macro",59],
      "vtp_disableAutoConfig":false,
      "vtp_userProperties":false,
      "vtp_eventName":"custom",
      "vtp_objectPropertiesFromVariable":false,
      "vtp_customEventName":"First Time Visit",
      "vtp_consent":true,
      "vtp_advancedMatching":false,
      "tag_id":238
    },{
      "function":"__cvt_2170256_502",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_pixelId":["macro",59],
      "vtp_disableAutoConfig":false,
      "vtp_userProperties":false,
      "vtp_eventName":"custom",
      "vtp_objectPropertiesFromVariable":false,
      "vtp_customEventName":"Plan Upgrade Button Click",
      "vtp_consent":true,
      "vtp_advancedMatching":false,
      "tag_id":239
    },{
      "function":"__cvt_2170256_502",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_pixelId":["macro",59],
      "vtp_disableAutoConfig":false,
      "vtp_userProperties":false,
      "vtp_eventName":"custom",
      "vtp_objectPropertiesFromVariable":false,
      "vtp_customEventName":"Plan Cancel Button Click",
      "vtp_consent":true,
      "vtp_advancedMatching":false,
      "tag_id":242
    },{
      "function":"__cvt_2170256_502",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_pixelId":["macro",59],
      "vtp_disableAutoConfig":false,
      "vtp_userProperties":false,
      "vtp_eventName":"custom",
      "vtp_objectPropertiesFromVariable":false,
      "vtp_customEventName":"Plan Cancel Confirmation",
      "vtp_consent":true,
      "vtp_advancedMatching":false,
      "tag_id":243
    },{
      "function":"__ua",
      "metadata":["map"],
      "teardown_tags":["list",["tag",94,2]],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Sign up",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Paid",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":244
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Account Management",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Plan Upgrade - Free To Paid",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":246
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Account Management",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Plan Upgrade - Paid To Higher Tier",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":247
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Sign up",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Start Teacher Trial Button Click",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":248
    },{
      "function":"__cvt_2170256_502",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_pixelId":["macro",59],
      "vtp_disableAutoConfig":false,
      "vtp_userProperties":false,
      "vtp_eventName":"custom",
      "vtp_objectPropertiesFromVariable":false,
      "vtp_customEventName":"Start Teacher Trial Button Click",
      "vtp_consent":true,
      "vtp_advancedMatching":false,
      "tag_id":249
    },{
      "function":"__cvt_2170256_502",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_pixelId":["macro",59],
      "vtp_objectPropertyList":["list",["map","name","upgrade_type","value","'Paid To Higher Tier'"]],
      "vtp_disableAutoConfig":false,
      "vtp_userProperties":false,
      "vtp_eventName":"custom",
      "vtp_objectPropertiesFromVariable":false,
      "vtp_customEventName":"Plan Upgrade",
      "vtp_consent":true,
      "vtp_advancedMatching":false,
      "tag_id":251
    },{
      "function":"__cvt_2170256_502",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_pixelId":["macro",59],
      "vtp_objectPropertyList":["list",["map","name","upgrade_type","value","'Free To Paid'"]],
      "vtp_disableAutoConfig":false,
      "vtp_userProperties":false,
      "vtp_eventName":"custom",
      "vtp_objectPropertiesFromVariable":false,
      "vtp_customEventName":"Plan Upgrade",
      "vtp_consent":true,
      "vtp_advancedMatching":false,
      "tag_id":253
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Account Management",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Cancel Plan Button Click",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":255
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Account Management",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Cancel Plan Confirmation",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":256
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Account Management",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Account Deletion Link Click",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":257
    },{
      "function":"__hl",
      "tag_id":528
    },{
      "function":"__tl",
      "vtp_eventName":"timeOnPage30",
      "vtp_interval":"30000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"2170256_365",
      "tag_id":529
    },{
      "function":"__tl",
      "vtp_eventName":"timeOnPage60",
      "vtp_interval":"60000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"2170256_367",
      "tag_id":530
    },{
      "function":"__tl",
      "vtp_eventName":"timeOnPage90",
      "vtp_interval":"90000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"2170256_368",
      "tag_id":531
    },{
      "function":"__tl",
      "vtp_eventName":"timeOnPage120",
      "vtp_interval":"120000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"2170256_369",
      "tag_id":532
    },{
      "function":"__hl",
      "tag_id":533
    },{
      "function":"__hl",
      "tag_id":534
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":".tabButtonTitle",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2170256_381",
      "tag_id":535
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2170256_383",
      "tag_id":536
    },{
      "function":"__cl",
      "tag_id":537
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2170256_385",
      "tag_id":538
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"30000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"2170256_386",
      "tag_id":539
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"20",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"DOM_READY",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"2170256_387",
      "vtp_enableTriggerStartOption":true,
      "tag_id":540
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","2170256_388_386","2170256_388_387"],
      "vtp_uniqueTriggerId":"2170256_388",
      "tag_id":541
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"2170256_388_386",
      "tag_id":542
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"2170256_388_387",
      "tag_id":544
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2170256_389",
      "tag_id":545
    },{
      "function":"__fsl",
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2170256_391",
      "tag_id":546
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2170256_395",
      "tag_id":547
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2170256_411",
      "tag_id":548
    },{
      "function":"__cl",
      "tag_id":549
    },{
      "function":"__cl",
      "tag_id":550
    },{
      "function":"__cl",
      "tag_id":551
    },{
      "function":"__cl",
      "tag_id":552
    },{
      "function":"__cl",
      "tag_id":553
    },{
      "function":"__cl",
      "tag_id":554
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"!==typeof twttr\u0026\u0026twttr.conversion.trackPid(\"nusmp\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nusmp\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=nusmp\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":3
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._fs_debug=!0;window._fs_host=\"www.fullstory.com\";window._fs_org=\"1T7XN\";window._fs_namespace=\"FS\";function createCookie(e,f,d){if(d){var a=new Date;a.setTime(a.getTime()+6E4*d);d=\"; expires\\x3d\"+a.toLocaleString()}else d=\"\";document.cookie=e+\"\\x3d\"+f+d+\"; path\\x3d\/\"}function readCookie(e){e+=\"\\x3d\";for(var f=document.cookie.split(\";\"),d=0;d\u003Cf.length;d++){for(var a=f[d];\" \"==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(e))return a.substring(e.length,a.length)}return null}\n(function(e,f,d,a,k,h,b,g){g=readCookie(\"wvFS\");g||(g=Math.floor(100*Math.random()),createCookie(\"wvFS\",g,1080));10\u003C=g\u0026\u0026-1==window.location.href.indexOf(\"order\")||(d in e\u0026\u0026e.console\u0026\u0026e.console.log?e.console.log('FullStoryyy namespace conflict. Please set window[\"_fs_namespace\"].'):(b=e[d]=function(a,c){b.q?b.q.push([a,c]):b._api(a,c)},b.q=[],h=f.createElement(a),h.async=1,h.src=\"https:\/\/\"+_fs_host+\"\/s\/fs.js\",g=f.getElementsByTagName(a)[0],g.parentNode.insertBefore(h,g),b.identify=function(a,c){b(k,\n{uid:a});c\u0026\u0026b(k,c)},b.setUserVars=function(a){b(k,a)},b.event=function(a,c,d){b(\"event\",{n:a,p:c},d)},b.identifyAccount=function(a,c){h=\"account\";c=c||{};c.acctId=a;b(h,c)},b.clearUserCookie=function(a,c,b){if(!a||document.cookie.match(\"fs_uid\\x3d[^;`]*`[^;`]*`[^;`]*`\"))for(c=f.domain;;){f.cookie=\"fs_uid\\x3d;domain\\x3d\"+c+\";path\\x3d\/;expires\\x3d\"+new Date(0);b=c.indexOf(\".\");if(0\u003Eb)break;c=c.slice(b+1)}}))})(window,document,window._fs_namespace,\"script\",\"user\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":20
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._fs_debug=!0;window._fs_host=\"www.fullstory.com\";window._fs_org=\"1T7XN\";window._fs_namespace=\"FS\";function createCookie(e,f,d){if(d){var a=new Date;a.setTime(a.getTime()+6E4*d);d=\"; expires\\x3d\"+a.toLocaleString()}else d=\"\";document.cookie=e+\"\\x3d\"+f+d+\"; path\\x3d\/\"}function readCookie(e){e+=\"\\x3d\";for(var f=document.cookie.split(\";\"),d=0;d\u003Cf.length;d++){for(var a=f[d];\" \"==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(e))return a.substring(e.length,a.length)}return null}\n(function(e,f,d,a,k,h,b,g){g=readCookie(\"wvFS\");g||(g=Math.floor(100*Math.random()),createCookie(\"wvFS\",g,1080));d in e\u0026\u0026e.console\u0026\u0026e.console.log?e.console.log('FullStoryyy namespace conflict. Please set window[\"_fs_namespace\"].'):(b=e[d]=function(a,c){b.q?b.q.push([a,c]):b._api(a,c)},b.q=[],h=f.createElement(a),h.async=1,h.src=\"https:\/\/\"+_fs_host+\"\/s\/fs.js\",g=f.getElementsByTagName(a)[0],g.parentNode.insertBefore(h,g),b.identify=function(a,c){b(k,{uid:a});c\u0026\u0026b(k,c)},b.setUserVars=function(a){b(k,\na)},b.event=function(a,c,d){b(\"event\",{n:a,p:c},d)},b.identifyAccount=function(a,c){h=\"account\";c=c||{};c.acctId=a;b(h,c)},b.clearUserCookie=function(a,c,b){if(!a||document.cookie.match(\"fs_uid\\x3d[^;`]*`[^;`]*`[^;`]*`\"))for(c=f.domain;;){f.cookie=\"fs_uid\\x3d;domain\\x3d\"+c+\";path\\x3d\/;expires\\x3d\"+new Date(0);b=c.indexOf(\".\");if(0\u003Eb)break;c=c.slice(b+1)}})})(window,document,window._fs_namespace,\"script\",\"user\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":22
    },{
      "function":"__html",
      "priority":0,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"136995080275316\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":36
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._fs_debug=!1;window._fs_host=\"www.fullstory.com\";window._fs_org=\"1T7XN\";window._fs_namespace=\"FS\";\"undefined\"===typeof window._fs_ready\u0026\u0026(window._fs_ready=function(){var c=\"undefined\"!==typeof loggedIn\u0026\u0026loggedIn||\"undefined\"!==typeof window.UserSession;FS.setUserVars({is_user:c})});\n(function(c,f,k,l,g,e,b,h){k in c\u0026\u0026c.console\u0026\u0026c.console.log?c.console.log('FullStory namespace conflict. Please set window[\"_fs_namespace\"].'):(b=c[k]=function(d,a){b.q?b.q.push([d,a]):b._api(d,a)},b.q=[],e=f.createElement(l),e.async=1,e.src=\"https:\/\/\"+_fs_host+\"\/s\/fs.js\",h=f.getElementsByTagName(l)[0],h.parentNode.insertBefore(e,h),b.identify=function(d,a){b(g,{uid:d});a\u0026\u0026b(g,a)},b.setUserVars=function(d){b(g,d)},b.event=function(d,a,c){b(\"event\",{n:d,p:a},c)},b.identifyAccount=function(d,a){e=\"account\";\na=a||{};a.acctId=d;b(e,a)},b.clearUserCookie=function(b,a,c){if(!b||document.cookie.match(\"fs_uid\\x3d[^;`]*`[^;`]*`[^;`]*`\"))for(a=f.domain;;){f.cookie=\"fs_uid\\x3d;domain\\x3d\"+a+\";path\\x3d\/;expires\\x3d\"+new Date(0);c=a.indexOf(\".\");if(0\u003Ec)break;a=a.slice(c+1)}})})(window,document,window._fs_namespace,\"script\",\"user\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":64
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\" id=\"hs-script-loader\" async defer data-gtmsrc=\"\/\/js.hs-scripts.com\/165225.js\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":98
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.driftt=window.drift=window.driftt||[];if(!a.init){if(a.invoked)return void(window.console\u0026\u0026console.error\u0026\u0026console.error(\"Drift snippet included twice.\"));a.invoked=!0;a.methods=\"identify config track reset debug show ping page hide off on\".split(\" \");a.factory=function(c){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(c),a.push(b),a}};a.methods.forEach(function(c){a[c]=a.factory(c)});a.load=function(a){var b=3E5,c=Math.ceil(new Date\/b)*b;b=\ndocument.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.crossorigin=\"anonymous\";b.src=\"https:\/\/js.driftt.com\/include\/\"+c+\"\/\"+a+\".js\";a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)}}}();drift.SNIPPET_VERSION=\"0.3.1\";drift.load(\"8icgffm52pza\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":99
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"undefined\"!==typeof window.UserSession){var user=window.UserSession,segment=user.getUserProperty(\"purpose\");\"business\"==segment?segment=\"biz\":\"education\"==segment?segment=\"edu\":\"personal\"==segment\u0026\u0026(segment=\"per\");var data={is_user:!0,product:user.getProductCode(),segment:segment};if(user.isEnterpriseMember()){var role=\"user\";user.isReadAdmin()?role=\"lead\":user.isAdmin()\u0026\u0026(role=user.isAccountOwner()?\"owner\":\"admin\");data.member_role=role}\"undefined\"!==typeof window.FS?FS.setUserVars(data):window._fs_ready=\nfunction(){FS.setUserVars(data)}};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":188
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"25058153\"};a.q=b[d];\"undefined\"!==typeof UET\u0026\u0026(b[d]=new UET(a),b[d].push(\"pageLoad\"))};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":190
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar elem=document.querySelector(\"#drift-widget\");null!=elem\u0026\u0026(\"tab_education\"===",["escape",["macro",67],8,16],"?elem.style.display=\"none\":\"tab_personal\"===",["escape",["macro",67],8,16],"\u0026\u0026(elem.style.display=\"block\"));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":209
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];window.dataLayer.push({event:\"gtm.start.saved\",gtm_start_saved:",["escape",["macro",10],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":223
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cmeta name=\"yandex-verification\" content=\"9daaccc8f6e93fe4\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":227
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.__lo_site_id=172198;(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/d10lpsik1i8c69.cloudfront.net\/w.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":230
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];window.dataLayer.push({event:\"Cancel Plan Button\",CancelButtonClicked:!0});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":241
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];window.dataLayer.push({event:\"Plan Upgrade Button\",PlanUpgradeButtonClicked:!0});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":245
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];window.dataLayer.push({event:\"Change Plan Button\",ChangePlanButtonClicked:!0});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":254
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"!==typeof fbq\u0026\u0026fbq(\"track\",\"Lead\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":527
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",75],8,16],"(\"sign up\",\"true\",5555563072E3,\"\/\",\"wevideo.com\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":215
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":",4,"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"CookiePreferencesLoaded|UserSessionAndCookiePreferencesLoaded"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":",2,"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"ecommerce_event"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"pages\\.wevideo\\.com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"\/lp\/"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"video-creation-for-chromebook-classrooms"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":",3,"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"CookiePreferencesLoaded"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)2170256_395($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"addToCart"
    },{
      "function":"_eq",
      "arg0":["macro",34],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"\/hub"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"your summary"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)2170256_381($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",42],
      "arg1":"^start.now$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)2170256_389($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",43],
      "arg1":".btn, .button"
    },{
      "function":"_re",
      "arg0":["macro",42],
      "arg1":"^buy.now|start.now$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)2170256_411($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",42],
      "arg1":".+",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)2170256_383($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":"sso-button.fb|sso-button.gp",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":"btn|button|ssoLoginHref",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":".+",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)2170256_385($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.triggerGroup"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)2170256_388($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)2170256_391($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",58],
      "arg1":"wevideo.com\/api\/3\/zendesk\/ticket"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"luna.ajaxComplete"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"AB test"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"first_time_visit"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"UPGRADE"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"CHANGE PLAN"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"cancel your plan"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"YES"
    },{
      "function":"_eq",
      "arg0":["macro",60],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"Checkout now"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"PaymentCompleted"
    },{
      "function":"_eq",
      "arg0":["macro",61],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",62],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"START A TEACHER TRIAL"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"Permanently delete this account"
    },{
      "function":"_re",
      "arg0":["macro",25],
      "arg1":".*"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":".*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)2170256_386($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)2170256_387($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"contact"
    },{
      "function":"_cn",
      "arg0":["macro",63],
      "arg1":"hsforms.com\/submissions"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"nextgen"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"awstest"
    },{
      "function":"_re",
      "arg0":["macro",25],
      "arg1":"(education|education-leaders|education-resources|blog\/category\/for-schools|blog\/for-schools|sign-up#tab_education|eu-video-creation-on-chromebooks-with-wevideo)"
    },{
      "function":"_eq",
      "arg0":["macro",64],
      "arg1":"tab_education"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"sign-up"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.historyChange"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/sign-up#tab_education"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"\/hub"
    },{
      "function":"_eq",
      "arg0":["macro",65],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"UserSessionAndCookiePreferencesLoaded"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"timeOnPage30"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)2170256_365($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"timeOnPage120"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)2170256_369($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"timeOnPage60"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)2170256_367($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"timeOnPage90"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)2170256_368($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",67],
      "arg1":"tab_education"
    },{
      "function":"_cn",
      "arg0":["macro",64],
      "arg1":"tab_personal"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"sign-up"
    },{
      "function":"_eq",
      "arg0":["macro",67],
      "arg1":"tab_personal"
    },{
      "function":"_cn",
      "arg0":["macro",64],
      "arg1":"tab_education"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"google"
    },{
      "function":"_eq",
      "arg0":["macro",71],
      "arg1":"cpc"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"\/"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"hub|view"
    },{
      "function":"_re",
      "arg0":["macro",25],
      "arg1":"^\\\/$|sign-in"
    },{
      "function":"_eq",
      "arg0":["macro",72],
      "arg1":"false"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"hub"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"sign-in"
    },{
      "function":"_eq",
      "arg0":["macro",73],
      "arg1":"true"
    },{
      "function":"_ew",
      "arg0":["macro",25],
      "arg1":"-ty"
    }],
  "rules":[
    [["if",0,1],["add",7,10,31,32,35,77,80,85]],
    [["if",2],["add",8,12,63]],
    [["if",5],["add",9,15,25,36,87,0,51,56,57,58,59,60,61,64,67,69,70,71,72,73,74,75,76]],
    [["if",6],["add",11,13,16,19,27,34],["block",33]],
    [["if",5,7],["add",14]],
    [["if",5,8],["add",14,28,29]],
    [["if",5,8],["unless",11],["add",1]],
    [["if",0,12],["unless",11],["add",1]],
    [["if",13,14,15],["add",17]],
    [["if",16],["add",18,33,5]],
    [["if",12],["unless",17],["add",18]],
    [["if",18,19,21,22],["unless",20],["add",19,22,24,2]],
    [["if",8,14,23,24],["add",19,20]],
    [["if",14,25,26,27],["add",19]],
    [["if",14,25,28,29],["add",20]],
    [["if",30,31],["add",20]],
    [["if",14,33,34],["unless",32],["add",21]],
    [["if",35,36],["add",23]],
    [["if",37,38],["add",26]],
    [["if",39,40],["add",26]],
    [["if",41],["add",30]],
    [["if",42],["add",37]],
    [["if",31,43],["add",38,91]],
    [["if",31,44],["add",38,92]],
    [["if",31,45],["add",39,48,90]],
    [["if",31,46,47],["add",40,49]],
    [["if",48,49],["add",41,3]],
    [["if",49,50],["unless",51],["add",42,47]],
    [["if",49,51],["add",43,46]],
    [["if",31,52],["add",44,45]],
    [["if",31,53],["add",50]],
    [["if",5,54],["add",52,53,54,55]],
    [["if",5,55],["add",62]],
    [["if",56,57],["add",65]],
    [["if",55,58,59],["add",66]],
    [["if",5,60,61],["add",68]],
    [["if",1,10],["add",78,82]],
    [["if",5,62],["add",79]],
    [["if",0,12,63],["add",81]],
    [["if",2,64],["add",83]],
    [["if",65,66,67],["add",83]],
    [["if",2,68],["add",83]],
    [["if",70,71,72],["add",84]],
    [["if",73,74],["add",4]],
    [["if",75,76],["add",4]],
    [["if",77,78],["add",4]],
    [["if",79,80],["add",4]],
    [["if",67,81,82,83],["add",86]],
    [["if",67,83,84,85],["add",86]],
    [["if",5,86,87],["add",6]],
    [["if",2,88],["add",88]],
    [["if",5,91],["unless",89,90],["add",89]],
    [["if",1,7,95],["add",93]],
    [["if",4],["unless",3],["block",8,11,18,20,21,22,23,26,30,41,42,43,44,48,49,50]],
    [["if",4],["unless",0],["block",9,12,13,14,16,17,19,24,2,27,33,34,37,38,39,40,45,46,3,47,4,5,6,93]],
    [["if",5,9],["block",15,29,83]],
    [["if",4],["unless",10],["block",15,79,83,86,89]],
    [["if",5,69],["block",83]],
    [["if",2,92],["block",89]],
    [["if",2,93],["block",89]],
    [["if",5,94],["block",0]]]
},
"runtime":[[50,"__cvt_2170256_502",[46,"a"],[52,"b",["require","createQueue"]],[52,"c",["require","callInWindow"]],[52,"d",["require","aliasInWindow"]],[52,"e",["require","copyFromWindow"]],[52,"f",["require","setInWindow"]],[52,"g",["require","injectScript"]],[52,"h",["require","makeTableMap"]],[52,"i",["require","getType"]],[52,"j",["require","logToConsole"]],[52,"k",[30,["e","_fbq_gtm_ids"],[7]]],[52,"l",[17,[15,"a"],"pixelId"]],[52,"m",[7,"AddPaymentInfo","AddToCart","AddToWishlist","CompleteRegistration","Contact","CustomizeProduct","Donate","FindLocation","InitiateCheckout","Lead","PageView","Purchase","Schedule","Search","StartTrial","SubmitApplication","Subscribe","ViewContent"]],[52,"n",[51,"",[7,"ba","bb"],[55,"bc",[15,"bb"],[46,[22,[2,[15,"bb"],"hasOwnProperty",[7,[15,"bc"]]],[46,[43,[15,"ba"],[15,"bc"],[16,[15,"bb"],[15,"bc"]]]]]]],[36,[15,"ba"]]]],[52,"o",[51,"",[7],[41,"ba"],[3,"ba",["e","fbq"]],[22,[15,"ba"],[46,[36,[15,"ba"]]]],["f","fbq",[51,"",[7],[52,"bb",["e","fbq.callMethod.apply"]],[22,[15,"bb"],[46,["c","fbq.callMethod.apply",[45],[15,"arguments"]]],[46,["c","fbq.queue.push",[15,"arguments"]]]]]],["d","_fbq","fbq"],["b","fbq.queue"],[36,["e","fbq"]]]],[52,"p",["o"]],[52,"q",[39,[17,[15,"a"],"userPropertyList"],["h",[17,[15,"a"],"userPropertyList"],"name","value"],[8]]],[52,"r",[39,[17,[15,"a"],"advancedMatchingList"],["h",[17,[15,"a"],"advancedMatchingList"],"name","value"],[8]]],[52,"s",[39,[17,[15,"a"],"objectPropertyList"],["h",[17,[15,"a"],"objectPropertyList"],"name","value"],[8]]],[52,"t",[39,[20,["i",[17,[15,"a"],"objectPropertiesFromVariable"]],"object"],[17,[15,"a"],"objectPropertiesFromVariable"],[8]]],[52,"u",["n",[15,"t"],[15,"s"]]],[52,"v",[39,[20,[17,[15,"a"],"eventName"],"custom"],[17,[15,"a"],"customEventName"],[39,[20,[17,[15,"a"],"eventName"],"variable"],[17,[15,"a"],"variableEventName"],[17,[15,"a"],"standardEventName"]]]],[52,"w",[39,[20,[2,[15,"m"],"indexOf",[7,[15,"v"]]],[27,1]],"trackSingleCustom","trackSingle"]],[52,"x",[39,[17,[15,"a"],"userId"],[8,"uid",[17,[15,"a"],"userId"]],[8]]],[52,"y",["n",[15,"x"],[15,"r"]]],[52,"z",[39,[20,[17,[15,"a"],"consent"],false],"revoke","grant"]],["p","consent",[15,"z"]],[2,[2,[15,"l"],"split",[7,","]],"forEach",[7,[51,"",[7,"ba"],[22,[20,[2,[15,"k"],"indexOf",[7,[15,"ba"]]],[27,1]],[46,[22,[17,[15,"a"],"disableAutoConfig"],[46,["p","set","autoConfig",false,[15,"ba"]]]],["p","init",[15,"ba"],[15,"y"]],[2,[15,"k"],"push",[7,[15,"ba"]]],["f","_fbq_gtm_ids",[15,"k"],true],[22,[17,[15,"a"],"userProperties"],[46,["p","setUserProperties",[15,"ba"],[15,"q"]]]]]],["p",[15,"w"],[15,"ba"],[15,"v"],[15,"u"]]]]],["g","https://connect.facebook.net/en_US/fbevents.js",[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],"fbPixel"]],[50,"__pntr",[46,"a"],[52,"b",["require","copyFromWindow"]],[52,"c",["require","createArgumentsQueue"]],[52,"d",["require","injectScript"]],[52,"e",["require","logToConsole"]],[52,"f",["require","makeTableMap"]],["e",[0,"GTM PTag v1.2; tagId: ",[17,[15,"a"],"tagId"]]],[52,"g",[28,["b","pintrk"]]],[52,"h",["c","pintrk","pintrk.queue"]],[22,[15,"g"],[46,[53,[52,"k",[8,"np","gtm"]],[22,[17,[15,"a"],"em"],[46,[43,[15,"k"],"em",[17,[15,"a"],"em"]]]],["h","load",[2,[17,[15,"a"],"tagId"],"toString",[7]],[15,"k"]],["h","page",[15,"k"]]]],[46,[22,[17,[15,"a"],"em"],[46,[53,[52,"k",[8,"em",[17,[15,"a"],"em"]]],["h","set",[15,"k"]]]]]]],[52,"i",[51,"",[7],[41,"k"],[3,"k",[8]],[22,[17,[15,"a"],"setCustomParams"],[46,[3,"k",["f",[17,[15,"a"],"values"],"name","value"]]]],[43,[15,"k"],"np","gtm"],[52,"l",[51,"",[7,"n"],[22,[21,[16,[15,"a"],[15,"n"]],[44]],[46,[43,[15,"k"],[15,"n"],[16,[15,"a"],[15,"n"]]]]]]],[52,"m",[51,"",[7,"n"],[22,[21,[16,[15,"a"],[15,"n"]],[44]],[46,[22,[20,[17,[15,"k"],"line_items"],[44]],[46,[43,[15,"k"],"line_items",[7,[8]]]]],[43,[16,[17,[15,"k"],"line_items"],0],[15,"n"],[16,[15,"a"],[15,"n"]]]]]]],[38,[17,[15,"a"],"eventName"],[46,"watchvideo","viewcategory","custom","signup","lead","search","addtocart","checkout","pagevisit"],[46,[5,[46]],[5,[46]],[5,[46,[4]]],[5,[46]],[5,[46,["l","lead_type"],[4]]],[5,[46,["l","search_query"],[4]]],[5,[46]],[5,[46,["l","order_id"],["l","order_quantity"],["l","value"],["l","currency"]]],[5,[46,["m","product_id"],["m","product_category"],[4]]],[9,[46,[4]]]]],[22,[21,[17,[15,"a"],"eventName"],""],[46,["e",[0,"Firing Pinterest event: ",[17,[15,"a"],"eventName"]]],["e","Event Data:"],["e",[15,"k"]],["h","track",[17,[15,"a"],"eventName"],[15,"k"]]]],[2,[15,"a"],"gtmOnSuccess",[7]]]],[52,"j",[51,"",[7],["e","Pinterest Error: Loading JS failed!"],[2,[15,"a"],"gtmOnFailure",[7]]]],["d","https://s.pinimg.com/ct/core.js",[15,"i"],[15,"j"],"PinterestJS"]]]
,"permissions":{"__cvt_2170256_502":{"access_globals":{"keys":[{"key":"fbq","read":true,"write":true,"execute":false},{"key":"_fbq_gtm","read":true,"write":true,"execute":false},{"key":"_fbq","read":false,"write":true,"execute":false},{"key":"_fbq_gtm_ids","read":true,"write":true,"execute":false},{"key":"fbq.callMethod.apply","read":true,"write":false,"execute":true},{"key":"fbq.queue.push","read":false,"write":false,"execute":true},{"key":"fbq.queue","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/connect.facebook.net\/en_US\/fbevents.js"]},"logging":{"environments":"debug"}},"__pntr":{"access_globals":{"keys":[{"key":"pintrk","read":true,"write":true,"execute":true},{"key":"pintrk.queue","read":true,"write":true,"execute":true}]},"logging":{"environments":"debug"},"inject_script":{"urls":["https:\/\/s.pinimg.com\/ct\/core.js"]}}}
,"sandboxed_scripts":["__cvt_2170256_502"]
,"security_groups":{
"nonGoogleScripts":["__pntr"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ca;if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var ha;a:{var ia={Pf:!0},ja={};try{ja.__proto__=ia;ha=ja.Pf;break a}catch(a){}ha=!1}ca=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var la=ca,ma=function(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]},na=this||self,oa=/^[\w+/_-]+[=]{0,2}$/,pa=null;var qa=function(a,b){this.a=a;this.i=b};var ra=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},sa=function(){this.m={};this.i=!1;this.w={}};sa.prototype.get=function(a){return this.m["dust."+a]};sa.prototype.set=function(a,b){this.i||(a="dust."+a,this.w.hasOwnProperty(a)||(this.m[a]=b))};sa.prototype.has=function(a){return this.m.hasOwnProperty("dust."+a)};var ta=function(a){var b=[],c;for(c in a.m)a.m.hasOwnProperty(c)&&b.push(c.substr(5));return b};var h=function(a){this.i=new sa;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ra(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};aa=h.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof h?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"==a){if(!ra(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else ra(a)?this.a[Number(a)]=b:this.i.set(a,b)};aa.get=function(a){return"length"==a?this.length():ra(a)?this.a[Number(a)]:this.i.get(a)};aa.length=function(){return this.a.length};aa.$b=function(){for(var a=ta(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new h(a)};
var ua=function(a,b){if(ra(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.i||c.w.hasOwnProperty(d)||delete c.m[d]}};aa=h.prototype;aa.pop=function(){return this.a.pop()};aa.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.a.shift()};aa.splice=function(a,b,c){return new h(this.a.splice.apply(this.a,arguments))};aa.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
aa.has=function(a){return ra(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var va=function(){function a(f,g){if(b[f]){if(b[f].Qb+g>b[f].max)throw Error("Quota exceeded");b[f].Qb+=g}}var b={},c=void 0,d=void 0,e={ih:function(f){c=f},te:function(){c&&a(c,1)},kh:function(f){d=f},Ca:function(f){d&&a(d,f)},Hh:function(f,g){b[f]=b[f]||{Qb:0};b[f].max=g},Hg:function(f){return b[f]&&b[f].Qb||0},reset:function(){b={}},ng:a};e.onFnConsume=e.ih;e.consumeFn=e.te;e.onStorageConsume=e.kh;e.consumeStorage=e.Ca;e.setMax=e.Hh;e.getConsumed=e.Hg;e.reset=e.reset;e.consume=e.ng;return e};var xa=function(a,b){this.F=a;this.M=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new sa;this.a=this.w=void 0};xa.prototype.add=function(a,b){ya(this,a,b,!1)};var ya=function(a,b,c,d){if(!a.i.i)if(a.F.Ca(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.w["dust."+b]=!0}else a.i.set(b,c)};
xa.prototype.set=function(a,b){this.i.i||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.Ca(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};xa.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};xa.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var Ca=function(a){var b=new xa(a.F,a);a.w&&(b.w=a.w);b.M=a.M;b.a=a.a;return b};var Da=function(){},Ea=function(a){return"function"==typeof a},q=function(a){return"string"==typeof a},Fa=function(a){return"number"==typeof a&&!isNaN(a)},Ga=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},C=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ha=function(a,b){if(a&&Ga(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ia=function(a,b){if(!Fa(a)||
!Fa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ka=function(a,b){for(var c=new Ja,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},D=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},La=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Na=function(a){return Math.round(Number(a))||0},Oa=function(a){return"false"==String(a).toLowerCase()?
!1:!!a},Pa=function(a){var b=[];if(Ga(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Qa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ra=function(){return(new Date).getTime()},Ja=function(){this.prefix="gtm.";this.values={}};Ja.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ja.prototype.get=function(a){return this.values[this.prefix+a]};
var Sa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ta=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ua=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Va=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Wa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Xa=function(a){for(var b=E,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},Ya=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Za=function(a){var b=[];D(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var $a=function(a,b){sa.call(this);this.F=a;this.M=b};ma($a,sa);$a.prototype.toString=function(){return this.F};$a.prototype.getName=function(){return this.F};$a.prototype.$b=function(){return new h(ta(this))};$a.prototype.a=function(a,b){a.F.te();return this.M.apply(ab(this,a),Array.prototype.slice.call(arguments,1))};
var ab=function(a,b){var c=function(d,e){this.F=d;this.i=e};c.prototype.a=function(d){var e=this.i;return Ga(d)?bb(e,d):d};c.prototype.w=function(d){return cb(this.i,d)};c.prototype.getName=function(){return this.F.getName()};c.prototype.m=function(){return b.F};return new c(a,b)};$a.prototype.Fa=function(a,b){try{return this.a.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};
var cb=function(a,b){for(var c,d=0;d<b.length&&!(c=bb(a,b[d]),c instanceof qa);d++);return c},bb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof $a))throw Error("Attempting to execute non-function "+b[0]+".");return c.a.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.w;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var db=function(){sa.call(this)};ma(db,sa);db.prototype.$b=function(){return new h(ta(this))};var eb=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,fb={Fn:"function",Map:"Object",List:"Array"},H=function(a,b,c){for(var d=0;d<b.length;d++){var e=eb.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],k=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==k){var n=typeof l;l instanceof $a?n="Fn":l instanceof h?n="List":l instanceof db&&(n="Map");if(n!=k)throw Error("Error in "+
a+". Argument "+f+" has type "+n+", which does not match required type "+(fb[k]||k)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var gb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,hb=function(a){if(null==a)return String(a);var b=gb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},ib=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},jb=function(a){if(!a||"object"!=hb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!ib(a,"constructor")&&!ib(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||ib(a,b)},I=function(a,b){var c=b||("array"==hb(a)?[]:{}),d;for(d in a)if(ib(a,d)){var e=a[d];"array"==hb(e)?("array"!=hb(c[d])&&(c[d]=[]),c[d]=I(e,c[d])):jb(e)?(jb(c[d])||(c[d]={}),c[d]=I(e,c[d])):c[d]=e}return c};var lb=function(a,b){var c=[],d=[],e=function(g,k){for(var l=ta(g),m=0;m<l.length;m++)k[l[m]]=f(g.get(l[m]))},f=function(g){var k=C(c,g);if(-1<k)return d[k];if(g instanceof h){var l=[];c.push(g);d.push(l);for(var m=g.$b(),n=0;n<m.length();n++)l[m.get(n)]=f(g.get(m.get(n)));return l}if(g instanceof db){var r={};c.push(g);d.push(r);e(g,r);return r}if(g instanceof $a){var t=function(){for(var p=Array.prototype.slice.call(arguments,0),u=0;u<p.length;u++)p[u]=kb(p[u],b);var v=b?b.F:va(),w=new xa(v);b&&
(w.a=b.a);return f(g.a.apply(g,[w].concat(p)))};c.push(g);d.push(t);e(g,t);return t}switch(typeof g){case "boolean":case "number":case "string":case "undefined":return g;case "object":if(null===g)return null}};return f(a)},kb=function(a,b){var c=[],d=[],e=function(g,k){for(var l in g)g.hasOwnProperty(l)&&k.set(l,f(g[l]))},f=function(g){var k=C(c,g);if(-1<k)return d[k];if(Ga(g)||La(g)){var l=new h([]);c.push(g);d.push(l);for(var m in g)g.hasOwnProperty(m)&&l.set(m,f(g[m]));return l}if(jb(g)){var n=
new db;c.push(g);d.push(n);e(g,n);return n}if("function"===typeof g){var r=new $a("",function(p){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=lb(this.a(u[v]),b);return f((0,this.i.M)(g,g,u))});c.push(g);d.push(r);e(g,r);return r}var t=typeof g;if(null===g||"string"===t||"number"===t||"boolean"===t)return g};return f(a)};var pb={control:function(a,b){return new qa(a,this.a(b))},fn:function(a,b,c){var d=this.i,e=this.a(b);if(!(e instanceof h))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.m().Ca(a.length+f.length);return new $a(a,function(){return function(g){var k=Ca(d);void 0===k.a&&(k.a=this.i.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof qa)return l[m];for(var n=e.get("length"),r=
0;r<n;r++)r<l.length?k.set(e.get(r),l[r]):k.set(e.get(r),void 0);k.set("arguments",new h(l));var t=cb(k,f);if(t instanceof qa)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.m();b.Ca(arguments.length);for(var c=new h,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Ca(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.m(),c=new db,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ca(g);c.set(e,f)}return c},undefined:function(){}};function qb(a,b){var c=bb(a,b);if(c instanceof qa||c instanceof $a||c instanceof h||c instanceof db||null===c||void 0===c||"string"===typeof c||"number"===typeof c||"boolean"===typeof c)return c}var rb=function(){this.m=va();this.a=new xa(this.m)},sb=function(a,b,c){var d=new $a(b,c);d.i=!0;a.a.set(b,d)};rb.prototype.Xb=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};rb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=qb(this.a,arguments[c]);return b};
rb.prototype.w=function(a,b){var c=Ca(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=qb(c,arguments[e]);return d};var tb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var ub={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof h)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new h(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.a(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.a(a,this.get(e),e,this)&&d.push(this.get(e));return new h(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.a(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.a(a,this.get(e),e,this));return new h(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=f;k<d;k++)this.has(k)&&(e=b.a(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=f;0<=k;k--)this.has(k)&&(e=b.a(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=tb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):ua(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new h(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.a(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=tb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.a(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):ua(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var vb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),wb=new qa("break"),xb=new qa("continue"),yb=function(a,b){return this.a(a)+this.a(b)},zb=function(a,b){return this.a(a)&&this.a(b)},Bb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof h))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=C(vb,b))return kb(a[b].apply(a,tb(c)),this.i);throw Error("TypeError: "+b+" is not a function");}if(a instanceof h){if(a.has(b)){var d=a.get(b);if(d instanceof $a){var e=tb(c);e.unshift(this.i);return d.a.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=C(ub.supportedMethods,b)){var f=tb(c);f.unshift(this.i);
return ub[b].apply(a,f)}}if(a instanceof $a||a instanceof db){if(a.has(b)){var g=a.get(b);if(g instanceof $a){var k=tb(c);k.unshift(this.i);return g.a.apply(g,k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof $a?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,tb(c))}throw Error("TypeError: Object has no '"+b+"' property.");},Cb=function(a,b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.i;
if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Db=function(a){var b=Ca(this.i),c=cb(b,Array.prototype.slice.apply(arguments));if(c instanceof qa)return c},Eb=function(){return wb},Fb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof qa)return d}},Gb=function(a){for(var b=this.i,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);ya(b,d,e,!0)}}},Hb=function(){return xb},
Ib=function(a,b,c){var d=new h;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.i.set(a,this.a(f))},Jb=function(a,b){return this.a(a)/this.a(b)},Kb=function(a,b){return this.a(a)==this.a(b)},Lb=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Mb(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=cb(e,c);if(f instanceof qa){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof db||b instanceof h||b instanceof $a)for(var g=b.$b(),k=g.length(),l=0;l<k;l++){var m=a(g.get(l)),n=cb(m,c);if(n instanceof qa){if("break"==n.a)break;if("return"==n.a)return n}}}
var Nb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Mb(function(e){d.set(a,e);return d},b,c)},Pb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Mb(function(e){var f=Ca(d);ya(f,a,e,!0);return f},b,c)},Qb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Mb(function(e){var f=Ca(d);f.add(a,e);return f},b,c)},Rb=function(a){return this.i.get(this.a(a))},Sb=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+
a+".");a instanceof db||a instanceof h||a instanceof $a?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ra(b)&&(c=a[b]));return c},Tb=function(a,b){return this.a(a)>this.a(b)},Ub=function(a,b){return this.a(a)>=this.a(b)},Vb=function(a,b){return this.a(a)===this.a(b)},Wb=function(a,b){return this.a(a)!==this.a(b)},Xb=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.w(d);if(e instanceof qa)return e},Yb=function(a,b){return this.a(a)<this.a(b)},Zb=function(a,b){return this.a(a)<=
this.a(b)},$b=function(a,b){return this.a(a)%this.a(b)},ac=function(a,b){return this.a(a)*this.a(b)},bc=function(a){return-this.a(a)},dc=function(a){return!this.a(a)},ec=function(a,b){return this.a(a)!=this.a(b)},fc=function(){return null},gc=function(a,b){return this.a(a)||this.a(b)},hc=function(a,b){var c=this.a(a);this.a(b);return c},ic=function(a){return this.a(a)},jc=function(a){return Array.prototype.slice.apply(arguments)},kc=function(a){return new qa("return",this.a(a))},lc=function(a,b,c){a=
this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof $a||a instanceof h||a instanceof db)&&a.set(b,c);return c},mc=function(a,b){return this.a(a)-this.a(b)},nc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Ga(d)||!Ga(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,k=0;k<d.length;k++)if(g||a===this.a(d[k]))if(f=this.a(e[k]),f instanceof qa){var l=f.a;if("break"==l)return;if("return"==
l||"continue"==l)return f}else g=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof qa&&("return"==f.a||"continue"==f.a)))return f},oc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},pc=function(a){a=this.a(a);return a instanceof $a?"function":typeof a},qc=function(a){for(var b=this.i,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},rc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&(e=this.w(f),e instanceof qa)){if("break"==e.a)return;if("return"==
e.a)return e}for(;this.a(a);){e=this.w(f);if(e instanceof qa){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},sc=function(a){return~Number(this.a(a))},tc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},uc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},vc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},wc=function(a,b){return Number(this.a(a))&Number(this.a(b))},xc=function(a,b){return Number(this.a(a))^Number(this.a(b))},yc=function(a,b){return Number(this.a(a))|
Number(this.a(b))};var Ac=function(){this.a=new rb;zc(this)};Ac.prototype.Xb=function(a){return this.a.i(a)};
var Cc=function(a,b){return Bc.a.w(a,b)},zc=function(a){function b(e,f){var g=d.a,k=String(f);pb.hasOwnProperty(e)&&sb(g,k||e,pb[e])}function c(e,f){sb(d.a,String(e),f)}var d=a;b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);c(0,yb);c(1,zb);c(2,Bb);c(3,Cb);c(53,Db);c(4,Eb);c(5,Fb);c(52,Gb);c(6,Hb);c(9,Fb);c(50,Ib);c(10,Jb);c(12,Kb);c(13,Lb);c(47,Nb);c(54,Pb);c(55,Qb);c(15,Rb);c(16,Sb);c(17,Sb);c(18,Tb);c(19,Ub);c(20,Vb);c(21,Wb);c(22,Xb);c(23,Yb);c(24,Zb);c(25,$b);c(26,ac);c(27,
bc);c(28,dc);c(29,ec);c(45,fc);c(30,gc);c(32,hc);c(33,hc);c(34,ic);c(35,ic);c(46,jc);c(36,kc);c(43,lc);c(37,mc);c(38,nc);c(39,oc);c(40,pc);c(41,qc);c(42,rc);c(58,sc);c(57,tc);c(60,uc);c(61,vc);c(56,wc);c(62,xc);c(59,yc)},Ec=function(){var a=Bc,b=Dc();sb(a.a,"require",b)},Fc=function(a,b){a.a.a.M=b};
var Gc=[],Hc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ic=function(a){return Hc[a]},Jc=/[\x00\x22\x26\x27\x3c\x3e]/g;var Nc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Oc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Pc=function(a){return Oc[a]};Gc[7]=function(a){return String(a).replace(Nc,Pc)};
Gc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Nc,Pc)+"'"}};var Yc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Zc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},$c=function(a){return Zc[a]};Gc[16]=function(a){return a};var bd;
var cd=[],dd=[],ed=[],fd=[],gd=[],hd={},id,jd,kd,ld=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},md=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=hd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):bd(c,e,b)},od=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=nd(a[e],b,c));
return d},pd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=hd[b];return c?c.priorityOverride||0:0},nd=function(a,b,c){if(Ga(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(nd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=cd[f];if(!g||b.bd(g))return;c[f]=!0;try{var k=od(g,b,c);k.vtp_gtmEventId=b.id;d=md(k,b);kd&&(d=kd.pg(d,k))}catch(x){b.Le&&b.Le(x,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[nd(a[l],b,c)]=nd(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var r=nd(a[n],b,c);jd&&(m=m||r===jd.Jb);d.push(r)}return jd&&m?jd.sg(d):d.join("");case "escape":d=nd(a[1],b,c);if(jd&&Ga(a[1])&&"macro"===a[1][0]&&jd.Ug(a))return jd.ph(d);d=String(d);for(var t=2;t<a.length;t++)Gc[a[t]]&&(d=Gc[a[t]](d));return d;case "tag":var p=a[1];if(!fd[p])throw Error("Unable to resolve tag reference "+p+".");return d={ye:a[2],
index:p};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=qd(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},qd=function(a,b,c){try{return id(od(a,b,c))}catch(d){JSON.stringify(a)}return 2};var rd=function(){var a=function(b){return{toString:function(){return b}}};return{Fd:a("convert_case_to"),Gd:a("convert_false_to"),Hd:a("convert_null_to"),Id:a("convert_true_to"),Jd:a("convert_undefined_to"),ai:a("debug_mode_metadata"),xa:a("function"),rf:a("instance_name"),vf:a("live_only"),xf:a("malware_disabled"),yf:a("metadata"),bi:a("original_vendor_template_id"),Cf:a("once_per_event"),Qd:a("once_per_load"),Yd:a("setup_tags"),$d:a("tag_id"),ae:a("teardown_tags")}}();var sd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};ma(sd,Error);function td(a,b){if(Ga(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)td(a[c],b[c])}};var ud=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};ma(ud,Error);var vd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var xd=function(){return function(a,b){a instanceof ud||(a=new ud(a,wd));b&&a.a.push(b);throw a;}};function wd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Fa(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var yd=null,Bd=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];yd=zd(a);for(var e=0;e<dd.length;e++){var f=dd[e],g=Ad(f);if(g){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],n=0;n<fd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Ad=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=yd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=yd(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},zd=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=qd(ed[c],a));return b[c]}};var Cd=function(){this.a={}};function Dd(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(k){g="string"===typeof k?g+(": "+k):k instanceof Error?g+(": "+k.message):g+"."}if(!f)throw new sd(c,d,g);}}function Ed(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Dd(e,b,d,g);Dd(f,b,d,g)}}}};var Jd=function(a){var b=Fd.s,c=this;this.i=new Cd;this.a={};var d={},e=Ed(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});D(a,function(f,g){var k={};D(g,function(l,m){var n=Hd(l,m);k[l]=n.assert;d[l]||(d[l]=n.K)});c.a[f]=function(l,m){var n=k[l];if(!n)throw Id(l,{},"The requested permission "+l+" is not configured.");var r=Array.prototype.slice.call(arguments,0);n.apply(void 0,r);e.apply(void 0,r)}})},Ld=function(a){return Kd.a[a]||
function(){}};function Hd(a,b){var c=ld(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Id;try{return md(c)}catch(d){return{assert:function(e){throw new sd(e,{},"Permission "+e+" is unknown.");},K:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Id(a,b,c){return new sd(a,b,c)};var Md=!1;var Nd={};Nd.Qh=Oa('');Nd.Ag=Oa('');var Od=Md,Pd=Nd.Ag,Qd=Nd.Qh;
var de=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},ee=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;de(b,"/*")&&(b=b.slice(0,-2));de(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var k=d[d.length-1];return a.lastIndexOf(k)===a.length-k.length},fe=/^[a-z0-9-]+$/i,ge=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
he=function(a,b){var c;if(!(c="https:"!=a.protocol||a.port&&"443"!=a.port)){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!fe.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var k;var l=a,m=b[g];if(!ge.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),r=n.slice(0,n.indexOf("/")),t;var p=l.hostname,u=r;if(0!==u.indexOf("*."))t=p.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=p.toLowerCase().indexOf(u.toLowerCase());
t=-1===v?!1:p.length===u.length?!0:p.length!==u.length+v?!1:"."===p[v-1]}if(t){var w=n.slice(n.indexOf("/"));k=ee(l.pathname+l.search,w)?!0:!1}else k=!1;if(k)return!0}return!1};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
function ke(a){return""+a}
function le(a,b){var c=[];return c};var me=function(a,b){var c=new $a(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.i=!0;return c},ne=function(a,b){var c=new db,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ea(e)?c.set(d,me(a+"_"+d,e)):(Fa(e)||q(e)||"boolean"==typeof e)&&c.set(d,e)}c.i=!0;return c};var oe=function(a,b){H(this.getName(),["apiName:!string","message:?string"],arguments);var c={},d=new db;return d=ne("AssertApiSubject",c)};var pe=function(a,b){H(this.getName(),["actual:?*","message:?string"],arguments);var c={},d=new db;return d=ne("AssertThatSubject",c)};function qe(a){return function(){for(var b=[],c=this.i,d=0;d<arguments.length;++d)b.push(lb(arguments[d],c));return kb(a.apply(null,b))}}var se=function(){for(var a=Math,b=re,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=qe(a[e].bind(a)))}return c};var te=function(a){var b;return b};var ue=function(a){var b;return b};var ve=function(a){H(this.getName(),["uri:!string"],arguments);return encodeURI(a)};var we=function(a){H(this.getName(),["uri:!string"],arguments);return encodeURIComponent(a)};var xe=function(a){H(this.getName(),["message:?string"],arguments);};var ye=function(a,b){H(this.getName(),["min:!number","max:!number"],arguments);return Ia(a,b)};var ze=function(){return(new Date).getTime()};var Ae=function(a,b,c){var d=a.i.a;if(!d)throw Error("Missing program state.");d.bg.apply(null,Array.prototype.slice.call(arguments,1))};var Be=function(){Ae(this,"read_container_data");var a=new db;a.set("containerId",'GTM-MRL78F');a.set("version",'318');a.set("environmentName",'');a.set("debugMode",Od);a.set("previewMode",Qd);a.set("environmentMode",Pd);a.i=!0;return a};var Ce=function(a){return null===a?"null":a instanceof h?"array":a instanceof $a?"function":typeof a};var De=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Od||Qd)&&a.call(this,e.message)}}}return{parse:b(function(c){return kb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(lb(c))})}};var Ee=function(a){return Na(lb(a,this.i))};var Fe=function(a){return Number(lb(a,this.i))};var Ge=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var He=function(a,b,c){var d=null,e=!1;H(this.getName(),["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);d=new db;for(var f=0;f<a.length();f++){var g=a.get(f);g instanceof db&&g.has(b)&&g.has(c)&&(d.set(g.get(b),g.get(c)),e=!0)}return e?d:null};var re="floor ceil round max min abs pow sqrt".split(" ");var Ie=function(){var a={};return{Ig:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Ih:function(b,c){a[b]=c},reset:function(){a={}}}},Je=function(a,b){H(this.getName(),["apiName:!string","mock:?*"],arguments);};var Ke=function(){this.a={}};Ke.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};Ke.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";this.a[a]=c?void 0:Ea(b)?me(a,b):ne(a,b)};function Le(){var a={};return a};var E=window,J=document,Me=navigator,Ne=J.currentScript&&J.currentScript.src,Oe=function(a,b){var c=E[a];E[a]=void 0===c?b:c;return E[a]},Pe=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Qe=function(a,b,c){var d=J.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Pe(d,b);c&&(d.onerror=c);var e;if(null===pa)b:{var f=na.document,g=f.querySelector&&f.querySelector("script[nonce]");
if(g){var k=g.nonce||g.getAttribute("nonce");if(k&&oa.test(k)){pa=k;break b}}pa=""}e=pa;e&&d.setAttribute("nonce",e);var l=J.getElementsByTagName("script")[0]||J.body||J.head;l.parentNode.insertBefore(d,l);return d},Re=function(){if(Ne){var a=Ne.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Se=function(a,b){var c=J.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=J.body&&J.body.lastChild||
J.body||J.head;d.parentNode.insertBefore(c,d);Pe(c,b);void 0!==a&&(c.src=a);return c},Te=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Ue=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ve=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},O=function(a){E.setTimeout(a,0)},We=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Xe=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Ye=function(a){var b=J.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ze=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},$e=function(a){Me.sendBeacon&&Me.sendBeacon(a)||Te(a)},af=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var cf=function(a){return bf?J.querySelectorAll(a):null},df=function(a,b){if(!bf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!J.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},ef=!1;if(J.querySelectorAll)try{var ff=J.querySelectorAll(":root");ff&&1==ff.length&&ff[0]==J.documentElement&&(ef=!0)}catch(a){}var bf=ef;var Fd={},R=null,vf=Math.random();Fd.s="GTM-MRL78F";Fd.Nb="4m0";Fd.Pd="";var wf={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},xf="www.googletagmanager.com/gtm.js";
var yf=xf,zf=null,Af=null,Bf=null,Cf="//www.googletagmanager.com/a?id="+Fd.s+"&cv=318",Df={},Ef={},Ff=function(){var a=R.sequence||0;R.sequence=a+1;return a};var Gf={},Hf=function(a,b){Gf[a]=Gf[a]||[];Gf[a][b]=!0},If=function(a){for(var b=[],c=Gf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Jf=function(){return"&tc="+fd.filter(function(a){return a}).length},Mf=function(){Kf||(Kf=E.setTimeout(Lf,500))},Lf=function(){Kf&&(E.clearTimeout(Kf),Kf=void 0);void 0===Nf||Of[Nf]&&!Pf&&!Qf||(Rf[Nf]||Sf.Wg()||0>=Tf--?(Hf("GTM",1),Rf[Nf]=!0):(Sf.xh(),Te(Uf()),Of[Nf]=!0,Vf=Wf=Qf=Pf=""))},Uf=function(){var a=Nf;if(void 0===a)return"";var b=If("GTM"),c=If("TAGGING");return[Xf,Of[a]?"":"&es=1",Yf[a],b?"&u="+b:"",c?"&ut="+c:"",Jf(),Pf,Qf,Wf,Vf,"&z=0"].join("")},Zf=function(){return[Cf,"&v=3&t=t",
"&pid="+Ia(),"&rv="+Fd.Nb].join("")},$f="0.005000">Math.random(),Xf=Zf(),ag=function(){Xf=Zf()},Of={},Pf="",Qf="",Vf="",Wf="",Nf=void 0,Yf={},Rf={},Kf=void 0,Sf=function(a,b){var c=0,d=0;return{Wg:function(){if(c<a)return!1;Ra()-d>=b&&(c=0);return c>=a},xh:function(){Ra()-d>=b&&(c=0);c++;d=Ra()}}}(2,1E3),Tf=1E3,bg=function(a,b){if($f&&!Rf[a]&&Nf!==a){Lf();Nf=a;Vf=Pf="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Yf[a]="&e="+c+"&eid="+a;Mf()}},cg=function(a,b,c){if($f&&
!Rf[a]&&b){a!==Nf&&(Lf(),Nf=a);var d,e=String(b[rd.xa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;Pf=Pf?Pf+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var k=(hd[g]?"1":"2")+d;Vf=Vf?Vf+"."+k:"&ti="+k;Mf();2022<=Uf().length&&Lf()}},dg=function(a,b,c){if($f&&!Rf[a]){a!==Nf&&(Lf(),Nf=a);var d=c+b;Qf=
Qf?Qf+"."+d:"&epr="+d;Mf();2022<=Uf().length&&Lf()}};var eg={},fg=new Ja,gg={},hg={},kg={name:"dataLayer",set:function(a,b){I(Ya(a,b),gg);ig()},get:function(a){return jg(a,2)},reset:function(){fg=new Ja;gg={};ig()}},jg=function(a,b){if(2!=b){var c=fg.get(a);if($f){var d=lg(a);c!==d&&Hf("GTM",5)}return c}return lg(a)},lg=function(a){var b=a.split("."),c=!1,d=void 0;return c?d:mg(b)},mg=function(a){for(var b=gg,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var ng=function(a,b){hg.hasOwnProperty(a)||(fg.set(a,b),I(Ya(a,b),gg),ig())},ig=function(a){D(hg,function(b,c){fg.set(b,c);I(Ya(b,void 0),gg);I(Ya(b,c),gg);a&&delete hg[b]})},og=function(a,b,c){eg[a]=eg[a]||{};var d=1!==c?lg(b):fg.get(b);"array"===hb(d)||"object"===hb(d)?eg[a][b]=I(d):eg[a][b]=d},pg=function(a,b){if(eg[a])return eg[a][b]},qg=function(a,b){eg[a]&&delete eg[a][b]};var S={wa:"_ee",di:"_uci",Fc:"event_callback",Ib:"event_timeout",H:"gtag.config",fa:"allow_ad_personalization_signals",Gc:"restricted_data_processing",cb:"allow_google_signals",ia:"cookie_expires",Hb:"cookie_update",eb:"session_duration",ma:"user_properties"};S.He=[S.fa,S.cb,S.Hb];S.Ke=[S.ia,S.Ib,S.eb];var tg=/[A-Z]+/,ug=/\s/,vg=function(a){if(q(a)&&(a=Qa(a),!ug.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(tg.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],B:d}}}}},xg=function(a){for(var b={},c=0;c<a.length;++c){var d=vg(a[c]);d&&(b[d.id]=d)}wg(b);var e=[];D(b,function(f,g){e.push(g)});return e};
function wg(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.B[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var yg=function(){var a=!1;return a};var V=function(a,b,c,d){return(2===zg()||d||"http:"!=E.location.protocol?a:b)+c},zg=function(){var a=Re(),b;if(1===a)a:{var c=yf;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=J.getElementsByTagName("script"),k=0;k<g.length&&100>k;k++){var l=g[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var Ng=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Og={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Pg={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Qg="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Sg=function(a){var b=jg("gtm.whitelist");b&&Hf("GTM",9);var c=b&&Wa(Pa(b),Og),d=jg("gtm.blacklist");d||(d=jg("tagTypeBlacklist"))&&Hf("GTM",3);
d?Hf("GTM",8):d=[];Rg()&&(d=Pa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=C(Pa(d),"google")&&Hf("GTM",2);var e=d&&Wa(Pa(d),Pg),f={};return function(g){var k=g&&g[rd.xa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=Ef[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>C(c,k))if(l&&0<l.length)for(var r=
0;r<l.length;r++){if(0>C(c,l[r])){Hf("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var p=0<=C(e,k);if(p)t=p;else{var u=Ka(e,l||[]);u&&Hf("GTM",10);t=u}}var v=!m||t;v||!(0<=C(l,"sandboxedScripts"))||c&&-1!==C(c,"sandboxedScripts")||(v=Ka(e,Qg));return f[k]=v}},Rg=function(){return Ng.test(E.location&&E.location.hostname)};var Tg={pg:function(a,b){b[rd.Fd]&&"string"===typeof a&&(a=1==b[rd.Fd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(rd.Hd)&&null===a&&(a=b[rd.Hd]);b.hasOwnProperty(rd.Jd)&&void 0===a&&(a=b[rd.Jd]);b.hasOwnProperty(rd.Id)&&!0===a&&(a=b[rd.Id]);b.hasOwnProperty(rd.Gd)&&!1===a&&(a=b[rd.Gd]);return a}};var Ug={active:!0,isWhitelisted:function(){return!0}},Vg=function(a){var b=R.zones;!b&&a&&(b=R.zones=a());return b};var Wg=function(){};var Xg=!1,Yg=0,Zg=[];function $g(a){if(!Xg){var b=J.createEventObject,c="complete"==J.readyState,d="interactive"==J.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Xg=!0;for(var e=0;e<Zg.length;e++)O(Zg[e])}Zg.push=function(){for(var f=0;f<arguments.length;f++)O(arguments[f]);return 0}}}function ah(){if(!Xg&&140>Yg){Yg++;try{J.documentElement.doScroll("left"),$g()}catch(a){E.setTimeout(ah,50)}}}var bh=function(a){Xg?a():Zg.push(a)};var dh={},eh={},fh=function(a,b,c,d){if(!eh[a]||wf[b]||"__zone"===b)return-1;var e={};jb(d)&&(e=I(d,e));e.id=c;e.status="timeout";return eh[a].tags.push(e)-1},gh=function(a,b,c,d){if(eh[a]){var e=eh[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function hh(a){for(var b=dh[a]||[],c=0;c<b.length;c++)b[c]();dh[a]={push:function(d){d(Fd.s,eh[a])}}}
var kh=function(a,b,c){eh[a]={tags:[]};Ea(b)&&ih(a,b);c&&E.setTimeout(function(){return hh(a)},Number(c));return jh(a)},ih=function(a,b){dh[a]=dh[a]||[];dh[a].push(Ta(function(){return O(function(){b(Fd.s,eh[a])})}))};function jh(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ta(function(){b++;d&&b>=c&&hh(a)})},$f:function(){d=!0;b>=c&&hh(a)}}};var lh=function(){function a(d){return!Fa(d)||0>d?0:d}if(!R._li&&E.performance&&E.performance.timing){var b=E.performance.timing.navigationStart,c=Fa(kg.get("gtm.start"))?kg.get("gtm.start"):0;R._li={cst:a(c-b),cbt:a(Af-b)}}};var ph={},qh=function(){return E.GoogleAnalyticsObject&&E[E.GoogleAnalyticsObject]},rh=!1;
var sh=function(a){E.GoogleAnalyticsObject||(E.GoogleAnalyticsObject=a||"ga");var b=E.GoogleAnalyticsObject;if(E[b])E.hasOwnProperty(b)||Hf("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);E[b]=c}lh();return E[b]},th=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=qh();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var vh=function(a){},uh=function(){return E.GoogleAnalyticsObject||"ga"};var xh=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var yh=/:[0-9]+$/,zh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var k=f[g].split("=");if(decodeURIComponent(k[0]).replace(/\+/g," ")===b){var l=k.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Ch=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ah(a.protocol)||Ah(E.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
E.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||E.location.hostname).replace(yh,"").toLowerCase());return Bh(a,b,c,d,e)},Bh=function(a,b,c,d,e){var f,g=Ah(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Dh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(yh,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Hf("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=C(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=zh(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Ah=function(a){return a?a.replace(":",
"").toLowerCase():""},Dh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Eh=function(a){var b=J.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Hf("TAGGING",1),c="/"+c);var d=b.hostname.replace(yh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var Jh=function(){return!1},Kh=function(){var a={};return function(b,c,d){}};function Lh(a,b,c,d){var e=fd[a],f=Mh(a,b,c,d);if(!f)return null;var g=nd(e[rd.Yd],c,[]);if(g&&g.length){var k=g[0];f=Lh(k.index,{D:f,C:1===k.ye?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Mh(a,b,c,d){function e(){if(f[rd.xf])k();else{var w=od(f,c,[]),x=fh(c.id,String(f[rd.xa]),Number(f[rd.$d]),w[rd.yf]),y=!1;w.vtp_gtmOnSuccess=function(){if(!y){y=!0;var A=Ra()-z;cg(c.id,fd[a],"5");gh(c.id,x,"success",A);g()}};w.vtp_gtmOnFailure=function(){if(!y){y=!0;var A=Ra()-z;cg(c.id,fd[a],"6");gh(c.id,x,"failure",A);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;cg(c.id,f,"1");var B=function(){var A=Ra()-z;cg(c.id,f,"7");gh(c.id,x,"exception",A);y||(y=!0,k())};var z=Ra();try{md(w,c)}catch(A){B(A)}}}var f=fd[a],g=b.D,k=b.C,l=b.terminate;if(c.bd(f))return null;var m=nd(f[rd.ae],c,[]);if(m&&m.length){var n=m[0],r=Lh(n.index,{D:g,C:k,terminate:l},c,d);if(!r)return null;g=r;k=2===n.ye?l:r}if(f[rd.Qd]||f[rd.Cf]){var t=f[rd.Qd]?gd:c.Kh,p=g,u=k;if(!t[a]){e=Ta(e);var v=Nh(a,t,e);g=v.D;k=v.C}return function(){t[a](p,u)}}return e}
function Nh(a,b,c){var d=[],e=[];b[a]=Oh(d,e,c);return{D:function(){b[a]=Ph;for(var f=0;f<d.length;f++)d[f]()},C:function(){b[a]=Qh;for(var f=0;f<e.length;f++)e[f]()}}}function Oh(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Ph(a){a()}function Qh(a,b){b()};var Th=function(a,b){for(var c=[],d=0;d<fd.length;d++)if(a.xb[d]){var e=fd[d];var f=b.add();try{var g=Lh(d,{D:f,C:f,terminate:f},a,d);g?c.push({af:d,Ve:pd(e),Xb:g}):(Rh(d,a),f())}catch(l){f()}}b.$f();c.sort(Sh);for(var k=0;k<c.length;k++)c[k].Xb();return 0<c.length};function Sh(a,b){var c,d=b.Ve,e=a.Ve;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.af,k=b.af;f=g>k?1:g<k?-1:0}return f}
function Rh(a,b){if(!$f)return;var c=function(d){var e=b.bd(fd[d])?"3":"4",f=nd(fd[d][rd.Yd],b,[]);f&&f.length&&c(f[0].index);cg(b.id,fd[d],e);var g=nd(fd[d][rd.ae],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Uh=!1,Vh=function(a,b,c,d,e){if("gtm.js"==b){if(Uh)return!1;Uh=!0}bg(a,b);var f=kh(a,d,e);og(a,"event",1);og(a,"ecommerce",1);og(a,"gtm");var g={id:a,name:b,bd:Sg(c),xb:[],Kh:[],Le:function(){Hf("GTM",6)}};g.xb=Bd(g);var k=Th(g,f);"gtm.js"!==b&&"gtm.sync"!==b||vh(Fd.s);if(!k)return k;for(var l=0;l<g.xb.length;l++)if(g.xb[l]){var m=fd[l];if(m&&!wf[String(m[rd.xa])])return!0}return!1};var Wh=[];function Xh(){var a=Oe("google_tag_data",{});a.ics||(a.ics={entries:{},set:Yh,update:Zh,addListener:$h,notifyListeners:ai,active:!1});return a.ics}function Yh(a,b,c,d,e){var f=Xh();f.active=!0;if(void 0!=b){var g=f.entries,k=g[a]||{},l=k.region,m=c&&q(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();m!==e&&(m===d?l===e:m||l)||(g[a]={region:m,initial:"granted"===b,update:k.update})}}
function Zh(a,b){var c=Xh();c.active=!0;if(void 0!=b){var d=bi(a),e=c.entries;e[a]=e[a]||{};e[a].update="granted"===b;if(bi(a)!==d)for(var f=0;f<Wh.length;++f){var g=Wh[f];Ga(g.se)&&-1!==g.se.indexOf(a)&&(g.Ue=!0)}}}function $h(a,b){Wh.push({se:a,Dg:b})}function ai(){for(var a=0;a<Wh.length;++a){var b=Wh[a];if(b.Ue){b.Ue=!1;try{b.Dg.call()}catch(c){}}}}
var bi=function(a){var b=Xh().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},ci=function(){return Xh().active},di=function(a,b){Xh().addListener(a,b)},ei=function(a,b){if(!1===bi(b)){var c=!1;di([b],function(){!c&&bi(b)&&(a(),c=!0)})}};var fi=[S.o,S.N],gi=function(a){var b=a.region;b&&Hf("GTM",40);for(var c=Ga(b)?b:[b],d=0;d<c.length;++d)for(var e=0;e<fi.length;e++){var f=fi[e],g=a[fi[e]],k=c[d];Xh().set(f,g,k,"US","US-IL")}},hi=function(a){for(var b=0;b<fi.length;b++){var c=fi[b],d=a[fi[b]];Xh().update(c,d)}Xh().notifyListeners()},ii=function(a){var b=bi(a);return void 0!=b?b:!0},ji=function(){for(var a=[],b=0;b<fi.length;b++){var c=bi(fi[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+a.join("")};function li(a,b){}function mi(a,b){return ni()?li(a,b):void 0}function ni(){var a=!1;return a};var oi=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.D=function(){};this.C=function(){};this.qe=void 0},pi=function(a){var b=new oi;b.eventModel=a;return b},qi=function(a,b){a.targetConfig=b;return a},ri=function(a,b){a.containerConfig=b;return a},si=function(a,b){a.a=b;return a},ti=function(a,b){a.globalConfig=b;return a},ui=function(a,b){a.D=b;return a},vi=function(a,b){a.C=b;return a};
oi.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var wi=function(a){function b(e){D(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];D(c,function(e){d.push(e)});return d};function xi(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),k=g[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var yi={},zi=function(a){return void 0==yi[a]?!1:yi[a]};var Bi=function(a,b,c,d){return Ai(d)?xi(a,String(b||document.cookie),c):[]},Ei=function(a,b,c,d,e){if(Ai(e)){var f=Ci(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Di(f,function(g){return g.Ub},b);if(1===f.length)return f[0].id;f=Di(f,function(g){return g.yb},c);return f[0]?f[0].id:void 0}}};function Fi(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Bi(b,f,!1,d).indexOf(c)}
var Ji=function(a,b,c,d){function e(w,x,y){if(null==y)return delete k[x],w;k[x]=y;return w+"; "+x+"="+y}function f(w,x){if(null==x)return delete k[x],w;k[x]=!0;return w+"; "+x}if(!Ai(c.Ea))return!1;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Gi(b),g=a+"="+b);var k={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.eh);g=e(g,"samesite",
c.Bh);c.Fh&&(g=f(g,"secure"));g=f(g,c.flags);var m=c.domain;if("auto"===m){for(var n=Hi(),r=void 0,t=!1,p=0;p<n.length;++p){var u="none"!==n[p]?n[p]:void 0,v=e(g,"domain",u);try{d&&d(a,k)}catch(w){r=w;continue}t=!0;if(!Ii(u,c.path)&&Fi(v,a,b,c.Ea))return!0}if(r&&!t)throw r;return!1}m&&"none"!==m&&(g=e(g,"domain",m));d&&d(a,k);return Ii(m,c.path)?!1:Fi(g,a,b,c.Ea)},Ki=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Ji(a,b,c)};
function Di(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var k=a[g],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Ci(a,b,c){for(var d=[],e=Bi(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),k=g.shift();if(!b||-1!==b.indexOf(k)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Ub:1*l[0]||1,yb:1*l[1]||1}))}}return d}
var Gi=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Li=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Mi=/(^|\.)doubleclick\.net$/i,Ii=function(a,b){return Mi.test(document.location.hostname)||"/"===b&&Li.test(a)},Hi=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Mi.test(e)||Li.test(e)||a.push("none");
return a},Ai=function(a){if(!zi("gtag_cs_api")||!a||!ci())return!0;var b=bi(a);return null==b?!0:!!b};var Ni=function(){for(var a=Me.userAgent+(J.cookie||"")+(J.referrer||""),b=a.length,c=E.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ra()/1E3)].join(".")},Qi=function(a,b,c,d,e){var f=Oi(b);return Ei(a,f,Pi(c),d,e)},Ri=function(a,b,c,d){var e=""+Oi(c),f=Pi(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Oi=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Pi=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Si(a,b,c){var d,e=a.wb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Ra())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};function Ti(){for(var a=Ui,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Vi(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Ui,Wi;function Xi(a){Ui=Ui||Vi();Wi=Wi||Ti();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|g>>4,n=(g&15)<<2|k>>6,r=k&63;e||(r=64,d||(n=64));b.push(Ui[l],Ui[m],Ui[n],Ui[r])}return b.join("")}
function Yi(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Wi[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Ui=Ui||Vi();Wi=Wi||Ti();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=k&&(c+=String.fromCharCode(g<<6&192|k)))}};var Zi;var cj=function(){var a=$i,b=aj,c=bj(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){Ue(J,"mousedown",d);Ue(J,"keyup",d);Ue(J,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},dj=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};bj().decorators.push(f)},ej=function(a,b,c){for(var d=bj().decorators,e={},f=0;f<d.length;++f){var g=
d[f],k;if(k=!c||g.forms)a:{var l=g.domains,m=a;if(l&&(g.sameHost||m!==J.location.hostname))for(var n=0;n<l.length;n++)if(l[n]instanceof RegExp){if(l[n].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[n])){k=!0;break a}k=!1}if(k){var r=g.placement;void 0==r&&(r=g.fragment?2:1);r===b&&Ua(e,g.callback())}}return e},bj=function(){var a=Oe("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var fj=/(.*?)\*(.*?)\*(.*)/,gj=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,hj=/^(?:www\.|m\.|amp\.)+/,ij=/([^?#]+)(\?[^#]*)?(#.*)?/;function jj(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var lj=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Xi(String(d))))}var e=b.join("*");return["1",kj(e),e].join("*")},kj=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Zi)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,k=0;8>k;k++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Zi=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Zi[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},nj=function(){return function(a){var b=Eh(E.location.href),c=b.search.replace("?",""),d=zh(c,"_gl",!1,!0)||"";a.query=mj(d)||{};var e=Ch(b,"fragment").match(jj("_gl"));a.fragment=mj(e&&e[3]||"")||{}}},oj=function(){var a=nj(),b=bj();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ua(c,d.query),Ua(c,d.fragment));return c},mj=
function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=fj.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var k=g[3],l;a:{for(var m=g[2],n=0;n<b;++n)if(m===kj(k,n)){l=!0;break a}l=!1}if(l){for(var r={},t=k?k.split("*"):[],p=0;p<t.length;p+=2)r[t[p]]=Yi(t[p+1]);return r}}}}catch(u){}};
function pj(a,b,c,d){function e(n){var r=n,t=jj(a).exec(r),p=r;if(t){var u=t[2],v=t[4];p=t[1];v&&(p=p+u+v)}n=p;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=ij.exec(c);if(!f)return"";var g=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+g+k+l}
function qj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=ej(b,1,c),e=ej(b,2,c),f=ej(b,3,c);if(Va(d)){var g=lj(d);c?rj("_gl",g,a):sj("_gl",g,a,!1)}if(!c&&Va(e)){var k=lj(e);sj("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){sj(m,n,r,void 0);break a}if("form"===r.tagName.toLowerCase()){rj(m,n,r);break a}}"string"==typeof r&&pj(m,n,r,void 0)}}
function sj(a,b,c,d){if(c.href){var e=pj(a,b,c.href,void 0===d?!1:d);xh.test(e)&&(c.href=e)}}
function rj(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var k=e[g];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=J.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=pj(a,b,c.action);xh.test(m)&&(c.action=m)}}}
var $i=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||qj(e,e.hostname)}}catch(g){}},aj=function(a){try{if(a.action){var b=Ch(Eh(a.action),"host");qj(a,b)}}catch(c){}},tj=function(a,b,c,d){cj();dj(a,b,"fragment"===c?2:1,!!d,!1)},uj=function(a,b){cj();dj(a,[Bh(E.location,"host",!0)],b,!0,!0)},vj=function(){var a=J.location.hostname,b=gj.exec(J.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(hj,""),l=e.replace(hj,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},wj=function(a,b){return!1===a?!1:a||b||vj()};var xj=/^\w+$/,yj=/^[\w-]+$/,zj=/^~?[\w-]+$/,Aj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Bj=function(){if(!zi("gtag_cs_api")||!ci())return!0;var a=bi("ad_storage");return null==a?!0:!!a},Cj=function(a){Bj()?a():ei(a,"ad_storage")};function Dj(a){return a&&"string"==typeof a&&a.match(xj)?a:"_gcl"}
var Fj=function(){var a=Eh(E.location.href),b=Ch(a,"query",!1,void 0,"gclid"),c=Ch(a,"query",!1,void 0,"gclsrc"),d=Ch(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||zh(e,"gclid",!1,void 0);c=c||zh(e,"gclsrc",!1,void 0)}return Ej(b,c,d)},Ej=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(yj))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":zi("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Hj=function(a){var b=Fj();Cj(function(){return Gj(b,a)})};
function Gj(a,b,c){function d(m,n){var r=Ij(m,e);r&&(Ki(r,n,f),g=!0)}b=b||{};var e=Dj(b.prefix);c=c||Ra();var f=Si(b,c,!0);f.Ea="ad_storage";var g=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.yi?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return g}
var Kj=function(a,b){var c=oj();Cj(function(){for(var d=Dj(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Aj[f]){var g=Ij(f,d),k=c[g];if(k){var l=Math.min(Jj(k),Ra()),m;b:{for(var n=l,r=Bi(g,J.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(Jj(r[t])>n){m=!0;break b}m=!1}if(!m){var p=Si(b,l,!0);p.Ea="ad_storage";Ki(g,k,p)}}}}Gj(Ej(c.gclid,c.gclsrc),b)})},Ij=function(a,b){var c=Aj[a];if(void 0!==c)return b+c},Jj=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Lj(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Mj=function(a,b,c,d,e){if(Ga(b)){var f=Dj(e),g=function(){for(var k={},l=0;l<a.length;++l){var m=Ij(a[l],f);if(m){var n=Bi(m,J.cookie,void 0,"ad_storage");n.length&&(k[m]=n.sort()[n.length-1])}}return k};Cj(function(){tj(g,b,c,d)})}},Nj=function(a){return a.filter(function(b){return zj.test(b)})},Oj=function(a,b){for(var c=Dj(b.prefix),d={},e=0;e<a.length;e++)Aj[a[e]]&&(d[a[e]]=Aj[a[e]]);Cj(function(){D(d,function(f,g){var k=Bi(c+g,J.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=Jj(l),
n={};n[f]=[Lj(l)];Gj(n,b,m)}})})};function Pj(a){for(var b=["aw","dc"],c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Qj=function(){function a(d,e,f){f&&(d[e]=f)}var b=Fj();if(Pj(b)){var c={};a(c,"gclid",b.gclid);a(c,"dclid",b.dclid);a(c,"gclsrc",b.gclsrc);uj(function(){return c},3);uj(function(){var d={};return d._up="1",d},1)}},Rj=function(){var a;if(Bj()){for(var b=[],c=J.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({ud:f[1],value:f[2]})}var g={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&
(g[b[k].ud]||(g[b[k].ud]=[]),g[b[k].ud].push({timestamp:l[1],Fg:l[2]}))}a=g}else a={};return a};function Sj(){var a=!1;return a}
function Tj(a){function b(l){var m;R.reported_gclid||(R.reported_gclid={});m=R.reported_gclid;var n=d+(l?"gcu":"gcs");if(!m[n]){m[n]=!0;var r=[],t=function(v,w){w&&r.push(v+"="+encodeURIComponent(w))},p=d;t("gclid",p);t("gclsrc",e);var u="https://www.google.com/pagead/landing?"+r.join("&");$e(u)}}var c=Fj(),d=c.gclid||"",e=c.gclsrc,
f=!a&&(!d||e&&"aw.ds"!==e?!1:!0),g=Sj();if(f||g){var k=""+Ni();b();}};var Uj;if(3===Fd.Nb.length)Uj="g";else{var Vj="G";Uj=Vj}
var Wj={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Uj,OPT:"o"},Xj=function(a){var b=Fd.s.split("-"),c=b[0].toUpperCase(),d=Wj[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Fd.Nb.length){var g=void 0;f="2"+(g||"w")}else f=
"";return f+d+Fd.Nb+e};var hk=["1"],ik={},mk=function(a){var b=jk(a.prefix);ik[b]||kk(b,a.path,a.domain)||(lk(b,Ni(),a),kk(b,a.path,a.domain))};function lk(a,b,c){var d=Ri(b,"1",c.domain,c.path),e=Si(c);e.Ea="ad_storage";Ki(a,d,e)}function kk(a,b,c){var d=Qi(a,b,c,hk,"ad_storage");d&&(ik[a]=d);return d}function jk(a){return(a||"_gcl")+"_au"};var nk=/^\d+\.fls\.doubleclick\.net$/;function ok(a){ii("ad_storage")?a():ei(a,"ad_storage")}function pk(a){var b=Eh(E.location.href),c=Ch(b,"host",!1);if(c&&c.match(nk)){var d=Ch(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function qk(a,b){if("aw"==a||"dc"==a){var c=pk("gcl"+a);if(c)return c.split(".")}var d=Dj(b);if(ii("ad_storage")&&"_gcl"==d){var e;e=Fj()[a]||[];if(0<e.length)return e}var f=Ij(a,d),g;if(f){var k=[];if(J.cookie){var l=Bi(f,J.cookie,void 0,"ad_storage");if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Lj(l[m]);n&&-1===C(k,n)&&k.push(n)}g=Nj(k)}else g=k}else g=k}else g=[];return g}
var rk=function(){var a=pk("gac");if(a)return decodeURIComponent(a);var b=Rj(),c=[];D(b,function(d,e){for(var f=[],g=0;g<e.length;g++)f.push(e[g].Fg);f=Nj(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},sk=function(a,b){var c=Fj().dc||[];ok(function(){mk(b);var d=ik[jk(b.prefix)],e=!1;if(d&&0<c.length){var f=R.joined_au=R.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;$e(l);e=f[g]=!0}}null==a&&(a=
e);if(a&&d){var m=jk(b.prefix),n=ik[m];n&&lk(m,n,b)}})};var nl={},ol=["G","GP"];nl.cf="";var pl=nl.cf.split(",");function ql(){var a=R;return a.gcq=a.gcq||new rl}
var sl=function(a,b,c){ql().register(a,b,c)},tl=function(a,b,c,d){ql().push("event",[b,a],c,d)},ul=function(a,b){ql().push("config",[a],b)},vl={},wl=function(a){return!0},xl=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},yl=function(a,b,c,d,e){this.type=a;this.m=b;this.Z=c||"";
this.a=d;this.i=e},rl=function(){this.m={};this.i={};this.a=[]},zl=function(a,b){var c=vg(b);return a.m[c.containerId]=a.m[c.containerId]||new xl},Al=function(a,b,c){if(b){var d=vg(b);if(d&&1===zl(a,b).status&&wl(d.prefix)){zl(a,b).status=2;var e={};$f&&(e.timeoutId=E.setTimeout(function(){Hf("GTM",38);Mf()},3E3));a.push("require",[e],d.containerId);vl[d.containerId]=Ra();if(yg()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=E.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=mi(c,g)||k;Qe(l)}}}},Bl=function(a,b,c,d){if(d.Z){var e=zl(a,d.Z),
f=e.m;if(f){var g=I(c),k=I(e.targetConfig[d.Z]),l=I(e.containerConfig),m=I(e.i),n=I(a.i),r=jg("gtm.uniqueEventId"),t=vg(d.Z).prefix,p=vi(ui(ti(si(ri(qi(pi(g),k),l),m),n),function(){dg(r,t,"2");}),function(){dg(r,t,"3");});try{dg(r,t,"1");f(d.Z,b,d.m,p)}catch(u){
dg(r,t,"4");}}}};
rl.prototype.register=function(a,b,c){if(3!==zl(this,a).status){zl(this,a).m=b;zl(this,a).status=3;c&&(zl(this,a).i=c);var d=vg(a),e=vl[d.containerId];if(void 0!==e){var f=R[d.containerId].bootstrap,g=d.prefix.toUpperCase();R[d.containerId]._spx&&(g=g.toLowerCase());var k=jg("gtm.uniqueEventId"),l=g,m=Ra()-f;if($f&&!Rf[k]){k!==Nf&&(Lf(),Nf=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);Wf=Wf?Wf+","+n:"&cl="+n}delete vl[d.containerId]}this.flush()}};
rl.prototype.push=function(a,b,c,d){var e=Math.floor(Ra()/1E3);Al(this,c,b[0][S.Ba]||this.i[S.Ba]);this.a.push(new yl(a,e,c,b,d));d||this.flush()};
rl.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==zl(this,c.Z).status&&!a)return;$f&&E.clearTimeout(c.a[0].timeoutId);break;case "set":D(c.a[0],function(l,m){I(Ya(l,m),b.i)});break;case "config":var d=c.a[0],e=!!d[S.oc];delete d[S.oc];var f=zl(this,c.Z),g=vg(c.Z),k=g.containerId===g.id;e||(k?f.containerConfig={}:f.targetConfig[c.Z]={});f.a&&e||Bl(this,S.H,d,c);f.a=!0;delete d[S.wa];k?I(d,f.containerConfig):
I(d,f.targetConfig[c.Z]);break;case "event":Bl(this,c.a[1],c.a[0],c)}this.a.shift()}};var Cl=function(a,b){H(this.getName(),["toPath:!string","fromPath:!string"],arguments);Ae(this,"access_globals","write",a);Ae(this,"access_globals","read",b);var c=a.split("."),d=b.split("."),e=Xa(c),f=Xa(d);if(void 0===e||void 0===f)return!1;e[c[c.length-1]]=f[d[d.length-1]];return!0};var Dl=function(a,b){var c;H(this.getName(),["path:!string"],[a]);Ae(this,"access_globals","execute",a);for(var d=a.split("."),e=E,f=e[d[0]],g=1;f&&g<d.length;g++)e=f,f=f[d[g]];if("function"!==hb(f))return;for(var k=[],l=1;l<arguments.length;l++)k.push(lb(arguments[l],this.i));c=kb((0,this.i.M)(f,e,k),this.i);return c};var El=function(a){};var Fl=function(a){var b;H(this.getName(),["path:!string"],arguments);Ae(this,"access_globals","read",a);var c=a.split("."),d=E,e;for(e=0;e<c.length-1;e++)if(d=d[c[e]],null==d)return;b=d[c[e]];return kb(b,this.i)};var Gl=function(a,b){var c=null;H(this.getName(),["functionPath:!string","arrayPath:!string"],arguments);Ae(this,"access_globals","readwrite",a);Ae(this,"access_globals","readwrite",b);var d=a.split("."),e=Xa(d),f=d[d.length-1];if(void 0===e)throw Error("Path "+a+" does not exist.");var g=e[f];if(g&&!Ea(g))return null;if(g)return kb(g,this.i);var k;g=function(){if(!Ea(k.push))throw Error("Object at "+b+" in window is not an array.");k.push.call(k,
arguments)};e[f]=g;var l=b.split("."),m=Xa(l),n=l[l.length-1];if(void 0===m)throw Error("Path "+l+" does not exist.");k=m[n];void 0===k&&(k=[],m[n]=k);c=function(){g.apply(g,Array.prototype.slice.call(arguments,0))};return kb(c,this.i)};var Hl=function(a){var b;H(this.getName(),["path:!string"],arguments);Ae(this,"access_globals","readwrite",a);var c=a.split("."),d=Xa(c),e=c[c.length-1];if(void 0===d)throw Error("Path "+a+" does not exist.");var f=d[e];void 0===f&&(f=[],d[e]=f);b=function(){if(!Ea(f.push))throw Error("Object at "+a+" in window is not an array.");f.push.apply(f,Array.prototype.slice.call(arguments,0))};return kb(b,
this.i)};var Il=function(a){var b;return b};var Jl=function(a,b){b=void 0===b?!0:b;var c;return c};var Kl=function(a,b){var c;return c};var Ll=function(a,b){var c;return c};var Ml=function(a){var b="";return b};var Nl=function(a){var b="";return b};var Ol=function(a,b){};var Pl={},Ql=function(a,b,c,d){H(this.getName(),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Ae(this,"inject_script",a);var e=this.i,f=function(){b instanceof $a&&b.Fa(e)},g=function(){c instanceof $a&&c.Fa(e)};if(!d){Qe(a,f,g);return}var k=d;Pl[k]?(Pl[k].onSuccess.push(f),Pl[k].onFailure.push(g)):(Pl[k]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Pl[k].onSuccess,m=0;m<l.length;m++)O(l[m]);l.push=function(n){O(n);
return 0}},g=function(){for(var l=Pl[k].onFailure,m=0;m<l.length;m++)O(l[m]);Pl[k]=null},Qe(a,f,g));};var Rl=function(){return!1},Sl={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var Tl=function(){try{Ae(this,"logging")}catch(c){return}if(!console)return;for(var a=Array.prototype.slice.call(arguments,0),b=0;b<a.length;b++)a[b]=lb(a[b],this.i);console.log.apply(console,a);};var Ul={},Vl={};Ul.getItem=function(a){var b=null;return b};Ul.setItem=function(a,b){};
Ul.removeItem=function(a){};Ul.clear=function(){};var Wl=function(a,b){var c=!1;return c};var Xl=function(a,b,c){};var Yl=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var Zl=function(a,b,c){H(this.getName(),["path:!string","value:?*","overrideExisting:?boolean"],arguments);Ae(this,"access_globals","readwrite",a);var d=a.split("."),e=E,f;for(f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;if(void 0===e[d[f]]||c)return e[d[f]]=lb(b,this.i),!0;return!1};var $l=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var am=function(a,b,c){var d=this;};var bm=function(a){var b;return b};function cm(a){}
function dm(a,b){var c;return kb(c,this.i)}function em(){var a="";return a}
function fm(){var a="";return a}
var Dc=function(){var a=new Ke;yg()?(a.add("injectHiddenIframe",Da),a.add("injectScript",Da)):(a.add("injectHiddenIframe",Ol),a.add("injectScript",Ql));var b=Xl;a.add("addEventCallback",cm);a.add("aliasInWindow",Cl);a.add("assertThat",pe);a.add("assertApi",oe);a.add("callInWindow",Dl);a.add("callLater",El);a.add("copyFromDataLayer",
dm);a.add("copyFromWindow",Fl);a.add("createQueue",Hl);a.add("createArgumentsQueue",Gl);a.add("decodeUri",te);a.add("decodeUriComponent",ue);a.add("encodeUri",ve);a.add("encodeUriComponent",we);a.add("fail",xe);a.add("generateRandom",ye);a.add("getCookieValues",Jl);a.add("getQueryParameters",Kl);a.add("getReferrerQueryParameters",Ll);a.add("getReferrerUrl",Ml);a.add("getTimestamp",ze);a.add("getType",Ce);a.add("getUrl",Nl);a.add("logToConsole",Tl);a.add("makeInteger",Ee);a.add("makeNumber",Fe);a.add("makeString",
Ge);a.add("makeTableMap",He);a.add("Math",se());a.add("mock",Je);a.add("queryPermission",Wl);a.add("readCharacterSet",em);a.add("readTitle",fm);a.add("sendPixel",b);a.add("setCookie",Yl);a.add("setInWindow",Zl);a.add("sha256",am);a.add("TestHelper",Le());a.add("getContainerVersion",Be);a.add("toBase64",bm,!("btoa"in E)),a.add("fromBase64",
Il,!("atob"in E));a.add("localStorage",Sl,!Rl());
return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else throw Error(c+" is not a valid API name.");return d}};var Bc,Kd;
function gm(){var a=data.runtime||[],b=data.runtime_lines;Bc=new Ac;hm();bd=function(e,f,g){im(f);var k=new db;D(f,function(p,u){k.set(p,kb(u))});Bc.a.a.w=xd();var l={bg:Ld(e),eventId:void 0!==g?g.id:void 0,Wb:e,log:function(){}};if(Jh()){var m=Kh(),n=void 0,r=void 0;l.aa={i:{},a:function(p,u,v){1===u&&(n=p);7===u&&(r=v);m(p,u,v)},m:Ie()};l.log=function(p,u){if(n){var v=Array.prototype.slice.call(arguments,1);m(n,4,{level:p,source:r,message:v})}}}var t=Cc(l,[e,k]);Bc.a.a.w=void 0;t instanceof qa&&
"return"===t.a&&(t=t.i);return lb(t)};Ec();for(var c=0;c<a.length;c++){var d=a[c];if(!Ga(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&td(d,b[c]);Bc.Xb(d)}}function im(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ea(b)&&(a.gtmOnSuccess=function(){O(b)});Ea(c)&&(a.gtmOnFailure=function(){O(c)})}function hm(){var a=Bc;R.SANDBOXED_JS_SEMAPHORE=R.SANDBOXED_JS_SEMAPHORE||0;Fc(a,function(b,c,d){R.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{R.SANDBOXED_JS_SEMAPHORE--}})}
function jm(a){void 0!==a&&D(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Ef[e]=Ef[e]||[];Ef[e].push(b)}})};var km=["GP","G"],lm="G".split(/,/);lm.push("GF");lm.push("HA");var mm=!1;mm=!0;var nm=null,om={},pm={},qm;function rm(a,b){var c={event:a};b&&(c.eventModel=I(b),b[S.Fc]&&(c.eventCallback=b[S.Fc]),b[S.Ib]&&(c.eventTimeout=b[S.Ib]));return c}
var xm={config:function(a){},event:function(a){var b=a[1];if(q(b)&&!(3<a.length)){var c;if(2<a.length){if(!jb(a[2])&&void 0!=a[2])return;c=a[2]}var d=rm(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Kd.i;d.a[b]?d.a[b].push(c):d.a[b]=
[c]}},set:function(a){var b;2==a.length&&jb(a[1])?b=I(a[1]):3==a.length&&q(a[1])&&(b={},jb(a[2])||Ga(a[2])?b[a[1]]=I(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};var ym={policy:!0};var zm=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Bm=function(a){var b=Am(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Cm=!1,Dm=[];function Em(){if(!Cm){Cm=!0;for(var a=0;a<Dm.length;a++)O(Dm[a])}}var Fm=function(a){Cm?O(a):Dm.push(a)};var Wm=function(a){if(Vm(a))return a;this.a=a};Wm.prototype.Lg=function(){return this.a};var Vm=function(a){return!a||"object"!==hb(a)||jb(a)?!1:"getUntrustedUpdateValue"in a};Wm.prototype.getUntrustedUpdateValue=Wm.prototype.Lg;var Xm=[],Ym=!1,Zm=function(a){return E["dataLayer"].push(a)},$m=function(a){var b=R["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function an(a){var b=a._clear;D(a,function(f,g){"_clear"!==f&&(b&&ng(f,void 0),ng(f,g))});zf||(zf=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Ff(),a["gtm.uniqueEventId"]=d,ng("gtm.uniqueEventId",d));Bf=c;var e=bn(a);Bf=null;switch(c){case "gtm.init":Hf("GTM",19),e&&Hf("GTM",20)}return e}
function bn(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=R.zones;d=e?e.checkState(Fd.s,c):Ug;return d.active?Vh(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function cn(){for(var a=!1;!Ym&&0<Xm.length;){Ym=!0;delete gg.eventModel;ig();var b=Xm.shift();if(null!=b){var c=Vm(b);if(c){var d=b;b=Vm(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],k=jg(g,1);if(Ga(k)||jb(k))k=I(k);hg[g]=k}}try{if(Ea(b))try{b.call(kg)}catch(u){}else if(Ga(b)){var l=b;if(q(l[0])){var m=
l[0].split("."),n=m.pop(),r=l.slice(1),t=jg(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,r)}catch(u){}}}else{if(La(b)){a:{if(b.length&&q(b[0])){var p=xm[b[0]];if(p&&(!c||!ym[b[0]])){b=p(b);break a}}b=void 0}if(!b){Ym=!1;continue}}a=an(b)||a}}finally{c&&ig(!0)}}Ym=!1}return!a}function dn(){var a=cn();try{zm(E["dataLayer"],Fd.s)}catch(b){}return a}
var fn=function(){var a=Oe("dataLayer",[]),b=Oe("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};bh(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Fm(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<R.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Wm(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);Xm.push.apply(Xm,d);if(300<
this.length)for(Hf("GTM",4);300<this.length;)this.shift();var g="boolean"!==typeof f||f;return cn()&&g};Xm.push.apply(Xm,a.slice(0));en()&&O(dn)},en=function(){var a=!0;return a};var gn={};gn.Jb=new String("undefined");
var hn=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===gn.Jb?b:a[d]);return c.join("")}};hn.prototype.toString=function(){return this.a("undefined")};hn.prototype.valueOf=hn.prototype.toString;gn.Lf=hn;gn.Oc={};gn.sg=function(a){return new hn(a)};var jn={};gn.yh=function(a,b){var c=Ff();jn[c]=[a,b];return c};gn.ue=function(a){var b=a?0:1;return function(c){var d=jn[c];if(d&&"function"===typeof d[b])d[b]();jn[c]=void 0}};gn.Ug=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};gn.ph=function(a){if(a===gn.Jb)return a;var b=Ff();gn.Oc[b]=a;return'google_tag_manager["'+Fd.s+'"].macro('+b+")"};gn.fh=function(a,b,c){a instanceof gn.Lf&&(a=a.a(gn.yh(b,c)),b=Da);return{$c:a,D:b}};var kn=function(a,b,c){function d(f,g){var k=f[g];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||We(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},ln=function(a){R.hasOwnProperty("autoEventsSettings")||(R.autoEventsSettings={});var b=R.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},mn=function(a,b,c){ln(a)[b]=c},nn=function(a,b,c,d){var e=ln(a),f=Sa(e,b,d);e[b]=c(f)},on=function(a,b,c){var d=ln(a);return Sa(d,b,c)};var pn=["input","select","textarea"],qn=["button","hidden","image","reset","submit"],rn=function(a){var b=a.tagName.toLowerCase();return!Ha(pn,function(c){return c===b})||"input"===b&&Ha(qn,function(c){return c===a.type.toLowerCase()})?!1:!0},sn=function(a){return a.form?a.form.tagName?a.form:J.getElementById(a.form):Ze(a,["form"],100)},tn=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(rn(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var un=!!E.MutationObserver,vn=void 0,wn=function(a){if(!vn){var b=function(){var c=J.body;if(c)if(un)(new MutationObserver(function(){for(var e=0;e<vn.length;e++)O(vn[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Ue(c,"DOMNodeInserted",function(){d||(d=!0,O(function(){d=!1;for(var e=0;e<vn.length;e++)O(vn[e])}))})}};vn=[];J.body?b():O(b)}vn.push(a)};
var Hn=function(){var a=J.body,b=J.documentElement||a&&a.parentElement,c,d;if(J.compatMode&&"BackCompat"!==J.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};Hf("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},In=function(a){var b=Hn(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},Jn=function(a){if(J.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!E.getComputedStyle)return!0;var c=E.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var k=g.indexOf("opacity(");0<=k&&(g=g.substring(k+8,g.indexOf(")",k)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-
1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=E.getComputedStyle(d,null))}return!1};var Kn=[],Ln=!(!E.IntersectionObserver||!E.IntersectionObserverEntry),Mn=function(a,b,c){for(var d=new E.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<Kn.length;f++)if(!Kn[f])return Kn[f]=d,f;return Kn.push(d)-1},Nn=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},n={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:Ra()};O(function(){return a(n)})}for(var e=[],f=[],g=0;g<b.length;g++)e.push(0),f.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=In(b[k]);if(l>e[k])for(;f[k]<c.length-1&&l>=c[f[k]+1];)d(b[k],l),f[k]++;else if(l<e[k])for(;0<=f[k]&&l<=c[f[k]];)d(b[k],l),f[k]--;e[k]=l}}},On=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Ln){var e=!1;O(function(){e||Nn(a,b,c)()});return Mn(function(f){e=!0;for(var g={Za:0};g.Za<f.length;g={Za:g.Za},g.Za++)O(function(k){return function(){return a(f[k.Za])}}(g))},b,c)}return E.setInterval(Nn(a,b,c),1E3)},Pn=function(a){Ln?0<=a&&a<Kn.length&&Kn[a]&&(Kn[a].disconnect(),Kn[a]=void 0):E.clearInterval(a)};var Rn=E.clearTimeout,Sn=E.setTimeout,W=function(a,b,c){if(yg()){b&&O(b)}else return Qe(a,b,c)},Tn=function(){return E.location.href},Un=function(a){return Ch(Eh(a),"fragment")},Vn=function(a){return Dh(Eh(a))},Wn=function(a,b){return jg(a,b||2)},Xn=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Zm(a)):d=Zm(a);return d},Yn=function(a,b){E[a]=b},X=function(a,b,c){b&&(void 0===E[a]||c&&!E[a])&&(E[a]=
b);return E[a]},Zn=function(a,b,c){return Bi(a,b,void 0===c?!0:!!c)},$n=function(a,b){if(yg()){b&&O(b)}else Se(a,b)},ao=function(a){return!!on(a,"init",!1)},bo=function(a){mn(a,"init",!0)},co=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":yf;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";W(V("https://","http://",c))},eo=function(a,b){var c=a[b];return c};
var fo=gn.fh;var Co=new Ja;function Do(a,b){function c(g){var k=Eh(g),l=Ch(k,"protocol"),m=Ch(k,"host",!0),n=Ch(k,"port"),r=Ch(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Eo(a){return Fo(a)?1:0}
function Fo(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ga(c)){for(var d=0;d<c.length;d++)if(Eo({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var g=0;g<f.length;g++)if(b[f[g]]){e=b[f[g]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=C(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var r;var t=a.ignore_case?"i":void 0;try{var p=String(c)+t,u=Co.get(p);u||(u=new RegExp(c,t),Co.set(p,u));r=u.test(b)}catch(v){r=!1}return r;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Do(b,
c)}return!1};var Go=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Ho={},Io=encodeURI,Y=encodeURIComponent,Jo=Te;var Ko=function(a,b){if(!a)return!1;var c=Ch(Eh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Lo=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Ho.Vg=function(){var a=!1;return a};var Zp=function(){var a=E.gaGlobal=E.gaGlobal||{};a.hid=a.hid||Ia();return a.hid};var hq=window,iq=document,jq=function(a){var b=hq._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===hq["ga-disable-"+a])return!0;try{var c=hq.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=xi("AMP_TOKEN",String(iq.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return iq.getElementById("__gaOptOutExtension")?!0:!1};
var mq=function(a){D(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[S.ma]||{};D(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var qq=function(a,b,c){tl(b,c,a)},rq=function(a,b,c){tl(b,c,a,!0)},tq=function(a,b){};
function sq(a,b){}var Z={b:{}};

Z.b.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(y){for(var B=[],z=y.split(","),A=0;A<z.length;A++){var F=Number(z[A]);if(isNaN(F))return[];n.test(z[A])||B.push(F)}return B}function c(){var y=0,B=0;return function(){var z=Hn(),A=z.height;y=Math.max(v.scrollLeft+z.width,y);B=Math.max(v.scrollTop+A,B);return{wg:y,xg:B}}}function d(){p=X("self");
u=p.document;v=u.scrollingElement||u.body&&u.body.parentNode;x=c()}function e(y,B,z,A){var F=l(B),G={},L;for(L in F){G.Ja=L;if(F.hasOwnProperty(G.Ja)){var T=Number(G.Ja);y<T||(Xn({event:"gtm.scrollDepth","gtm.scrollThreshold":T,"gtm.scrollUnits":z.toLowerCase(),"gtm.scrollDirection":A,"gtm.triggers":F[G.Ja].join(",")}),nn("sdl",B,function(ea){return function(fa){delete fa[ea.Ja];return fa}}(G),{}))}G={Ja:G.Ja}}}function f(){var y=x(),B=y.wg,z=y.xg,A=B/v.scrollWidth*100,F=z/v.scrollHeight*100;e(B,
"horiz.pix",r.Lb,t.Ld);e(A,"horiz.pct",r.Kb,t.Ld);e(z,"vert.pix",r.Lb,t.ee);e(F,"vert.pct",r.Kb,t.ee);mn("sdl","pending",!1)}function g(){var y=250,B=!1;u.scrollingElement&&u.documentElement&&p.addEventListener&&(y=50,B=!0);var z=0,A=!1,F=function(){A?z=Sn(F,y):(z=0,f(),ao("sdl")&&!a()&&(Ve(p,"scroll",G),Ve(p,"resize",G),mn("sdl","init",!1)));A=!1},G=function(){B&&x();z?A=!0:(z=Sn(F,y),mn("sdl","pending",!0))};return G}function k(y,B,z){if(B){var A=b(String(y));nn("sdl",z,function(F){for(var G=0;G<
A.length;G++){var L=String(A[G]);F.hasOwnProperty(L)||(F[L]=[]);F[L].push(B)}return F},{})}}function l(y){return on("sdl",y,{})}function m(y){O(y.vtp_gtmOnSuccess);var B=y.vtp_uniqueTriggerId,z=y.vtp_horizontalThresholdsPixels,A=y.vtp_horizontalThresholdsPercent,F=y.vtp_verticalThresholdUnits,G=y.vtp_verticalThresholdsPixels,L=y.vtp_verticalThresholdsPercent;switch(y.vtp_horizontalThresholdUnits){case r.Lb:k(z,B,"horiz.pix");break;case r.Kb:k(A,B,"horiz.pct")}switch(F){case r.Lb:k(G,B,"vert.pix");
break;case r.Kb:k(L,B,"vert.pct")}ao("sdl")?on("sdl","pending")||(w||(d(),w=!0),O(function(){return f()})):(d(),w=!0,v&&(bo("sdl"),mn("sdl","pending",!0),O(function(){f();if(a()){var T=g();Ue(p,"scroll",T);Ue(p,"resize",T)}else mn("sdl","init",!1)})))}var n=/^\s*$/,r={Kb:"PERCENT",Lb:"PIXELS"},t={ee:"vertical",Ld:"horizontal"},p,u,v,w=!1,x;(function(y){Z.__sdl=y;Z.__sdl.g="sdl";Z.__sdl.h=!0;Z.__sdl.priorityOverride=0})(function(y){y.vtp_triggerStartOption?m(y):Fm(function(){m(y)})})}();

Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.b.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.g="sp";Z.__sp.h=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure;lh();W(b,function(){var d=X("google_trackConversion");if(Ea(d)){var e=
{};"DATA_LAYER"==a.vtp_customParamsFormat?e=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(e=Lo(a.vtp_customParams,"key","value"));var f={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(e.event=a.vtp_eventName),a.vtp_eventValue&&(f.value=a.vtp_eventValue),a.vtp_eventItems&&(f.items=a.vtp_eventItems));var g={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:e,google_gtag_event_data:f,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,
google_gtm:Xj()};a.vtp_rdp&&(g.google_restricted_data_processing=!0);a.vtp_userId&&(g.google_user_id=a.vtp_userId);d(g)||c()}else c()},c)})}();Z.b.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Z.b.d=["google"],function(){(function(a){Z.__d=a;Z.__d.g="d";Z.__d.h=!0;Z.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=cf(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=J.getElementById(a.vtp_elementId);b&&(d?c=We(b,d):c=Xe(b));return Qa(String(b&&c))})}();
Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(pg(a.vtp_gtmEventId,"event"))})}();
Z.b.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.priorityOverride=0})(function(a){var b=Wn("gtm.referrer",1)||J.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Ch(Eh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Vn(String(b)):String(b)})}();
Z.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=kn(c,"gtm.click");Xn(d)}}(function(b){Z.__cl=b;Z.__cl.g="cl";Z.__cl.h=!0;Z.__cl.priorityOverride=0})(function(b){if(!ao("cl")){var c=X("document");Ue(c,"click",a,!0);bo("cl")}O(b.vtp_gtmOnSuccess)})}();Z.b.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.priorityOverride=0})(function(a){return Zn(a.vtp_name,Wn("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.g="access_globals";Z.__access_globals.h=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],k=0;k<c.length;k++){var l=c[k],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(n,r,t){if(!q(t))throw d(n,{},"Key must be a string.");if("read"===r){if(-1<C(e,t))return}else if("write"===r){if(-1<C(f,t))return}else if("readwrite"===r){if(-1<C(f,t)&&-1<C(e,t))return}else if("execute"===r){if(-1<C(g,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+r);throw d(n,{},"Prohibited "+r+" on global variable: "+
t+".");},K:a}})}();Z.b.r=["google"],function(){(function(a){Z.__r=a;Z.__r.g="r";Z.__r.h=!0;Z.__r.priorityOverride=0})(function(a){return Ia(a.vtp_min,a.vtp_max)})}();
Z.b.tg=["google"],function(){function a(k){g.push(k);1<g.length||O(function(){var l=g.join(",");g=[];Xn({event:"gtm.triggerGroup","gtm.triggers":l})})}function b(k,l){var m=d[l],n=m.indexOf(k);-1!==n&&(m.splice(n,1),m.length||a(l))}function c(k){O(k.vtp_gtmOnSuccess);var l=k.vtp_uniqueTriggerId,m=k.vtp_triggerIds,n=k.vtp_firingId;if(k.vtp_isListeningTag){var r=e[n];r?b(n,r):f.push(n)}else{d[l]=m;for(var t=0,p;p=m[t];t++)e[p]=l;for(var u=0;u<f.length;u++)b(f[u],l)}}var d={},e={},f=[],g=[];Z.__tg=c;Z.__tg.g="tg";Z.__tg.h=!0;Z.__tg.priorityOverride=0}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=Wn("gtm.url",1);c=c||Tn();var d=b[a("vtp_component")];if(!d||"URL"==d)return Vn(String(c));var e=Eh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Ga(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var r=Ch(e,"QUERY",void 0,void 0,m[n]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=Ch(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Wn(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.b.tl=["google"],function(){function a(b){return function(){if(b.ed&&b.gd>=b.ed)b.ad&&X("self").clearInterval(b.ad);else{b.gd++;var c=(new Date).getTime();Xn({event:b.ja,"gtm.timerId":b.ad,"gtm.timerEventNumber":b.gd,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.ed,"gtm.timerStartTime":b.$e,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.$e,"gtm.triggers":b.Oh})}}}(function(b){Z.__tl=b;Z.__tl.g="tl";Z.__tl.h=!0;Z.__tl.priorityOverride=0})(function(b){O(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{ja:b.vtp_eventName,gd:0,interval:Number(b.vtp_interval),ed:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Oh:String(b.vtp_uniqueTriggerId||"0"),$e:(new Date).getTime()};c.ad=X("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.b.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},g={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;I(Lo(n.vtp_fieldsToSet,"fieldName","value"),f);I(Lo(n.vtp_contentGroup,"index","group"),g);I(Lo(n.vtp_dimension,"index","dimension"),k);I(Lo(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var r=I(n);d=I(d,r)}I(Lo(d.vtp_fieldsToSet,"fieldName","value"),f);I(Lo(d.vtp_contentGroup,
"index","group"),g);I(Lo(d.vtp_dimension,"index","dimension"),k);I(Lo(d.vtp_metric,"index","metric"),l);var t=sh(d.vtp_functionName);if(Ea(t)){var p="",u="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(u=d.vtp_trackerName,p=u+"."):(u="gtm"+Ff(),p=u+".");var v={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0},
x=function(P){var K=[].slice.call(arguments,0);K[0]=p+K[0];t.apply(window,K)},y=function(P,K){return void 0===K?K:P(K)},B=function(P,K){if(K)for(var Aa in K)K.hasOwnProperty(Aa)&&x("set",P+Aa,K[Aa])},z=function(){var P=function(xq,vk,yq){if(!jb(vk))return!1;for(var Gd=Sa(Object(vk),yq,[]),ch=0;Gd&&ch<Gd.length;ch++)x(xq,Gd[ch]);return!!Gd&&0<Gd.length},K;if(d.vtp_useEcommerceDataLayer){var Aa=!1;Aa||(K=Wn("ecommerce",1))}else d.vtp_ecommerceMacroData&&(K=d.vtp_ecommerceMacroData.ecommerce);if(!jb(K))return;K=Object(K);var cc=Sa(f,"currencyCode",K.currencyCode);void 0!==cc&&x("set","&cu",cc);P("ec:addImpression",K,"impressions");if(P("ec:addPromo",K[K.promoClick?"promoClick":"promoView"],"promotions")&&K.promoClick){x("ec:setAction","promo_click",K.promoClick.actionField);return}for(var Ma=
"detail checkout checkout_option click add remove purchase refund".split(" "),mb="refund purchase remove checkout checkout_option add click detail".split(" "),nb=0;nb<Ma.length;nb++){var Ab=K[Ma[nb]];if(Ab){P("ec:addProduct",Ab,"products");x("ec:setAction",Ma[nb],Ab.actionField);if($f)for(var Ob=0;Ob<mb.length;Ob++){var Tc=K[mb[Ob]];if(Tc){Tc!==Ab&&Hf("GTM",13);break}}break}}},A=function(P,K,Aa){var cc=0;if(P)for(var Ma in P)if(P.hasOwnProperty(Ma)&&
(Aa&&v[Ma]||!Aa&&void 0===v[Ma])){var mb=w[Ma]?Oa(P[Ma]):P[Ma];"anonymizeIp"!=Ma||mb||(mb=void 0);K[Ma]=mb;cc++}return cc},F={name:u};A(f,F,!0);t("create",d.vtp_trackingId||e.trackingId,F);x("set","&gtm",Xj(!0));d.vtp_enableRecaptcha&&x("require","recaptcha","recaptcha.js");(function(P,K){void 0!==d[K]&&x("set",P,d[K])})("nonInteraction","vtp_nonInteraction");B("contentGroup",g);B("dimension",k);B("metric",l);var G={};A(f,G,!1)&&x("set",G);var L;d.vtp_enableLinkId&&x("require",
"linkid","linkid.js");x("set","hitCallback",function(){var P=f&&f.hitCallback;Ea(P)&&P();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(x("require","ec","ec.js"),z());var T={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:y(String,d.vtp_eventLabel||e.label),eventValue:y(Na,d.vtp_eventValue||e.value)};A(L,T,!1);x("send",
T);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(x("require","ec","ec.js"),z());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var za=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","displayfeatures",void 0,{cookieName:za})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var wa="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","adfeatures",{cookieName:wa})}L?x("send","pageview",L):x("send","pageview");}if(!a){var Ba=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(Ba="internal/"+Ba);a=!0;var ob=V("https:","http:","//www.google-analytics.com/"+Ba,f&&f.forceSSL);W(ob,
function(){var P=qh();P&&P.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else O(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0}();

Z.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.g="inject_script";Z.__inject_script.h=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!q(f))throw d(e,{},"Script URL must be a string.");try{if(he(Eh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},K:a}})}();


Z.b.opt=["google"],function(){var a,b=function(c){var d={};if(c.vtp_gaSettings){var e=c.vtp_gaSettings;I(Lo(e.vtp_fieldsToSet,"fieldName","value"),d);c.vtp_gaSettings=null;e.vtp_fieldsToSet=void 0;var f=I(e);c=I(c,f)||{}}I(Lo(c.vtp_fieldsToSet,"fieldName","value"),d);var g=sh(c.vtp_functionName);if(Ea(g)){g.r=!0;var k="",l="";c.vtp_setTrackerName&&"string"===typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(l=c.vtp_trackerName,k=l+"."):(l="gtm"+Ff(),k=l+".");var m={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},n={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},r=function(x,y,B){var z=0,A;for(A in x)if(x.hasOwnProperty(A)&&
(B&&m[A]||!B&&void 0===m[A])){var F=n[A]?Oa(x[A]):x[A];"anonymizeIp"!==A||F||(F=void 0);y[A]=F;z++}return z},t={name:l};r(d,t,!0);var p={"&gtm":Xj(!0)};r(d,p,!1);var u=encodeURI(V("https:","http:","//www.google-analytics.com/"+(c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!d.forceSSL));g("create",c.vtp_trackingId,t);g(k+"set",p);g(k+"require",c.vtp_optimizeContainerId,{dataLayer:"dataLayer"});g(c.vtp_gtmOnSuccess);g(k+"require","render");a||(a=!0,W(u,function(){return qh().loaded||
c.vtp_gtmOnFailure()},c.vtp_gtmOnFailure));var v=X("dataLayer"),w=v&&v.hide;w&&w.end&&(w[c.vtp_optimizeContainerId]=!0)}else O(c.vtp_gtmOnFailure)};Z.__opt=b;Z.__opt.g="opt";Z.__opt.h=!0;Z.__opt.priorityOverride=0}();


Z.b.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Z.__gclidw=b;Z.__gclidw.g="gclidw";Z.__gclidw.h=!0;Z.__gclidw.priorityOverride=100})(function(b){O(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var f=null;b.vtp_enableCookieUpdateFeature&&(f=!0,void 0!==b.vtp_cookieUpdate&&(f=!!b.vtp_cookieUpdate));var g={prefix:e,path:c,domain:d};b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||
(b.vtp_enableCrossDomain||vj())&&Kj(a,g));Hj(g);Oj(["aw","dc"],g);sk(f,g);var k=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var l=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(","),m=b.vtp_urlPosition,n=!!b.vtp_formDecoration;Mj(a,l,m,n,k);}Tj();})}();


Z.b.aev=["google"],function(){function a(p,u){var v=pg(p,"gtm");if(v)return v[u]}function b(p,u,v,w){w||(w="element");var x=p+"."+u,y;if(n.hasOwnProperty(x))y=n[x];else{var B=a(p,w);if(B&&(y=v(B),n[x]=y,r.push(x),35<r.length)){var z=r.shift();delete n[z]}}return y}function c(p,u,v){var w=a(p,t[u]);return void 0!==w?w:v}function d(p,u){if(!p)return!1;var v=e(Tn());Ga(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],x=0;x<u.length;x++)if(u[x]instanceof RegExp){if(u[x].test(p))return!1}else{var y=
u[x];if(0!=y.length){if(0<=e(p).indexOf(y))return!1;w.push(e(y))}}return!Ko(p,w)}function e(p){m.test(p)||(p="http://"+p);return Ch(Eh(p),"HOST",!0)}function f(p,u,v){switch(p){case "SUBMIT_TEXT":return b(u,"FORM."+p,g,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var x=a(u,"interactedFormFieldPosition");
return void 0===x?v:x;case "INTERACT_SEQUENCE_NUMBER":var y=a(u,"interactSequenceNumber");return void 0===y?v:y;default:return v}}function g(p){switch(p.tagName.toLowerCase()){case "input":return We(p,"value");case "button":return Xe(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var u=0,v=0;v<p.elements.length;v++)rn(p.elements[v])&&u++;return u}}function l(p,u,v){var w=a(p,"interactedFormField");return w&&We(w,u)||v}var m=/^https?:\/\//i,n={},r=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.priorityOverride=0})(function(p){var u=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var x=a(u,"element");return x&&x.tagName||
v;case "TEXT":return b(u,w,Xe)||v;case "URL":var y;a:{var B=String(a(u,"elementUrl")||v||""),z=Eh(B),A=String(p.vtp_component||"URL");switch(A){case "URL":y=B;break a;case "IS_OUTBOUND":y=d(B,p.vtp_affiliatedDomains);break a;default:y=Ch(z,A,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return y;case "ATTRIBUTE":var F;if(void 0===p.vtp_attribute)F=c(u,w,v);else{var G=p.vtp_attribute,L=a(u,"element");F=L&&We(L,G)||v||""}return F;case "MD":var T=p.vtp_mdValue,ea=b(u,"MD",Dn);return T&&ea?Gn(ea,
T)||v:ea||v;case "FORM":return f(String(p.vtp_component||"SUBMIT_TEXT"),u,v);default:return c(u,w,v)}})}();
Z.b.gas=["google"],function(){function a(b,c,d){b.vtp_fieldsToSet=b.vtp_fieldsToSet||[];var e=b[c];void 0!==e&&(b.vtp_fieldsToSet.push({fieldName:d,value:e}),delete b[c])}(function(b){Z.__gas=b;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.priorityOverride=0})(function(b){var c=I(b),d=c;d[rd.xa]=null;d[rd.rf]=null;c=d;a(c,"vtp_cookieDomain","cookieDomain");return c})}();


Z.b.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:Tn()}function b(f,g){Ue(f,"hashchange",function(k){var l=a(k);g({source:"hashchange",state:null,url:Vn(l),P:Un(l)})})}function c(f,g){Ue(f,"popstate",function(k){var l=a(k);g({source:"popstate",state:k.state,url:Vn(l),P:Un(l)})})}function d(f,g,k){var l=g.history,m=l[f];if(Ea(m))try{l[f]=function(n,r,t){m.apply(l,[].slice.call(arguments,0));k({source:f,state:n,url:Vn(Tn()),
P:Un(Tn())})}}catch(n){}}function e(){var f={source:null,state:X("history").state||null,url:Vn(Tn()),P:Un(Tn())};return function(g){var k=f,l={};l[k.source]=!0;l[g.source]=!0;if(!l.popstate||!l.hashchange||k.P!=g.P){var m={event:"gtm.historyChange","gtm.historyChangeSource":g.source,"gtm.oldUrlFragment":f.P,"gtm.newUrlFragment":g.P,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":g.state};m["gtm.oldUrl"]=f.url,m["gtm.newUrl"]=g.url;
f=g;Xn(m)}}}(function(f){Z.__hl=f;Z.__hl.g="hl";Z.__hl.h=!0;Z.__hl.priorityOverride=0})(function(f){var g=X("self");if(!ao("hl")){var k=e();b(g,k);c(g,k);d("pushState",g,k);d("replaceState",g,k);bo("hl")}O(f.vtp_gtmOnSuccess)})}();
Z.b.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=X("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},g=function(k){lh();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Xj()};k.vtp_rdp&&(l.google_restricted_data_processing=!0);var m=function(w){return function(x,y,B){var z="DATA_LAYER"==w?Wn(B):k[y];z&&(l[x]=z)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id",
"vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items&&l.google_conversion_items.map&&(l.google_conversion_items=l.google_conversion_items.map(function(w){return{value:w.price,quantity:w.quantity,item_id:w.id}})));var r=function(w,x){(l.google_additional_conversion_params=
l.google_additional_conversion_params||{})[w]=x},t=function(w){return function(x,y,B,z){var A="DATA_LAYER"==w?Wn(B):k[y];z(A)&&r(x,A)}},p=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js";
k.vtp_enableNewCustomerReporting&&(n=t(k.vtp_newCustomerReportingDataSource),n("vdnc","vtp_awNewCustomer","new_customer",function(w){return void 0!=w&&""!==w}),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(w){return void 0!=w&&""!==w}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var v=
!0;v&&b.push(l);a||(a=!0,W(p,f(),e(p)))};
Z.__awct=g;Z.__awct.g="awct";Z.__awct.h=!0;Z.__awct.priorityOverride=0}();
Z.b.bzi=["nonGoogleScripts"],function(){(function(a){Z.__bzi=a;Z.__bzi.g="bzi";Z.__bzi.h=!0;Z.__bzi.priorityOverride=0})(function(a){E._linkedin_data_partner_id=a.vtp_id;W("https://snap.licdn.com/li.lms-analytics/insight.min.js",a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();Z.b.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.g="remm";Z.__remm.h=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=0;f<c.length;f++){var g=c[f].key||"";d&&(g="^"+g+"$");var k=new RegExp(g,e);if(k.test(b)){var l=c[f].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();

Z.b.baut=["nonGoogleScripts"],function(){var a=!1,b=function(c){var d=c.vtp_uetqName||"uetq",e=X(d,[],!0);if("VARIABLE_REVENUE"==c.vtp_eventType)e.push({gv:c.vtp_goalValue}),c.vtp_gtmOnSuccess();else if("CUSTOM"==c.vtp_eventType){var f={},g=function(k,l){void 0!==c[k]&&(f[l]=c[k])};g("vtp_goalValue","gv");g("vtp_eventCategory","ec");g("vtp_eventAction","ea");g("vtp_eventLabel","el");g("vtp_eventValue","ev");e.push(f);c.vtp_gtmOnSuccess()}else if(a)c.vtp_gtmOnSuccess();else try{W("//bat.bing.com/bat.js",
function(){var k=Go(X("UET"),{ti:c.vtp_tagId,q:e});E[d]=k;k.push("pageLoad");c.vtp_gtmOnSuccess()},c.vtp_gtmOnFailure),a=!0}catch(k){O(c.vtp_gtmOnFailure)}};Z.__baut=b;Z.__baut.g="baut";Z.__baut.h=!0;Z.__baut.priorityOverride=0}();Z.b.logging=["google"],function(){function a(){return{}}(function(b){Z.__logging=b;Z.__logging.g="logging";Z.__logging.h=!0;Z.__logging.priorityOverride=0})(function(b){var c=b.vtp_environments||"debug",d=b.vtp_createPermissionError;return{assert:function(e){if("all"!==c&&!Ho.Vg())throw d(e,{},"Logging is not enabled in all environments");},K:a}})}();
Z.b.fsl=[],function(){function a(){var e=X("document"),f=c(),g=HTMLFormElement.prototype.submit;Ue(e,"click",function(k){var l=k.target;if(l&&(l=Ze(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&We(l,"value")){var m;l.form?l.form.tagName?m=l.form:m=J.getElementById(l.form):m=Ze(l,["form"],100);m&&f.store(m,l)}},!1);Ue(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=b(l)&&!m,r=f.get(l),t=!0;if(d(l,function(){if(t){var p;
r&&(p=e.createElement("input"),p.type="hidden",p.name=r.name,p.value=r.value,l.appendChild(p));g.call(l);p&&l.removeChild(p)}},m,n,r))t=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&g.call(k)},!1,l)&&(g.call(k),m=!1)}}function b(e){var f=e.target;return f&&"_self"!==f&&"_parent"!==f&&"_top"!==f?!1:!0}function c(){var e=[],f=function(g){return Ha(e,function(k){return k.form===
g})};return{store:function(g,k){var l=f(g);l?l.button=k:e.push({form:g,button:k})},get:function(g){var k=f(g);return k?k.button:null}}}function d(e,f,g,k,l){var m=on("fsl",g?"nv.mwt":"mwt",0),n;n=g?on("fsl","nv.ids",[]):on("fsl","ids",[]);if(!n.length)return!0;var r=kn(e,"gtm.formSubmit",n),t=e.action;t&&t.tagName&&(t=e.cloneNode(!1).action);r["gtm.elementUrl"]=t;l&&(r["gtm.formSubmitElement"]=l);if(k&&m){if(!Xn(r,$m(f),m))return!1}else Xn(r,function(){},m||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.g=
"fsl";Z.__fsl.h=!0;Z.__fsl.priorityOverride=0})(function(e){var f=e.vtp_waitForTags,g=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var m=function(r){return Math.max(k,r)};nn("fsl","mwt",m,0);g||nn("fsl","nv.mwt",m,0)}var n=function(r){r.push(l);return r};nn("fsl","ids",n,[]);g||nn("fsl","nv.ids",n,[]);ao("fsl")||(a(),bo("fsl"));O(e.vtp_gtmOnSuccess)})}();Z.b.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.g="smm";Z.__smm.h=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Lo(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Z.b.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.g="paused";Z.__paused.h=!0;Z.__paused.priorityOverride=0})(function(a){O(a.vtp_gtmOnFailure)})}();Z.b.hid=["google"],function(){(function(a){Z.__hid=a;Z.__hid.g="hid";Z.__hid.h=!0;Z.__hid.priorityOverride=0})(function(){return gn.Jb})}();
Z.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=J.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Pe(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,g)()}else d.insertBefore(k,null),l()}else f()}catch(t){O(g)}}}var c=function(d){if(J.body){var e=
d.vtp_gtmOnFailure,f=fo(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.$c,k=f.D;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,k,e):a(J.body,Ye(g),k,e)()}else Sn(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.priorityOverride=0}();




Z.b.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.g="img";Z.__img.h=!0;Z.__img.priorityOverride=0})(function(a){var b=Ye('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}Jo(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


Z.b.lcl=[],function(){function a(){var c=X("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.Tg||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=Ze(g,["a","area"],100);if(!g)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=on("lcl",k?"nv.mwt":"mwt",0),m;m=k?on("lcl","nv.ids",[]):on("lcl","ids",[]);if(m.length){var n=kn(g,"gtm.linkClick",m);if(b(f,g,c)&&!k&&l&&g.href){var r=String(eo(g,"rel")||""),t=!!Ha(r.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
t&&Hf("GTM",36);var p=X((eo(g,"target")||"_self").substring(1)),u=!0;if(Xn(n,$m(function(){var v;if(v=u&&p){var w;a:if(t){var x;try{x=new MouseEvent(f.type)}catch(y){if(!c.createEvent){w=!1;break a}x=c.createEvent("MouseEvents");x.initEvent(f.type,!0,!0)}x.Tg=!0;f.target.dispatchEvent(x);w=!0}else w=!1;v=!w}v&&(p.location.href=eo(g,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else Xn(n,function(){},l||2E3);return!0}}};Ue(c,"click",e,!1);Ue(c,"auxclick",e,!1)}
function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=eo(d,"href"),g=f.indexOf("#"),k=eo(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===g)return!1;if(0<g){var l=Vn(f),m=Vn(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.g="lcl";Z.__lcl.h=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||
0>=f)f=2E3;var g=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(f,m)};nn("lcl","mwt",k,0);e||nn("lcl","nv.mwt",k,0)}var l=function(m){m.push(g);return m};nn("lcl","ids",l,[]);e||nn("lcl","nv.ids",l,[]);ao("lcl")||(a(),bo("lcl"));O(c.vtp_gtmOnSuccess)})}();
Z.b.evl=["google"],function(){function a(f,g){this.element=f;this.uid=g}function b(){var f=Number(Wn("gtm.start"))||0;return(new Date).getTime()-f}function c(f,g,k,l){function m(){if(!Jn(f.target)){g.has(e.Mb)||g.set(e.Mb,""+b());g.has(e.Ic)||g.set(e.Ic,""+b());var r=0;g.has(e.Ob)&&(r=Number(g.get(e.Ob)));r+=100;g.set(e.Ob,""+r);if(r>=k){var t=kn(f.target,"gtm.elementVisibility",[g.uid]),p=In(f.target);t["gtm.visibleRatio"]=Math.round(1E3*p)/10;t["gtm.visibleTime"]=k;t["gtm.visibleFirstTime"]=Number(g.get(e.Ic));
t["gtm.visibleLastTime"]=Number(g.get(e.Mb));Xn(t);l()}}}if(!g.has(e.gb)&&(0==k&&m(),!g.has(e.Ka))){var n=X("self").setInterval(m,100);g.set(e.gb,n)}}function d(f){f.has(e.gb)&&(X("self").clearInterval(Number(f.get(e.gb))),f.a(e.gb))}var e={gb:"polling-id-",Ic:"first-on-screen-",Mb:"recent-on-screen-",Ob:"total-visible-time-",Ka:"has-fired-"};a.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.uid)};a.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.uid)};a.prototype.set=function(f,g){this.element.setAttribute("data-gtm-vis-"+f+this.uid,g)};a.prototype.a=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.uid)};(function(f){Z.__evl=f;Z.__evl.g="evl";Z.__evl.h=!0;Z.__evl.priorityOverride=0})(function(f){function g(){var x=!1,y=null;if("CSS"===l){try{y=cf(m)}catch(G){}x=!!y&&v.length!=y.length}else if("ID"===l){var B=J.getElementById(m);B&&(y=[B],x=1!=v.length||v[0]!==B)}y||(y=[],x=0<v.length);if(x){for(var z=0;z<v.length;z++){var A=
new a(v[z],p);d(A)}v=[];for(var F=0;F<y.length;F++)v.push(y[F]);0<=w&&Pn(w);0<v.length&&(w=On(k,v,[t]))}}function k(x){var y=new a(x.target,p);x.intersectionRatio>=t?y.has(e.Ka)||c(x,y,r,"ONCE"===u?function(){for(var B=0;B<v.length;B++){var z=new a(v[B],p);z.set(e.Ka,"1");d(z)}Pn(w);if(n&&vn)for(var A=0;A<vn.length;A++)vn[A]===g&&vn.splice(A,1)}:function(){y.set(e.Ka,"1");d(y)}):(d(y),"MANY_PER_ELEMENT"===u&&y.has(e.Ka)&&(y.a(e.Ka),y.a(e.Ob)),y.a(e.Mb))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var n=!!f.vtp_useDomChangeListener,r=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,t=(Number(f.vtp_onScreenRatio)||50)/100,p=f.vtp_uniqueTriggerId,u=f.vtp_firingFrequency,v=[],w=-1;g();n&&wn(g);O(f.vtp_gtmOnSuccess)})}();


var uq={};uq.macro=function(a){if(gn.Oc.hasOwnProperty(a))return gn.Oc[a]},uq.onHtmlSuccess=gn.ue(!0),uq.onHtmlFailure=gn.ue(!1);uq.dataLayer=kg;uq.callback=function(a){Df.hasOwnProperty(a)&&Ea(Df[a])&&Df[a]();delete Df[a]};function vq(){R[Fd.s]=uq;Ua(Ef,Z.b);jd=jd||gn;kd=Tg}
function wq(){yi.gtm_3pds=!0;R=E.google_tag_manager=E.google_tag_manager||{};if(R[Fd.s]){var a=R.zones;a&&a.unregisterChild(Fd.s);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)cd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)fd.push(e[f]);for(var g=b.predicates||[],k=0;k<g.length;k++)ed.push(g[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],r={},t=0;t<n.length;t++)r[n[t][0]]=Array.prototype.slice.call(n[t],1);dd.push(r)}hd=Z;id=Eo;var p=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;gm();Kd=new Jd(p);if(void 0!==
u)for(var w=["sandboxedScripts"],x=0;x<u.length;x++){var y=u[x].replace(/^_*/,"");Ef[y]=w}jm(v);vq();fn();Xg=!1;Yg=0;if("interactive"==J.readyState&&!J.createEventObject||"complete"==J.readyState)$g();else{Ue(J,"DOMContentLoaded",$g);Ue(J,"readystatechange",$g);if(J.createEventObject&&J.documentElement.doScroll){var B=!0;try{B=!E.frameElement}catch(G){}B&&ah()}Ue(E,"load",$g)}Cm=!1;"complete"===J.readyState?Em():Ue(E,"load",Em);a:{if(!$f)break a;E.setInterval(ag,864E5);}
Af=(new Date).getTime();}}
(function(a){
a()})(wq);

})()
