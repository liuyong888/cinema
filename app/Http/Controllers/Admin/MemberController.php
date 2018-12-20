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
        //获取数据总条数
        $tot=DB::table('member')->count();
        // dd($tot);
        //支付宝每页显示的数据条数
        $rev=3;
        //获取总页数
        $sums=ceil($tot/$rev);
        //获取附加参数值
        $page=$request->input('page');
        // dd($page);
        //判断$page是否为空
        if(empty($page)){
            $page=1;
        }
        //偏移量
        $offset=($page-1)*$rev;
        //准备sql语句
        $sql = "select * from member m,member_info i where m.id=i.m_id limit $offset,$rev";
        //执行sql
        $data=DB::select($sql);
        // dd($data);
        //判断当前请求是否为Ajax请求
        if($request->ajax()){
            echo $page;
            //加载一个独立的模板界面
            return view("Admin.Member.test",['data'=>$data]);
        }
        for($i=1;$i<=$sums;$i++){
            $pp[$i]=$i;
        }
        // dd($pp);
        //获取搜索关键词
        $k = $request->input('keywords');
        //获取列表数据 
        $member = DB::table("member")->where("name","like","%".$k."%")->join('member_info','member.id','=','member_info.m_id')->paginate(3);
        // dd($member);
        return view("Admin.Member.index",['member'=>$member,'request'=>$request->all(),'pp'=>$pp,'data'=>$data]);
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
        $data['status']=0;
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
        //获取pic
        $m='./uploads/memberinfo/'.$member->pic;
        // dd($request->all());
        $data=$request->except(['_token','_method']);

        if($request->hasFile('pic')){
            //获取后缀
            $ext=$request->file('pic')->getClientOriginalExtension();
            //随机文件名字
            $s=time()+rand(1,1000);
            $request->file('pic')->move(Config::get('app.uploadsinfo'),$s.".".$ext);
            $data['pic']=$s.".".$ext;
            //执行数据库的修改操作
            if(DB::table('memberinfo')->where('id','=',$id)->update($data)){
                //删除原图
                unlink($m);
                return redirect("/adminmember")->with('success','修改成功');
            }else{
                return redirect("/adminmember")->with('error','修改失败');
            }
        }else{
            $data['pic']=$member->pic;
            if(DB::table("member_info")->where("id",'=',$id)->update($data)){
                return redirect("/adminmember")->with('success','修改成功');
            }else{
                return redirect("/adminmember")->with('error','修改失败');
            }
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
