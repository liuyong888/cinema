@extends("Admin.AdminPublic.public")
@section('content')
<div class="row">
    <div class="col-md-12">
      <div class="panel panel-default">

        <div class="panel-title">
         电影列表
        </div>

        <div class="panel-body">
          <!-- <p>Add <code>.table-bordered</code> for borders on all sides of the table and cells.</p> -->
            <form action="/adminmovies" method="get" style="display: inline-block;">
              <label>Search:<input type="search" name="keywords" value="{{$request['keywords'] or ''}}" placeholder="" aria-controls="example0"></label>
              <input type="submit" class="btn btn-rounded btn-default btn-sm" value="搜索">
            </form>
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>中文名字</th>
                <th>英文名字</th>
                <th>电影图片</th>
                <th>电影类型</th>
                <th>地区</th>
                <th>时长</th>
                <th>上映时间</th>
                <th>上映地区</th>
                <th>想看</th>
                <th>票房</th>
                <th>电影评分</th>
                <th>简介</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
            @foreach($movies as $row)
              <tr>
                <td style="width: 60px">{{$row->mid}}</td>
                <td style="width: 100px">{{$row->zwname}}</td>
                <td style="width: 100px">{{$row->ywname}}</td>
                <!-- 如果在moviesController里没有添加上传路径,则可以写成
                <img src="./uploads/{{$row->tupian}}" width="80px">,自己添加路径
                -->
                <td style="width: 90px"><img src="./uploads/dianyingtupian/{{$row->tupian}}" width="80px"></td>
                <td style="width: 90px">{{$row->ftname}}</td>
                <td style="width: 90px">{{$row->faname}}</td>
                <td style="width: 60px">{{$row->shichang}}</td>
                <td style="width: 60px">{{$row->syshijian}}</td>
                <td style="width: 90px">{{$row->sydiqu}}</td>
                <td style="width: 60px">{{$row->xiangkan}}</td>
                <td style="width: 60px">{{$row->piaofang}}</td>
                <td style="width: 90px">{{$row->pingfen}}</td>
                <td style="width: 200px">{{mb_substr($row->jianjie,0,20).'...'}}</td>
                <td><a style="text-decoration:none;" href="/adminmovies/{{$row->mid}}/edit">
                <button type="button" class="btn btn-rounded btn-info btn-sm" title="修改"><font style="vertical-align: inherit;"><i class="fa fa-edit"></i>修改</font></button>
                </a>
                <form action="/adminmovies/{{$row->mid}}" method="post" style="display: inline-block;">
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
          {{$movies->appends($request)->render()}}
         </div>
        </div>

      </div>
    </div>
</div>
@endsection
@section('title','会员列表')