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
                  <h4 class="card-title">修改权限信息</h4>
                  <p class="card-description">
                    <!-- Basic form elements -->
                  </p>
                  <form class="forms-sample" action="/authlist/{{$node->id}}" method="post">
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
                      <label for="exampleInputName1">权限名</label>
                      <input type="text" class="form-control" id="exampleInputName1" placeholder="请输入权限名" name="name" value="{{$node->name}}">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputName1">控制器</label>
                      <input type="text" class="form-control" id="exampleInputName1" placeholder="请输入控制器" name="mname" value="{{$node->mname}}">
                    </div>
                     <div class="form-group">
                      <label for="exampleInputName1">方法</label>
                      <input type="text" class="form-control" id="exampleInputName1" placeholder="请输入方法" name="aname" value="{{$node->aname}}" >
                    </div>
                    <div class="form-group">
                      <label class="col-form-label" for="exampleInputName1">状态</label>
                      <div class="col-md-6">
                        <div class="form-group row">
                          <!-- <div class="col-sm-4"> -->
                            <div class="form-check">
                              <label class="form-check-label">
                                <input type="radio" class="form-check-input" name="status" id="membershipRadios1" value="0" @if($node->status==0) checked @endif>
                                启用
                              <i class="input-helper"></i></label>
                            </div>
                          <!-- </div> -->
                          <div class="col-sm-5">
                            <div class="form-check">
                              <label class="form-check-label">
                                <input type="radio" class="form-check-input" name="status" id="membershipRadios2" value="1" @if($node->status==1) checked @endif>
                                禁用
                              <i class="input-helper"></i></label>
                            </div>
                          </div>
                        </div>
                      </div>
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
@section('title','修改角色信息')
