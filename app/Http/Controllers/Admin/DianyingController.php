<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
//导入DB
use DB;
//导入表单请求校验类
use App\Http\Requests\AdminDianyingaddinsert;
//导入config类
use Config;
class DianyingController extends Controller
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
        $movies=DB::table("movies")->join('film_type','movies.leixing','=','film_type.id')->join('film_area','movies.diqu','=','film_area.a_id')->select('film_type.id as ftid','film_type.name as ftname','film_area.a_id as faid','film_area.area_name as faname','movies.id as mid','movies.zwname','movies.ywname','movies.tupian','movies.leixing','movies.diqu','movies.shichang','movies.syshijian','movies.sydiqu','movies.xiangkan','movies.piaofang','movies.pingfen','movies.jianjie')->where('zwname','like','%'.$k.'%')->paginate(3);
        // dd($movies);
        return view("Admin.Dianying.index",['movies'=>$movies,'request'=>$request->all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //获取film_type数据表的数据
        $aa=DB::table('film_type')->get();
        //获取film_area数据表的数据
        $bb=DB::table('film_area')->get();
        //加载电影添加页面
        return view("Admin.Dianying.add",['aa'=>$aa,'bb'=>$bb]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
     //用创建好的AdminDianyingaddinsert校验类约束请求对象
    public function store(AdminDianyingaddinsert $request)
    {
        //获取所有参数
        // dd($request->all());
        // 获取需要入库的参数
        $data=$request->except(['_token','tupian']);
        // dd($data);
        //检测是否有文件上传
        // dd($request->hasFile('tupian'));
        if($request->hasFile('tupian')){
            //初始化名字
            $name=time()+rand(1,10000);
            //获取上传文件后缀
            $ext=$request->file("tupian")->getClientOriginalExtension();
            //获取上传文件原名(不用初始化文件名字时用)
            // $ext1=$request->file("tupian")->getClientOriginalName();
            // dd($ext);
            //移动到指定的目录下（提前在public下新建uploads目录）
            $request->file("tupian")->move(Config::get('app.uploads'),$name.".".$ext);
            //自定义变量(图片的路径)
            // $lujing='./uploads/moviestupian/';
            //把自定义的变量拼接在一起,若这样写 $tupian=$lujing.$name.".".$ext 就是把图片的路径页存入数据库里了
            // $tupian=$name.".".$ext;
            //把$tupian封装在$data 'tupian'是数据表里的字段
            // $data['tupian']=$tupian;
            // 把上传文件写到$data里
            $data['tupian']=$name.".".$ext;
            // dd($data);
             //执行添加
             // dd(DB::table("movies")->insert($data));
            if(DB::table("movies")->insert($data)){
                return redirect("/adminmovies")->with('success','添加成功');
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
        //获取film_type数据表的数据
        $aa=DB::table('film_type')->get();
        // dd($aa);
        //获取film_area数据表的数据
        $bb=DB::table('film_area')->get();
        // dd($bb);
        // echo $id;
        // 获取需要修改的数据
        $movies=DB::table('movies')->where('id','=',$id)->first();
        // dd($movies);
        // echo "<pre>";
        // var_dump($movies);exit;
        //加载修改页面
        return view("Admin.Dianying.edit",['movies'=>$movies,'aa'=>$aa,'bb'=>$bb]);
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
        //执行修改
        //查询需要修改的单条数据(因为是修改图片,要找到原来的图片的位置)
        $aa=DB::table('movies')->where('id','=',$id)->first();
        // dd($aa);
        //把查询到的第三条数据里的图片字段放到$tupian1变量里(原来的图片)
        $tupian1=$aa->tupian;
        //把请求除了_token  _method这两个参数之外的参数放到$data里
        $data=$request->except(['_token','_method']);
        //判断是否有文件上传
        if($request->hasFile('tupian')){
            //初始化名字
            $name=time()+rand(1,10000);
            //获取上传文件后缀
            $ext=$request->file("tupian")->getClientOriginalExtension();
            //获取上传文件原名(不用初始化文件名字时用)
            // $ext1=$request->file("tupian")->getClientOriginalName();
            // dd($ext);
            //移动到指定的目录下（提前在public下新建uploads目录）
            $cc=$request->file("tupian")->move(Config::get('app.uploads'),$name.".".$ext);
            // dd($cc);
            //自定义变量
            //把自定义的变量拼接在一起
            $tupian=$name.".".$ext;
            //把$tupian封装在$data 'tupian'是数据表里的字段
            $data['tupian']=$tupian;
            //跟新数据
            $bb=DB::table('movies')->where('id','=',$id)->update($data);
            if($bb){
                //删除原来的图片  $tupian1(原来的图片)
                unlink('./uploads/dianyingtupian/'.$tupian1);
                return redirect("/adminmovies")->with('success','修改成功');
            }else{
                return redirect("/adminmovies/{{$row->id}}/deit")->with('error','修改失败');
            }
        }else{
            //没有图片上传
            $data['tupian']=$aa->tupian;
             if(DB::table('movies')->where('id','=',$id)->update($data)){
                return redirect("/adminmovies")->with('success','修改成功');
            }else{
                return redirect("/adminmovies")->with('error','没有修改痕迹');
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
        // 获取需要删除的数据
        $info=DB::table('movies')->where('id','=',$id)->first();
        // 执行删除
        if(DB::table('movies')->where('id','=',$id)->delete()){
            unlink('./uploads/dianyingtupian/'.$info->tupian);
            return redirect("/adminmovies")->with('success','删除成功');
        }else{
            return redirect("/adminmovies")->with('error','删除失败');
        }
    }
}
