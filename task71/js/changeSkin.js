$(function() {

	var $target = $('.preview-skin').eq(0);//预览框皮肤
	var $skin_layer = $('.skin-layer').eq(0);//换肤面板
	var $skin_con = $('.skin-container');
	//鼠标悬浮预览图
	$('.img-content li').mouseenter(function(){
		var $skin = $(this).find('img').attr('src');//皮肤小图src
		var $big_skin = $(this).find('img').attr('data-src');//皮肤大图src
		$target.attr('src',$skin);
		$target.attr('data-src',$big_skin);
		$('.preview-pageui').css('backgroundPosition','0 0')

	})
	
	//鼠标点击预览图换肤
	$('.img-content li').click(function(){
		var $cur_skin = $('.preview-skin').eq(0).attr('data-src');
		var cur_skin_url = 'url('+$cur_skin+')';
		$skin_con.css('backgroundImage',cur_skin_url);
		$('#logo').attr('src','./img/logo_white_fe6da1ec.png');
		$('.top-wrap-bcg').css('top','0');
		$('.top-wrap').addClass('has-bcg');
		localStorage.setItem('bcgImg',cur_skin_url);
	})

	//关闭换肤面板
	$('.skin-nav-close').eq(0).click(function(e){
		e.preventDefault();
		$skin_layer.removeClass('open');		
	})

	//打开换肤面板
	$('.skin-layer-open').eq(0).click(function(e){
		e.preventDefault();
		$skin_layer.addClass('open');
	})

	//不适用换肤功能
	$('.not-use').eq(0).click(function(e){
		e.preventDefault();
		$target.attr('src','');
		//改变pageui中的logo
		$('.preview-pageui').css('backgroundPosition','-275px 0')
		//清楚背景
		$skin_con.css('backgroundImage','');
		//logo变回
		$('#logo').attr('src','./img/logo.png');
		//top-wrap-bcg隐藏
		$('.top-wrap-bcg').css('top','-35px');
		//top-wrap下边框恢复
		$('.top-wrap').removeClass('has-bcg');
		localStorage.removeItem('bcgImg');
	})
})

$(function(){
	var $skin_con = $('.skin-container');	
  	var cur_skin_url = localStorage.getItem('bcgImg');
  	if(cur_skin_url){//如果bcgImg存在，设置主题色
	  	$skin_con.css('backgroundImage',cur_skin_url);
		$('#logo').attr('src','./img/logo_white_fe6da1ec.png');
		$('.top-wrap-bcg').css('top','0');
		$('.top-wrap').addClass('has-bcg');
	}
})