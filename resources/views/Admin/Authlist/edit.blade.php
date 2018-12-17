@extends('Admin.AdminPublic.public')
@section('content')
<div class="row">
 <div class="col-md-12">
      <div class="panel panel-default">

        <div class="panel-title">
          权限信息修改
          <ul class="panel-tools">
            <li><a class="icon minimise-tool"><i class="fa fa-minus"></i></a></li>
            <li><a class="icon expand-tool"><i class="fa fa-expand"></i></a></li>
            <li><a class="icon closed-tool"><i class="fa fa-times"></i></a></li>
          </ul>
        </div>

            <div class="panel-body">
              <form class="form-horizontal" action="/authlist/{{$node->id}}" method="post">
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
                  <label class="col-sm-2 control-label form-label">权限名</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="input11" placeholder="" name="name" value="{{$node->name}}">
                  </div>
                </div>
                  <div class="form-group">
                  <label class="col-sm-2 control-label form-label">控制器</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="input11" placeholder="" name="mname" value="{{$node->mname}}">
                  </div>
                </div>
                  <div class="form-group">
                  <label class="col-sm-2 control-label form-label">方法</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="input11" placeholder="" name="aname" value="{{$node->aname}}">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">状态</label>
                  <div class="col-sm-10">
                    <div class="radio radio-info radio-inline">
                        <input type="radio" id="inlineRadio1" value="0" name="status" @if($node->status==0) checked @endif>
                        <label for="inlineRadio1">启用</label>
                    </div>
                    <div class="radio radio-inline">
                        <input type="radio" id="inlineRadio2" value="1" name="status" @if($node->status==1) checked @endif>
                        <label for="inlineRadio2">禁用</label>
                    </div>
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
@section('title','修改权限信息')
