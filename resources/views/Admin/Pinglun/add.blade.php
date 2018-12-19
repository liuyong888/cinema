@extends('Admin.AdminPublic.public')
@section('content')
<div class="row">
 <div class="col-md-12">
      <div class="panel panel-default">

        <div class="panel-title">
          电影评论添加
          <ul class="panel-tools">
            <li><a class="icon minimise-tool"><i class="fa fa-minus"></i></a></li>
            <li><a class="icon expand-tool"><i class="fa fa-expand"></i></a></li>
            <li><a class="icon closed-tool"><i class="fa fa-times"></i></a></li>
          </ul>
        </div>

            <div class="panel-body">
              <form class="form-horizontal" action="/adminpinglun" method="post" enctype="multipart/form-data">
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
                  <label class="col-sm-2 control-label form-label">用户名字</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="请输入电影英文名字" name="user_name">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">用户头像</label>
                  <div class="col-sm-10">
                    <input type="file" class="form-control" placeholder="请再次输入电影图片" name="user_touxiang">
                  </div>
                </div>

                <!-- <div class="form-group">
                  <label class="col-sm-2 control-label form-label">评论时间</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="input122" placeholder="请输入电影类型" name="addtime">
                  </div>
                </div> -->

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">评论内容</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="input122" placeholder="请输入电影地区" name="content">
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">评论状态</label>
                  <div class="col-sm-10">
                     <div class="radio radio-info radio-inline">
                        <input type="radio" id="inlineRadio0" value="0" name="status" checked >
                        <label for="inlineRadio0">显示</label>
                    </div>
                    <div class="radio radio-info radio-inline">
                        <input type="radio" id="inlineRadio1" value="1" name="status">
                        <label for="inlineRadio1">禁用</label>
                    </div>
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
@section('title','电影评论添加')
