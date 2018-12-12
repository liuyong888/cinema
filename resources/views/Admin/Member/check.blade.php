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
             <div class="col-12 grid-margin">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">会员详情信息</h4>
                  <form class="form-sample">
                    <p class="card-description">
                      Personal info
                    </p>
                    <div class="row">
                      <div class="col-md-8" >
                        <div class="form-group row">
                          <label class="col-sm-4 col-form-label">昵称</label>
                          <div class="col-sm-10">
                            <input type="text" class="form-control" readonly="readonly" value="{{$info->nickname}}"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-8" >
                        <div class="form-group row">
                          <label class="col-sm-4 col-form-label">性别</label>
                          <div class="col-sm-10">
                            <input type="text" class="form-control" readonly="readonly" value="{{$info->sex}}"/>
                          </div>
                        </div>
                      </div>
                    </div>
                     <div class="row">
                      <div class="col-md-8" >
                        <div class="form-group row">
                          <label class="col-sm-4 col-form-label">生日</label>
                          <div class="col-sm-10">
                            <input type="text" class="form-control" readonly="readonly" value="{{$info->birthday}}"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-8" >
                        <div class="form-group row">
                          <label class="col-sm-4 col-form-label">生活状态</label>
                          <div class="col-sm-10">
                            <input type="text" class="form-control" readonly="readonly" value="{{$info->status}}"/>
                          </div>
                        </div>
                      </div>
                    </div>
                     <div class="row">
                      <div class="col-md-8" >
                        <div class="form-group row">
                          <label class="col-sm-4 col-form-label">从事行业</label>
                          <div class="col-sm-10">
                            <input type="text" class="form-control" readonly="readonly" value="{{$info->industry}}"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-8" >
                        <div class="form-group row">
                          <label class="col-sm-4 col-form-label">兴趣</label>
                          <div class="col-sm-10">
                            <input type="text" class="form-control" readonly="readonly" value="{{$info->interest}}"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-8" >
                        <div class="form-group row">
                          <label class="col-sm-4 col-form-label">个性签名</label>
                          <div class="col-sm-10">
                            <input type="text" class="form-control" readonly="readonly" value="{{$info->sign}}"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    
                   <!--  <p class="card-description">
                      Address
                    </p>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label">Address 1</label>
                          <div class="col-sm-9">
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label">State</label>
                          <div class="col-sm-9">
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label">Address 2</label>
                          <div class="col-sm-9">
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label">Postcode</label>
                          <div class="col-sm-9">
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label">City</label>
                          <div class="col-sm-9">
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label">Country</label>
                          <div class="col-sm-9">
                            <select class="form-control">
                              <option>America</option>
                              <option>Italy</option>
                              <option>Russia</option>
                              <option>Britain</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div> -->
                  </form>
                </div>
                <div class="row">
                  <div class="col-md-8" >
                    <div class="form-group row">
                      <label class="col-sm-4 col-form-label"></label>
                      <a href="/adminmember" style="text-decoration:none;">
                        <button type="button" class="btn btn-gradient-success btn-rounded btn-fw">返回</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        <!--   <a style="text-decoration:none;float:left;" href="/adminmember">
        <button type="button" class="btn btn-gradient-info btn-rounded btn-sm" title="修改信息"><font style="vertical-align: inherit;"><i class="mdi mdi-border-color"></i></font></button>
      </a> -->
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
@section('title','会员详情信息')