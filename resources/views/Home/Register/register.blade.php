<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
	<meta charset="UTF-8">
	<style>
		.aa{
			border: 1px solid red;
		}
		.bb{
			border: 1px solid green;
		}
	</style>
	<link rel="shortcut icon" href="favicon.ico">
	<link rel="stylesheet" href="/static/Home/css/iconfont.css">
	<link rel="stylesheet" href="/static/Home/css/global.css">
	<link rel="stylesheet" href="/static/Home/css/bootstrap.min.css">
	<link rel="stylesheet" href="/static/Home/css/bootstrap-theme.min.css">
	<link rel="stylesheet" href="/static/Home/css/login.css">
	<script src="/static/Home/js/jquery.1.12.4.min.js" charset="UTF-8"></script>
	<script src="/static/Home/js/bootstrap.min.js" charset="UTF-8"></script>
	<script src="/static/Home/js/jquery.form.js" charset="UTF-8"></script>
	<script src="/static/Home/js/global.js" charset="UTF-8"></script>
	<script src="/static/Home/js/login.js" charset="UTF-8"></script>
	<title>U袋网 - 登录 / 注册</title>
</head>
<body>
	<div class="public-head-layout container">
		<a class="logo" href="index.html"><img src="/static/Home/images/icons/logo.jpg" alt="U袋网" class="cover"></a>
	</div>
	<div style="background:url(/static/Home/images/login_bg.jpg) no-repeat center center; ">
		<div class="login-layout container">
			<div class="form-box login">
				<div class="tabs-nav">
  					<h2>欢迎注册<a href="/login/create" class="pull-right fz16" id="reglogin">返回登录</a></h2>
  				</div>
  				<div class="tabs_container">
					<form action="/register" method="post" id="ff">
						{{csrf_field()}}
  					<h2>欢迎注册<a href="/login" class="pull-right fz16" id="reglogin">返回登录</a></h2>
  				</div>
  				<div class="tabs_container">
					<form class="tabs_form" action="index.html" method="post" id="register_form">
						<div class="form-group">
							<div class="input-group">
								<div class="input-group-addon">
									<span class="glyphicon glyphicon-phone" aria-hidden="true"></span>
								</div>
								<input class="" name="phone" placeholder="手机号" type="text" reminder="请输入正确的手机号" style="width: 260px;height: 40px;"><span></span>
								<input class="form-control phone" name="phone" id="register_phone" required placeholder="手机号" maxlength="11" autocomplete="off" type="text">
							</div>
						</div>
						<div class="form-group">
							<div class="input-group">
								<input class="" name="code" placeholder="输入验证码" type="text" reminder="请输入正确的验证码" style="width: 165px;height: 40px;"><span></span>
								 <a href="javascript:void(0)" class="btn btn-success" id="ss">发送短信验证码</a>
								<input class="form-control" name="smscode" id="register_sms" placeholder="输入验证码" type="text">
								<span class="input-group-btn">
									<button class="btn btn-primary getsms" type="button">发送短信验证码</button>
								</span>
							</div>
						</div>
						<div class="form-group">
							<div class="input-group">
								<div class="input-group-addon">
									<span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
								</div>
								<input class="" name="password"  placeholder="请输入密码" type="password" reminder="请输入正确的密码" style="width: 260px;height: 40px;"><span></span>
							</div>
						</div>
						<div class="form-group">
							<div class="input-group">
								<div class="input-group-addon">
									<span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
								</div>
								<input class="" name="repassword" placeholder="重复密码" type="password" reminder="请输入正确的重复密码" style="width: 260px;height: 40px;"><span></span>
							</div>
						</div>
						<div class="form-group">
							<div class="error_msg" id="register_error"></div>
						</div>
	                    <button style="width: 300px"class="btn btn-danger" type="submit">注册</button>
                    </form>
								<input class="form-control password" name="password" id="register_pwd" placeholder="请输入密码" autocomplete="off" type="password">
								<div class="input-group-addon pwd-toggle" title="显示密码"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></div>
							</div>
						</div>
						<div class="checkbox">
	                        <label>
	                        	<input checked="" id="register_checkbox" type="checkbox"><i></i> 同意<a href="temp_article/udai_article3.html">U袋网用户协议</a>
	                        </label>
	                    </div>
	                    <!-- 错误信息 -->
						<div class="form-group">
							<div class="error_msg" id="register_error"></div>
						</div>
	                    <button class="btn btn-large btn-primary btn-lg btn-block submit" id="register_submit" type="button">注册</button>
                    </form>
                    <div class="tabs_div">
	                    <div class="success-box">
	                    	<div class="success-msg">
								<i class="success-icon"></i>
	                    		<p class="success-text">注册成功</p>
	                    	</div>
	                    </div>
	                    <div class="option-box">
	                    	<div class="buts-title">
	                    		现在您可以
	                    	</div>
	                    	<div class="buts-box">
	                    		<a role="button" href="index.html" class="btn btn-block btn-lg btn-default">继续访问商城</a>
								<a role="button" href="udai_welcome.html" class="btn btn-block btn-lg btn-info">登录会员中心</a>
	                    	</div>
	                    </div>
                    </div>
                </div>	
			</div>
			<script>
				$(document).ready(function() {
					// 判断直接进入哪个页面 例如 login.php?p=register
					switch($.getUrlParam('p')) {
						case 'register': $('.register').show(); break;
						case 'resetpwd': $('.resetpwd').show(); break;
						default: $('.login').show();
					};
					// 发送验证码事件
					$('.getsms').click(function() {
						var phone = $(this).parents('form').find('input.phone');
						var error = $(this).parents('form').find('.error_msg');
						switch(phone.validatemobile()) {
							case 0:
								// 短信验证码的php请求
								error.html(msgtemp('验证码 <strong>已发送</strong>','alert-success'));
								$(this).rewire(60);
							break;
							case 1: error.html(msgtemp('<strong>手机号码为空</strong> 请输入手机号码',    'alert-warning')); break;
							case 2: error.html(msgtemp('<strong>手机号码错误</strong> 请输入11位数的号码','alert-warning')); break;
							case 3: error.html(msgtemp('<strong>手机号码错误</strong> 请输入正确的号码',  'alert-warning')); break;
						}
					});
					// 以下确定按钮仅供参考
					$('.submit').click(function() {
						var form = $(this).parents('form')
						var phone = form.find('input.phone');
						var pwd = form.find('input.password');
						var error = form.find('.error_msg');
						var success = form.siblings('.tabs_div');
						var options = {
							beforeSubmit: function () {
								console.log('喵喵喵')
							},
							success: function (data) {
								console.log(data)
							}
						}
						// 验证手机号参考这个
						switch(phone.validatemobile()) {
							case 1: error.html(msgtemp('<strong>手机号码为空</strong> 请输入手机号码',    'alert-warning')); return; break;
							case 2: error.html(msgtemp('<strong>手机号码错误</strong> 请输入11位数的号码','alert-warning')); return; break;
							case 3: error.html(msgtemp('<strong>手机号码错误</strong> 请输入正确的号码',  'alert-warning')); return; break;
						}
						// 验证密码复杂度参考这个
						switch(pwd.validatepwd()) {
							case 1: error.html(msgtemp('<strong>密码不能为空</strong> 请输入密码',    'alert-warning')); return; break;
							case 2: error.html(msgtemp('<strong>密码过短</strong> 请输入6位以上的密码','alert-warning')); return; break;
							case 3: error.html(msgtemp('<strong>密码过于简单</strong><br>密码需为字母、数字或特殊字符组合',  'alert-warning')); return; break;
						}
						form.ajaxForm(options);
						// 请求成功执行类似这样的事件
						// form.fadeOut(150,function() {
						// 	success.fadeIn(150);
						// });
					});
				});
			</script>
		</div>
	</div>
</body>
<script>
	var PHONR=false;
	var COOKIE=false;
	var MIMA=false;
	var CFMIMA=false;
	// alert($);
	// 获取每个input,绑定获取焦点事件
	$("input").focus(function(){
		//获取reminder里的值
		reminder=$(this).attr('reminder');
		//获取当前元素的下一个元素,css:设置样式 html:赋值
		$(this).next("span").css('color','red').html(reminder);
		//给input框添加样式
		$(this).addClass('aa');
		//移除样式
		$(this).removeClass('bb');
	});
	//获取手机号,绑定失去焦点事件
	$("input[name='phone']").blur(function(){
		//获取手机号
		p=$(this).val();
		//ajax里$(this)解析不了
		o=$(this);
		//正则匹配 match 匹配不到的话,返回null
		if(p.match(/^\d{11}$/)==null){
			$(this).next("span").css('color','red').html('手机号码不符合');
			$(this).addClass('aa');
			PHONE=false;
		}else{
			//判断手机号码是否重复
			$.get("/checkphone",{p:p},function(data){
				// alert(data);
				if(data==1){
					//手机号码已经注册
					o.next("span").css('color','red').html('手机号码已经注册');
					o.addClass('aa');
					PHONE=false;
					//把获取校验码按钮,设置禁用
					 $("#ss").attr('disabled',true);
				}else{
					//手机号码可以注册
					o.next("span").css('color','green').html('手机号码可以注册');
					o.addClass('bb');
					//把获取校验码按钮,设置激活
					$("#ss").attr('disabled',false);
					PHONE=true;
				}
			});
		}
	});
	//获取密码,绑定失去焦点事件
	$("input[name='password']").blur(function(){
		//获取密码
		mm=$(this).val();
		//ajax里$(this)解析不了
		o=$(this);
		//正则匹配 match 匹配不到的话,返回null
		if(mm.match(/^[\w]{6,12}$/)==null){
			$(this).next("span").css('color','red').html('密码不符合');
			$(this).addClass('aa');
			MIMA=false;
		}else{
			//密码可以使用
			o.next("span").css('color','green').html('密码可以使用');
			o.addClass('bb');
			MIMA=true;
		}
	});
	//获取重复密码,绑定失去焦点事件
	$("input[name='repassword']").blur(function(){
		//获取重复密码
		cfm=$(this).val();
		// alert(cfm);
		//ajax里$(this)解析不了
		o=$(this);
		//判断重复密码是否一致
		$.get("/checkmima",{cfm:cfm,mm:mm},function(data){
			// alert(data);
			if(data==1){
				//重复密码一致
				o.next("span").css('color','green').html('重复密码一致');
				o.addClass('bb');
				CFMIMA=true;
			}else if(data==0){
				//重复密码不一致
				o.next("span").css('color','red').html('重复密码不一致');
				o.addClass('aa');
				CFMIMA=false;
			}else{
				o.next("span").css('color','red').html('密码不能为空');
				o.addClass('aa');
				CFMIMA=false;
			}
		});
	});
	//获取发送短信校验码按钮,绑定单机事件
	$("#ss").click(function(){
		s=$(this);
		//获取注册的手机号
		pp=$("input[name='phone']").val();
		//ajax
		$.get("/sendphone",{pp:pp},function(data){
			// alert(data);
			if(data.code==000000){
				m=60;
				//定时器
				mytime=setInterval(function(){
					m--;
					//m赋值给按钮
					s.html(m+"秒后重新发送");
					//激活
					s.attr('disabled',true);
					//判断
					if(m==0){
						//清除定时器
						clearInterval(mytime);
						s.html("重新发送");
						s.attr('disabled',false);
					}
				},1000);
			}
		},'json');
	});
	//获取输入验证码的input框
	// $("input[name='code']").blur(function(){
	// 	c=$(this);
	// 	//获取输入的校验码
	// 	code=$(this).val();
	// 	//ajax
	// 	$.get("/checkcode",{code:code},function(data){
	// 		if(data==1){
	// 			//验证码一致
	// 			c.next("span").css('color','green').html('验证码一致');
	// 			c.addClass('bb');
	// 			CODE=true;
	// 		}else if(data==2){
	// 			//验证码不一致
	// 			c.next("span").css('color','red').html('验证码不一致');
	// 			c.addClass('aa');
	// 			CODE=false;
	// 		}else if(data==3){
	// 			//验证码为空
	// 			c.next("span").css('color','red').html('验证码为空');
	// 			c.addClass('aa');
	// 			CODE=false;
	// 		}else if(data==4){
	// 			//验证码过期
	// 			c.next("span").css('color','red').html('验证码过期');
	// 			c.addClass('aa');
	// 			CODE=false;
	// 		}
	// 	});
	// });
	//表单提交
	$("#ff").submit(function(){
		//tigger:某个元素触发某个事件
		$("input").trigger("blur");
		if(PHONE && MIMA && CFMIMA){
			return true;//成功提交
		}else{
			return false;//阻止提交
		}
	});
</script>
	<div class="footer-login container clearfix">
		<ul class="links">
			<a href=""><li>网店代销</li></a>
			<a href=""><li>U袋学堂</li></a>
			<a href=""><li>联系我们</li></a>
			<a href=""><li>企业简介</li></a>
			<a href=""><li>新手上路</li></a>
		</ul>
		<!-- 版权 -->
		<p class="copyright">
			© 2005-2017 U袋网 版权所有，并保留所有权利<br>
			ICP备案证书号：闽ICP备16015525号-2&nbsp;&nbsp;&nbsp;&nbsp;福建省宁德市福鼎市南下村小区（锦昌阁）1栋1梯602室&nbsp;&nbsp;&nbsp;&nbsp;Tel: 18650406668&nbsp;&nbsp;&nbsp;&nbsp;E-mail: 18650406668@qq.com
		</p>
	</div>
</body>
</html>