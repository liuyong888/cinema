<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Config;
class LunboController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $pic = DB::table("homepic")->get();
        return view("Admin.Lunbo.index",['pic'=>$pic]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view("Admin.Lunbo.add");
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
        $data=$request->except('_token');
        //图片上传
        if($request->hasFile('pic')){
            // 获取上传图片后缀
            $ext = $request->file('pic')->getClientOriginalExtension();
            //随机图片的名字
            $s = time()+rand(1,1000);
            //把上传的图片移动到指定的位置下
            $request->file('pic')->move(Config::get('app.uploadspic'),$s.".".$ext);
            //处理
            $data['pic']=$s.".".$ext;
            // dd($data);
            //执行插入数据库的操作
            if(DB::table('homepic')->insert($data)){
                return redirect("/adminpic")->with('success','添加成功');
            }else{
                return redirect("/adminpic")->with('error','添加失败');
            }
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
        $pic = DB::table('homepic')->where("id","=",$id)->first();
        return view("Admin.Lunbo.edit",['pic'=>$pic]);
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
        // dd($request->all());
        $pic = DB::table('homepic')->where("id","=",$id)->first();
        //获取参数
        $data=$request->except(['_token','_method']);
        if($request->hasFile('pic')){
            //获取后缀
           
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
        //
    }
}
