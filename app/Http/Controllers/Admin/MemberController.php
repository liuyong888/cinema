<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use DB;
use Hash;
use App\Models\Member;
class MemberController extends Controller
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
        //获取列表数据 
        $member = DB::table("member")->where("name","like","%".$k."%")->paginate(3);
        return view("Admin.Member.index",['member'=>$member,'request'=>$request->all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view("Admin.Member.add");
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
        $data=$request->except(['repassword','_token']);
        $data['addtime']=time();
        $data['password']=Hash::make($data['password']);
        if(DB::table('member')->insert($data)){
            return redirect("/adminmember")->with('success','添加成功');
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
        $member = DB::table("member_info")->join('member','member_info.m_id','=','member.id')->first();
        return view("Admin.Member.edit",['member'=>$member]);
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
        $member = DB::table("member_info")->where("id",'=',$id)->first();
        // dd($request->all());
        $data=$request->except(['_token','_method','pic']);
        if(DB::table("member_info")->where("id",'=',$id)->update($data)){
            return redirect("/adminmember")->with('success','修改成功');
        }else{
            return redirect("/adminmember/$id/edit")->with('error','修改失败');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // 删除数据
    public function destroy($id)
    {
        //
        // echo "this is delete".$id;
         if(DB::table('member')->where("id","=",$id)->delete()){
            return redirect("/adminmember")->with("success",'删除成功');
        }else{
            return redirect("/adminmember")->with('error','删除失败');
        }
    }

    //查看会员信息详情
    public function check($id){
        // echo $id;
        $member = DB::table("member_info")->join('member','member_info.m_id','=','member.id')->first();
        // dd($member);
        return view("Admin.Member.check",['member'=>$member]);
    }
}
