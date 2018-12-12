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
                  <h4 class="card-title">管理员添加</h4>
                  <p class="card-description">
                    <!-- Basic form elements -->
                  </p>
                  <!-- <div class="mws-panel-body no-padding">  -->
                  <form class="forms-sample" action="/adminuser" method="post">
                    @if (count($errors) > 0)
                      <!-- <div class="mws-form-message error"> -->
                      <!-- <div class="alert alert-danger"> -->
                        <ul class="alert alert-danger" id="ul" style="cursor:pointer;">
                          @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li> 
                          @endforeach
                        </ul>
                      <!-- </div> -->
                      <!-- </div> -->
                    @endif
                    <div class="form-group">
                      <label for="exampleInputName1">登录账号</label>
                      <input type="text" class="form-control" id="exampleInputName1" placeholder="请输入登录账号" name="username" >
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword4">密码</label>
                      <input type="password" class="form-control" id="exampleInputPassword4" placeholder="请输入密码" name="password">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword4">重复密码</label>
                      <input type="password" class="form-control" id="exampleInputPassword4" placeholder="请再次输入密码" name="repassword">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPhone3">手机号</label>
                      <input type="text" class="form-control" id="exampleInputPhone3" placeholder="请输入手机号码" name="phone">
                    </div>
                    <div class="form-group">
                      <label for="exampleSelectGender">管理权限</label>
                        <select class="form-control" id="exampleSelectGender" name="qx">
                          <option value="0">普通用户</option>
                          <option value="1">VIP用户</option>
                          <option value="2">一般管理员</option>
                          <option value="3">超级管理员</option>
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="exampleSelectGender">状态</label>
                        <select class="form-control" id="exampleSelectGender" name="status">
                          <option value="0">启用</option>
                          <option value="1">禁用</option>
                        </select>
                    </div>
                <!--     <div class="form-group">
                      <label>File upload</label>
                      <input type="file" name="img[]" class="file-upload-default">
                      <div class="input-group col-xs-12">
                        <input type="text" class="form-control file-upload-info" disabled placeholder="Upload Image">
                        <span class="input-group-append">
                          <button class="file-upload-browse btn btn-gradient-primary" type="button">Upload</button>
                        </span>
                      </div>
                    </div> -->
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
@section('title','管理员添加')
