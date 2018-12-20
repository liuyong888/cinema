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
					<form action="/login/create" method="post" id="ff">
						{{csrf_field()}}
						<div class="form-group">
							<div class="input-group">
								<div class="input-group-addon">
									<span class="glyphicon glyphicon-phone" aria-hidden="true"></span>
								</div>
								<input class="" name="phone" placeholder="手机号" type="text" reminder="请输入正确的手机号" style="width: 260px;height: 40px;"><span></span>
							</div>
						</div>
						<div class="form-group">
							<div class="input-group">
								<input class="" name="code" placeholder="输入验证码" type="text" reminder="请输入正确的验证码" style="width: 165px;height: 40px;"><span></span>
								 <a href="javascript:void(0)" class="btn btn-success" id="ss">发送短信验证码</a>
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
		m=$(this).val();
		//ajax里$(this)解析不了
		o=$(this);
		//正则匹配 match 匹配不到的话,返回null
		if(m.match(/^[\w]{6,12}$/)==null){
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
		$.get("/checkmima",{cfm:cfm,m:m},function(data){
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
	$("input[name='code']").blur(function(){
		c=$(this);
		//获取输入的校验码
		code=$(this).val();
		//ajax
		$.get("/checkcode",{code:code},function(data){
			if(data==1){
				//验证码一致
				c.next("span").css('color','green').html('验证码一致');
				CODE=true;
			}else if(data==2){
				//验证码不一致
				c.next("span").css('color','red').html('验证码不一致');
				CODE=false;
			}else if(data==3){
				//验证码为空
				c.next("span").css('color','red').html('验证码为空');
				CODE=false;
			}else if(data==4){
				//验证码过期
				c.next("span").css('color','red').html('验证码过期');
				CODE=false;
			}
		});
	});
	//表单提交  0
	$("#ff").submit(function(){
		//tigger:某个元素触发某个事件
		$("input").trigger("blur");
		if(PHONE && CODE && MIMA && CFMIMA){
			return true;//成功提交
		}else{
			return false;//阻止提交
		}
	});
</script>
</html>