<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
//导入DB
use DB;
//导入Cinfig
use Config;
class RenyuanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {   
        //获取搜索的关键词
        $k=$request->input('keywords');
        //获取列表数据
        $renyuan=DB::table('renyuan')->join('movies','renyuan.m_id','=','movies.id')->select('movies.id as mid','movies.zwname as mzwname','renyuan.id as rid','renyuan.m_id','renyuan.dyname','renyuan.dy_tupian','renyuan.yyname','renyuan.yy_tupian')->where('m_id','like','%'.$k.'%')->paginate(3);
        // dd($renyuan);
        return view("Admin.Renyuan.index",['renyuan'=>$renyuan,'request'=>$request->all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //获取数据表movies里数据
        $aa=DB::table('movies')->get();
        // dd($aa);
        //加载添加页面
        return view("Admin.Renyuan.add",['aa'=>$aa]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //获取所有参数
        // dd($request->all());
        // 获取需要入库的参数
        $data=$request->except(['_token','yytupian','dytupian']);
        //检测是否有文件上传
        if($request->hasFile('dy_tupian')){
            //初始化文件名
            $name=time()+rand(1,10000);
            //获取上传文件后缀
            $ext=$request->file("dy_tupian")->getClientOriginalExtension();
            //移动到指定的目录下（提前在public下新建uploads1目录）
            $request->file("dy_tupian")->move(Config::get('app.uploads1'),$name.".".$ext);
            //把上传文件写到$data里
            $data['dy_tupian']=$name.".".$ext;
        }
        //检测是否有文件上传
        if($request->hasFile('yy_tupian')){
            //初始化文件名
            $name=time()+rand(1,10000);
            //获取上传文件后缀
            $ext=$request->file("yy_tupian")->getClientOriginalExtension();
            //移动到指定的目录下（提前在public下新建uploads1目录）
            $request->file("yy_tupian")->move(Config::get('app.uploads1'),$name.".".$ext);
            //把上传文件写到$data里
            $data['yy_tupian']=$name.".".$ext;
        }
        // dd($data);
        //执行添加
        if(DB::table('renyuan')->insert($data)){
            return redirect("/adminrenyuan")->with('success','添加成功');
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
        // echo $id;
        // 获取需要修改的数据
        $renyuanxiugai=DB::table('renyuan')->where('id','=',$id)->first();
        // dd($renyuanxiugai);
        //加载修改页面
        return view("Admin.Renyuan.edit",['renyuanxiugai'=>$renyuanxiugai]);
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
        // dd($request->all());
        // 查询需要修改的数据
        $aa=DB::table('renyuan')->where('id','=',$id)->first();
        // dd($aa);
        // //把请求除了_token  _method这两个参数之外的参数放到$data里
        $data=$request->except(['_token','_method']);
        // 需要修改图片
        //判断是否有文件上传
        if($request->hasFile('dy_tupian')){
            //文件初始化
            $name=time()+rand(1,10000);
            //获取文件后缀名
            $ext=$request->file('dy_tupian')->getClientOriginalExtension();
            //把文件移动到指定目录下
            $request->file('dy_tupian')->move(Config::get('app.uploads1'),$name.".".$ext);
            //把文件写到$data里
            $data['dy_tupian']=$name.".".$ext;
            //更新数据
            $dd=DB::table('renyuan')->where('id','=',$id)->update($data);
            //执行修改
            if($dd){
                //删除原来的图片
                unlink('./uploads/dianyingrenyuantupian/'.$aa->dy_tupian);
                return redirect('/adminrenyuan')->with('success','修改成功');
            }else{
                return redirect('/adminrenyuan/{{$roe->id}}')->with('error','修改失败');
            }
        }else{
            //不修改图片
            $data['dy_tupian']=$aa->dy_tupian;
            if(DB::table('renyuan')->where('id','=',$id)->update($data)){
                return redirect('/adminrenyuan')->with('success','修改成功');
            }else{
                return redirect('/adminrenyuan/{{$roe->id}}')->with('error','修改失败');
            }
        }
        //判断是否有文件上传
        if($request->hasFile('yy_tupian')){
            //文件初始化
            $name=time()+rand(1,10000);
            //获取文件后缀名
            $ext=$request->file('yy_tupian')->getClientOriginalExtension();
            //把文件移动到指定目录下
            $request->file('yy_tupian')->move(Config::get('app.uploads1'),$name.".".$ext);
            //把文件写到$data里
            $data['yy_tupian']=$name.".".$ext;
            //更新数据
            $dd=DB::table('renyuan')->where('id','=',$id)->update($data);
            //执行修改
            if($dd){
                //删除原来的图片
                $data['yy_tupian']=$aa->yy_tupian;
                unlink('./uploads/dianyingrenyuantupian/'.$aa->yy_tupian);
                return redirect('/adminrenyuan')->with('success','修改成功');
            }else{
             return redirect('/adminrenyuan')->with('error','修改失败');
            }
        }else{
            //没有图片上传
            if(DB::table('renyuan')->where('id','=',$id)->update($data)){
                return redirect('/adminrenyuan')->with('success','修改成功');
            }else{
                return redirect('/adminrenyuan')->with('error','修改失败');
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
        // echo $id;
        // 获取删除的数据
        $info=DB::table('renyuan')->where('id','=',$id)->first();
        // dd($info);
        // 执行删除
        if(DB::table('renyuan')->where('id','=',$id)->delete()){
            unlink('./uploads/dianyingrenyuantupian/'.$info->dy_tupian);
            unlink('./uploads/dianyingrenyuantupian/'.$info->yy_tupian);
            return redirect('/adminrenyuan')->with('success','删除成功');
        }else{
            return redirect('/adminrenyuan')->with('error','删除失败');
        }
    }
}
