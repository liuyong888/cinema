<?php

namespace App\Http\Controllers\Home;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
//导入DB
use DB;
class RegisterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //加载前台注册页面
        return view("Home.Register.register");
    }

     public function checkphone(Request $request)
    {   
        //获取附加参数(注册的手机号码)
        $p=$request->input('p');
        // echo $p;
        // 获取member数据表里phone这一列数据 数据格式:对象格式
        $phone=DB::table('member')->pluck('phone');
        //给一个新数组
        $arr=array();
        //把对象格式转换为数组
        foreach($phone as $k=>$v){
             //把数据放到arr数组里
             $arr[$k]=$v;
        }
         //把数组返回,以json形式 echo输出不了数组
         // echo json_encode($arr);
         // 对比
         if(in_array($p,$arr)){
            echo 1;//手机号已经注册
         }else{
            echo 0;//手机号可以注册
         }
    }

    public function checkmima(Request $request)
    {   
        //获取附加参数(注册的密码)
        $mm=$request->input('mm');
        // echo $mm;
        //获取附加参数(注册的重复密码)
        $cfm=$request->input('cfm');
        // echo $cfm;
        //对比
        if($mm=='' || $cfm==''){            
            echo 2;//密码为空
        }elseif($mm==$cfm){            
            echo 1;//密码一致
        }else{
            echo 0;//密码不一致
           
        }
    }

    public function sendphone(Request $request)
    {
        //获取附加参数(需要验证码的手机号)
        $pp=$request->input('pp');
        // echo $pp;
        // 调用短信接口
        sendphone($pp);
    }

    public function checkcode(Request $request)
    {
        //获取输入的验证码
        $code=$request->input('code');
        if(isset($_COOKIE['fcode']) && !empty($code)){
            //手机号接收到的验证码
            $fcode=$request->cookie('fcode');
            //做对比
            if($fcode==$code){
                echo 1;//验证码一致
            }else{
                echo 2;//验证码不一致
            }
        }else if(empty($code)){
            echo 3;//验证码为空
        }else{
            echo 4;//验证码过期
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request->all());
        //获取需要的参数
        $data=$request->only(['phone','password']);
        //密码加密
        $data['password']=Hash:make($data['password']);
        //执行添加
        if(DB::table('member')->insert($data)){
            return redirect("/login/create")->with('success','注册成功');
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
