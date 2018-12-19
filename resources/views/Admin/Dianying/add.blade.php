@extends('Admin.AdminPublic.public')
@section('content')
<div class="row">
 <div class="col-md-12">
      <div class="panel panel-default">

        <div class="panel-title">
          电影添加
          <ul class="panel-tools">
            <li><a class="icon minimise-tool"><i class="fa fa-minus"></i></a></li>
            <li><a class="icon expand-tool"><i class="fa fa-expand"></i></a></li>
            <li><a class="icon closed-tool"><i class="fa fa-times"></i></a></li>
          </ul>
        </div>

            <div class="panel-body">
              <form class="form-horizontal" action="/adminmovies" method="post" enctype="multipart/form-data">
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
                    <input type="text" class="form-control" placeholder="请输入电影中文名字" name="zwname">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">英文名字</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="请输入电影英文名字" name="ywname">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">电影图片</label>
                  <div class="col-sm-10">
                    <input type="file" class="form-control" placeholder="请再次输入电影图片" name="tupian">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">电影类型</label>
                  <div class="col-sm-10">
                    <select name="leixing">
                    <option value="">--请选择--</option>
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
                      <option value="">--请选择--</option>
                      @foreach($bb as $row)
                      <option value="{{$row->a_id}}">{{$row->area_name}}</option>
                      @endforeach
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">时长</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="请输入电影时长" name="shichang">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">上映时间</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="请输入电影上映时间" name="syshijian">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">上映地区</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="请输入电影上映地区" name="sydiqu">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">想看</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="请输入电影想看数量" name="xiangkan">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">票房</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="请输入电影票房" name="piaofang">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">电影评分</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="请输入电影评分" name="pingfen">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">简介</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="请输入电影简介" name="jianjie">
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
@section('title','电影添加')
