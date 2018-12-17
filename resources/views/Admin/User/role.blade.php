@extends("Admin.AdminPublic.public")
@section('content')
<div class="row">
  <div class="col-md-12">
  <div class="panel panel-default">

    <div class="panel-title">
      角色信息
    </div>

        <div class="panel-body">
          <form class="fieldset-form" action="/adminsaverole" method="post">
            <fieldset>
              <legend>当前用户:{{$info->name}}的角色信息</legend>
                <div class="col-md-6">
                    @foreach($role as $row)
                    <div class="checkbox checkbox-info">
                        <input id="checkbox{{$row->id}}" type="checkbox" name="rids[]" value="{{$row->id}}" @if(in_array($row->id,$rids)) checked @endif>
                        <label for="checkbox{{$row->id}}">
                            {{$row->name}}
                        </label>
                    </div>
                    @endforeach
                    {{csrf_field()}}
                    <input type="hidden" name="uid" value="{{$info->id}}">
                  <button type="submit" class="btn btn-rounded btn-default">分配角色</button>
                  <button type="reset" class="btn btn-rounded">Reset</button>
                </fieldset>
              </form>

            </div>

      </div>
    </div>
</div>
@endsection
@section('title','分配角色')