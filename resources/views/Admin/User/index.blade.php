@extends("Admin.AdminPublic.public")
@section('content')
<div class="row">
    <div class="col-md-12">
      <div class="panel panel-default">

        <div class="panel-title">
          管理员列表
        </div>

        <div class="panel-body">
          <!-- <p>Add <code>.table-bordered</code> for borders on all sides of the table and cells.</p> -->
          <!-- <div id="example0_filter" class="dataTables_filter"> -->
                <form action="/adminuser" method="get">
                  <label>Search:<input type="search" name="keywords" value="{{$request['keywords'] or ''}}" placeholder="" aria-controls="example0"></label>
                  <input type="submit" class="btn btn-rounded btn-default btn-sm" value="搜索">
                </form>
              <!-- </div> -->
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <td>ID</td>
                <td>登录名</td>
                <td style="width:300px;">操作</td>
              </tr>
            </thead>
            <tbody>
            @foreach($user as $row)
              <tr>
                <td>{{$row->id}}</td>
                <td>{{$row->name}}</td>
                <td>
                    <a style="text-decoration:none;" href="/adminrole/{{$row->id}}">
                        <button type="button" class="btn btn-rounded btn-default btn-sm" title="分配角色"><font style="vertical-align: inherit;">分配角色</font></button>
                      </a>
                      <a style="text-decoration:none;" href="/adminuser/{{$row->id}}/edit">
                        <button type="button" class="btn btn-rounded btn-info btn-sm" title="修改信息"><font style="vertical-align: inherit;"><i class="fa fa-edit"></i>修改信息</font></button>
                      </a>
                      <form action="/adminuser/{{$row->id}}" method="post" style="display: inline-block;">
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
        <!-- <div class="dataTables_info" id="example0_info" role="status" aria-live="polite">
         Showing 1 to 10 of 31 entries
        </div> -->
        <div class="dataTables_paginate paging_simple_numbers" id="example0_paginate" style="margin-left:45%;">
        {{$user->appends($request)->render()}}
        </div>
      </div>
    </div>
</div>
@endsection
@section('title','管理员列表')