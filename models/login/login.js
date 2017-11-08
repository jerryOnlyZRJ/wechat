mui.init();

document.getElementById('login').addEventListener('tap',function(){
	var usernameInput=document.querySelector('input[name="username"]');
	var passwordInput=document.querySelector('input[name="password"]');
	var usernameValue=usernameInput.value;
	var passwordValue=passwordInput.value;
	if(!usernameValue||!passwordValue){
		mui.toast('用户名或密码不能为空');
		return;
	}
	/*if(usernameValue==='admin'&&passwordValue==='123456'){
		console.info('登陆成功，开始跳转页面');
		mui.openWindow('../main/main.html','main');
	}else{
		mui.toast('用户名或密码错误！');
	}
	*/
	mui.ajax({
		url:'https://api.leancloud.cn/1.1/login',
		type:'post',
		data:{
			'username':usernameValue,
			'password':passwordValue
		},
		headers:{
			'X-LC-Id': '您的X-LC-Id',
			'X-LC-Key': '您的X-LC-Key'
		},
		success:function(resp){
			mui.toast('登陆成功！');
			resp.sessionToken;
			resp.username;
			localStorage.setItem('sessionToken',resp.sessionToken);
			localStorage.setItem('username',resp.username);
			setTimeout(function(){
				mui.openWindow('../main/main.html','main');
			},1500);
		},
		error:function(error){
			mui.toast('账号或密码错误！');
		}
	})
	
})