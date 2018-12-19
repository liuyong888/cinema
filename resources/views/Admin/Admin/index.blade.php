@extends("Admin.AdminPublic.public")
@section('content')
<div class="row">

    <!-- Start Chart Daily -->
    <div class="col-md-12">
      <div class=" panel-widget widget chart-with-stats clearfix" style="height:450px;">

        <div class="col-sm-12" style="height:450px;">
          <h4 class="title">TODAY SALES<small>Last update: 2 Hours ago</small></h4>
          
           <div id="rickshaw-timescale" class="bigchart"></div>
              <div id="slider"></div>
        </div>
        <div class="right">
         
          <!-- start stats -->
          <ul class="widget-inline-list clearfix">
            <li class="col-4 green-color"><div class="block"><span>2784</span>Ecommerce</div><//li>
            <li class="col-4 blue-color"><div class="block"><span>457</span>Creative</i></div></li>
            <li class="col-4 red-color"><div class="block"><span>69</span>Technology</i></div></li>
          </ul>
          <!-- end stats -->
        </div>


      </div>
    </div>
    <!-- End Chart Daily -->


 

  </div>  
  <!-- End First Row -->
  
  <div class="row1">
  <div class="col-md-12">
    <div id="sum_box" class="mbl">
      <div class="col-sm-6 col-md-3 block-space">
          <div class="panel profit db mbm">
              <div class="panel-body">
                  <h4 class="value"><span data-counter="" data-start="10" data-end="50" data-step="1" data-duration="0">
                      </span><span>$</span></h4>
                  
                  <div class="progress progress-striped active mbn">
                      <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                          style="width: 80%;" class="progress-bar progress-bar-success">
                          <span class="sr-only">80% Complete (success)</span></div>
                  </div>
                  <p class="description">Profit description</p>
              </div>
          </div>
      </div>
      <div class="col-sm-6 col-md-3 block-space">
          <div class="panel income db mbm">
              <div class="panel-body">
              <h4 class="value"><span>215</span><span>$</span></h4>
                <div class="progress progress-striped active mbn">
                      <div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                          style="width: 60%;" class="progress-bar progress-bar-info">
                          <span class="sr-only">60% Complete (success)</span></div>
                  </div>
               <p class="description">Income detail</p>
              </div>
          </div>
      </div>
      <div class="col-sm-6 col-md-3 block-space">
          <div class="panel task db mbm">
              <div class="panel-body">
            <h4 class="value"><span>215</span></h4>
                 <div class="progress  progress-striped active mbn">
                      <div role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                          style="width: 50%;" class="progress-bar progress-bar-danger">
                          <span class="sr-only">50% Complete (success)</span></div>
                  </div>
                  <p class="description">Task completed</p>
              </div>
          </div>
      </div>
      <div class="col-sm-6 col-md-3">
          <div class="panel visit db mbm">
              <div class="panel-body">
                  <h4 class="value"><span>128</span></h4>
                   <div class="progress  progress-striped active mbn">
                      <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"
                          style="width: 70%;" class="progress-bar progress-bar-warning">
                          <span class="sr-only">70% Complete (success)</span></div>
                  </div>
                   <p class="description">Visitor description</p>
              </div>
          </div>

      </div>
  </div>

  </div>
  </div>



  <!-- Start Second Row -->
  <div class="row">



    

    <!-- Start Server Status -->
    <div class="col-md-12 col-lg-9">
      <div class="panel panel-widget" style="height:380px;">
        <div class="panel-title">
          SERVER STATUS <span class="label label-default">247</span>
          <ul class="panel-tools panel-tools-hover">
            <li><a class="icon"><i class="fa fa-refresh"></i></a></li>
            <li><a class="icon closed-tool"><i class="fa fa-times"></i></a></li>
          </ul>
        </div>
        <div class="panel-body">

          <ul class="widget-inline-list clearfix">
            <li class="col-2"><span>28.9GB</span>Total Usage</li>
            <li class="col-2"><span>92%</span>Memory Usage </li>
            <li class="col-2"><span>22%</span>CPU</li>
             <li class="col-2"><span>16%</span>Disk Usage</li>
             <li class="col-2"><span>78%</span>Database </li>
            <li class="col-2"><span>512MB</span>Total RAM</li>
          </ul>

          <div id="realtime" class="flotchart-placeholder" style="height:190px;"></div>

        </div>
      </div>
    </div>
    <!-- End Server Status -->

   <!-- Start Today Activity -->
    <div class="col-md-12 col-lg-3">
      <div class="panel panel-widget" style="height:380px;">
        <div class="panel-title">
          TODAY ACTIVITY <span class="label label-success">9</span>
          <ul class="panel-tools panel-tools-hover">
            <li><a class="icon"><i class="fa fa-refresh"></i></a></li>
            <li><a class="icon closed-tool"><i class="fa fa-times"></i></a></li>
          </ul>
        </div>
        <div class="panel-body">

         <ul class="widget-inline-list clearfix">
            <li class="col-4"><span>1:52:22</span>Job Meeting</li>
            <li class="col-4"><span>9:30:27%</span>Daily Feeds</li>
            <li class="col-4"><span>0:11:46</span>New Project</li>
          </ul>

          <div id="rickshaw-bars" class="chart-on-bottom"></div>

        </div>
      </div>
    </div>
    <!-- End Today Activity -->


  </div>
  <!-- End Second Row -->


  <!-- Start Third Row -->
  <div class="row">


    <!-- Start General Stats -->
    <div class="col-md-12 col-lg-6">
      <div class="panel panel-widget bg-img" style="height:205px;">
        <div class="panel-title">
          General Stats
        </div>
        <div class="panel-body">

          <div class="easypie margin-b-50" data-percent="82"><span>45%</span>New User</div>
          <div class="easypie margin-b-50" data-percent="30"><span>79%</span>Order</div>
          <div class="easypie margin-b-50 margin-b-40" data-percent="62"><span>48%</span>Page View</div>
          <div class="easypie margin-b-50" data-percent="15"><span>89%</span>Client</div>
          <div class="easypie margin-b-50" data-percent="45"><span>56%</span>Storage</div>
          <div class="easypie margin-b-50" data-percent="75"><span>12%</span>Comments</div>

        </div>
      </div>
    </div>
    <!-- End General Stats -->

    <!-- Start TwitterBox -->
    <div class="col-md-6 col-lg-3">
      <div class="widget socialbox" style="background:#02A8F3; height:205px;">

        <p class="text">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <p class="text-info">18 Dec, 2015 via Phone</p>

         <div class="info-div">
        <div class="logo"><i class="fa fa-twitter"></i></div>
        <ul class="info">
          <li><i class="fa fa-reply"></i> 547</li>
          <li><i class="fa fa-star"></i> 6.781</li>
        </ul>
        </div>
      </div>
    </div>
    <!-- End TwitterBox -->

    <!-- Start FacebookBox -->
    <div class="col-md-6 col-lg-3">
      <div class="widget socialbox" style="background:#47639E; height:205px;">

        <p class="text">
          Duis in odio exter. Sed elementum varius enim. In vel tincidunt lorem.
        </p>
        <p class="text-info">26 Nov, 2015 via Phone</p>
<div class="info-div1">
        <div class="logo"><i class="fa fa-facebook"></i></div>

        <ul class="info">
          <li><i class="fa fa-thumbs-up"></i> 789</li>
          <li><i class="fa fa-comment"></i> 4.742</li>
        </ul>
</div>
      </div>
    </div>
    <!-- End FacebookBox -->

  </div>
  <!-- End Third Row -->


  <!-- Start Fourth Row -->
  <div class="row">

    <!-- Start Browser Stats -->
    <div class="col-md-12 col-lg-3">
      <div class="panel panel-widget">
        <div class="panel-title">
          Browser Stats
          <ul class="panel-tools panel-tools-hover">
            <li><a class="icon"><i class="fa fa-refresh"></i></a></li>
            <li><a class="icon minimise-tool"><i class="fa fa-minus"></i></a></li>
            <li><a class="icon expand-tool"><i class="fa fa-expand"></i></a></li>
            <li><a class="icon closed-tool"><i class="fa fa-times"></i></a></li>
          </ul>
        </div>
        <div class="panel-body">

          <ul class="basic-list">
            <li>Google Chrome <span class="right label label-default">42.8%</span></li>
            <li>Firefox <span class="right label label-danger">16.9%</span></li>
            <li>Safari <span class="right label label-success">15.5%</span></li>
            <li>Opera <span class="right label label-primary">11.8%</span></li>
            <li>Internet Explorer <span class="right label label-danger">3.2%</span></li>
            <li>Mobile <span class="right label label-warning">3%</span></li>
            <li>Others <span class="right label label-warning">0%</span></li>
          </ul>

        </div>
      </div>
    </div>
    <!-- End Browser Stats -->

    <!-- Start Orders -->
    <div class="col-md-12 col-lg-6">
      <div class="panel panel-widget">
        <div class="panel-title">
          LAST ORDERS <span class="label label-warning">87</span>
          <ul class="panel-tools">
            <li><a class="icon search-tool"><i class="fa fa-search"></i></a></li>
            <li><a class="icon minimise-tool"><i class="fa fa-minus"></i></a></li>
            <li><a class="icon expand-tool"><i class="fa fa-expand"></i></a></li>
            <li><a class="icon closed-tool"><i class="fa fa-times"></i></a></li>
          </ul>
        </div>

        <div class="panel-search">
          <form>
            <input type="text" class="form-control" placeholder="Search...">
            <i class="fa fa-search icon"></i>
          </form>
        </div>


        <div class="panel-body table-responsive">

          <table class="table table-hover table-striped">
            <thead>
              <tr>
                <td class="text-center"><i class="fa fa-trash"></i></td>
                <td>Order ID</td>
                <td>Product</td>
                <td>Buyer</td>
                <td>Date</td>
                <td>Payment</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center"><div class="checkbox margin-t-0"><input id="checkbox1" type="checkbox"><label for="checkbox1"></label></div></td>
                <td># <b>8954</b></td>
                <td>Modern Admin Template</td>
                <td>John Doe</td>
                <td>12/10/2015</td>
                <td>Credit Card</td>
              </tr>
              <tr>
                <td class="text-center"><div class="checkbox margin-t-0"><input id="checkbox2" type="checkbox"><label for="checkbox2"></label></div></td>
                <td># <b>7863</b></td>
                <td>New Year Product</td>
                <td>Sarah Smith</td>
                <td>12/10/2015</td>
                <td>Paypal</td>
              </tr>
              <tr>
                <td class="text-center"><div class="checkbox margin-t-0"><input id="checkbox3" type="checkbox"><label for="checkbox3"></label></div></td>
                <td># <b>6841</b></td>
                <td>Lorem ipsum dolor sit amet</td>
                <td>Stephen Doe</td>
                <td>12/10/2015</td>
                <td>Credit Card</td>
              </tr>
              <tr>
                <td class="text-center"><div class="checkbox margin-t-0"><input id="checkbox4" type="checkbox"><label for="checkbox4"></label></div></td>
                <td># <b>5742</b></td>
                <td>Donec gravida felis</td>
                <td>Mark Doe</td>
                <td>12/10/2015</td>
                <td>Credit Card</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
    <!-- End Orders -->


    <!-- Start Inbox -->
    <div class="col-md-12 col-lg-3">
      <div class="panel panel-widget">
        <div class="panel-title">
          Inbox <span class="label label-danger">9</span>
          <ul class="panel-tools">
            <li><a class="icon minimise-tool"><i class="fa fa-minus"></i></a></li>
            <li><a class="icon expand-tool"><i class="fa fa-expand"></i></a></li>
            <li><a class="icon closed-tool"><i class="fa fa-times"></i></a></li>
          </ul>
        </div>
        <div class="panel-body">

        <ul class="mailbox-inbox">

            <li>
              <a href="http://www.datouwang.com/" class="item clearfix">
                <img src="/static/Admin/img/profileimg.png" alt="img" class="img">
                <span class="from">John Doe</span>
                Hello, m8 how is goin ?
                <span class="date">22 May</span>
              </a>
            </li>

            <li>
              <a href="#" class="item clearfix">
                <img src="/static/Admin/img/profileimg2.png" alt="img" class="img">
                <span class="from">Sarah Smith</span>
                Problems look mighty small...
                <span class="date">22 May</span>
              </a>
            </li>

            <li>
              <a href="#" class="item clearfix">
                <img src="/static/Admin/img/profileimg3.png" alt="img" class="img">
                <span class="from">Stephen Doe</span>
                New job offer ?
                <span class="date">22 May</span>
              </a>
            </li>

            <li>
              <a href="#" class="item clearfix">
                <img src="/static/Admin/img/profileimg4.png" alt="img" class="img">
                <span class="from">Kendra Hall</span>
                Tonight Party
                <span class="date">22 May</span>
              </a>
            </li>


        </ul>

        </div>
      </div>
    </div>
    <!-- End Inbox -->

  </div>
  <!-- End Fourth Row -->


  <!-- Start Fifth Row -->
  <div class="row">


    <!-- Start Project Stats -->
    <div class="col-md-12 col-lg-6">
      <div class="panel panel-widget gray-bg">
        <div class="panel-title">
          Projects Stats <span class="label label-info">62</span>
          <ul class="panel-tools">
            <li><a class="icon minimise-tool"><i class="fa fa-minus"></i></a></li>
            <li><a class="icon expand-tool"><i class="fa fa-expand"></i></a></li>
            <li><a class="icon closed-tool"><i class="fa fa-times"></i></a></li>
          </ul>
        </div>

        <div class="panel-search">
          <form>
            <input type="text" class="form-control" placeholder="Search...">
            <i class="fa fa-search icon"></i>
          </form>
        </div>


        <div class="panel-body table-responsive">

          <table class="table table-hover">
            <thead>
              <tr>
                <td>ID</td>
                <td>Project</td>
                <td>Status</td>
                <td class="text-right">Progress</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>879</td>
                <td>Modern Dashboard Template</td>
                <td><span class="label label-default">Developing</span></td>
                <td class="text-right"> <span class="sparkline-pie"></span></td>
              </tr>
              <tr>
                <td>620</td>
                <td>iphone Application</td>
                <td><span class="label label-warning">Design</span></td>
                <td class="text-right"><span class="sparkline-pie"></span></td>
              </tr>
              <tr>
                <td>547</td>
                <td>Modern Landing Page</td>
                <td><span class="label label-info">Testing</span></td>
                <td class="text-right"><span class="sparkline-pie"></span></td>
              </tr>
              <tr>
                <td>357</td>
                <td>Ecommerce Store</td>
                <td><span class="label label-danger">Canceled</span></td>
                <td class="text-right"><span class="sparkline-pie"></span></td>
              </tr>
              <tr>
                <td>246</td>
                <td>Themesground Website Design</td>
                <td><span class="label label-primary">Reply waiting</span></td>
                <td class="text-right"><span class="sparkline-pie"></span></td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
    <!-- Start Project Stats -->


    <!-- Start Today Activity -->
    <div class="col-md-12 col-lg-3">
      <div class="panel panel-widget" style="height:435px;">
        <div class="panel-title">
          TODAY Task <span class="label label-success">6</span>
          <ul class="panel-tools panel-tools-hover">
            <li><a class="icon"><i class="fa fa-refresh"></i></a></li>
            <li><a class="icon closed-tool"><i class="fa fa-times"></i></a></li>
          </ul>
        </div>
        <div class="panel-body">

          
           <div id="chartist-gauge" class="ct-chart ct-perfect-fourth"></div>
           <br>
<ul class="widget-inline-list clearfix">
            <li class="col-4"><span>15%</span>In Progress</li>
            <li class="col-4"><span>70%</span>Completed</li>
            <li class="col-4"><span>35%</span>Pending</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- End Today Activity -->



    <!-- Start Teammates -->
    <div class="col-md-12 col-lg-3">
      <div class="panel panel-info panel-widget">
        <div class="panel-title">
          Team Members
        </div>
        <div class="panel-body">
          <ul class="basic-list image-list">
            <li><img src="/static/Admin/img/profileimg.png" alt="img" class="img"><b>John Doe</b><span class="desc">Designer</span></li>
            <li><img src="/static/Admin/img/profileimg2.png" alt="img" class="img"><b>Sarah Smith </b><span class="desc">Front-End Developer</span></li>
            <li><img src="/static/Admin/img/profileimg3.png" alt="img" class="img"><b>Stephen Doe</b><span class="desc">Back-End Developer</span></li>
            <li><img src="/static/Admin/img/profileimg4.png" alt="img" class="img"><b>Kendra Hall</b><span class="desc">Marketing</span></li>
            <li><img src="/static/Admin/img/profileimg5.png" alt="img" class="img"><b>Mark Doe</b><span class="desc">iOS Developer</span></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- End Teammates -->


  </div>
@endsection
@section('title','后台首页')