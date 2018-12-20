<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
class AuthlistController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        // echo "this is index";
        $k = $request->input('keywords');
        $node = DB::table("node")->where('name','like','%'.$k.'%')->paginate(7);
        return view("Admin.Authlist.index",['node'=>$node,'request'=>$request->all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view("Admin.Authlist.add");
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
        // dd($data);
        if(DB::table("node")->insert($data)){
            return redirect("/authlist")->with('success','添加成功');
        }else{
            return redirect("/authlist")->with('error','添加失败');
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
        $node = DB::table("node")->where("id","=",$id)->first();
        return view("Admin.Authlist.edit",['node'=>$node]);
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
        $node=DB::table("node")->where("id","=",$id)->first();
        $data = $request->except(['_token','_method']);
        if(DB::table("node")->where("id","=",$id)->update($data)){
            return redirect("/authlist")->with('success','修改成功');
        }else{
            return redirect("/authlist/$id/edit")->with('error','修改失败');
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
        //执行删除
        if(DB::table("node")->where("id","=",$id)->delete()){
            return redirect("/authlist")->with('success','删除成功');
        }else{
            return redirect("/authlist")->with('success','删除失败');
        }
    }
}
