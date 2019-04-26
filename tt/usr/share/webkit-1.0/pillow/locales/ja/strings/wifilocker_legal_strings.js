
// string map for default mode
var WLLegalStringTable = {

  WLFAQHeader : "\u30d1\u30b9\u30ef\u30fc\u30c9\u3092Amazon\u306b\u4fdd\u5b58",
  close       : "\u9589\u3058\u308b",
  WLFAQMessageFormat : new MessageFormat("<b> 1. Amazon\u30a2\u30ab\u30a6\u30f3\u30c8\u306bWi-Fi\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u4fdd\u5b58\u3059\u308b\u3068\u3069\u306e\u3088\u3046\u306a\u5229\u70b9\u304c\u3042\u308a\u307e\u3059\u304b? </b> </br> Amazon\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u4fdd\u5b58\u3057\u305fWi-Fi\u30d1\u30b9\u30ef\u30fc\u30c9\u306f\u3001\u5bfe\u5fdc\u3059\u308b\u3059\u3079\u3066\u306e\u7aef\u672b\u3067\u81ea\u52d5\u5165\u529b\u3055\u308c\u3001\u500b\u3005\u306b\u5165\u529b\u3059\u308b\u5fc5\u8981\u304c\u306a\u304f\u306a\u308a\u307e\u3059\u3002</br> <b> 2. \u4fdd\u5b58\u3057\u305fWi-Fi\u30d1\u30b9\u30ef\u30fc\u30c9\u306f\u53b3\u91cd\u306b\u4fdd\u8b77\u3055\u308c\u307e\u3059\u304b?</b> </br>\u306f\u3044\u3002Amazon\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u4fdd\u5b58\u3057\u305fWi-Fi\u30d1\u30b9\u30ef\u30fc\u30c9\u306f\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u4fdd\u8b77\u3055\u308c\u305f\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u63a5\u7d9a\u3067\u9001\u4fe1\u3055\u308c\u3001Amazon\u30b5\u30fc\u30d0\u30fc\u4e0a\u306e\u6697\u53f7\u5316\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002\u4fdd\u5b58\u3055\u308c\u305fWi-Fi\u30d1\u30b9\u30ef\u30fc\u30c9\u306f\u3001\u5bfe\u5fdc\u7aef\u672b\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u63a5\u7d9a\u306e\u305f\u3081\u306b\u3060\u3051\u4f7f\u7528\u3055\u308c\u3001\u304a\u5ba2\u69d8\u306e\u8a31\u53ef\u306a\u304f\u7b2c\u4e09\u8005\u306b\u516c\u958b\u3055\u308c\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u304a\u5ba2\u69d8\u304b\u3089Amazon\u306b\u63d0\u4f9b\u3055\u308c\u305fWi-Fi\u30d1\u30b9\u30ef\u30fc\u30c9\u306a\u3069\u306e\u60c5\u5831\u306f\u3001Amazon\u306e\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u898f\u7d04({privacyUrlString})\u306b\u5247\u3063\u3066\u53d6\u308a\u6271\u308f\u308c\u307e\u3059\u3002</br> <b>3. Wi-Fi\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5909\u66f4\u3059\u308b\u306b\u306f\u3069\u3046\u3059\u308c\u3070\u3088\u3044\u3067\u3059\u304b? </b> </br>\u4fdd\u5b58\u6e08\u307f\u306eWi-Fi\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5909\u66f4\u3059\u308b\u306b\u306f\u3001\u5bfe\u5fdc\u3059\u308b\u7aef\u672b\u306e1\u3064\u3067Wi-Fi\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3092\u518d\u5ea6\u884c\u3044\u307e\u3059\u3002\u305d\u306e\u5f8cWi-Fi\u306b\u518d\u3073\u63a5\u7d9a\u3059\u308b\u3068\u3001\u65b0\u3057\u3044Wi-Fi\u30d1\u30b9\u30ef\u30fc\u30c9\u304cAmazon\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u81ea\u52d5\u7684\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002</br> <b> 4.\u300c\u30d1\u30b9\u30ef\u30fc\u30c9\u3092Amazon\u306b\u4fdd\u5b58\u300d\u3092\u6709\u52b9\u306b\u305b\u305a\u306b\u3053\u306e\u7aef\u672b\u3067\u5165\u529b\u3057\u305f\u30d1\u30b9\u30ef\u30fc\u30c9\u306fAmazon\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u307e\u3059\u304b? </b> </br> \u3044\u3044\u3048\u3002\u300c\u30d1\u30b9\u30ef\u30fc\u30c9\u3092Amazon\u306b\u4fdd\u5b58\u300d\u3092\u6709\u52b9\u306b\u3057\u305f\u5f8c\u306b\u5165\u529b\u3057\u305fWi-Fi\u30d1\u30b9\u30ef\u30fc\u30c9\u3060\u3051\u304cAmazon\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u30aa\u30d5\u306b\u306a\u3063\u3066\u3044\u308b\u6642\u306b\u5165\u529b\u3057\u305f\u30d1\u30b9\u30ef\u30fc\u30c9\u306f\u4fdd\u5b58\u3055\u308c\u307e\u305b\u3093\u3002</br> <b> 5. Amazon\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u4fdd\u5b58\u3057\u305fWi-Fi\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u524a\u9664\u3059\u308b\u306b\u306f\u3069\u3046\u3059\u308c\u3070\u3088\u3044\u3067\u3059\u304b?</b> </br> Amazon\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u4fdd\u5b58\u3057\u305fWi-Fi\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u524a\u9664\u3059\u308b\u306b\u306f\u3001\u300c\u30ab\u30b9\u30bf\u30de\u30fc\u30b5\u30fc\u30d3\u30b9\u306b\u9023\u7d61\u300d\u30d5\u30a9\u30fc\u30e0\uff08{deviceSupporUrlString}\uff09\u3092\u4f7f\u3063\u3066\u30ab\u30b9\u30bf\u30de\u30fc\u30b5\u30dd\u30fc\u30c8\u307e\u3067\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\u3002\u3053\u306e\u7aef\u672b\u306b\u4fdd\u5b58\u3055\u308c\u305fWi-Fi\u30d1\u30b9\u30ef\u30fc\u30c9\u306f\u3001\u300c\u8a2d\u5b9a\u300d\u753b\u9762\u3067\u524a\u9664\u3067\u304d\u307e\u3059\u3002"),
  WLPrivacyUrlMessageFormat : new MessageFormat("wifilocker.privacyurl.{MarketPlace}"),
  WLDeviceSupportMessageFormat : new MessageFormat("wifilocker.devicesupporturl.{MarketPlace}")
};

// string map for large mode
var WLLegalStringTableLarge = {

  close       : "\u9589\u3058\u308b"
};

//checks for large mode and constructs WLLegalStringTable based on the display mode

WLLegalStringTable = constructTableOnDisplayModeChange(WLLegalStringTable,WLLegalStringTableLarge);
