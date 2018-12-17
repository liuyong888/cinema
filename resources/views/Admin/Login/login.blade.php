<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>后台登录</title>
  <!-- plugins:css -->
  <link rel="stylesheet" href="/static/Admin/vendor/materialdesignicons.min.css">
  <link rel="stylesheet" href="/static/Admin/vendor/vendor.bundle.base.css">
  <!-- endinject -->
  <!-- plugin css for this page -->
  <!-- End plugin css for this page -->
  <!-- inject:css -->
  <link rel="stylesheet" href="/static/Admin/vendor/style.css">
  <!-- endinject -->
  <link rel="shortcut icon" href="/static/Admin/vendor/favicon.png" />
</head>

<body>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth">
        <div class="row w-100">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left p-5">
              <div class="brand-logo">
                <img src="/static/Admin/vendor/logo.svg">
              </div>
              <h4>Hello! let's get started</h4>
              <h6 class="font-weight-light">Sign in to continue.</h6>
               @if(session('error'))
                    <ul class="alert alert-danger" id="ul" style="cursor:pointer;">
                        <li>{{session('error')}}</li> 
                        <!-- {{session('error')}} -->
                    </ul>
                @endif
              <form class="pt-3" action="/adminlogin" method="post">


                <div class="form-group">
                  <input type="text" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username" name="name">
                </div>
                <div class="form-group">
                  <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" name="password">
                </div>
                <div class="mt-3">
                  {{csrf_field()}}
                  <button type="submit" class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn">登录</button>
                  <!-- <a class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" href="/admin">SIGN IN</a> -->
                </div>
                <div class="my-2 d-flex justify-content-between align-items-center">
                  <a href="#" class="auth-link text-black">Forgot password?</a>
                </div>
                <!-- <div class="mb-2">
                  <button type="button" class="btn btn-block btn-facebook auth-form-btn">
                    <i class="mdi mdi-facebook mr-2"></i>Connect using facebook
                  </button>
                </div> -->
               <!--  <div class="text-center mt-4 font-weight-light">
                  Don't have an account? <a href="register.html" class="text-primary">Create</a>
                </div> -->
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- content-wrapper ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
  <!-- container-scroller -->
  <!-- plugins:js -->
  <script src="/static/Admin/vendor/vendor.bundle.base.js"></script>
  <script src="/static/Admin/vendor/vendor.bundle.addons.js"></script>
  <!-- endinject -->
  <!-- inject:js -->
  <script src="/static/Admin/vendor/off-canvas.js"></script>
  <script src="/static/Admin/vendor/js/misc.js"></script>
  <!-- endinject -->
</body>
<script>
  $("#ul").click(function(){
    $(this).fadeOut("slow");
  });
</script>
</html>
