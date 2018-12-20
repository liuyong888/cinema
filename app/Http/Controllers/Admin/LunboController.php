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
        //获取pic
        $m='./uploads/homepic/'.$pic->pic;
        //获取参数
        $data=$request->except(['_token','_method']);
        // dd($data);
        if($request->hasFile('pic')){
            //获取后缀
            $ext=$request->file('pic')->getClientOriginalExtension();
            //随机文件名字
            $s=time()+rand(1,1000);
            $request->file('pic')->move(Config::get('app.uploadspic'),$s.".".$ext);
            $data['pic']=$s.".".$ext;
            //执行数据库的修改操作
            if(DB::table('homepic')->where('id','=',$id)->update($data)){
                //删除原图
                unlink($m);
                return redirect("/adminpic")->with('success','修改成功');
            }else{
                return redirect("/adminpic")->with('error','修改失败');
            }
        }else{
            //不修改图片
            // dd($data);
            $data['pic']=$pic->pic;
            if(DB::table('homepic')->where('id','=',$id)->update($data)){
                return redirect('/adminpic')->with('success','修改成功');
            }else{
                return redirect("/adminpic")->with('error','修改失败');
            }
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
        //获取需要删除的数据
        $pic = DB::table('homepic')->where('id','=',$id)->first();
        //获取pic
        $m='./uploads/homepic/'.$pic->pic;
        //执行删除
        if(DB::table('homepic')->where('id','=',$id)->delete()){
            //删除图片
            unlink($m);
            return redirect("/adminpic")->with('success','删除成功');
        }else{
            return redirect('/adminpic')->with('error','删除失败');
        }
    }
}
