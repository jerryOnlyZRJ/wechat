mui.init();

document.getElementById('reg').addEventListener('tap', function() {
	var usernameInput = document.querySelector('input[id="account"]');
	var passwordInput = document.querySelector('input[id="password"]');
	var passwordconfirmInput = document.querySelector('input[id="password_confirm"]');
	var emailInput = document.querySelector('input[id="email"]');
	var usernameValue = usernameInput.value;
	var passwordValue = passwordInput.value;
	var passwordconfirmValue = passwordconfirmInput.value;
	var emailValue = emailInput.value;
	if(passwordconfirmValue != passwordValue) {
		mui.toast('密码两次输入不一致');
		return;
	}
	var formdata = {  
                    username : usernameValue,  
                    password : passwordValue,  
                    email : emailValue,  
                }; 
	mui.ajax({
		url:"https://api.leancloud.cn/1.1/users",
		type:"post",
		contentType: "application/json; charset=utf-8",  
        data: JSON.stringify(formdata), 
        headers:{
			'X-LC-Id': '您的X-LC-Id',
			'X-LC-Key': '您的X-LC-Key'
		},
        success:function(resp){
        	mui.toast('注册成功');
        	setTimeout(function(){
				mui.openWindow('../login/login.html');
				plus.webview.close('reg');
			},1500);
        },
        error:function(error){
        	mui.toast('请正确填入信息');
        }
	})

})