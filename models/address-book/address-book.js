mui.init();
mui.ready(function() {
	var list = document.getElementById('list');
	//calc hieght
	list.style.height = (document.body.offsetHeight) + 'px';
	//create
	window.indexedList = new mui.IndexedList(list);
});
