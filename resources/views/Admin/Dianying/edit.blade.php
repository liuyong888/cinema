@extends('Admin.AdminPublic.public')
@section('content')
<div class="row">
 <div class="col-md-12">
      <div class="panel panel-default">

        <div class="panel-title">
         电影修改
          <ul class="panel-tools">
            <li><a class="icon minimise-tool"><i class="fa fa-minus"></i></a></li>
            <li><a class="icon expand-tool"><i class="fa fa-expand"></i></a></li>
            <li><a class="icon closed-tool"><i class="fa fa-times"></i></a></li>
          </ul>
        </div>

            <div class="panel-body">
              <form class="form-horizontal" action="/adminmovies/{{$movies->id}}" method="post">
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
                  <label class="col-sm-2 control-label form-label">中文名字</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" name="zwname" value="{{$movies->zwname}}">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">英文名字</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control"  name="ywname" value="{{$movies->ywname}}">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">电影图片</label>
                  <div class="col-sm-10">
                    <img src="/uploads/dianyingtupian/{{$movies->tupian}}" width="100px" height="100px">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">新电影图片</label>
                  <div class="col-sm-10">
                    <input type="file" class="form-control" id="input12" name="tupian">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">电影类型</label>
                  <div class="col-sm-10">
                    <select name="leixing">
                      @foreach($aa as $row)
                      <option value="{{$row->id}}">{{$row->name}}</option>
                      @endforeach
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">地区</label>
                  <div class="col-sm-10">
                    <select name="diqu">
                      @foreach($bb as $row)
                      <option value="{{$row->a_id}}">{{$row->area_name}}</option>
                      @endforeach
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">时长</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="input12" name="shichang" value="{{$movies->shichang}}">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">上映时间</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="input12" name="syshijian" value="{{$movies->syshijian}}">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">上映地区</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="input12" name="sydiqu" value="{{$movies->sydiqu}}">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">想看</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="input12" name="xiangkan" value="{{$movies->xiangkan}}">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">票房</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="input12" name="piaofang" value="{{$movies->piaofang}}">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">电影评分</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="input12" name="pingfen" value="{{$movies->pingfen}}">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">简介</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="input12" name="jianjie" value="{{$movies->jianjie}}">
                  </div>
                </div>
                <!-- <div class="form-group">
                  <div class="col-sm-offset-2 col-sm-10 checkbox checkbox-primary padding-l-35">
                    <input id="checkbox103" type="checkbox" checked>
                    <label for="checkbox103">Remember me</label>
                  </div>
                </div> -->

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
@section('title','电影修改')
