/*动态设置font-sixe的值*/
/*!(function(doc, win) {
	var docEle = doc.documentElement,
		evt = "onorientationchange" in window ? "orientationchange" : "resize",
		fn = function() {
			var width = docEle.clientWidth;
			var height = docEle.clientHeight;
			docEle.style.fontSize = 100 * (width / 750) + "px"
			
		};
	win.addEventListener(evt, fn, false);
	doc.addEventListener("DOMContentLoaded", fn, false);
}(document, window));*/




	;(function(win) {
        var doc = win.document;
        var docEl = doc.documentElement;
        var tid;
 
        function refreshRem() {
            var width = docEl.getBoundingClientRect().width;
            if (width > 750) { // 最大宽度
            	width = 750;
        	}
        	var rem = 100 * (width / 750); // 
        	docEl.style.fontSize = rem + 'px';
        }
 
        win.addEventListener('resize', function() {//窗口大小改变事件
	        clearTimeout(tid);
	        tid = setTimeout(refreshRem, 300);
	    }, false);
    	win.addEventListener('pageshow', function(e) {//浏览页面事件与onlaod事件类似
            if (e.persisted) {
                clearTimeout(tid);
                tid = setTimeout(refreshRem, 300);
            }
        }, false);
 
        refreshRem();
 
    })(window);



$(function(){
	$("input").focus(function(){
	var $con = $('.formError .formErrorContent');			
		$con.each(function(){
			if(!$(this).is(':hidden')){
				$con.hide();
			}
		});			
	});
})