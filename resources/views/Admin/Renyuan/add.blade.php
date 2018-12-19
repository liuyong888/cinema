@extends('Admin.AdminPublic.public')
@section('content')
<div class="row">
 <div class="col-md-12">
      <div class="panel panel-default">

        <div class="panel-title">
          人员添加
          <ul class="panel-tools">
            <li><a class="icon minimise-tool"><i class="fa fa-minus"></i></a></li>
            <li><a class="icon expand-tool"><i class="fa fa-expand"></i></a></li>
            <li><a class="icon closed-tool"><i class="fa fa-times"></i></a></li>
          </ul>
        </div>

            <div class="panel-body">
              <form class="form-horizontal" action="/adminrenyuan" method="post" enctype="multipart/form-data">
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
                  <label class="col-sm-2 control-label form-label">电影名字</label>
                  <div class="col-sm-10">
                   <select name="m_id">
                    <option value="">--请选择--</option>
                      @foreach($aa as $row)
                      <option value="{{$row->id}}">{{$row->zwname}}</option>
                      @endforeach
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">导演名字</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="请输入导演名字" name="dyname">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">导演图片</label>
                  <div class="col-sm-10">
                    <input type="file" class="form-control" name="dy_tupian">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">演员名字</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="input122" placeholder="请输入演员名字" name="yyname">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">演员图片</label>
                  <div class="col-sm-10">
                    <input type="file" class="form-control" id="input122" name="yy_tupian">
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
@section('title','人员添加')
