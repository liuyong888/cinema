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
Route::resource("/admin","Admin\AdminController");
// 后台管理员
Route::resource("/adminuser","Admin\UserController");
// 后台会员
Route::resource("/adminmember","Admin\MemberController");
// 查看后台会员信息
Route::get("/adminmemcheck/{id}","Admin\MemberController@check");
// 注释 test