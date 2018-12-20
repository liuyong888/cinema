@extends("Admin.AdminPublic.public")
@section('content')
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<div class="page-header">
      <ol class="breadcrumb">
        <li><a href="index.html">场次管理</a></li>
        <li><a href="#">Tables</a></li>
        <li class="active">场次列表</li>
      </ol>
</div>
<div class="container-padding container-widget">
<div class="row">
<div class="col-md-12">
      <div class="panel panel-default">
        <div class="panel-title">场次列表</div>
        <div class="panel-body table-responsive">
            <div id="example0_wrapper" class="dataTables_wrapper"><!-- <div class="dataTables_length" id="example0_length"><label>Show123<select name="example0_length" aria-controls="example0" class=""><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div> --><div id="example0_filter" class="dataTables_filter"><form action="/adminrelss" method="get"><label>电影名:<input type="search" name="keywords" value="{{$request['keywords'] or ''}}" aria-controls="example0"/>&nbsp;&nbsp;影院名:<input type="search" name="keywordss" value="{{$request['keywordss'] or ''}}" aria-controls="example0"/></label><input type="submit" class="btn" value="搜索"></div></form>
            <table id="example0" class="table display dataTable" role="grid" aria-describedby="example0_info">
                <thead> 
                  <th>ID</th>
                  <th>影片名</th>
                  <th>价格</th>
                  <th>播放类型</th>
                  <th>时长</th>
                  <th>日期</th>                 
                  <th>时间</th>                 
                  <th>影院</th>
                  <th>播放厅</th>
                  <th>座位数</th>
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
                          <td>{{$row->m_name}}</td>                         
                          <td>{{$row->m_price}}</td>
                          <td>{{$row->play_type}}</td>
                          <td>{{$row->m_time}}</td>
                          <td>{{$row->time}}</td>
                          <td>{{$row->start_time}}--{{$row->end_time}}</td>
                          <td>{{$row->c_name}}</td>
                          <td>{{$row->h_name}}</td>
                          <td>{{$row->seating}}</td>                          
                          <td>
                            <a style="text-decoration:none;float:left;" href="/adminrelss/{{$row->id}}/edit">
                              <button type="button" class="btn btn-gradient-info btn-rounded btn-sm" title="修改信息"><font style="vertical-align: inherit;"><i class="mdi mdi-border-color"></i>修改</font></button>
                            </a>
                            <a href="javascript:void(0)" class="del">                              
                              <button type="button"  class="btn btn-gradient-danger btn-rounded btn-sm" title="删除"><font style="vertical-align: inherit;"><i class="mdi mdi-delete"></i>删除</font></button>                  
                            </a>
                          </td>
                  </tr>
                  @endforeach                 
                </tbody>
            </table>
            <div class="dataTables_info" id="example0_info" role="status" aria-live="polite">
               Showing 1 to 10 of 31 entries
            </div>
              <div class="dataTables_paginate paging_simple_numbers" id="example0_paginate">
              
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
<script type="text/javascript">
  // alert($);
  // 获取按钮 绑定单击事件
  $('.del').click(function(){
    // 获取删除数据的id
    id=$(this).parents("tr").find("td:first").html();    // 
    cur=$(this).parents("tr");
    con=confirm("你确定要删除吗?");
    if(con){
      $.get("/adminrelssdel",{id:id},function(data){
        if(data==1){
          // alert(data);
          cur.remove();
        }
      });
      
    }
  });
</script>
@endsection
@section('title','场次列表')
