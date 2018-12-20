@extends("Admin.AdminPublic.public")
@section('content')
<div class="row">
    <div class="col-md-12">
      <div class="panel panel-default">

        <div class="panel-title">
          电影地区列表
          <a class="btn" href="/filmarea/create">添加</a>
        </div>

        <div class="panel-body">
          <!-- <p>Add <code>.table-bordered</code> for borders on all sides of the table and cells.</p> -->
          <form action="/filmarea" method="get">
            <label>Search:<input type="search" name="keywords" value="{{$request['keywords'] or ''}}" placeholder="" aria-controls="example0"></label>
            <input type="submit" class="btn btn-rounded btn-default btn-sm" value="搜索">
          </form>
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <td>ID</td>
                <td>电影地区</td>
                <td>状态</td>
                <td>操作</td>
              </tr>
            </thead>
            <tbody>
              @foreach($area as $row)
              <tr>
                <td>{{$row->a_id}}</td>
                <td>{{$row->area_name}}</td>                
                <td>{{$row->status==0?'显示':'隐藏'}}</td>                
                <td style="width: 200px;">
                    <a style="text-decoration:none;" href="/filmarea/{{$row->a_id}}/edit">
                      <button type="button" class="btn btn-rounded btn-info btn-sm" title="修改"><font style="vertical-align: inherit;"><i class="fa fa-edit"></i>修改</font></button>
                    </a>
                    <form action="/filmarea/{{$row->a_id}}" method="post" style="display: inline-block;">
                        {{csrf_field()}}
                        {{method_field("DELETE")}}
                        <button type="submit" class="btn btn-rounded btn-danger btn-sm" title="删除"><font style="vertical-align: inherit;"><i class="fa fa-trash"></i>删除</font></button>
                    </form>
                </td>
              </tr>
              @endforeach
            </tbody>
          </table>
        </div>
        <div class="dataTables_paginate paging_simple_numbers" id="example0_paginate" style="margin-left:45%;">
        {{$area->appends($request)->render()}}
        </div>
      </div>
    </div>
</div>
@endsection
@section('title','电影地区列表')