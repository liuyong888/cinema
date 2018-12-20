<!DOCTYPE html>
<html lang="en">
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