mui.init();

var sendButton = document.getElementById('send');
var emotions = document.getElementById('emotions');
var more = document.getElementById('more');

document.getElementById('msg-input').addEventListener('input', function() {

	if(this.value) {
		sendButton.style.display = 'block';
		emotions.style.display = 'none';
		more.style.display = 'none';
	} else {
		sendButton.style.display = 'none';
		emotions.style.display = '';
		more.style.display = '';
	}
});

document.getElementById('send').addEventListener('tap', function() {
	var msgInput = document.getElementById('msg-input');
	var msgValue = msgInput.value;
	var willSendMsg = '<div class="chat-box chat-box-right mui-content-padded">' +
		'<img class="chat-avatar" src="../../img/jerry.jpg"/>' +
		'<div class="chat-content">' +
		'<div class="chat-content-inner">' +
		msgValue +
		'</div>' +
		'<div class="chat-content-arrow"></div>' +
		'</div>' +
		'<div class="clear-float"></div>' +
		'</div>';
	//拼接HTML
	var newDom = document.createElement('div');
	newDom.innerHTML = willSendMsg;
	var msgList = document.querySelector('.chat-list');
	//把拼接好的HTML追加到消息列表末尾
	msgList.appendChild(newDom);
	msgInput.value = '';
	sendButton.style.display = 'none';
	emotions.style.display = '';
	more.style.display = '';
	msgList.scrollTop = msgList.scrollHeight - msgList.offsetHeight;

	// Jerry用自己的名字作为 clientId，获取 IMClient 对象实例
	realtime.createIMClient('Jerry').then(function(jerry) {
		// 创建与Tom之间的对话
		return jerry.createConversation({
			members: ['LWY'],
			name: 'Jerry & LWY',
		});
	}).then(function(conversation) {
		// 发送消息
		return conversation.send(new AV.TextMessage(msgValue));
	}).then(function(message) {
		console.log('Jerry & LWY', '发送成功！');
	}).catch(console.error);

})

var Realtime = AV.Realtime;
var TextMessage = AV.TextMessage;
var realtime = new Realtime({
	appId: '您的APPID',
	region: 'cn',
});

// Jerry 登录
realtime.createIMClient('Jerry').then(function(jerry) {
	jerry.on('message', function(message, conversation) {
		console.log('我收到了消息: ' + message.text);
		var responseMsg = '<div class="chat-box chat-box-left mui-content-padded">' +
			'<img class="chat-avatar" src="../../img/avatar.jpg"/>' +
			'<div class="chat-content">' +
			'<div class="chat-content-inner">' +
			message.text +
			'</div>' +
			'<div class="chat-content-arrow"></div>' +
			'</div>' +
			'<div class="clear-float"></div>' +
			'</div>';
		var newDom2 = document.createElement('div');
		newDom2.innerHTML = responseMsg;
		var msgList=document.querySelector('.chat-list');
		//把拼接好的HTML追加到消息列表末尾
		msgList.appendChild(newDom2);
		msgList.scrollTop = msgList.scrollHeight - msgList.offsetHeight;
	});
}).catch(console.error);