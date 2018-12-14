<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Hash;

class AdminLoginController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //退出
        //销毁session
        $request->session()->pull('id');
        $request->session()->pull('name');
        $request->session()->pull('nodelist');
        return redirect("/adminlogin/create");
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //加载后台登录模板
        return view("Admin.Login.login");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //根据输入的用户名获取用户信息
        $user = DB::table("admin_users")->where("name",'=',$request->input('name'))->first();
        // dd($user);
        //检测用户名
        if($user){
            //检测密码
            if(Hash::check($request->input('password'),$user->password)){
                // echo "OK";
               
                //把用户信息写入到session里
                session(['id'=>$user->id]);
                session(['name'=>$user->name]);
                //1.获取后台登录用户admin的所有权限列表信息
                $list = DB::select("select n.name,n.mname,n.aname from user_role as ur,role_node as rn,node as n where ur.rid=rn.rid and rn.nid=n.id and uid={$user->id}");
                // echo "<pre>";
                // var_dump($list);exit;
                //2.初始化权限信息
                //把后台首页权限写入到权限信息列表里
                $nodelist['AdminController'][]="index";
                //遍历
                foreach($list as $v){
                    $nodelist[$v->mname][]=$v->aname;
                    //如果有create 添加store方法
                    if($v->aname=="create"){
                        $nodelist[$v->mname][]="store";
                    }
                    //如果有edit方法 添加update方法
                    if($v->aname=="edit"){
                        $nodelist[$v->mname][]="update";
                    }
                }

                session(['nodelist'=>$nodelist]);
                return redirect("/admin")->with('success','登录成功');


            }else{
                return back()->with('error','密码有误');
            }
        }else{
                return back()->with('error','管理员名字有误');
                // echo "error";
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    //分配角色
    public function rolelist($id){
        // echo $id;
    }
}
