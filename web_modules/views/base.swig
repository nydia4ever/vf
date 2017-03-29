<!DOCTYPE html>
<!--[if lt IE 7 ]> <html class="ie ie6"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie ie7"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie ie8"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>YY会员-{% block title %}{% endblock %}{[title]}</title>
    <meta name="description" content="{[description]}">
    <meta name="keywords" content="{[keywords]}">
    {% block head %}{% endblock %}
</head>
<body>

	{% block main %}{% endblock %}
	{% block footer %}{% endblock %}

    <script>
        var _hmt = _hmt || [];
        (function() { // 百度统计
            var hm = document.createElement("script");
            hm.src = "//hm.baidu.com/hm.js?a66c00106b2a56cbb22caea0ca130438";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();

        (function() { // 多玩统计
            var dwtj = document.createElement("script");
            dwtj.src = "http://www.duowan.com/duowan.js";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(dwtj, s);
        })();
    </script>
  
</body>
</html>