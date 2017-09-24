mui.init();
//创建子webview
mui.plusReady(function(){
	
	var parentWv=plus.webview.currentWebview();  //底部导航栏作为父webview
	
  	var pageList=[
	{
		url:'../message/message.html',
		id:'message'
	},
	{
		url:'../mine/mine.html',
		id:'mine'
	},
	{
		url:'../address-book/address-book.html',
		id:'address-book'
	},
	{
		url:'../discover/discover.html',
		id:'discover'
	}
	];
	for(var i=0,l=pageList.length;i<4;i++){
		var url=pageList[i].url;
		var id=pageList[i].id;
		console.info(url+"----------"+id);
		if(plus.webview.getWebviewById(id)){
			continue;
		}
		var newWv=plus.webview.create(url,id,{       //创建每个子窗口的webview
			bottom:'50px',                        //子webview距离底部的边距
			top:'44px',
			popGesture:'none'                     //窗口侧滑返回功能
			
		});
		i===0?newWv.show():newWv.hide();          //显示第一个创建的Webview界面，即消息界面
		parentWv.append(newWv);                   //在web中添加子窗口
	}
	var showWv='message';
	mui('.mui-bar').on('tap','.mui-tab-item',function(e){
		//mui.alert('我被点击了');
		
		var showWvId=this.dataset.id;
		if(showWv===showWvId) return;
		plus.webview.getWebviewById(showWv).hide();
		console.info(showWvId);
		plus.webview.getWebviewById(showWvId).show('none',0,function(){
			mui.fire(plus.webview.getWebviewById(showWvId),'ShowPage');
		});
		showWv=showWvId;
	})
});
