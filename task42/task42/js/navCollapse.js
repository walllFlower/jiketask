$(function(){
	$('a[data-toggle=collapse]').click(function(e){
		if($(this).next('ul').hasClass('in')){
			$(this).next('ul').hasClass('in');
		}else{
			// 若点击的不是当前的head,则去所有导航子导航的显示状态
			$('a[data-toggle=collapse]').each(function(){
				if($(this).next('ul').hasClass('in')){
					$(this).next('ul').removeClass('in');
				}
			})
		}
	})	
})