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
                  <h4 class="card-title">修改电影信息</h4>
                  <p class="card-description">
                    <!-- Basic form elements -->
                  </p>
                  <form class="forms-sample" action="/adminmovies/{{$movies->id}}" method="post" enctype="multipart/form-data">
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
                      <label for="exampleInputName1">中文名字</label>
                      <input type="text" class="form-control" id="exampleInputName1" name="zwname" value="{{$movies->zwname}}">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword4">英文名字</label>
                      <input type="text" class="form-control" id="exampleInputPassword4"  name="ywname" value="{{$movies->ywname}}">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword4">电影图片</label>
                      <img src="/uploads/dianyingtupian/{{$movies->tupian}}" width="100px" height="100px">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword4">新电影图片</label>
                      <input type="file" class="form-control" id="exampleInputPassword4" name="tupian">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword4">电影类型</label>
                      <input type="text" class="form-control" id="exampleInputPassword4" name="leixing" value="{{$movies->leixing}}">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPhone3">地区</label>
                      <input type="text" class="form-control" id="exampleInputPhone3" name="diqu" value="{{$movies->diqu}}">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputName1">时长</label>
                      <input type="text" class="form-control" id="exampleInputName1" name="shichang" value="{{$movies->shichang}}">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword4">上映时间</label>
                      <input type="text" class="form-control" id="exampleInputPassword4" name="syshijian" value="{{$movies->syshijian}}">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword4">上映地区</label>
                      <input type="text" class="form-control" id="exampleInputPassword4" name="sydiqu" value="{{$movies->sydiqu}}">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword4">想看</label>
                      <input type="text" class="form-control" id="exampleInputPassword4" name="xiangkan" value="{{$movies->xiangkan}}">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPhone3">票房</label>
                      <input type="text" class="form-control" id="exampleInputPhone3" name="piaofang" value="{{$movies->piaofang}}">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPhone3">电影评分</label>
                      <input type="text" class="form-control" id="exampleInputPhone3"name="pingfen" value="{{$movies->pingfen}}">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPhone3">简介</label>
                      <input type="text" class="form-control" id="exampleInputPhone3" name="jianjie" value="{{$movies->jianjie}}">
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
@section('title','修改电影信息')
