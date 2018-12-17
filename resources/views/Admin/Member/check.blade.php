@extends('Admin.AdminPublic.public')
@section('content')
<div class="row">
 <div class="col-md-12">
      <div class="panel panel-default">

        <div class="panel-title">
          查看信息
          <ul class="panel-tools">
            <li><a class="icon minimise-tool"><i class="fa fa-minus"></i></a></li>
            <li><a class="icon expand-tool"><i class="fa fa-expand"></i></a></li>
            <li><a class="icon closed-tool"><i class="fa fa-times"></i></a></li>
          </ul>
        </div>

            <div class="panel-body">
              <form class="form-horizontal">
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
                  <label class="col-sm-2 control-label form-label">昵称</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="input11" readonly="" name="nickname" value="{{$member->nickname}}">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">性别</label>
                  <div class="col-sm-10">
                    <div class="radio radio-info radio-inline">
                        <input type="radio" id="inlineRadio1" value="1" name="sex" @if($member->sex==1) checked @endif readonly>
                        <label for="inlineRadio1">男</label>
                    </div>
                    <div class="radio radio-inline">
                        <input type="radio" id="inlineRadio2" value="0" name="sex" @if($member->sex==0) checked @endif readonly>
                        <label for="inlineRadio2">女</label>
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">生日</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control"  name="birthday" value="{{$member->birthday}}" readonly>
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">生活状态</label>
                  <div class="col-sm-10">
                     <div class="radio radio-danger">
                        <input type="radio" name="status" id="radio0" value="0" @if($member->status==0) checked @endif readonly>
                        <label for="radio0">
                           单身
                        </label>
                    </div>
                     <div class="radio radio-danger">
                        <input type="radio" name="status" id="radio1" value="1" @if($member->status==1) checked @endif readonly>
                        <label for="radio1">
                           热恋中
                        </label>
                    </div>
                     <div class="radio radio-danger">
                        <input type="radio" name="status" id="radio2" value="2" @if($member->status==2) checked @endif readonly>
                        <label for="radio2">
                           已婚
                        </label>
                    </div>
                     <div class="radio radio-danger">
                        <input type="radio" name="status" id="radio3" value="3" @if($member->status==3) checked @endif readonly>
                        <label for="radio3">
                           为人父母
                        </label>
                    </div>
                   
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">从事行业</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="input122" name="industry" value="{{$member->industry}}" readonly>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">个性签名</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="input12" name="sign" value="{{$member->sign}}" readonly>
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
                     {{method_field("PUT")}}
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
@section('title','查看会员详情')
