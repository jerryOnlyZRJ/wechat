mui.init();

mui('body').on('tap', '.mui-popover-action li>a', function() {
	var a = this,
		parent;
	//根据点击按钮，反推当前是哪个actionsheet
	for(parent = a.parentNode; parent != document.body; parent = parent.parentNode) {
		if(parent.classList.contains('mui-popover-action')) {
			break;
		}
	}
	//关闭actionsheet
	mui('#' + parent.id).popover('toggle');
	if(a.id === 'loginout') {
		localStorage.removeItem('sessionToken');
		localStorage.removeItem('username');
		var loginWv = plus.webview.getLaunchWebview();
		loginWv.show();
		plus.webview.close('main');
		plus.webview.close('setting');

	} else if(a.id === 'close-wechat') {
		localStorage.removeItem('sessionToken');
		localStorage.removeItem('username');
		var wvs= plus.webview.all();
		for(var i = 0; i < wvs.length; i++) {
			wvs[i].close();
		}
	}
});