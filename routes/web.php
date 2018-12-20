<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// 后台首页
// Route::resource("/admin","Admin\AdminController");
// 后台管理员
// Route::resource("/adminuser","Admin\UserController");
// 后台会员
// Route::resource("/adminmember","Admin\MemberController");
// 查看后台会员信息
// Route::get("/adminmemcheck/{id}","Admin\MemberController@check");
//后台电影列表
Route::resource("/adminmovies","Admin\DianyingController");

//后台电影人员列表
Route::resource("/adminrenyuan","Admin\RenyuanController");
//后台电影评论列表
Route::resource("/adminpinglun","Admin\PinglunController");

//后台场次列表
Route::resource("/adminrelss","Admin\RelssController");
// 后台场次Ajax删除
Route::get("/adminrelssdel","Admin\RelssController@ajaxdel");


//后台登录
Route::resource("/adminlogin","Admin\AdminLoginController");

// Route::group(["middleware"=>'login'],function(){
	// 后台首页
	Route::resource("/admin","Admin\AdminController");

	// 后台管理员管理
	Route::resource("/adminuser","Admin\UserController");

	// 后台角色分配
	Route::get("/adminrole/{id}","Admin\UserController@rolelist");

	// 后台角色保存
	Route::post("/adminsaverole","Admin\UserController@saverole");

	//角色管理
	Route::resource("/rolelist","Admin\RolelistController");

	//分配权限
	Route::get("/auth/{id}","Admin\RolelistController@auth");

	//保存权限
	Route::post("/saveauth","Admin\RolelistController@saveauth");

	//权限管理
	Route::resource("/authlist","Admin\AuthlistController");

	// 后台会员
	Route::resource("/adminmember","Admin\MemberController");

	// 查看后台会员信息
	Route::get("/adminmemcheck/{id}","Admin\MemberController@check");


	//后台友情链接管理
	Route::resource("/adminlink","Admin\LinkController");

// });

// 后台影院管理
Route::resource("/admincinemas","Admin\CinemasController");



	//后台友情链接管理
	Route::resource("/adminlink","Admin\LinkController");

	//后台轮播图管理
	Route::resource("/adminpic","Admin\LunboController");

	//后台电影类型管理
	Route::resource("/filmtype","Admin\TypeController");

	//后台电影地区管理
	Route::resource("/filmarea","Admin\AreaController");

// });




// 后台影院管理
Route::resource("/admincinemas","Admin\CinemasController");

//前台首页
Route::resource("/","Home\IndexController");

//前台登录
Route::resource("/login","Home\LoginController");

//前台注册
Route::resource("/register","Home\RegisterController");

Route::get("/checkphone","Home\RegisterController@checkphone");
Route::get("/checkmima","Home\RegisterController@checkmima");
Route::get("/sendphone","Home\RegisterController@sendphone");
Route::get("/checkcode","Home\RegisterController@checkcode");

//前台电影页面
Route::resource("/dianying","Home\DianyingController");


//前台电影页面
Route::resource("/dianying","Home\DianyingController");
//前台电影特惠购票页面
Route::resource("/tehui","Home\TehuiController");


//前台影院页面
Route::resource("/yingyuan","Home\YingyuanController");

//前台榜单页面
Route::resource("/bangdan","Home\BangdanController");

//前台热点页面
Route::resource("/redian","Home\RedianController");

//前台电影详情页面

Route::resource("/xiangqing","Home\XiangqingController");

// Route::resource("/xiangqing/{id}","Home\XiangqingController");
// Route::get("/xiangqing/{id}","Home\XiangqingController@index");


//前台电影搜索页面
Route::resource("/sousuo","Home\SousuoController");

//前台电特惠影购票页面
Route::resource("/tehui","Home\TehuiController");


//前台电影购票页面
Route::resource("/goupiao","Home\GoupiaoController");

//前台电影座位页面
Route::resource("/zuowei","Home\ZuoweiController");

//前台电影支付页面
Route::resource("/zhifu","Home\ZhifuController");

//前台订单详情页面
Route::resource("/dingdanxiangqing","Home\DingdanxiangqingController");

//前台个人信息页面
Route::resource("/gerenxinxi","Home\GerenxinxiController");

//前台订单信息页面
Route::resource("/dingdanxinxi","Home\DingdanxinxiController");



