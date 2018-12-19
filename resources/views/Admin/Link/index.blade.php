@extends("Admin.AdminPublic.public")
@section('content')
<div class="row">
    <div class="col-md-12">
      <div class="panel panel-default">

        <div class="panel-title">
          友情链接列表
        </div>

        <div class="panel-body">
          <!-- <p>Add <code>.table-bordered</code> for borders on all sides of the table and cells.</p> -->
          <form action="/adminlink" method="get">
            <label>Search:<input type="search" name="keywords" value="{{$request['keywords'] or ''}}" placeholder="" aria-controls="example0"></label>
            <input type="submit" class="btn btn-rounded btn-default btn-sm" value="搜索">
          </form>
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <td>ID</td>
                <td>网站名称</td>
                <td>网站地址</td>
                <td>申请人</td>
                <td>联系方式</td>
                <td>状态</td>
                <td>注册时间</td>
                <td>操作</td>
              </tr>
            </thead>
            <tbody>
            @foreach($link as $row)
              <tr>
                <td>{{$row->id}}</td>
                <td>{{$row->name}}</td>
                <td>{{$row->site}}</td>
                <td>{{$row->username}}</td>
                <td>{{$row->contact}}</td>
                <td>{{$row->status}}</td>
                <td>{{date('Y年m月d日',$row->addtime)}}</td>
                <td>
                    <a style="text-decoration:none;" href="/adminlink/{{$row->id}}/edit">
                      <button type="button" class="btn btn-rounded btn-info btn-sm" title="修改信息"><font style="vertical-align: inherit;"><i class="fa fa-edit"></i>修改</font></button>
                    </a>
                    <form action="/adminlink/{{$row->id}}" method="post" style="display: inline-block;">
                        {{csrf_field()}}
                        {{method_field("DELETE")}}
                        <button type="submit" class="btn btn-rounded btn-danger btn-sm" title="删除此会员"><font style="vertical-align: inherit;"><i class="fa fa-trash"></i>删除</font></button>
                    </form>
                </td>
              </tr>
            @endforeach
            </tbody>
          </table>
        </div>
        <div class="dataTables_paginate paging_simple_numbers" id="example0_paginate" style="margin-left:45%;">
          {{$link->appends($request)->render()}}
          </div>
      </div>
    </div>
</div>
@endsection
@section('title','友情链接列表')