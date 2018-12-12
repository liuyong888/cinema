<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use DB;
use Hash;
//导入校验类
use App\Http\Requests\AdminUserinsert;
//导入要调用的模型类
use App\Models\User;
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $user=User::paginate(3);
        // dd($user);
        return view("Admin.User.index",['user'=>$user,'request'=>$request->all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view("Admin.User.add");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AdminUserinsert $request)
    {
        //获取所有参数
        // dd($request->all());
        //获取需要入库的参数
        $data=$request->except(['repassword','_token']);
        $data['addtime']=time();
        //密码加密
        $data['password']=Hash::make($data['password']);
        //封装token
        $data['token']=str_random(50);
        // dd($data);
        //执行添加
        if(User::insert($data)){
            //数据添加成功的同时 设置session信息 with把所有的参数写入到闪存里
            return redirect("/adminuser")->with('success','添加成功');
        }else{
            return back()->with('error','添加失败');
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
        //获取需要修改数据 
        $user = DB::table("user")->where("id",'=',$id)->first();
        // dd($user);
        return view("Admin.User.edit",['user'=>$user]);
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
        // echo $id;
        $user = DB::table("user")->where("id",'=',$id)->first(); 
        // dd($request->oldpassword);   
        //获取修改后的数据
        // dd($request->all());
        if(Hash::check($request->oldpassword,$user->password)){
            $data=$request->except(['_token','_method','repassword','oldpassword']);
            $data['password']=Hash::make($data['password']);
            $data['addtime']=time();
            $data['token']=str_random(50);
            if(User::where("id",'=',$id)->update($data)){
                return redirect("/adminuser")->with("success","修改成功");
            }
        }else{
            return redirect("/adminuser/$id/edit")->with('error','修改失败');
        }
        //封装修改的数据
        
        // dd($data);
        //执行修改
        // if(User::where("id",'=',$id)->update($data)){
        //     return redirect("/adminuser")->with("success","修改成功");
        // }
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
        // echo "this is delete".$id;
        //执行删除 
        if(User::where("id","=",$id)->delete()){
            return redirect("/adminuser")->with("success",'删除成功');
        }else{
            return redirect("/adminuser")->with('error','删除失败');
        }
    }

}
