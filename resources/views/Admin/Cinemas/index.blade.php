@extends("Admin.AdminPublic.public")
@section('content')
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <!-- plugins:css -->
  <link rel="stylesheet" href="/static/admins/vendors/iconfonts/mdi/css/materialdesignicons.min.css">
  <link rel="stylesheet" href="/static/admins/vendors/css/vendor.bundle.base.css">
  <!-- endinject -->
  <!-- plugin css for this page -->
  <link rel="stylesheet" href="/static/admins/node/node_modules/jqvmap/dist/jqvmap.min.css" />
  <!-- End plugin css for this page -->
  <!-- inject:css -->
  <link rel="stylesheet" href="/static/admins/node/css/style.css">
  <!-- endinject -->
<div class="page-header">
      <ol class="breadcrumb">
        <li><a href="index.html">Dashboard</a></li>
        <li><a href="#">Tables</a></li>
        <li class="active">Data Tables</li>
      </ol>
</div>
<div class="container-padding container-widget">
<div class="row">
<div class="col-md-12">
      <div class="panel panel-default">
        <div class="panel-title">影院列表</div>
        <div class="panel-body table-responsive">
            <div id="example0_wrapper" class="dataTables_wrapper"><!-- <div class="dataTables_length" id="example0_length"><label>Show123<select name="example0_length" aria-controls="example0" class=""><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div> --><div id="example0_filter" class="dataTables_filter"><form action="/admincinemas" method="get"><label>Search:<input type="search" name="keywords" value="{{$request['keywords'] or ''}}" placeholder="" aria-controls="example0"></label><input type="submit" class="btn" value="搜索"></div></form><table id="example0" class="table display dataTable" role="grid" aria-describedby="example0_info">
                <thead> 
                  <th>ID</th>
                  <th>影院名</th>
                  <th>影院图片</th>
                  <th>影院地址</th>
                  <th>联系电话</th>
                  <th>操作</th>
                  <!--  <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="example0" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Name: activate to sort column descending" style="width: 158px;">Name</th><th class="sorting" tabindex="0" aria-controls="example0" rowspan="1" colspan="1" aria-label="Position: activate to sort column ascending" style="width: 263px;">Position</th><th class="sorting" tabindex="0" aria-controls="example0" rowspan="1" colspan="1" aria-label="Office: activate to sort column ascending" style="width: 113px;">Office</th><th class="sorting" tabindex="0" aria-controls="example0" rowspan="1" colspan="1" aria-label="Age: activate to sort column ascending" style="width: 52px;">Age</th><th class="sorting" tabindex="0" aria-controls="example0" rowspan="1" colspan="1" aria-label="Start date: activate to sort column ascending" style="width: 124px;">Start date</th><th class="sorting" tabindex="0" aria-controls="example0" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending" style="width: 90px;">Salary</th></tr> -->
               </thead>             
                <!-- <tfoot>
                    <tr><th rowspan="1" colspan="1">Name</th><th rowspan="1" colspan="1">Position</th><th rowspan="1" colspan="1">Office</th><th rowspan="1" colspan="1">Age</th><th rowspan="1" colspan="1">Start date</th><th rowspan="1" colspan="1">Salary</th></tr>
                </tfoot> -->             
                <tbody>
                  <?php $i=0;?>
                  @foreach($data as $row)
                  <?php 
                    $i++;
                    if($i%2==0){
                      $class='odd';
                    }else{                    
                      $class='even';
                    }         
                  ?>
                  <tr role="row" class="{{$class}}">
                          <td class="sorting_1">{{$row->id}}</td>
                          <td>{{$row->name}}</td>
                          <td><img src='./uploads/cinemas/{{$row->pic}}' width="50px" height="50px"></td>
                          <td>{{$row->address}}</td>
                          <td>{{$row->tel}}</td>
                          <td>
                            <a style="text-decoration:none;float:left;" href="/admincinemas/{{$row->id}}">
                              <button type="button" class="btn btn-gradient-info btn-rounded btn-sm" title="修改信息"><font style="vertical-align: inherit;"><i class="mdi mdi-border-color"></i>修改</font></button>
                            </a>
                            <form action="/admincinemas/{{$row->id}}" method="post" style="float: right;">
                              {{csrf_field()}}
                              {{method_field("DELETE")}}
                              <button type="submit" class="btn btn-gradient-danger btn-rounded btn-sm" title="删除" onclick="return confirm('你确定删除吗?')"><font style="vertical-align: inherit;"><i class="mdi mdi-delete"></i>删除</font></button>
                            </form>
                          </td>
                  </tr>
                  @endforeach                 
                </tbody>
            </table>
            <div class="dataTables_info" id="example0_info" role="status" aria-live="polite">
               Showing 1 to 10 of 31 entries
              </div>
              <div class="dataTables_paginate paging_simple_numbers" id="example0_paginate">
              {{$data->appends($request)->render()}}
               <!-- <a class="paginate_button previous disabled" aria-controls="example0" data-dt-idx="0" tabindex="0" id="example0_previous">Previous</a>
               <span><a class="paginate_button current" aria-controls="example0" data-dt-idx="1" tabindex="0">1</a><a class="paginate_button " aria-controls="example0" data-dt-idx="2" tabindex="0">2</a><a class="paginate_button " aria-controls="example0" data-dt-idx="3" tabindex="0">3</a><a class="paginate_button " aria-controls="example0" data-dt-idx="4" tabindex="0">4</a></span>
               <a class="paginate_button next" aria-controls="example0" data-dt-idx="5" tabindex="0" id="example0_next">Next</a> -->
              </div>
            </div>
        </div>
      </div>
    </div>
</div>
</div>
@endsection
@section('title','影院列表')
