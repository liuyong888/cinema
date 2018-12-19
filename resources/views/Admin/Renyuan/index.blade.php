@extends("Admin.AdminPublic.public")
@section('content')
<div class="row">
    <div class="col-md-12">
      <div class="panel panel-default">

        <div class="panel-title">
         人员列表
        </div>

        <div class="panel-body">
          <!-- <p>Add <code>.table-bordered</code> for borders on all sides of the table and cells.</p> -->
            <form action="/adminrenyuan" method="get" style="display: inline-block;">
              <label>Search:<input type="search" name="keywords" value="{{$request['keywords'] or ''}}" placeholder="" aria-controls="example0"></label>
              <input type="submit" class="btn btn-rounded btn-default btn-sm" value="搜索">
            </form>
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>电影名字</th>
                <th>导演名字</th>
                <th>导演图片</th>
                <th>演员名字</th>
                <th>演员图片</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
            @foreach($renyuan as $row)
              <tr>
                <td>{{$row->rid}}</td>
                <td>{{$row->mzwname}}</td>
                <td>img{{$row->dyname}}</td>
                <td><img src="./uploads/dianyingrenyuantupian/{{$row->dy_tupian}}"></td>
                <td>{{$row->yyname}}</td>
                <td><img src="./uploads/dianyingrenyuantupian/{{$row->yy_tupian}}"></td>
                <td><a style="text-decoration:none;" href="/adminrenyuan/{{$row->rid}}/edit">
                <button type="button" class="btn btn-rounded btn-info btn-sm" title="修改"><font style="vertical-align: inherit;"><i class="fa fa-edit"></i>修改</font></button>
                </a>
                <form action="/adminrenyuan/{{$row->rid}}" method="post" style="display: inline-block;">
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
          {{$renyuan->appends($request)->render()}}
         </div>
        </div>

      </div>
    </div>
</div>
@endsection
@section('title','人员列表')