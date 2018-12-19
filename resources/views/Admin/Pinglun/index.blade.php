@extends("Admin.AdminPublic.public")
@section('content')
<div class="row">
    <div class="col-md-12">
      <div class="panel panel-default">

        <div class="panel-title">
         评论列表
        </div>

        <div class="panel-body">
          <!-- <p>Add <code>.table-bordered</code> for borders on all sides of the table and cells.</p> -->
            <form action="/adminpinglun" method="get" style="display: inline-block;">
              <label>Search:<input type="search" name="keywords" value="{{$request['keywords'] or ''}}" placeholder="" aria-controls="example0"></label>
              <input type="submit" class="btn btn-rounded btn-default btn-sm" value="搜索">
            </form>
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>ID</th>
                  <th>电影名字</th>
                  <th>用户名字</th>
                  <th>用户头像</th>
                  <th>评论时间</th>
                  <th>评论内容</th>
                  <th>评论状态</th>
                  <th>操作</th>
              </tr>
            </thead>
            <tbody>
            @foreach($pinglun as $row)
              <tr>
                <td>{{$row->cid}}</td>
                  <td>{{$row->mzwname}}</td>
                  <td>{{$row->user_name}}</td>
                  <td><img src="./uploads/dianyingyonghutupian/{{$row->user_touxiang}}"></td>
                  <td>{{$row->addtime}}</td>
                  <td>{{$row->content}}</td>
                  <td>{{$row->status}}</td>
                <td><a style="text-decoration:none;" href="/adminpinglun/{{$row->cid}}/edit">
                <button type="button" class="btn btn-rounded btn-info btn-sm" title="修改"><font style="vertical-align: inherit;"><i class="fa fa-edit"></i>修改</font></button>
                </a>
                <form action="/adminpinglun/{{$row->cid}}" method="post" style="display: inline-block;">
                {{csrf_field()}}
                {{method_field("DELETE")}}
                <button type="submit" class="btn btn-rounded btn-danger btn-sm" title="删除"><font style="vertical-align: inherit;"><i class="fa fa-trash"></i>删除</font></button>
                </form>
                </td>
              </tr>
            @endforeach
            </tbody>
          </table>
         <div class="dataTables_paginate paging_simple_numbers" id="example0_paginate" style="margin-left:45%;">
          {{$pinglun->render()}}
         </div>
        </div>

      </div>
    </div>
</div>
@endsection
@section('title','评论列表')