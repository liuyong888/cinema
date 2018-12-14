<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

// 导入表单校验类
use App\Http\Requests\AdminCinemasAdd;
// 导入DB类
use DB;

class CinemasController extends Controller
{   
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    // 后台影院列表
    public function index()
    {
        // echo "列表";
        $data=DB::table("cinemas")->get();
        // dd($data);
        return view("Admin.Cinemas.index",['data'=>$data]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    // 添加影院 加载模板视图
    public function create()
    {
        // echo "添加";
        return view("Admin.Cinemas.add");        
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    // 入库
    public function store(AdminCinemasAdd $request)
    {
       // 上传图片验证
       $pic=CinemasController::uploads($request);
       // 获取需要入库的参数
        $data=$request->except(['_token']);
        $data['pic']=$pic;
        // var_dump($data);
       // 执行添加 
        if(DB::table("cinemas")->insert($data)){
            // 数据添加的成功同时  设置session信息 with可以把所有参数写到闪存里
            return redirect("/admincinemas")->with('success','添加成功');
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
    // 查看单条数据
    public function show($id)
    {
        //
        // echo $id;
        $info=DB::table('cinemas')->where("id","=",$id)->first();
        // dd($info);
        return view("Admin.Cinemas.edit",['info'=>$info]);
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
        $data=$request->except(['_token','_method']);
        // 有图片修改
        $oldPic=false;
        if(!empty($request->only('pic'))){   
            // 获取返回的图片名
            $pic=CinemasController::uploads($request);
            $data['pic']=$pic;
            $oldPic=DB::table('cinemas')->where("id","=",$id)->value('pic');
        }
        // 更新数据
        if(DB::table('cinemas')->where('id','=',$id)->update($data)){
            // 删除旧图片
            if($oldPic){
                unlink("./uploads/cinemas/$oldPic");                
            }
            // 修改成功
            return redirect('/admincinemas')->with('success','修改成功');
        }else{
            // 修改失败
            return redirect('/admincinemas')->with('error','修改失败');
            
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
    // 文件上传(图片)
    public function uploads($req)
    {       
        $file = $req->file('pic');
        if($file){      
            // var_dump($file);dd();
            // 文件是否上传成功
            if($file->isValid()){
                // 获取文件相关信息
                // $originalName = $file->getClientOriginalName(); // 文件原名
                $ext = $file->getClientOriginalExtension();     // 扩展名
                // $realPath = $file->getRealPath();   //临时文件的绝对路径
                $type = $file->getClientMimeType();     // image/jpeg
                // 上传文件
                $filename = date('YmdHis') . uniqid() . '.' . $ext;
                // CinemasController::$filename=$filename;
                if($file->move("./uploads/cinemas",$filename)){
                    return $filename;
                }
            }else{
                return '';
            }
        }else{
            return '';
        }
        
    }
}
