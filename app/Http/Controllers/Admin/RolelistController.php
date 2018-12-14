<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use DB;
use Hash;
class RolelistController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        // echo "this is Rolelist";
        //获取角色信息
        $role=DB::table("role")->get();
        //加载模板
        return view("Admin.Rolelist.index",['role'=>$role]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //加载模板
        return view("Admin.Rolelist.add");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        // dd($request->all());
        //移除不需要入库的参数
        $data=$request->except(['_token']);
        if(DB::table("role")->insert($data)){
            return redirect("/rolelist")->with('success','添加成功');
        }else{
            return back()->with('error')->with('error','添加失败');
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
        $role = DB::table("role")->where("id","=",$id)->first();
        //加载模板
        return view("Admin.Rolelist.edit",['role'=>$role]);
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
        $role = DB::table("role")->where("id",'=',$id)->first();
        // dd($request->all());
        //获取修改后的数据
        $data = $request->except(['_token','_method']);
        if(DB::table("role")->where("id","=",$id)->update($data)){
            return redirect("/rolelist")->with('success','修改成功');
        }else{
            return redirect("/rolelist/$id/edit")->with('error','修改失败');
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //执行删除
        if(DB::table("role")->where("id","=",$id)->delete()){
            return redirect("/rolelist")->with('success','删除成功');
        }else{
            return redirect("/rolelist")->with('success','删除失败');
        }

    }

    //分配权限
    public function auth($id){
        // echo "this is auth";
        //获取当前角色信息
        $role = DB::table("role")->where("id","=",$id)->first();
        //获取所有的权限信息
        $auth=DB::table("node")->get();
        //获取当前角色已有的权限信息
        $data=DB::table("role_node")->where("rid","=",$id)->get();
        if(count($data)){
            //遍历
            foreach($data as $v){
                $nids[]=$v->nid;
            }
             //加载模板
             return view("Admin.Rolelist.auth",['role'=>$role,'auth'=>$auth,'nids'=>$nids]);
        }else{
             return view("Admin.Rolelist.auth",['role'=>$role,'auth'=>$auth,'nids'=>array()]);
        }
    }

    //保存权限
    public function saveauth(Request $request){
        //获取分配的权限信息
        $nid=$_POST['nids'];
        // echo "<pre>";
        // var_dump($nid);
        //获取角色id
        $rid=$request->input('rid');
        //删除当前角色已有的权限信息
        DB::table("role_node")->where("rid","=",$rid)->delete();
        //遍历$nid
        foreach($nid as $v){
            //封装需要插入的数据
            $data['rid']=$rid;
            $data['nid']=$v;
            //执行插入
            DB::table("role_node")->insert($data);
        }
        //跳转
        return redirect("/rolelist")->with('success','权限分配成功');
    }
}
