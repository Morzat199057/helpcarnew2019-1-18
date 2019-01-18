var url='http://34szam.natappfree.cc/car';
function login(username, password) {
	var obj={};
	obj['name']=username;
	obj['pw']=password;
	
	mui.ajax(url+'/car/base/login', {
		data:'param='+JSON.stringify(obj),
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		timeout: 10000, //超时时间设置为10秒；
//		headers: {
//			'Content-Type': 'application/json'
//		},
		success: function(data) {
			var data=JSON.parse(data);
			if(data.result==true){
				alert('登录成功')
				//登录完成后将账号密码添加到session
			var loginobj = {};
			loginobj['username'] = $('.mui-input-clear').val();
			loginobj['password'] = $('.mui-input-password').val();
			if($('#mySwitch').hasClass('mui-active')) {
				loginobj['AutomaticLogin'] = true;
			} else {
				loginobj['AutomaticLogin'] = false;
			}
			//				alert(JSON.stringify(loginobj))
			plus.storage.setItem('$users', JSON.stringify(loginobj));
			}else if(data.result==false){
				alert('用户名或密码不正确')
			}else if(data.result=='fail'){
				aler('用户在其他设备上登录')
			}


			
		},
		error: function(data) {
			console.log(JSON.stringify(data))
		}
	});
}

