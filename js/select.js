$(function() {
	/*单选按钮*/
	$('.select.radio').on('click', function() {
		console.log("lalala");
		if(!$(this).find('.select-option').hasClass('active')) {
			$(this).siblings().find('.select-option').removeClass('active');
			$(this).find('.select-option').addClass('active');
		}
	})
	/*多选按钮*/
	$('.select.check').on('click', function() {
		if(!$(this).find('.select-option').hasClass('active')) {
			$(this).find('.select-option').addClass('active');
		}else{
			$(this).find('.select-option').removeClass('active');
		}
	})
})