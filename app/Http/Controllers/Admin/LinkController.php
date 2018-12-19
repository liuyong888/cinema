<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Hash;
class LinkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $k=$request->input('keywords');
        $link=DB::table("links")->where('name','like','%'.$k.'%')->paginate(5);
        // dd($link);
        return view("Admin.Link.index",['link'=>$link,'request'=>$request->all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view("Admin.Link.add");
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
        $data['addtime']=time();
        $data['status']=0;
        if(DB::table('links')->insert($data)){
            return redirect("/adminlink")->with('success','添加成功');
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
        $link = DB::table("links")->where("id","=",$id)->first();
        return view("Admin.Link.edit",['link'=>$link]);
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
        if(DB::table("links")->where("id","=",$id)->update($data)){
            return redirect("/adminlink")->with('success','修改成功');
        }else{
            return redirect("/adminlink/$id/edit")->with('error','修改失败');
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
         if(DB::table('links')->where("id","=",$id)->delete()){
            return redirect("/adminlink")->with("success",'删除成功');
        }else{
            return redirect("/adminlink")->with('error','删除失败');
        }
    }
}
