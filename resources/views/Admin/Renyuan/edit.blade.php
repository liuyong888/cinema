@extends('Admin.AdminPublic.public')
@section('content')
<div class="row">
 <div class="col-md-12">
      <div class="panel panel-default">

        <div class="panel-title">
         人员修改
          <ul class="panel-tools">
            <li><a class="icon minimise-tool"><i class="fa fa-minus"></i></a></li>
            <li><a class="icon expand-tool"><i class="fa fa-expand"></i></a></li>
            <li><a class="icon closed-tool"><i class="fa fa-times"></i></a></li>
          </ul>
        </div>

            <div class="panel-body">
              <form class="form-horizontal" action="/adminrenyuan/{{$renyuanxiugai->id}}" method="post" enctype="multipart/form-data">
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
                    <input type="text" class="form-control" name="m_id" value="{{$renyuanxiugai->m_id}}">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">导演名字</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control"  name="dyname" value="{{$renyuanxiugai->dyname}}">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">导演图片</label>
                  <div class="col-sm-10">
                    <img src="/uploads/dianyingrenyuantupian/{{$renyuanxiugai->dy_tupian}}" width="100px" height="100px">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">新导演图片</label>
                  <div class="col-sm-10">
                    <input type="file" class="form-control" id="input12" name="dy_tupian">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">演员名字</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="input12" name="yyname" value="{{$renyuanxiugai->yyname}}">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">演员图片</label>
                  <div class="col-sm-10">
                     <img src="/uploads/dianyingrenyuantupian/{{$renyuanxiugai->yy_tupian}}" width="100px" height="100px">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">新演员图片</label>
                  <div class="col-sm-10">
                    <input type="file" class="form-control" id="input12" name="yy_tupian" value="{{$renyuanxiugai->yy_tupian}}">
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
@section('title','人员修改')
