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
                <!-- <div class="card-body"> -->
                  <!-- <h4 class="card-title">Checkbox Controls</h4> -->
                  <!-- <p class="card-description">Checkbox and radio controls (default appearance is in primary color)</p> -->
                  <!-- <form> -->
                   <!--  <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <div class="form-check">
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input">
                              Default
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" checked>
                              Checked
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" disabled>
                              Disabled
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" disabled checked>
                              Disabled checked
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <div class="form-check">
                            <label class="form-check-label">
                              <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="">
                              Default
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" checked>
                              Selected
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input type="radio" class="form-check-input" name="optionsRadios2" id="optionsRadios3" value="option3" disabled>
                              Disabled
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input type="radio" class="form-check-input" name="optionsRadio2" id="optionsRadios4" value="option4" disabled checked>
                              Selected and disabled
                            </label>
                          </div>
                        </div>
                      </div>
                    </div> -->
                  <!-- </form> -->
                <!-- </div> -->
                <div class="card-body">
                <h4 class="card-title">角色信息</h4><br>
                  <h4 class="card-description">当前用户:{{$info->name}}的角色信息</h4>
                  <form action="/adminsaverole" method="post">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                        	@foreach($role as $row)
                          <div class="form-check form-check-info">
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" name="rids[]" value="{{$row->id}}" @if(in_array($row->id,$rids)) checked @endif>
                              {{$row->name}}
                            </label>
                          </div>
                          @endforeach
                          {{csrf_field()}}
                          <input type="hidden" name="uid" value="{{$info->id}}">
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
@section('title','分配角色')