@extends("Admin.AdminPublic.public")
@section('content')
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<div class="row">  
  <div class="col-md-12 col-lg-12">
      <div class="panel panel-default">
        <div class="panel-title">
          场次修改
          <ul class="panel-tools">
            <li><a class="icon minimise-tool"><i class="fa fa-minus"></i></a></li>
            <li><a class="icon expand-tool"><i class="fa fa-expand"></i></a></li>
            <li><a class="icon closed-tool"><i class="fa fa-times"></i></a></li>
          </ul>
        </div>
            <div class="panel-body">
              <form class="form-horizontal" action="/adminrelss/{{$info->id}}" method="POST" id="from" onsubmit="return confirm()">

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">电影:</label>
                  <div class="col-sm-10">
                    <!-- <input type="text" class="form-control" id="input11"> -->
                    <select name="movie">
                      @foreach($m_name as $row)
                      <option value="{{$row->id}},{{$row->zwname}}" <?php echo ($info->m_name==$row->zwname)?'selected':'';?> >{{$row->zwname}}</option>
                      @endforeach
                    </select>
                  </div>
                </div>
                
                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">选择影院:</label>
                  <div class="col-sm-10">
                    <!-- <input type="text" class="form-control" id="input11"> -->
                    <select name="cinema">
                      @foreach($c_name as $row)
                      <option value="{{$row->id}},{{$row->name}}" <?php echo ($info->c_name==$row->name)?'selected':'';?> >{{$row->name}}</option>
                      @endforeach
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">选择播放厅:</label>
                  <div class="col-sm-10">
                    <!-- <input type="text" class="form-control"> -->
                    <select name="hall">
                      @foreach($h_name as $row)
                      <option value="{{$row->id}},{{$row->HallName}}" <?php echo ($info->h_name==$row->HallName)?'selected':'';?> >{{$row->HallName}}</option>
                      @endforeach
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">播放类型:</label>
                  <div class="col-sm-10">
                    <!-- <input type="text" class="form-control"> -->
                    <select name="play_type">
                      <option value="2D" <?php echo ($info->play_type=="2D")?'selected':'';?> >2D</option>
                      <option value="3D" <?php echo ($info->play_type=="3D")?'selected':'';?> >3D</option>
                    </select>         
                  </div>                  
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">价格:</label>
                  <div class="col-sm-2">
                    <input type="text" name="price" class="form-control" value="{{$info->m_price}}">
                  </div>元
                </div>

                <div class="form-group">
                  <label class="col-sm-2 control-label form-label">放映日期:</label>
                  <div class="col-sm-10">
                    <!-- <input type="text" class="form-control" id="input122"> -->
                    <select name="time">
                    <?php 
                      $date=date('Y-m-d H:i:s');
                      for($i=1;$i<6;$i++){
                           $arr_date[]=date('Y-m-d',strtotime('+'.$i.' day'));
                      }
                    ?>                    
                      @foreach($arr_date as $row)
                      <option value="{{$row}}" <?php echo ($info->time==$row)?'selected':'';?> >{{$row}}</option>
                      @endforeach
                    </select>&nbsp;&nbsp;开始时间:
                    <select name="start_time">
                    <?php 
                      for($i=0;$i<24;$i++){
                        for ($j=0; $j <60 ; $j++) { 
                          $old_time=$info->start_time;
                          $new_time=sprintf("%02d",$i).':'.sprintf("%02d",$j);
                          $s=($old_time==$new_time)?'selected':'';
                          echo "<option {$s} value=".$new_time.'>'.$new_time.'</option>';
                        }
                      }
                    ?>                     
                    </select>
                    &nbsp;&nbsp;结束时间:
                    <select name="end_time">
                    <?php 
                      for($i=0;$i<24;$i++){
                        for ($j=0; $j <60 ; $j++) { 
                          $old_time=$info->end_time;
                          $new_time=sprintf("%02d",$i).':'.sprintf("%02d",$j);
                          $s=($old_time==$new_time)?'selected':'';
                          echo "<option {$s} value=".$new_time.'>'.$new_time.'</option>';
                        }
                      }
                    ?>                       
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-deonclick="fault" return confirm()">修改</button>
                  </div>
                </div>
                    {{ csrf_field() }}
                    {{ method_field('PUT') }}
              </form>

            </div>
      </div>
    </div>
</div>
<script>   
  // 阻止表单提交
  function confirm(){
    val=$.trim($('input[name="price"]').val());
    // alert(val);
    if(val==''){
      alert('价格不能为空!');
      return false;
    }
  }  
</script>
@endsection
@section('title','场次修改')
