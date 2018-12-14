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
        //获取搜索关键词
        $k = $request->input('keywords');
        // dd($k);
        //获取列表数据
        $user=DB::table("admin_users")->where("name","like","%".$k."%")->paginate(3);
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
        $data=$request->except(['_token','repassword']);
        //密码加密
        $data['password']=Hash::make($data['password']);
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
        $user = DB::table("admin_users")->where("id",'=',$id)->first();
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
        $user = DB::table("admin_users")->where("id",'=',$id)->first(); 
        // dd($request->oldpassword);   
        //获取修改后的数据
        // dd($request->all());
        $data=$request->except(['_token','_method','repassword']);
        $data['password']=Hash::make($data['password']);
        if(User::where("id",'=',$id)->update($data)){
            return redirect("/adminuser")->with('success',"修改成功");
        }else{
            return redirect("/adminuser/$id/edit")->with('error','修改失败');
        }
        // if(Hash::check($request->oldpassword,$user->password)){
            
            
        //     $data['addtime']=time();
        //     $data['token']=str_random(50);
        //     if(User::where("id",'=',$id)->update($data)){
        //         return redirect("/adminuser")->with("success","修改成功");
        //     }
        // }else{
        //     return redirect("/adminuser/$id/edit")->with('error','修改失败');
        // }
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

    //分配角色
    public function rolelist($id){
        // echo $id;
        // echo "这是分配角色操作";
        //获取管理员用户信息
        $info = DB::table("admin_users")->where("id","=",$id)->first();
        //获取所有的角色信息
        $role=DB::table("role")->get();
        //获取当前管理员已有的角色信息
        $data=DB::table("user_role")->where("uid",'=',$id)->get();
        if(count($data)){
            //遍历
            foreach($data as $v){
                $rids[]=$v->rid;
            }
            // echo "<pre>";
            // var_dump($rids);exit;
            //加载模板
            return view("Admin.User.role",['info'=>$info,'role'=>$role,'rids'=>$rids]);
        }else{
            return view("Admin.User.role",['info'=>$info,'role'=>$role,'rids'=>array()]);
        }

    }

    //保存角色
    public function saverole(Request $request){
        // echo "这是保存角色操作";
        //获取rids参数 选中的角色id
        $rids=$_POST['rids'];
        // dd($rids);
        //获取id
        $uid = $request->input('uid');
        // dd($uid);
        //删除当前用户已有的角色信息
        DB::table("user_role")->where("uid",'=',$uid)->delete();
        //遍历数组$rids
        foreach($rids as $v){
            //封装需要插入的数据
            $data['rid']=$v;
            $data['uid']=$uid;
            //执行插入
            DB::table("user_role")->insert($data);

        }
        return redirect("/adminuser")->with('success','角色分配成功');
    }

}
