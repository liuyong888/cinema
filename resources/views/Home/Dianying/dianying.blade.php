@extends("Home.HomePublic.public")
@section('content')
<!DOCTYPE html>

<!--[if IE 8]><html class="ie8"><![endif]-->
<!--[if IE 9]><html class="ie9"><![endif]-->
<!--[if gt IE 9]><!--><html><!--<![endif]-->
<head>
  <title>正在热映 - 猫眼电影 - 一网打尽好电影</title>
  
  <link rel="dns-prefetch" href="//p0.meituan.net"  />
  <link rel="dns-prefetch" href="//p1.meituan.net"  />
  <link rel="dns-prefetch" href="//ms0.meituan.net" />
  <link rel="dns-prefetch" href="//ms1.meituan.net" />
  <link rel="dns-prefetch" href="//analytics.meituan.com" />
  <link rel="dns-prefetch" href="//report.meituan.com" />
  <link rel="dns-prefetch" href="//frep.meituan.com" />

  
  <meta charset="utf-8">
  <meta name="keywords" content="南京,正在热映,即将上映,经典电影">
  <meta name="description" content="国内观众优选的在线购票平台，用户流行的观影决策平台。">
  <meta http-equiv="cleartype" content="yes" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="renderer" content="webkit" />

  <meta name="HandheldFriendly" content="true" />
  <meta name="format-detection" content="email=no" />
  <meta name="format-detection" content="telephone=no" />
  <meta name="viewport" content="width=device-width, initial-scale=1">

  
  <script>"use strict";!function(){var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"_Owl_",n=window;n[i]||(n[i]={isRunning:!1,isReady:!1,preTasks:[],dataSet:[],use:function(i,t){this.isReady&&n.Owl&&n.Owl[i](t),this.preTasks.push({api:i,data:[t]})},add:function(i){this.dataSet.push(i)},run:function(){var t=this;if(!this.isRunning){this.isRunning=!0;var i=n.onerror;n.onerror=function(){this.isReady||this.add({type:"jsError",data:arguments}),i&&i.apply(n,arguments)}.bind(this),(n.addEventListener||n.attachEvent)("error",function(i){t.isReady||t.add({type:"resError",data:[i]})},!0)}}},n[i].run())}();</script>
  <script>
  cid = "c_rhr5i1n";
  ci = 55;
val = {"subnavId":1};    window.system = {};

  window.openPlatform = '';
  window.openPlatformSub = '';

  </script>
  <link rel="stylesheet" href="/static/Home/dystatic/css/common.4b838ec3.css"/>
<link rel="stylesheet" href="/static/Home/dystatic/css/movie-list.22f5a22a.css"/>
  <script crossorigin="anonymous" src="/static/Home/dystatic/js/stat.74891044.js"></script>
  <script>if(window.devicePixelRatio >= 2) { document.write('<link rel="stylesheet" href="/static/Home/dystatic/css/image-2x.8ba7074d.css"/>') }</script>
  <style>
    @font-face {
      font-family: stonefont;
      src: url('//vfile.meituan.net/colorstone/46dce2e1390aef7d3695c09a8d2e10973168.eot');
      src: url('//vfile.meituan.net/colorstone/46dce2e1390aef7d3695c09a8d2e10973168.eot?#iefix') format('embedded-opentype'),
           url('//vfile.meituan.net/colorstone/939f5af8e57b782dc1109cb1f017b77e2084.woff') format('woff');
    }

    .stonefont {
      font-family: stonefont;
    }
    a:link{
      text-decoration: none;
    }
  </style>
</head>
<body>
<div class="subnav">
  <ul class="navbar">
    <li>
      <a data-act="subnav-click" data-val="{subnavClick:1}"
          data-state-val="{subnavId:1}"
          class="active" href="javascript:void(0);"
      >正在热映</a>
    </li>
    <li>
      <a data-act="subnav-click" data-val="{subnavClick:2}"
          href="?showType=2"
      >即将上映</a>
    </li>
    <li>
      <a data-act="subnav-click" data-val="{subnavClick:3}"
          href="?showType=3"
      >经典影片</a>
    </li>
  </ul>
</div>


    <div class="container" id="app" class="page-movie/list" >


<div class="movies-channel">
  <div class="tags-panel">
    <ul class="tags-lines">
      <li class="tags-line" data-val="{tagTypeName:'cat'}">
        <div class="tags-title">类型 :</div>
        <ul class="tags">
          <li class="active" data-state-val="{ catTagName:'全部'}" >
            <a data-act="tag-click" data-val="{TagName:'全部'}"
                href="javascript:void(0);" style="cursor: default"
            >全部</a>
          </li>
          @foreach($type as $row)
          <li>
            <a data-act="tag-click" data-val="{TagName:'{{$row->name}}'}"
                href="?catId=3"
            >{{$row->name}}</a>
          </li>
          @endforeach
        </ul>
      </li>
      <li class="tags-line tags-line-border" data-val="{tagTypeName:'source'}">
        <div class="tags-title">区域 :</div>
        <ul class="tags">
          <li class="active" data-state-val="{ sourceTagName:'全部'}" >
            <a data-act="tag-click" data-val="{TagName:'全部'}"
                href="javascript:void(0);" style="cursor: default"
            >全部</a>
          </li>
          @foreach($area as $row)
          <li >
            <a data-act="tag-click" data-val="{TagName:'{{$row->area_name}}'}"
                href="?sourceId=2"
            >{{$row->area_name}}</a>
          </li>
          @endforeach
           
        </ul>
      </li>
      <li class="tags-line tags-line-border" data-val="{tagTypeName:'year'}">
        <div class="tags-title">年代 :</div>
        <ul class="tags">
          <li class="active" data-state-val="{ yearTagName:'全部'}" >
            <a data-act="tag-click" data-val="{TagName:'全部'}"
                href="javascript:void(0);" style="cursor: default"
            >全部</a>
          </li>
          <li >
            <a data-act="tag-click" data-val="{TagName:'2018以后'}"
                href="?yearId=14"
            >2018以后</a>
          </li>
          <li >
            <a data-act="tag-click" data-val="{TagName:'2018'}"
                href="?yearId=13"
            >2018</a>
          </li>
          <li >
            <a data-act="tag-click" data-val="{TagName:'2017'}"
                href="?yearId=12"
            >2017</a>
          </li>
          <li >
            <a data-act="tag-click" data-val="{TagName:'2016'}"
                href="?yearId=11"
            >2016</a>
          </li>
          <li >
            <a data-act="tag-click" data-val="{TagName:'2015'}"
                href="?yearId=10"
            >2015</a>
          </li>
          <li >
            <a data-act="tag-click" data-val="{TagName:'2014'}"
                href="?yearId=9"
            >2014</a>
          </li>
          <li >
            <a data-act="tag-click" data-val="{TagName:'2013'}"
                href="?yearId=8"
            >2013</a>
          </li>
          <li >
            <a data-act="tag-click" data-val="{TagName:'2012'}"
                href="?yearId=7"
            >2012</a>
          </li>
          <li >
            <a data-act="tag-click" data-val="{TagName:'2011'}"
                href="?yearId=6"
            >2011</a>
          </li>
          <li >
            <a data-act="tag-click" data-val="{TagName:'2000-2010'}"
                href="?yearId=5"
            >2000-2010</a>
          </li>
          <li >
            <a data-act="tag-click" data-val="{TagName:'90年代'}"
                href="?yearId=4"
            >90年代</a>
          </li>
          <li >
            <a data-act="tag-click" data-val="{TagName:'80年代'}"
                href="?yearId=3"
            >80年代</a>
          </li>
          <li >
            <a data-act="tag-click" data-val="{TagName:'70年代'}"
                href="?yearId=2"
            >70年代</a>
          </li>
          <li >
            <a data-act="tag-click" data-val="{TagName:'更早'}"
                href="?yearId=1"
            >更早</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="movies-panel">
    <div class="movies-sorter">
      <div class="cat-sorter">
        <ul>
          <li>
            <span class="sort-control-group" data-act='sort-click' data-val="{tagId: 1 }"
                  style="cursor: default"
            >
              <span class="sort-control sort-radio sort-radio-checked"></span>
              <span class="sort-control-label">按热门排序</span>
            </span>
          </li>
          <li>
            <span class="sort-control-group" data-act='sort-click' data-val="{tagId: 2 }"
                  data-href="?sortId=2"
                  onclick="location.href=this.getAttribute('data-href')"
            >
              <span class="sort-control sort-radio"></span>
              <span class="sort-control-label">按时间排序</span>
            </span>
          </li>
          <li>
            <span class="sort-control-group" data-act='sort-click' data-val="{tagId: 3 }"
                  data-href="?sortId=3"
                  onclick="location.href=this.getAttribute('data-href')"
            >
              <span class="sort-control sort-radio"></span>
              <span class="sort-control-label">按评价排序</span>
            </span>
          </li>
        </ul>
      </div>
      <div class="play-sorter">
        <span class="sort-control-group" data-act='isplay-click' data-val="{isplay:1}"
          data-href="?isPlay=1"
          onclick="location.href=this.getAttribute('data-href')">
          <span class="sort-control sort-checkbox"></span>
          <span class="sort-control-label">可播放</span>
        </span>
      </div>
    </div>
    <div class="movies-list">
    
    <dl class="movie-list">
  @foreach($movie as $row)
  <dd>
    <div class="movie-item">
      <a href="/dianying/{{$row->id}}" target="_blank" data-act="movie-click" >
      <div class="movie-poster">
        <!-- <img class="poster-default" src="/static/Home/dystatic/picture/loading_2.e3d934bf.png" /> -->
        <img data-src="../uploads/dianyingtupian/{{$row->tupian}}" />
      </div>
      </a>
      @if(is_numeric($row->pingfen))
        <div class="channel-action channel-action-sale">
          <a>购票</a>
         </div>
      @endif
      <div class="movie-ver">
        @if($row->movie_ver==1)
        <i class="m3d"></i>
        @elseif($row->movie_ver==2)
        <i class="imax3d"></i>
        @endif
      </div>
    </div>
    <div class="channel-detail movie-item-title" title="{{$row->zwname}}">
      <a href="/films/345036" target="_blank" data-act="movies-click" data-val="{movieId:345036}">{{$row->zwname}}</a>
    </div>
  <div class="channel-detail channel-detail-orange">{{$row->pingfen}}</div>
  @endforeach

</dl>


    </div>
    <div class="movies-pager">
      
  
  <ul class="list-pager">



    <li class="active">
    <a class="page_1"
      href="javascript:void(0);" style="cursor: default"
  >1</a>

</li>
  <li >
    <a class="page_2"
      href="?offset=30"
  >2</a>

</li>


<li>  <a class="page_2"
      href="?offset=30"
  >下一页</a>
</li>
</ul>


    </div>
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

    <script crossorigin="anonymous" src="/static/Home/dystatic/js/owl_1.7.11.js"></script>
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
    <!--[if IE 8]><script crossorigin="anonymous" src="//static/Home/dystatic/Home/dy/static/Home/dystatic/js/es5-shim.bbad933f.js"></script><![endif]-->
    <!--[if IE 8]><script crossorigin="anonymous" src="//static/Home/dystatic/Home/dy/static/Home/dystatic/js/es5-sham.d6ea26f4.js"></script><![endif]-->
    <script crossorigin="anonymous" src="/static/Home/dystatic/js/common.1a4cea09.js"></script>
<script crossorigin="anonymous" src="/static/Home/dystatic/js/movie-list.c3b8c778.js"></script>
</body>
</html>
@endsection
@section('title','电影')
