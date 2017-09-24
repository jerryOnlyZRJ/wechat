mui.init();

var sendButton=document.getElementById('send');
var emotions=document.getElementById('emotions');
var more=document.getElementById('more');

document.getElementById('msg-input').addEventListener('input',function(){
	
	if(this.value){
		sendButton.style.display='block';
		emotions.style.display='none';
		more.style.display='none';
	}else{
		sendButton.style.display='none';
		emotions.style.display='';
		more.style.display='';
	}
});



document.getElementById('send').addEventListener('tap',function(){
	var msgInput=document.getElementById('msg-input');
	var msgValue=msgInput.value;
	var willSendMsg='<div class="chat-box chat-box-right mui-content-padded">'+
		    		'<img class="chat-avatar" src="../../img/avatar.jpg"/>'+
		    		'<div class="chat-content">'+
		    			'<div class="chat-content-inner">'+
		    				msgValue+
		    			'</div>'+
		    			'<div class="chat-content-arrow"></div>'+
		    		'</div>'+
		    		'<div class="clear-float"></div>'+
		    	    '</div>';
	//拼接HTML
	var newDom=document.createElement('div');
	newDom.innerHTML=willSendMsg;
	var msgList=document.querySelector('.chat-list');
	//把拼接好的HTML追加到消息列表末尾
	msgList.appendChild(newDom);
	msgInput.value='';
	sendButton.style.display='none';
	emotions.style.display='';
	more.style.display='';
	var responseValue=msgInput.value;
	var url = 'http://www.tuling123.com/openapi/api';  
      mui.getJSON(url, {
        'key':"9742207fc1474b2a985a9a3475f22fdd",
		'info':msgValue,
		'userid':"jerry"
      }, function(data){  
          responseValue=data.text; 
          var responseMsg='<div class="chat-box chat-box-left mui-content-padded">'+
		    		'<img class="chat-avatar" src="../../img/jerry.jpg"/>'+
		    		'<div class="chat-content">'+
		    			'<div class="chat-content-inner">'+
		    				responseValue+
		    			'</div>'+
		    			'<div class="chat-content-arrow"></div>'+
		    		'</div>'+
		    		'<div class="clear-float"></div>'+
		    	    '</div>';
	var newDom2=document.createElement('div');
	newDom2.innerHTML=responseMsg;
	//把拼接好的HTML追加到消息列表末尾
	msgList.appendChild(newDom2);
	msgList.scrollTop=msgList.scrollHeight-msgList.offsetHeight;
      });
      
})


