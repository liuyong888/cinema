<?php

namespace App\Http\Controllers\Admin;
// 导入表单检验类
// use App\Http\Requests\AdminRelssadd;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
class RelssController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {	
    	$k=$request->input('keywords');
    	$ks=$request->input('keywordss');
    	$data=DB::table('relss')->where('m_name','like',"%".$k."%")->where('c_name','like',"%".$ks."%")->get();
    	// dd($data);
    	return view('Admin.Relss.index',['data'=>$data,'request'=>$request->all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    	// 查询电影
    	$m_name=DB::table('movies')->select('id','zwname')->get();
    	// 查询播放厅
    	$h_name=DB::table('hall')->select('id','HallName')->get();
    	// 查询影院
    	$c_name=DB::table('cinemas')->select('id','name')->get();    	
    	// dd($c_name);
        return view("Admin.Relss.add",['m_name'=>$m_name,'h_name'=>$h_name,'c_name'=>$c_name]);        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    // 添加场次
    public function store(Request $request)
    {
    	//     	
        $movie=explode(',',$request->input('movie'));
        $data['m_id']=$movie[0];
        $data['m_name']=$movie[1];
        $data['m_time']=DB::table('movies')->where('id','=',$movie[0])->value('shichang');

        $cinema=explode(',',$request->input('cinema'));
        $data['c_id']=$cinema[0];
        $data['c_name']=$cinema[1]; 

        $hall=explode(',',$request->input('hall'));
        $data['h_id']=$hall[0];
        $data['h_name']=$hall[1];
        $data['seating']=DB::table('hall')->where('id','=',$hall[0])->value('HallSeating');

        $data['m_price']=$request->input('price');
        $data['play_type']=$request->input('play_type');
        $data['time']=$request->input('time');
        $data['start_time']=$request->input('start_time');
        $data['end_time']=$request->input('end_time');

        $id=DB::table('relss')->insertGetid($data);
        // dd($id);
        // var_dump($data);
        // 添加入场次与影院关联表        
        if($id){        	        	
        	$datas['cinemas_id']=$data['c_id'];
        	$datas['relss_id']=$id;
        	// dd($datas);
        	if(DB::table('cr_guanxi')->insert($datas)){
        		// echo "添加成功";        		
	        	return redirect("/adminrelss")->with("success","添加成功");
        	}
        }else{
        	return redirect("/adminrelss/create")->with("error","添加失败");        	
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
        // 查询电影
    	$m_name=DB::table('movies')->select('id','zwname')->get();
    	// 查询播放厅
    	$h_name=DB::table('hall')->select('id','HallName')->get();
    	// 查询影院
    	$c_name=DB::table('cinemas')->select('id','name')->get();

    	$info=DB::table('relss')->where('id','=',$id)->first();
    	// dd($info);
    	return view("Admin.Relss.edit",['m_name'=>$m_name,'h_name'=>$h_name,'c_name'=>$c_name,'info'=>$info]);  

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // 修改场次
    public function update(Request $request, $id)
    {
        // echo $id;
        $movie=explode(',',$request->input('movie'));
        $data['m_id']=$movie[0];
        $data['m_name']=$movie[1];
        $data['m_time']=DB::table('movies')->where('id','=',$movie[0])->value('shichang');

        $cinema=explode(',',$request->input('cinema'));
        $data['c_id']=$cinema[0];
        $data['c_name']=$cinema[1]; 

        $hall=explode(',',$request->input('hall'));
        $data['h_id']=$hall[0];
        $data['h_name']=$hall[1];
        $data['seating']=DB::table('hall')->where('id','=',$hall[0])->value('HallSeating');

        $data['m_price']=$request->input('price');
        $data['play_type']=$request->input('play_type');
        $data['time']=$request->input('time');
        $data['start_time']=$request->input('start_time');
        $data['end_time']=$request->input('end_time');
        // dd($data);
        if(DB::table('relss')->where('id','=',$id)->update($data)){
        	return redirect("/adminrelss")->with("success","修改成功");
        }else{
        	return back()->with("error","修改失败");
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
    public function ajaxdel(Request $request){
    	// echo "del";
    	// 判断是否为ajax请求
    	if($request->ajax()){
    		// 获取id
    		$id=$request->get("id");
    		// echo $id;
    		$c_id=DB::table('relss')->where("id","=",$id)->value('c_id');
    		// echo $c_id;
    		// dd($c_id);
    		// 执行删除
    		// 删除relss表数据
    		$a=DB::table('relss')->where('id','=',$id)->delete();
    		// 删除cr_guanxi表数据
    		$b=DB::table('cr_guanxi')->where('cinemas_id','=',$c_id)->where('relss_id','=',$id)->delete();
    		if($a && $b){
    			echo 1;
    		}    		
    	}
    }
}
