<!DOCTYPE html>
<html lang="en">
<<<<<<< HEAD

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>后台登录</title>
  <!-- plugins:css -->
  <link rel="stylesheet" href="/static/admins/vendors/iconfonts/mdi/css/materialdesignicons.min.css">
  <link rel="stylesheet" href="/static/admins/vendors/css/vendor.bundle.base.css">
  <!-- endinject -->
  <!-- plugin css for this page -->
  <!-- End plugin css for this page -->
  <!-- inject:css -->
  <link rel="stylesheet" href="/static/admins/css/style.css">
  <!-- endinject -->
  <link rel="shortcut icon" href="/static/admins/images/favicon.png" />
</head>

<body>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth">
        <div class="row w-100">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left p-5">
              <div class="brand-logo">
                <img src="/static/admins/images/logo.svg">
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
                  <div class="form-check">
                    <label class="form-check-label text-muted">
                      <input type="checkbox" class="form-check-input">
                      Keep me signed in
                    </label>
                  </div>
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
  <script src="/static/admins/vendors/js/vendor.bundle.base.js"></script>
  <script src="/static/admins/vendors/js/vendor.bundle.addons.js"></script>
  <!-- endinject -->
  <!-- inject:js -->
  <script src="/static/admins/js/off-canvas.js"></script>
  <script src="/static/admins/js/misc.js"></script>
  <!-- endinject -->
</body>
<script>
  $("#ul").click(function(){
    $(this).fadeOut("slow");
  });
</script>
</html>
=======
  <head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="keywords" content="" />
  <title>后台登录</title>
  <script src="/static/Admin/js/Modern-alert/main.js"></script>
  <script src="/static/Admin/js/sweet-alert/sweet-alert.min.js"></script>
  <script type="text/javascript" src="/static/Admin/js/jquery.min.js"></script>
  <script src="/static/Admin/js/bootstrap/bootstrap.min.js"></script>

  <!-- ========== Css Files ========== -->
  <link href="/static/Admin/css/root.css" rel="stylesheet">
  <link href="/static/Admin/css/style.css" rel="stylesheet">
  <style type="text/css">
    body{background: #F5F5F5;}
  </style>
  </head>
  <body>

    <div class="login-form">
      <form action="/adminlogin" method="post">
        <div class="top">
          <img src="/static/Admin/img/Modern-icon.png" alt="icon" class="icon">
          <h1>Modern</h1>
        </div>
         @if(session('error'))
          <div class="Modern-alert Modern-alert-icon alert5-light" id="closed">
            <i class="fa fa-warning"></i>
            
            {{session('error')}}
          </div>
          @endif
        <div class="form-area">
          <div class="group">
            <input type="text" class="form-control" placeholder="Username" name="name">
            <i class="fa fa-user"></i>
          </div>
          <div class="group">
            <input type="password" class="form-control" placeholder="Password" name="password">
            <i class="fa fa-key"></i>
          </div>
          {{csrf_field()}}
          <button type="submit" class="btn btn-default btn-block">LOGIN</button>
        </div>
      </form>
      <div class="footer-links row">
        <div class="col-xs-6"><a href="#"><i class="fa fa-external-link"></i> Register Now</a></div>
        <div class="col-xs-6 text-right"><a href="#"><i class="fa fa-lock"></i> Forgot password</a></div>
      </div>
    </div>

</body>
<script>
  $('#closed').onclick(function(){
    $(this).fadeOut("slow");
  })
</script>
</html>
>>>>>>> 21c99e3776868456907eece25b8246db85a0e2d3
