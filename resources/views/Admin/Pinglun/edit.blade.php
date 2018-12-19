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
                  <h4 class="card-title">修改电影人员信息</h4>
                  <p class="card-description">
                    <!-- Basic form elements -->
                  </p>
                  <form class="forms-sample" action="/adminrenyuan/{{$renyuanxiugai->id}}" method="post" enctype="multipart/form-data">
                    @if (count($errors) > 0)
                      <!-- <div class="mws-form-message error"> -->
                      <!-- <div class="alert alert-danger"> -->
                        <ul class="alert alert-danger" id="ul">
                          @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li> 
                          @endforeach
                        </ul>
                      <!-- </div> -->
                      <!-- </div> -->
                    @endif
                    <div class="form-group">
                      <label for="exampleInputName1">电影名字</label>
                      <input type="text" class="form-control" id="exampleInputName1" name="m_id" value="{{$renyuanxiugai->m_id}}">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword4">导演名字</label>
                      <input type="text" class="form-control" id="exampleInputPassword4"  name="dyname" value="{{$renyuanxiugai->dyname}}">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword4">导演图片</label>
                      <img src="/uploads/dianyingrenyuantupian/{{$renyuanxiugai->dy_tupian}}" width="100px" height="100px">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword4">新导演图片</label>
                      <input type="file" class="form-control" id="exampleInputPassword4" name="dy_tupian">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword4">演员名字</label>
                      <input type="text" class="form-control" id="exampleInputPassword4" name="yyname" value="{{$renyuanxiugai->yyname}}">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword4">演员图片</label>
                      <img src="/uploads/dianyingrenyuantupian/{{$renyuanxiugai->yy_tupian}}" width="100px" height="100px">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword4">新演员图片</label>
                      <input type="file" class="form-control" id="exampleInputPassword4" name="yy_tupian" value="{{$renyuanxiugai->yy_tupian}}">
                    </div>
                    {{csrf_field()}}
                    {{method_field("PUT")}}
                    <button type="submit" class="btn btn-gradient-primary mr-2">Submit</button>
                    <button class="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
            </div>

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
  <script src="/static/admins/js/bootstrap.min.js"></script>
  <!-- endinject -->
  <!-- Custom js for this page-->
  <script src="/static/admins/js/file-upload.js"></script>
  <!-- End custom js for this page-->
</body>
<script>
  $("#ul").click(function(){
    $(this).hide();
  });
</script>
</html>
@endsection
@section('title','修改电影人员信息')
