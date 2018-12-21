<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
	<meta charset="UTF-8">
	<link rel="shortcut icon" href="favicon.ico">
	<link rel="stylesheet" href="/static/Home/css/iconfont.css">
	<link rel="stylesheet" href="/static/Home/css/global.css">
	<link rel="stylesheet" href="/static/Home/css/bootstrap.min.css">
	<link rel="stylesheet" href="/static/Home/css/bootstrap-theme.min.css">
	<link rel="stylesheet" href="/static/Home/css/swiper.min.css">
	<link rel="stylesheet" href="/static/Home/css/styles.css">
	<script src="/static/Home/js/jquery.1.12.4.min.js" charset="UTF-8"></script>
	<script src="/static/Home/js/bootstrap.min.js" charset="UTF-8"></script>
	<script src="/static/Home/js/swiper.min.js" charset="UTF-8"></script>
	<script src="/static/Home/js/global.js" charset="UTF-8"></script>
	<script src="/static/Home/js/jquery.DJMask.2.1.1.js" charset="UTF-8"></script>
	<title>@yield('title')</title>
</head>
<body>
	<!-- 顶部tab -->
	<div class="tab-header">
		<div class="inner">
			<div class="pull-right">
				<a href="/login/create"><span class="cr">登录</span></a>
				<a href="/register/create">注册</a>
				<a href="/login"><span class="cr">登录</span></a>
				<a href="/register">注册</a>
				<a href="/gerenxinxi">我的账户</a>
				<a href="/dingdanxinxi">我的订单</a>
			</div>
		</div>
	</div>
	<!-- 搜索栏 -->
	<div class="top-search">
		<div class="inner">
			<a class="logo" href="index.html"><img src="/static/Home/images/icons/logo.jpg" alt="U袋网" class="cover"></a>
			<div class="search-box">
				<form class="input-group" action="/sousuo" method="get">
					<input type="text">
					<input type="text" name="keywords" value="">
					<span class="input-group-btn">
						<button type="submit">
							<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
						</button>
					</span>
					{{csrf_field()}}
				</form>
			</div>
			<div class="cart-box">
				<a href="udai_shopcart.html" class="cart-but">
					<i class="iconfont icon-shopcart cr fz16"></i> 购物车 0 件
				</a>
			</div>
		</div>
	</div>
	<!-- 首页导航栏 -->
	<div class="top-nav bg3">
		<div class="nav-box inner">
			<div class="all-cat">
				<div class="title"><!-- <i class="iconfont icon-menu"></i> 全部分类 --></div>
			</div>
			<ul class="nva-list" style="font-size: 20px;">
				<a href="/"><li style="margin-left: 10px;">首页</li></a>
				<a href="/dianying"><li style="margin-left: 50px;">电影</li></a>
				<a href="/yingyuan"><li style="margin-left: 50px;">影院</li></a>
				<a href="/bangdan"><li style="margin-left: 50px;">榜单</li></a>
				<a href="/redian"><li style="margin-left: 50px;">热点</li></a>
			</ul>
		</div>
	</div>
	@section('content')
	@show
</body>
</html>
