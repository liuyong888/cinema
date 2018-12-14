@extends("Admin.AdminPublic.public")
@section('content')
<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <!-- <title>Purple Admin</title> -->
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
			  <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                <h4 class="card-title">权限信息</h4><br>
                  <h4 class="card-description">当前角色:{{$role->name}}的权限信息</h4>
                  <form action="/saveauth" method="post">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                        	@foreach($auth as $row)
                          <div class="form-check form-check-info col-md-4"  style="float:left;">
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" name="nids[]" value="{{$row->id}}" @if(in_array($row->id,$nids)) checked @endif>
                              {{$row->name}}
                            </label>
                          </div>
                          @endforeach
                          <div style="clear:both;"></div>
                          {{csrf_field()}}
                          <input type="hidden" name="rid" value="{{$role->id}}">
                         <button type="submit" class="btn btn-gradient-primary mr-2" value="分配角色">分配角色</button>
                   		 <button class="btn btn-light" type="reset">Reset</button>
                      </div>
                    </div>
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
   <!-- endinject -->
  <!-- Custom js for this page -->
   <script src="/static/admins/js/file-upload.js"></script>
  <!-- End custom js for this page -->
</body>

<!--  </html>  -->
@endsection
@section('title','分配权限')