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
                  <h4 class="card-title">电影列表</h4>
                  <p class="card-description">
                    <!-- Add class <code>.table-bordered</code> -->
                  </p>
                  <table class="table table-bordered" style="text-align: center;">
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
                        <td>{{$row->id}}</td>
                        <td style="width: 100px">{{$row->zwname}}</td>
                        <td style="width: 100px">{{$row->ywname}}</td>
                        <!-- 如果在moviesController里没有添加上传路径,则可以写成
                          <img src="./uploads/{{$row->tupian}}" width="80px">,自己添加路径
                         -->
                        <td style="width: 90px"><img src="./uploads/dianyingtupian/{{$row->tupian}}" width="80px"></td>
                        <td style="width: 90px">{{$row->leixing}}</td>
                        <td style="width: 90px">{{$row->diqu}}</td>
                        <td style="width: 60px">{{$row->shichang}}</td>
                        <td style="width: 60px">{{$row->syshijian}}</td>
                        <td style="width: 90px">{{$row->sydiqu}}</td>
                        <td style="width: 60px">{{$row->xiangkan}}</td>
                        <td style="width: 60px">{{$row->piaofang}}</td>
                        <td style="width: 60px">{{$row->pingfen}}</td>
                        <td style="width: 200px">{{mb_substr($row->jianjie,0,20).'...'}}</td>
                        <td class="td-manage">
                          <a style="text-decoration:none;float:left;" href="/adminmovies/{{$row->id}}/edit">
                            <button type="button" class="btn btn-gradient-info btn-rounded btn-sm" title="修改"><font style="vertical-align: inherit;"><i class="mdi mdi-border-color"></i></font></button>
                          </a>
                          <form action="/adminmovies/{{$row->id}}" method="post" style="float: right;">
                              {{csrf_field()}}
                              {{method_field("DELETE")}}
                              <button type="submit" class="btn btn-gradient-danger btn-rounded btn-sm" title="删除"><font style="vertical-align: inherit;"><i class="mdi mdi-delete"></i></font></button>
                          </form>
                        </td>
                      </tr>
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
@section('title','电影列表')