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

Route::resource("/admin","Admin\AdminController");
Route::resource("/adminuser","Admin\UserController");
Route::resource("/adminmember","Admin\MemberController");
Route::get("/adminmemcheck/{id}","Admin\MemberController@check");

//前台首页
Route::resource("/","Home\IndexController");

//前台登录
Route::resource("/login","Home\LoginController");

//前台注册
Route::resource("/register","Home\RegisterController");

//前台电影页面
Route::resource("/dianying","Home\DianyingController");

//前台影院页面
Route::resource("/yingyuan","Home\YingyuanController");

//前台榜单页面
Route::resource("/bangdan","Home\BangdanController");

//前台热点页面
Route::resource("/redian","Home\RedianController");

//前台电影详情页面
Route::resource("/xiangqing","Home\XiangqingController");

//前台电影搜索页面
Route::resource("/sousuo","Home\SousuoController");

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