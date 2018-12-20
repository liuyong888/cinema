@extends('Admin.AdminPublic.public')
@section('content')
<div class="row">
 <div class="col-md-12">
      <div class="panel panel-default">

        <div class="panel-title">
<<<<<<< HEAD
          会员添加
=======
          友情链接添加
>>>>>>> 21c99e3776868456907eece25b8246db85a0e2d3
          <ul class="panel-tools">
            <li><a class="icon minimise-tool"><i class="fa fa-minus"></i></a></li>
            <li><a class="icon expand-tool"><i class="fa fa-expand"></i></a></li>
            <li><a class="icon closed-tool"><i class="fa fa-times"></i></a></li>
          </ul>
        </div>

            <div class="panel-body">
              <form class="form-horizontal" action="/adminlink" method="post">
                    @if (count($errors) > 0)
                      <!-- <div class="mws-form-message error"> -->
                      <!-- <div class="alert alert-danger"> -->
                        <!-- <ul class="alert alert-danger" id="ul" style="cursor:pointer;"> -->
                            <div class="Modern-alert Modern-alert-icon Modern-alert-click alert5">
                                @foreach ($errors->all() as $error)
                                <i class="fa fa-warning"></i>
                                {{ $error }}
                                @endforeach
                              </div>

                      <!-- </div> -->
                      <!-- </div> -->
                    @endif
                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">网站名称</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="input11" placeholder="请输入网站名称" name="name">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">网站地址</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="请输入网站地址" name="site">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">申请人</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control"  name="username">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">联系方式</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="input122" placeholder="请输入手机号" name="contact">
                  </div>
                </div>

                <div class="form-group">
                  <div class="col-sm-offset-2 col-sm-10">
                    {{csrf_field()}}
                    <button type="submit" class="btn btn-default">Submit</button>
                    <button class="btn btn-default">Cancel</button>
                  </div>
                </div>

              </form>

            </div>

      </div>
    </div>
</div>
@endsection
@section('title','友情链接添加')
