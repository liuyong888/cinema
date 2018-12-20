<!DOCTYPE html>
<html lang="en">
  <head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="keywords" content="" />
  <title>@yield('title')</title>

  <!-- ========== Css Files ========== -->
  <link href="/static/Admin/css/root.css" rel="stylesheet">


  </head>
  <body>
  <!-- Start Page Loading -->
  <div class="loading"><img src="/static/Admin/img/loading.gif" alt="loading-img"></div>
  <!-- End Page Loading -->
 <!-- //////////////////////////////////////////////////////////////////////////// --> 
  <!-- START TOP -->
  <div id="top" class="clearfix">

    <!-- Start App Logo -->
    <div class="applogo">
      <a href="index.html" class="logo">Modern</a>
    </div>
    <!-- End App Logo -->
    
     <!-- Start Sidebar Show Hide Button -->
    <a href="#" class="sidebar-open-button"><i class="fa fa-bars"></i></a>
    <a href="#" class="sidebar-open-button-mobile"><i class="fa fa-bars"></i></a>
    <!-- End Sidebar Show Hide Button -->
    
     <!-- page title -->
    <h1 class="title">Dashboard</h1>
      <!-- End page title -->

   
    
    

   
    
     


    <!-- Start Sidepanel Show-Hide Button -->
    <a href="#sidepanel" class="sidepanel-open-button"><i class="fa fa-th-large"></i></a>
    <!-- End Sidepanel Show-Hide Button -->

    <!-- Start Top Right -->
    <ul class="top-right">
 <!-- Start Searchbox -->
    <form class="searchform">
      <input type="text" class="searchbox" id="searchbox" placeholder="Search">
      <span class="searchbutton"><i class="fa fa-search"></i></span>
    </form>
    <!-- End Searchbox -->
    <li class="dropdown link">
      <a href="#" data-toggle="dropdown" class="dropdown-toggle hdbutton">Add New <span class="caret"></span></a>
        <ul class="dropdown-menu dropdown-menu-list">
          <li><a href="#"><i class="fa falist fa-suitcase"></i>Product</a></li>
          <li><a href="#"><i class="fa falist fa-comments-o"></i>Blog Post</a></li>
          <li><a href="#"><i class="fa falist fa-image"></i>Image Gallery</a></li>
          <li><a href="#"><i class="fa falist fa-video-camera"></i>Video Gallery</a></li>
        </ul>
    </li>

    <li class="link">
      <a href="#" class="notifications">6</a>
    </li>

    

    </ul>
    <!-- End Top Right -->

  </div>
  <!-- END TOP -->
 <!-- //////////////////////////////////////////////////////////////////////////// --> 


<!-- //////////////////////////////////////////////////////////////////////////// --> 
<!-- START SIDEBAR -->
<div class="sidebar clearfix">
<div class="dropdown link">
      <a href="#" data-toggle="dropdown" class="dropdown-toggle profilebox"><img src="/static/Admin/img/profileimg.png" alt="img">
     <div class="user-name"><b>Stephen Doe</b><span class="caret"></span></div></a>
        <ul class="dropdown-menu dropdown-menu-list dropdown-menu-right">
          <li role="presentation" class="dropdown-header">Profile</li>
          <li><a href="#"><i class="fa falist fa-envelope"></i>Inbox<span class="badge label-danger">4</span></a></li>
          <li><a href="#"><i class="fa falist fa-file-o"></i>Files</a></li>
          <li><a href="#"><i class="fa falist fa-gear"></i>Settings</a></li>
          <li><a href="#"><i class="fa falist fa-lock"></i> Lockscreen</a></li>
          <li><a href="#"><i class="fa falist fa-power-off"></i> Logout</a></li>
        </ul>
       
       
    </div>
<ul class="sidebar-panel nav">
  <li class="sidetitle">MAIN</li>
  <li><a href="/admin"><span class="icon color5"><i class="fa fa-home"></i></span>首页<span class="label label-red">2</span></a></li>
  <li><a href="#"><span class="icon color7"><i class="fa fa-flask"></i></span>会员管理<span class="caret"></span></a>
    <ul>
      <li><a href="/adminmember">会员列表</a></li>
      <li><a href="/adminmember/create">会员添加</a></li>
    </ul>
  </li>
  <li><a href="#"><span class="icon color8"><i class="fa fa-flask"></i></span>管理员管理<span class="caret"></span></a>
    <ul>
      <li><a href="/adminuser">管理员列表</a></li>
      <li><a href="/adminuser/create">管理员添加</a></li>
<<<<<<< HEAD
    </ul>
  </li>
  <!-- <li><a href="charts.html"><span class="icon color8"><i class="fa fa-bar-chart"></i></span>Charts</a></li> -->
  <li><a href="#"><span class="icon color9"><i class="fa fa-th"></i></span>影院管理<span class="caret"></span></a>
    <ul>
      <li><a href="/admincinemas">影院列表</a></li>
      <li><a href="/admincinemas/create">影院添加</a></li>
    </ul>
  </li>
  <li><a href="#"><span class="icon color9"><i class="fa fa-th"></i></span>场次管理<span class="caret"></span></a>
    <ul>
      <li><a href="/adminrelss">场次列表</a></li>
      <li><a href="/adminrelss/create">场次添加</a></li>
    </ul>
  </li>
  <li><a href="#"><span class="icon color10"><i class="fa fa-check-square-o"></i></span>Forms<span class="caret"></span></a>
    <ul>
      <li><a href="form-elements.html">Form Elements</a></li>
      <li><a href="layouts.html">Form Layouts</a></li>
      <li><a href="text-editors.html">Text Editors</a></li>
    </ul>
  </li>
  <li><a href="widgets.html"><span class="icon color11"><i class="fa fa-diamond"></i></span>Widgets<span class="label label-blue">7</span></a></li>
  <li><a href="calendar.html"><span class="icon color8"><i class="fa fa-calendar-o"></i></span>Calendar<span class="label label-danger">NEW</span></a></li>

  <li><a href="#"><span class="icon color14"><i class="fa fa-paper-plane-o"></i></span>Pages<span class="caret"></span></a>
    <ul>
      <li><a href="social-profile.html">Social Profile</a></li>
      <li><a href="invoice.html">Invoice<span class="label label-danger">NEW</span></a></li>
      <li><a href="login.html">Login Page</a></li>
      <li><a href="register.html">Register</a></li>
      <li><a href="forgot-password.html">Forgot Password</a></li>
      <li><a href="lockscreen.html">Lockscreen</a></li>
      <li><a href="blank.html">Blank Page</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="404.html">404 Page</a></li>
      <li><a href="500.html">500 Page</a></li>
    </ul>
  </li>
</ul>

<ul class="sidebar-panel nav">
  <li class="sidetitle">MORE</li>
    <li><a href="typography.html"><span class="icon color12"><i class="fa fa-font"></i></span>Typography</a></li>
  <li><a href="grid.html"><span class="icon color15"><i class="fa fa-columns"></i></span>Grid</a></li>
  <li><a href="customizable.html"><span class="icon color10"><i class="fa fa-lightbulb-o"></i></span>Customizable</a></li>
  <li><a href="helper-classes.html"><span class="icon color8"><i class="fa fa-code"></i></span>Helper Classes</a></li>
</ul>

=======
      <li><a href="/rolelist">角色列表</a></li>
      <li><a href="/rolelist/create">角色添加</a></li>
      <li><a href="/authlist">权限列表</a></li>
      <li><a href="/authlist/create">权限添加</a></li>
    </ul>
  </li>
    <li><a href="#"><span class="icon color8"><i class="fa fa-flask"></i></span>分类管理<span class="caret"></span></a>
    <ul>
      <li><a href="/filmtype">电影类型列表</a></li>
      <li><a href="/filmtype/create">电影类型添加</a></li>
       <li><a href="/filmarea">电影地区列表</a></li>
      <li><a href="/filmarea/create">电影地区添加</a></li>
    </ul>
  </li>
  <li><a href="#"><span class="icon color8"><i class="fa fa-flask"></i></span>友情链接管理<span class="caret"></span></a>
    <ul>
      <li><a href="/adminlink">友情链接列表</a></li>
      <li><a href="/adminlink/create">友情链接添加</a></li>
    </ul>
  </li>
  <li><a href="#"><span class="icon color8"><i class="fa fa-flask"></i></span>轮播图管理<span class="caret"></span></a>
    <ul>
      <li><a href="/adminpic">轮播图列表</a></li>
      <li><a href="/adminpic/create">轮播图添加</a></li>
    </ul>
  </li>
  <li><a href="#"><span class="icon color8"><i class="fa fa-flask"></i></span>电影管理<span class="caret"></span></a>
    <ul>
      <li><a href="/adminmovies">电影列表</a></li>
      <li><a href="/adminmovies/create">电影添加</a></li>
    </ul>
  </li>

  
>>>>>>> 84c72b6d29250350ab42b0d9c9455224f8aae16a


</div>
<!-- END SIDEBAR -->
<!-- //////////////////////////////////////////////////////////////////////////// --> 

 <!-- //////////////////////////////////////////////////////////////////////////// --> 
<!-- START CONTENT -->
<div class="content">

 


 <!-- //////////////////////////////////////////////////////////////////////////// --> 
<!-- START CONTAINER -->
<div class="container-widget">

  <!-- Start Top Stats -->
  @if(session('success'))
      <div class="Modern-alert Modern-alert-icon Modern-alert-click alert3">
          <i class="fa fa-check"></i>
          {{session('success')}}
        </div>
    
     @endif
     
   @if(session('error'))   
    <div class="Modern-alert Modern-alert-icon Modern-alert-click alert5">
        <i class="fa fa-warning"></i>
        {{session('error')}}
      </div> 
      
  @endif
  @section('content')
  @show
  
  <!-- End Top Stats -->


  <!-- Start First Row -->
  
  <!-- End Fifth Row -->




</div>
<!-- END CONTAINER -->
 <!-- //////////////////////////////////////////////////////////////////////////// --> 




</div>
<!-- End Content -->
 <!-- //////////////////////////////////////////////////////////////////////////// --> 


<!-- //////////////////////////////////////////////////////////////////////////// --> 
<!-- START SIDEPANEL -->
<div role="tabpanel" class="sidepanel">

  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active"><a href="#today" aria-controls="today" role="tab" data-toggle="tab">TODAY</a></li>
    <li role="presentation"><a href="#tasks" aria-controls="tasks" role="tab" data-toggle="tab">TASKS</a></li>
    <li role="presentation"><a href="#chat" aria-controls="chat" role="tab" data-toggle="tab">CHAT</a></li>
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">

    <!-- Start Today -->
    <div role="tabpanel" class="tab-pane active" id="today">

      <div class="sidepanel-m-title">
        Today
        <span class="left-icon"><a href="#"><i class="fa fa-refresh"></i></a></span>
        <span class="right-icon"><a href="#"><i class="fa fa-file-o"></i></a></span>
      </div>

      <div class="gn-title">NEW</div>

      <ul class="list-w-title">
        <li>
          <a href="#">
            <span class="label label-danger">ORDER</span>
            <span class="date">9 hours ago</span>
            <h4>New Design</h4>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </a>
        </li>
        <li>
          <a href="#">
            <span class="label label-success">COMMENT</span>
            <span class="date">14 hours ago</span>
            <h4>Stephen Doe</h4>
           Sed accumsan venenatis lectus sed sollicitudin. Duis in odio ex.
          </a>
        </li>
        <li>
          <a href="#">
            <span class="label label-info">Job Meeting</span>
            <span class="date">at 2:30 PM</span>
            <h4>Developer Team</h4>
          Sed elementum varius enim. In vel tincidunt lorem.
          </a>
        </li>
        <li>
          <a href="#">
            <span class="label label-warning">EVENT</span>
            <span class="date">3 days left</span>
            <h4>New year Party</h4>
            Etiam auctor porta augue sit amet facilisis. Sed libero nisi, scelerisque.
          </a>
        </li>
      </ul>

    </div>
    <!-- End Today -->

    <!-- Start Tasks -->
    <div role="tabpanel" class="tab-pane" id="tasks">

      <div class="sidepanel-m-title">
        To-do List
        <span class="left-icon"><a href="#"><i class="fa fa-pencil"></i></a></span>
        <span class="right-icon"><a href="#"><i class="fa fa-trash"></i></a></span>
      </div>

      <div class="gn-title">TODAY</div>

      <ul class="todo-list">
        <li class="checkbox checkbox-primary">
          <input id="checkboxside1" type="checkbox"><label for="checkboxside1">Pellentesque habitant morbi</label>
        </li>
        
        <li class="checkbox checkbox-primary">
          <input id="checkboxside2" type="checkbox"><label for="checkboxside2"><b>May 12, 6:30 pm</b> Meeting with Team</label>
        </li>
        
        <li class="checkbox checkbox-warning">
          <input id="checkboxside3" type="checkbox"><label for="checkboxside3">Malesuada fames ac turpis egestase</label>
        </li>
        
        <li class="checkbox checkbox-info">
          <input id="checkboxside4" type="checkbox"><label for="checkboxside4">Tristique senectus et netus</label>
        </li>
        
        <li class="checkbox checkbox-danger">
          <input id="checkboxside5" type="checkbox"><label for="checkboxside5">Consectetur adipiscing elit</label>
        </li>
      </ul>

      <div class="gn-title">TOMORROW</div>
      <ul class="todo-list">
        <li class="checkbox checkbox-warning">
          <input id="checkboxside6" type="checkbox"><label for="checkboxside6">Lorem ipsum dolor sit amet</label>
        </li>
        
        <li class="checkbox checkbox-success">
          <input id="checkboxside7" type="checkbox"><label for="checkboxside7">Update regularly with offers</label>
        </li>
        
        <li class="checkbox checkbox-info">
          <input id="checkboxside8" type="checkbox"><label for="checkboxside8">Tristique senectus et netus</label>
        </li>

      </ul>
    </div>    
    <!-- End Tasks -->

    <!-- Start Chat -->
    <div role="tabpanel" class="tab-pane" id="chat">

      <div class="sidepanel-m-title">
        Friend List
        <span class="left-icon"><a href="#"><i class="fa fa-pencil"></i></a></span>
        <span class="right-icon"><a href="#"><i class="fa fa-trash"></i></a></span>
      </div>

      <div class="gn-title">ONLINE MEMBERS (3)</div>
      <ul class="group">
        <li class="member"><a href="#"><img src="/static/Admin/img/profileimg.png" alt="img"><b>John Doe</b>London</a><span class="status online"></span></li>
        <li class="member"><a href="#"><img src="/static/Admin/img/profileimg2.png" alt="img"><b>Sarah Smith</b>New York</a><span class="status busy"></span></li>
        <li class="member"><a href="#"><img src="/static/Admin/img/profileimg3.png" alt="img"><b>Mark Doe</b>New York</a><span class="status away"></span></li>
        <li class="member"><a href="#"><img src="/static/Admin/img/profileimg4.png" alt="img"><b>Kendra Hall</b>California</a><span class="status online"></span></li>
      </ul>

      <div class="gn-title">OFFLINE MEMBERS (8)</div>
     <ul class="group">
        <li class="member"><a href="#"><img src="/static/Admin/img/profileimg5.png" alt="img"><b>Stephen Doe</b>New York</a><span class="status offline"></span></li>
        <li class="member"><a href="#"><img src="/static/Admin/img/profileimg6.png" alt="img"><b>Sarah Smith</b>Melborne</a><span class="status offline"></span></li>
      </ul>

      <form class="search">
        <input type="text" class="form-control" placeholder="Search a Friend...">
      </form>
    </div>
    <!-- End Chat -->

  </div>

</div>
<!-- END SIDEPANEL -->
<!-- //////////////////////////////////////////////////////////////////////////// --> 
<!-- Start Footer -->
<div class="row footer">
  <div class="col-md-6 text-left">
<<<<<<< HEAD
  Copyright &copy; 2018.Company name All rights reserved.<a target="_blank" href="http://www.aspku.com/moban/">&#x7F51;&#x9875;&#x6A21;&#x677F;</a>
=======
 <!--  Copyright &copy; 2018.Company name All rights reserved.<a target="_blank" href="http://www.aspku.com/moban/">&#x7F51;&#x9875;&#x6A21;&#x677F;</a> -->
>>>>>>> 84c72b6d29250350ab42b0d9c9455224f8aae16a
  </div>
  <div class="col-md-6 text-right">
    
  </div> 
</div>
<!-- End Footer -->

<!-- ================================================
jQuery Library
================================================ -->
<script type="text/javascript" src="/static/Admin/js/jquery.min.js"></script>

<!-- ================================================
Bootstrap Core JavaScript File
================================================ -->
<script src="/static/Admin/js/bootstrap/bootstrap.min.js"></script>

<!-- ================================================
Plugin.js - Some Specific JS codes for Plugin Settings
================================================ -->
<script type="text/javascript" src="/static/Admin/js/plugins.js"></script>

<!-- ================================================
Bootstrap Select
================================================ -->
<script type="text/javascript" src="/static/Admin/js/bootstrap-select/bootstrap-select.js"></script>

<!-- ================================================
Bootstrap Toggle
================================================ -->
<script type="text/javascript" src="/static/Admin/js/bootstrap-toggle/bootstrap-toggle.min.js"></script>

<!-- ================================================
Bootstrap WYSIHTML5
================================================ -->
<!-- main file -->
<script type="text/javascript" src="/static/Admin/js/bootstrap-wysihtml5/wysihtml5-0.3.0.min.js"></script>
<!-- bootstrap file -->
<script type="text/javascript" src="/static/Admin/js/bootstrap-wysihtml5/bootstrap-wysihtml5.js"></script>

<!-- ================================================
Summernote
================================================ -->
<script type="text/javascript" src="/static/Admin/js/summernote/summernote.min.js"></script>

<!-- ================================================
Flot Chart
================================================ -->
<!-- main file -->
<script type="text/javascript" src="/static/Admin/js/flot-chart/flot-chart.js"></script>
<!-- time.js -->
<script type="text/javascript" src="/static/Admin/js/flot-chart/flot-chart-time.js"></script>
<!-- stack.js -->
<script type="text/javascript" src="/static/Admin/js/flot-chart/flot-chart-stack.js"></script>
<!-- pie.js -->
<script type="text/javascript" src="/static/Admin/js/flot-chart/flot-chart-pie.js"></script>
<!-- demo codes -->
<script type="text/javascript" src="/static/Admin/js/flot-chart/flot-chart-plugin.js"></script>

<!-- ================================================
Chartist
================================================ -->
<!-- main file -->
<script type="text/javascript" src="/static/Admin/js/chartist/chartist.js"></script>
<!-- demo codes -->
<script type="text/javascript" src="/static/Admin/js/chartist/chartist-plugin.js"></script>

<!-- ================================================
Easy Pie Chart
================================================ -->
<!-- main file -->
<script type="text/javascript" src="/static/Admin/js/easypiechart/easypiechart.js"></script>
<!-- demo codes -->
<script type="text/javascript" src="/static/Admin/js/easypiechart/easypiechart-plugin.js"></script>

<!-- ================================================
Sparkline
================================================ -->
<!-- main file -->
<script type="text/javascript" src="/static/Admin/js/sparkline/sparkline.js"></script>
<!-- demo codes -->
<script type="text/javascript" src="/static/Admin/js/sparkline/sparkline-plugin.js"></script>

<!-- ================================================
Rickshaw
================================================ -->
<!-- d3 -->
<script src="/static/Admin/js/rickshaw/d3.v3.js"></script>
<!-- main file -->
<script src="/static/Admin/js/rickshaw/rickshaw.js"></script>
<!-- demo codes -->
<script src="/static/Admin/js/rickshaw/rickshaw-plugin.js"></script>

<!-- ================================================
Data Tables
================================================ -->
<script src="/static/Admin/js/datatables/datatables.min.js"></script>

<!-- ================================================
Sweet Alert
================================================ -->
<script src="/static/Admin/js/sweet-alert/sweet-alert.min.js"></script>

<!-- ================================================
Modern Alert
================================================ -->
<script src="/static/Admin/js/Modern-alert/main.js"></script>

<!-- ================================================
Gmaps
================================================ -->
<!---<script src="http://maps.google.com/maps/api/js?sensor=true"></script>
<script src="/static/Admin/js/gmaps/gmaps.js"></script>
<script src="/static/Admin/js/gmaps/gmaps-plugin.js"></script>--->

<!-- ================================================
jQuery UI
================================================ -->
<script type="text/javascript" src="/static/Admin/js/jquery-ui/jquery-ui.min.js"></script>

<!-- ================================================
Moment.js
================================================ -->
<script type="text/javascript" src="/static/Admin/js/moment/moment.min.js"></script>

<!-- ================================================
Full Calendar
================================================ -->
<script type="text/javascript" src="/static/Admin/js/full-calendar/fullcalendar.js"></script>

<!-- ================================================
Bootstrap Date Range Picker
================================================ -->
<script type="text/javascript" src="/static/Admin/js/date-range-picker/daterangepicker.js"></script>

<!-- ================================================
Below codes are only for index widgets
================================================ -->
<!-- Today Sales -->
<script>

// set up our data series with 50 random data points

var seriesData = [ [], [], [] ];
var random = new Rickshaw.Fixtures.RandomData(20);

for (var i = 0; i < 110; i++) {
  random.addData(seriesData);
}

// instantiate our graph!

/* ======================================================================
TIME SCALE
====================================================================== */
var seriesData = [ [], [], []];
var random = new Rickshaw.Fixtures.RandomData(1540000);

for (var i = 0; i < 200; i++) {
    random.addData(seriesData);
}

var graph = new Rickshaw.Graph( {
  element: document.getElementById("rickshaw-timescale"),
  renderer: 'area',
  series: [
    {
      color: "#3f51b5",
      data: seriesData[0],
      name: 'Technology'
    }, 
    
    {
      color: "#7183e8",
      data: seriesData[1],
      name: 'Creative'
    }, 
    
    {
      color: "#aab6fc",
      data: seriesData[2],
      name: 'Ecommerce'
    }
  ]
} );

graph.render();

var hoverDetail = new Rickshaw.Graph.HoverDetail( {
  graph: graph,
  formatter: function(series, x, y) {
    var date = '<span class="date">' + new Date(x * 1000).toUTCString() + '</span>';
    var swatch = '<span class="detail_swatch" style="background-color: ' + series.color + '"></span>';
    var content = swatch + series.name + ": " + parseInt(y) + '<br>' + date;
    return content;
  }
} );

</script>

<!-- Today Activity -->
<script>
// set up our data series with 50 random data points

var seriesData = [ [], [], [] ];
var random = new Rickshaw.Fixtures.RandomData(20);

for (var i = 0; i < 50; i++) {
  random.addData(seriesData);
}

// instantiate our graph!

var graph = new Rickshaw.Graph( {
  element: document.getElementById("rickshaw-bars"),
  renderer: 'bar',
  series: [
    {
      color: "#303f9f",
      data: seriesData[0],
      name: 'Job'
    }, {
      color: "#ef4836",
      data: seriesData[1],
      name: 'Feed'
    }
  ]
} );

graph.render();

var hoverDetail = new Rickshaw.Graph.HoverDetail( {
  graph: graph,
  formatter: function(series, x, y) {
    var date = '<span class="date">' + new Date(x * 1000).toUTCString() + '</span>';
    var swatch = '<span class="detail_swatch" style="background-color: ' + series.color + '"></span>';
    var content = swatch + series.name + ": " + parseInt(y) + '<br>' + date;
    return content;
  }
} );
</script>

<script>
var options = {
  scaleColor: false,
  trackColor: 'rgba(255, 255, 255, 0.5)',
  barColor: '#fff',
  lineWidth: 8,
  lineCap: 'butt',
};
</script>

</body>
<<<<<<< HEAD
</html>
=======
</html>
>>>>>>> 84c72b6d29250350ab42b0d9c9455224f8aae16a
