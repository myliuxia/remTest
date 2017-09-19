$(function() {
	/*滑动条向下滑动，header背景颜色改变*/
	$(window).scroll(function() {
		height = $(window).scrollTop();
		if(height > 0) {
			$('.myheader').addClass('blue');
			$('.myheader').addClass('font-white');
			
		} else {
			$('.myheader').removeClass('blue');
			$('.myheader').removeClass('font-white');
		};
	});
})