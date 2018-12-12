@extends("Home.HomePublic.public")
@section('content')
<!DOCTYPE html>

<!--[if IE 8]><html class="ie8"><![endif]-->
<!--[if IE 9]><html class="ie9"><![endif]-->
<!--[if gt IE 9]><!--><html><!--<![endif]-->
<head>
  <title>详情 - 猫眼电影 - 一网打尽好电影</title>
  
  <link rel="dns-prefetch" href="//p0.meituan.net"  />
  <link rel="dns-prefetch" href="//p1.meituan.net"  />
  <link rel="dns-prefetch" href="//ms0.meituan.net" />
  <link rel="dns-prefetch" href="//ms1.meituan.net" />
  <link rel="dns-prefetch" href="//analytics.meituan.com" />
  <link rel="dns-prefetch" href="//report.meituan.com" />
  <link rel="dns-prefetch" href="//frep.meituan.com" />

  
  <meta charset="utf-8">
  <meta name="keywords" content="">
  <meta name="description" content="">
  <meta http-equiv="cleartype" content="yes" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="renderer" content="webkit" />

  <meta name="HandheldFriendly" content="true" />
  <meta name="format-detection" content="email=no" />
  <meta name="format-detection" content="telephone=no" />
  <meta name="viewport" content="width=device-width, initial-scale=1">

  
  <script>"use strict";!function(){var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"_Owl_",n=window;n[i]||(n[i]={isRunning:!1,isReady:!1,preTasks:[],dataSet:[],use:function(i,t){this.isReady&&n.Owl&&n.Owl[i](t),this.preTasks.push({api:i,data:[t]})},add:function(i){this.dataSet.push(i)},run:function(){var t=this;if(!this.isRunning){this.isRunning=!0;var i=n.onerror;n.onerror=function(){this.isReady||this.add({type:"jsError",data:arguments}),i&&i.apply(n,arguments)}.bind(this),(n.addEventListener||n.attachEvent)("error",function(i){t.isReady||t.add({type:"resError",data:[i]})},!0)}}},n[i].run())}();</script>
  <script>
  cid = "c_ua9d08pz";
  ci = 55;
    window.system = '';

  window.openPlatform = '';
  window.openPlatformSub = '';

  </script>
  <link rel="stylesheet" href="/static/Home/ddxqstatic/css/common.4b838ec3.css"/>
<link rel="stylesheet" href="/static/Home/ddxqstatic/css/order-detail.3a8a0a18.css"/>
  <script crossorigin="anonymous" src="/static/Home/ddxqstatic/js/stat.74891044.js"></script>
  <script>if(window.devicePixelRatio >= 2) { document.write('<link rel="stylesheet" href="/static/Home/ddxqstatic/css/image-2x.8ba7074d.css"/>') }</script>
  <style>
    @font-face {
      font-family: stonefont;
      src: url('//vfile.meituan.net/colorstone/cab501afff947a4088c25732cce6efef3168.eot');
      src: url('//vfile.meituan.net/colorstone/cab501afff947a4088c25732cce6efef3168.eot?#iefix') format('embedded-opentype'),
           url('//vfile.meituan.net/colorstone/7c714b24759920a9c4b14ae5d2f32ef32084.woff') format('woff');
    }

    .stonefont {
      font-family: stonefont;
    }
  </style>
</head>
<body>
    <div class="container" id="app" class="page-order/detail" >

  <div class="order-container" data-page-type="detail" data-order-id="1105097307" data-unique-status="10">

    <div class="status-box finished">
      <p class="title">已完成</p>

        <p class="desc"></p>
    </div>


    <div class="order-note">
      <span class="order-id">猫眼订单号:1105097307</span>
      <span class="contact">（有订单问题可拨打猫眼客服电话<i>1010-5335</i>，工作时间: 9:00-24:00）</span>
    </div>

      <table class="order-table">
    <thead>
      <tr>
        <th>影片</th>
        <th>时间</th>
        <th>影院</th>
        <th>座位</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="movie-name">《功夫瑜伽》</td>
        <td class="showtime">周六 2月4日 15:00</td>
        <td class="cinema-name">宁高国际影城</td>
        <td>
          <span class="hall">一号厅</span>
          <div class="seats">
            <div>
                <span class=""><i>10</i>排<i>11</i>座</span>
                <span class="border"><i>10</i>排<i>12</i>座</span>
            </div>
            <div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>


    <div class="order-bottom">
      <div class="clearfix">
        <div class="cinema-info">
          <p class="name">宁高国际影城</p>
          <p class="address">地址: 丹阳湖北路22号</p>
          <p class="phone">电话: 025-56863988</p>
        </div>

        <div class="price-box">
          <span>总价:</span>
          <span class="price">96</span>
        </div>
      </div>

    </div>
  </div>

  <div class="modal-container" style="display:none">
    <div class="modal">
      <span class="icon"></span>
      <p class="tip">支付超时，该订单已失效，请重新购买</p>
      <div class="ok-btn btn">我知道了</div>
    </div>
  </div>

    <form name="cashierForm" method="post" action="https://mpay.meituan.com/cashier/pc/index">
    <input type="hidden" name="token" value="">
    <input type="hidden" name="tradeno" value="">
    <input type="hidden" name="pay_token" value="">
    <input type="hidden" name="website" value="mtmaoyan">
    <input type="hidden" name="pay_success_url" value="http://www.maoyan.com/order/result/1105097307">
    <input type="hidden" name="nb_platform" value="www">
    <input type="hidden" name="nb_source" value="cashier-pcforcustomer">
  </form>


    <div class="modal-container" style="display:none">
    <div class="modal">
      <span class="icon"></span>

      <p class="tip"></p>

        <div class="ok-btn btn">我知道了</div>
    </div>
  </div>

    </div>

<div class="footer">
    <p class="friendly-links">
      商务合作邮箱：v@maoyan.com
      客服电话：10105335
      违法和不良信息举报电话：4006018900
      <br/>
      投诉举报邮箱：tousujubao@meituan.com
      舞弊线索举报邮箱：wubijubao@maoyan.com
    </p>
    <p class="friendly-links">
        友情链接 :
        <a href="http://www.meituan.com" data-query="utm_source=wwwmaoyan" target="_blank">美团网</a>
        <span></span>
        <a href="http://i.meituan.com/client" data-query="utm_source=wwwmaoyan" target="_blank">美团下载</a>
        <span></span>
        <a href="https://www.huanxi.com" data-query="utm_source=maoyan_pc" target="_blank">欢喜首映</a>
    </p>
    <p>
        &copy;2016
        猫眼电影 maoyan.com
        <a href="https://tsm.miit.gov.cn/pages/EnterpriseSearchList_Portal.aspx?type=0&keyword=京ICP证160733号&pageNo=1" target="_blank">京ICP证160733号</a>
        <a href="http://www.miibeian.gov.cn" target="_blank">京ICP备16022489号-1</a>
        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010102003232" target="_blank">京公网安备 11010102003232号</a>
        <a href="/about/licence" target="_blank">网络文化经营许可证</a>
        <a href="http://www.meituan.com/about/rules" target="_blank">电子公告服务规则</a>
    </p>
    <p>北京猫眼文化传媒有限公司</p>
</div>

    <script crossorigin="anonymous" src="/static/Home/ddxqstatic/js/owl_1.7.11.js"></script>
    <script>
      Owl.start({
        project: 'com.sankuai.movie.fe.mywww', 
        pageUrl: location.href.split('?')[0].replace(/\/\d+/g, '/:id'),
        devMode: false
      })
      // 单独自定义上报下img加载错误
      window.addEventListener('error', function(e) {
        var node = e.target || e.srcElement
        try {
          var msg = node.src || node.href
          var nodeName = node.nodeName
          if (nodeName && nodeName.toLowerCase() === 'img') {
            Owl.addError(msg, {level: 'warn', category: 'resourceError'})
          }
        } catch(err) {
          console.error(err)
        }
      }, true)
    </script>
    <!--[if IE 8]><script crossorigin="anonymous" src="//ms0.meituan.net/mywww/es5-shim.bbad933f.js"></script><![endif]-->
    <!--[if IE 8]><script crossorigin="anonymous" src="//ms0.meituan.net/mywww/es5-sham.d6ea26f4.js"></script><![endif]-->
    <script crossorigin="anonymous" src="/static/Home/ddxqstatic/js/common.95bd9e07.js"></script>
<script crossorigin="anonymous" src="/static/Home/ddxqstatic/js/order-detail.800da2ce.js"></script>
</body>
</html>

@endsection
@section('title','订单详情')