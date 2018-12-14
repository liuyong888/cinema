@extends('Admin.AdminPublic.public')
@section('content')
<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title></title>
  <!-- plugins:css -->
  <link rel="stylesheet" href="/static/admins/vendors/iconfonts/mdi/css/materialdesignicons.min.css">
  <link rel="stylesheet" href="/static/admins/vendors/css/vendor.bundle.base.css">
  <!-- endinject -->
  <!-- inject:css -->
  <link rel="stylesheet" href="/static/admins/css/style.css">
  <!-- endinject -->
  <link rel="shortcut icon" href="/static/admins/images/favicon.png" />
</head>

<body>
  <!-- <div class="container-scroller"> -->
    <!-- partial:../../partials/_navbar.html -->
    <!-- partial -->
    <!-- <div class="container-fluid page-body-wrapper"> -->
      <!-- partial:../../partials/_sidebar.html -->
      <!-- partial -->
      <!-- <div class="main-panel">         -->
        <div class="content-wrapper">
          <div class="row"> 
            <div class="col-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">电影添加</h4>
                  <p class="card-description">
                    <!-- Basic form elements -->
                  </p>
                  <!-- <div class="mws-panel-body no-padding">  -->
                  <form class="forms-sample" action="/adminmovies" method="post" enctype="multipart/form-data">
                    @if (count($errors) > 0)
                      <div class="mws-form-message error">
                      <div class="alert alert-danger">
                        <ul class="alert alert-danger" id="ul" style="cursor:pointer;">
                          @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li> 
                          @endforeach
                        </ul>
                      </div>
                      </div>
                    @endif
                    <div class="form-group">
                      <label for="exampleInputName1">中文名字</label>
                      <input type="text" class="form-control" name="zwname" >
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword4">英文名字</label>
                      <input type="text" class="form-control" name="ywname">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword4">电影图片</label>
                      <input type="file" class="form-control" name="tupian">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPhone3">电影类型</label>
                      <input type="text" class="form-control" name="leixing">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPhone3">地区</label>
                      <input type="text" class="form-control" name="diqu">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPhone3">时长</label>
                      <input type="text" class="form-control" name="shichang">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPhone3">上映时间</label>
                      <input type="text" class="form-control" name="syshijian">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPhone3">上映地区</label>
                      <input type="text" class="form-control" name="sydiqu">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPhone3">想看</label>
                      <input type="text" class="form-control" name="xiangkan">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPhone3">票房</label>
                      <input type="text" class="form-control" name="piaofang">
                    </div>
                     <div class="form-group">
                      <label for="exampleInputPhone3">电影评分</label>
                      <input type="text" class="form-control" name="pingfen">
                    </div>
                     <div class="form-group">
                      <label for="exampleInputPhone3">简介</label>
                      <input type="text" class="form-control" name="jianjie">
                    </div>
                    {{csrf_field()}}
                    <button type="submit" class="btn btn-gradient-primary mr-2">Submit</button>
                    <button class="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
           <!-- </div> -->
          </div>
        </div>
        <!-- content-wrapper ends -->
        <!-- partial:../../partials/_footer.html -->
        <!-- partial -->
      <!-- </div> -->
      <!-- main-panel ends -->
    <!-- </div> -->
    <!-- page-body-wrapper ends -->
  <!-- </div> -->
  <!-- container-scroller -->
  <!-- plugins:js -->
  <script src="/static/admins/vendors/js/vendor.bundle.base.js"></script>
  <script src="/static/admins/vendors/js/vendor.bundle.addons.js"></script>
  <!-- endinject -->
  <!-- inject:js -->
  <script src="/static/admins/js/off-canvas.js"></script>
  <script src="/static/admins/js/misc.js"></script>
  <!-- endinject -->
  <!-- Custom js for this page-->
  <script src="/static/admins/js/file-upload.js"></script>
  <!-- End custom js for this page-->
</body>
<script>
  $("#ul").click(function(){
    $(this).fadeOut("slow");
  });
</script>
</html>
@endsection
@section('title','电影添加')
