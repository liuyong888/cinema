@extends('Admin.AdminPublic.public')
@section('content')
<div class="row">
 <div class="col-md-12">
      <div class="panel panel-default">

        <div class="panel-title">
          管理员添加
          <ul class="panel-tools">
            <li><a class="icon minimise-tool"><i class="fa fa-minus"></i></a></li>
            <li><a class="icon expand-tool"><i class="fa fa-expand"></i></a></li>
            <li><a class="icon closed-tool"><i class="fa fa-times"></i></a></li>
          </ul>
        </div>

            <div class="panel-body">
              <form class="form-horizontal" action="/adminuser" method="post">
                    @if (count($errors) > 0)
                      <!-- <div class="mws-form-message error"> -->
                      <!-- <div class="alert alert-danger"> -->
                        <!-- <ul class="alert alert-danger" id="ul" style="cursor:pointer;"> -->
                            <div class="Modern-alert Modern-alert-icon Modern-alert-click alert5">
                                @foreach ($errors->all() as $error)
                                <i class="fa fa-warning"></i>
                               <p>{{ $error }}</p>
                                @endforeach
                              </div>

                      <!-- </div> -->
                      <!-- </div> -->
                    @endif
                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">登录账号</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="input11" placeholder="请输入登录账号" name="name">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">密码</label>
                  <div class="col-sm-10">
                    <input type="password" class="form-control" placeholder="请输入密码" name="password">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">重复密码</label>
                  <div class="col-sm-10">
                    <input type="password" class="form-control" placeholder="请再次输入密码" name="repassword">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-offset-2 col-sm-10 checkbox checkbox-primary padding-l-35">
                    <input id="checkbox103" type="checkbox" checked>
                    <label for="checkbox103">Remember me</label>
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
@section('title','会员添加')
