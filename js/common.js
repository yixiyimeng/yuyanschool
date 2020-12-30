$(function() {
	$('.dropdown .txt').click(function() {
		$('.dropdown ul').toggle()
	});
	$('.dropdown ul').on('click','li a',function() {
		$('.dropdown .txt').text($(this).text());
		$('.dropdown ul').hide()
	});
	//点击空白处隐藏弹出层，
	$(document).click(function(event) {
		var _con = $('.dropdown'); // 设置目标区域
		if (!_con.is(event.target) && _con.has(event.target).length === 0) { // Mark 1
			$('.dropdown ul').hide()
		}
	});
})
