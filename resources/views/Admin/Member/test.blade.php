@extends("Admin.AdminPublic.public")
@section('content')
<html>
<head>
  <script type="text/javascript" src="/static/Admin/js/jquery-1.8.3.min.js"></script>
</head>
  <body>
      <div class="row">
    <div class="col-md-12">
      <div class="panel panel-default">

        <div class="panel-title">
          会员列表
        </div>

        <div class="panel-body">
          <div id="uid">
            
          
          <!-- <p>Add <code>.table-bordered</code> for borders on all sides of the table and cells.</p> -->
            <form action="/adminmember" method="get" style="display: inline-block;">
              <label>Search:<input type="search" name="keywords" value="{{$request['keywords'] or ''}}" placeholder="" aria-controls="example0"></label>
              <input type="submit" class="btn btn-rounded btn-default btn-sm" value="搜索">
            </form>
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <td>ID</td>
                <td>会员名</td>
                <td>头像</td>
                <td>手机号</td>
                <td>邮箱</td>
                <td>注册时间</td>
                <td>操作</td>
              </tr>
            </thead>
            <tbody>
            @foreach($data as $row)
              <tr>
                <td>{{$row->id}}</td>
                <td>{{$row->name}}</td>
                <td style="padding: 0px;"><img src="{{$row->pic}}" style="width:67px;height:60px;"></td>
                <td>{{$row->phone}}</td>
                <td>{{$row->email}}</td>
                <td>{{date('Y年m月d日',$row->addtime)}}</td>
                <td>
                    <a style="text-decoration:none;" href="/adminmemcheck/{{$row->id}}">
                        <button type="button" class="btn btn-rounded btn-default btn-sm" title="查看详情"><font style="vertical-align: inherit;">查看详情</font></button>
                      </a>
                      <a style="text-decoration:none;" href="/adminmember/{{$row->id}}/edit">
                        <button type="button" class="btn btn-rounded btn-info btn-sm" title="修改信息"><font style="vertical-align: inherit;"><i class="fa fa-edit"></i>修改</font></button>
                      </a>
                      <form action="/adminmember/{{$row->id}}" method="post" style="display: inline-block;">
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
      </div>
    </div>
</div>
</body>
<script>
  // alert($);
  function page(page){
    //Ajax
    $.get("/adminmember",{page:page},function(data){
      // alert(data);
      //赋值给id值为udi的div
      $("#uid").html(data);
    });
  }
</script>
</html>


@endsection
@section('title','会员列表')