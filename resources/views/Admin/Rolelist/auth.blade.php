@extends("Admin.AdminPublic.public")
@section('content')
<div class="row">
  <div class="col-md-12 col-lg-12">
      <div class="panel panel-default">

        <div class="panel-title">
          权限信息
          <ul class="panel-tools">
            <li><a class="icon minimise-tool"><i class="fa fa-minus"></i></a></li>
            <li><a class="icon expand-tool"><i class="fa fa-expand"></i></a></li>
            <li><a class="icon closed-tool"><i class="fa fa-times"></i></a></li>
          </ul>
          <h4>当前角色:{{$role->name}}的权限信息</h4>
        </div>
            <form action="/saveauth" method="post">
                <div class="panel-body">
              
              <!-- <h4>当前角色:{{$role->name}}的权限信息</h4> -->
              <div class="col-md-12">
                @foreach($auth as $row)
                  <div class="checkbox checkbox-primary col-md-4" style="float: left;margin-top: 5px;">
                      <input id="checkbox{{$row->id}}" type="checkbox" name="nids[]" value="{{$row->id}}" @if(in_array($row->id,$nids)) checked @endif>
                      <label for="checkbox{{$row->id}}">
                          {{$row->name}}
                      </label>
                  </div>
                  @endforeach
              </div>
              <div style="clear:both;"></div>
                {{csrf_field()}}
                <input type="hidden" name="rid" value="{{$role->id}}">
               <button type="submit" class="btn btn-rounded btn-default" value="分配权限">分配权限</button>
               <button class="btn btn-rounded" type="reset">Reset</button>

           


            </div>
            </form>
            

      </div>
    </div>
</div>
@endsection
@section('title','分配权限')