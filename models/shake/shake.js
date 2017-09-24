mui.init();

var up=document.querySelector('.up');
var down=document.querySelector('.down');
var max=20;
var p=null;
mui.plusReady(function(){
	plus.accelerometer.watchAcceleration(function(a){
		if (!p&&(Math.abs(a.xAxis)+Math.abs(a.yAxis)+Math.abs(a.zAxis))>max) {
			p=plus.audio.createPlayer('shake.wav');
			p.play();
			setTimeout(function(){
				p.stop();
			},2000);
			up.style.webkitTransform='translateY(-'+up.offsetHeight/2+'px)';
			down.style.webkitTransform='translateY('+down.offsetHeight/2+'px)';
			setTimeout(function(){
				up.style.webkitTransform='';
				down.style.webkitTransform='';
				mui.toast('正在搜索同一时刻摇晃手机的人')
			},1000)
		}
	},function(){
		alert("无法获取摇动属性");
	},{
		frequency:1000
	})
})