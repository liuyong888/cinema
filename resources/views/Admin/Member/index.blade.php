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
  <link rel="shortcut icon" href="/static/admins/node/images/favicon.png" />
  <link rel="stylesheet" href="/static/admins/css/myPagination.css">
</head>

<body>
  <!-- <div class="container-scroller"> -->
    <!-- partial:/static/admins/node/partials/_navbar.html -->
 
    <!-- partial -->
    <!-- <div class="container-fluid page-body-wrapper"> -->
      <!-- partial:/static/admins/node/partials/_sidebar.html -->
      <!-- partial -->
      <!-- <div class="main-panel"> -->
        <div class="content-wrapper">
         <!--  <div class="page-header">
            <h3 class="page-title">
              Basic Tables
            </h3>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Tables</a></li>
                <li class="breadcrumb-item active" aria-current="page">Basic tables</li>
              </ol>
            </nav>
          </div> -->
          <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">管理员列表</h4>
                  <p class="card-description">
                    <!-- Add class <code>.table-bordered</code> -->
                  </p>
                  <table class="table table-bordered" style="text-align: center;">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>会员名</th>
                        <th>手机号</th>
                        <th>注册时间</th>
                        <th>操作</th>
                      </tr>
                    </thead>
                    <tbody>
                      @foreach($member as $row)
                        <td>{{$row->id}}</td>
                        <td>{{$row->name}}</td>
                        <td>{{$row->phone}}</td>
                        <td>{{date('Y-m-d H:i:s',$row->addtime)}}</td>
                        <td class="td-manage">
                           <a style="text-decoration:none;" href="/adminmemcheck/{{$row->id}}">
                            <button type="button" class="btn btn-gradient-info btn-rounded btn-sm" title="查看详情"><font style="vertical-align: inherit;">查看详情</font></button>
                          </a>
                          <a style="text-decoration:none;" href="/adminmember/{{$row->id}}/edit">
                            <button type="button" class="btn btn-gradient-info btn-rounded btn-sm" title="修改信息"><font style="vertical-align: inherit;"><i class="mdi mdi-lead-pencil"></i>修改</font></button>
                          </a>
                          <form action="/adminmember/{{$row->id}}" method="post" style="display: inline-block;">
                              {{csrf_field()}}
                              {{method_field("DELETE")}}
                              <button type="submit" class="btn btn-gradient-danger btn-rounded btn-sm" title="删除此管理员"><font style="vertical-align: inherit;"><i class="mdi mdi-delete"></i>删除</font></button>
                          </form>
                        </td>
                      @endforeach
                    </tbody>
                  </table>
                  <div id="pagination" class="pagination">
                   
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        <!-- </div> -->
        <!-- content-wrapper ends -->
        <!-- partial:/static/admins/node/partials/_footer.html -->
       
        <!-- partial -->
      </div>
      <!-- main-panel ends -->
    <!-- </div> -->
    <!-- page-body-wrapper ends -->
  <!-- </div> -->
  <!-- container-scroller -->
  <!-- plugins:js -->
  <script src="/static/admins/vendors/js/vendor.bundle.base.js"></script>
  <script src="/static/admins/vendors/js/vendor.bundle.addons.js"></script>
  <!-- endinject -->
  <!-- Plugin js for this page-->
  <!-- End plugin js for this page-->
  <!-- inject:js -->
  <script src="/static/admins/node/js/off-canvas.js"></script>
  <script src="/static/admins/node/js/misc.js"></script>
  <script src="/static/admins/js/myPagination.js"></script>
  <script type="text/javascript" src="/static/admins/js/layer/layer.js"></script>
  <!-- endinject -->
  <!-- Custom js for this page-->
  <!-- End custom js for this page-->
</body>
<script>
  /*window.onload = function () {
    new Page({
        id: 'pagination',
        pageTotal: 50, //必填,总页数
        pageAmount: 10,  //每页多少条
        dataTotal: 500, //总共多少条数据
        curPage:1, //初始页码,不填默认为1
        pageSize: 5, //分页个数,不填默认为5
        showPageTotalFlag:true, //是否显示数据统计,不填默认不显示
        showSkipInputFlag:true, //是否支持跳转,不填默认不显示
        getPage: function (page) {
            //获取当前页数
           console.log(page);
        }
    })
}*/
</script>
</html>
@endsection
@section('title','会员列表')