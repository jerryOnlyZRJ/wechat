mui.init();


mui.plusReady(function(){
	var scan=new plus.barcode.Barcode('bcode',
		[
		plus.barcode.QR,plus.barcode.AZTEC
		]
	);
	scan.onmarked=function ( type, code, file ) {	}
	scan.start();
});