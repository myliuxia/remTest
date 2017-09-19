$(function() {
	/*加减按钮的点击事件*/
	$(".subtract").on("click", function() {
		var $num = $(this).siblings('.number');
		var number = Number($num.text());
		if(parseInt(number) > parseInt(120)) {
			$num.text(number - 10);
		}
		if(parseInt(number) == parseInt(130)) {
			$(this).find('img').attr('src', '../img/minus.png');
		}
	});
	$(".add").on("click", function() {
		var $num = $(this).siblings('.number');
		var number = Number($num.text());
		$num.text(number + 10);
		if(parseInt(number) == parseInt(120)) {
			$(this).siblings('.subtract').find('img').attr('src', '../img/minus_eff.png');
		}

	});

})