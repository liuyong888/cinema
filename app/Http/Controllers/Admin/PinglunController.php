<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
//导入DB
use DB;
//导入config类
use Config;
//导入Pinglun模型类
use App\Models\Pinglun;
class PinglunController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // //通过控制器调度模型
        // $data=Pinglun::get();
        //获取数据表数据
        $pinglun=DB::table('comment')->join('movies','comment.m_id','=','movies.id')->select('movies.id as mid','movies.zwname as mzwname','comment.id as cid','comment.user_name','comment.user_touxiang','comment.m_id','comment.addtime','comment.content','comment.status')->paginate(3);
        // dd($pinglun);
        //加载电影评论页面
        return view("Admin.Pinglun.index",['pinglun'=>$pinglun]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {   //获取movies表数据
        $aa=DB::table('movies')->get();
        // dd($aa);
        //加载添加页面
        return view("Admin.Pinglun.add",['aa'=>$aa]);
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
        $data=$request->except(['_token','user_touxiang','addtime']);
        //检测是否有文件上传
        if($request->hasFile('user_touxiang')){
            //文件初始化
            $name=time()+rand(1,10000);
            //获取文件后缀
            $ext=$request->file('user_touxiang')->getClientOriginalExtension();
            //指定文件上传目录
            $request->file('user_touxiang')->move(Config::get('app.uploads2'),$name.".".$ext);
            //把上传文件写到$data里
            $data['user_touxiang']=$name.".".$ext;
            $data['addtime']=time();
            //执行添加
            if(DB::table('comment')->insert($data)){
                return redirect('/adminpinglun')->with('success','添加成功');
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
}
