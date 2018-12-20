<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
class AreaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $area=DB::table("film_area")->paginate(5);
        return view("Admin.Area.index",['area'=>$area,'request'=>$request->all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view("Admin.Area.add");
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
        $data=$request->except(['_token']);
        if(DB::table("film_area")->insert($data)){
            return redirect("/filmarea")->with('success','添加成功');
        }else{
            return redirect("/filmarea")->with('error','添加失败');
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
        //获取需要修改数据 
        $area = DB::table("film_area")->where("a_id",'=',$id)->first();
        return view("Admin.Area.edit",['area'=>$area]);
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
        $data=$request->except(['_token','_method']);
        if(DB::table("film_area")->where("a_id","=",$id)->update($data)){
            return redirect('/filmarea')->with('success','修改成功');
        }else{
            return redirect("/filmarea")->with('error','修改失败');
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
        if(DB::table("film_area")->where("a_id","=",$id)->delete()){
            return redirect("/filmarea")->with('success','删除成功');
        }else{
            return redirect("/filmarea")->with('error','删除失败');
        }
    }
}
