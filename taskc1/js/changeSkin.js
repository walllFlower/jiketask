/*
使用单例模式：将换肤功能的变量、方法和绑定事件的方法封装起来
*/
var changeSkin = {
	$previewSkin: $('.preview-skin').eq(0),//预览框皮肤
	$skinLayer: $('.skin-layer').eq(0),//换肤面板
	$skinContainer: $('.skin-container').eq(0),//整个页面的皮肤容器

	//鼠标悬浮预览图
	mouseOverPreview: function(self){
		var $skin = self.find('img').attr('src');//皮肤小图src
		var $big_skin = self.find('img').attr('data-src');//皮肤大图src
		changeSkin.$previewSkin.attr('src',$skin);
		changeSkin.$previewSkin.attr('data-src',$big_skin);
		$('.preview-pageui').css('backgroundPosition','0 0');
	},

	//鼠标点击预览图换肤
	clickChangeSkin: function(){
		var $cur_skin = $('.preview-skin').eq(0).attr('data-src');
		var cur_skin_url = 'url('+$cur_skin+')';
		changeSkin.$skinContainer.css('backgroundImage',cur_skin_url);
		$('#logo').attr('src','./img/logo_white_fe6da1ec.png');
		$('.top-wrap-bcg').css('top','0');
		$('.top-wrap').addClass('has-bcg');
		localStorage.bcgImg = cur_skin_url;
	},

	//关闭换肤面板
	closePanel: function(e){
		e.preventDefault();
		changeSkin.$skinLayer.removeClass('open');		
	},

	//打开换肤面板
	openPanel:function(e){
		e.preventDefault();
		changeSkin.$skinLayer.addClass('open');
	},

	//不适用换肤功能
	closeSkinFun: function(e){
		e.preventDefault();
		changeSkin.$previewSkin.attr('src','');
		//改变pageui中的logo
		$('.preview-pageui').css('backgroundPosition','-275px 0')
		//清楚背景
		changeSkin.$skinContainer.css('backgroundImage','');
		//logo变回
		$('#logo').attr('src','./img/logo.png');
		//top-wrap-bcg隐藏
		$('.top-wrap-bcg').css('top','-35px');
		//top-wrap下边框恢复
		$('.top-wrap').removeClass('has-bcg');
		localStorage.removeItem('bcgImg');
	},

	bindMouseOverPreview:function(element,fn){
		element.mouseenter(function(){
			fn($(this));
		})
	},

	bindClickChangeSkin:function(element,fn){
		element.click(function(){
			fn();
		})
	},

	bindClosePanel:function(element,fn){
		element.click(function(e){
			fn(e);
		})
	},

	bindOpenPanel:function(element,fn){
		element.click(function(e){
			fn(e);
		})
	},

	bindCloseSkinFun:function(element,fn){
		element.click(function(e){
			fn(e);
		})
	}


}

$(function(){
	// $('.img-content li').mouseenter(function(){
	// 	changeSkin.mouseOverPreview($(this));
	// }).click(function(){
	// 	changeSkin.clickChangeSkin();
	// });
	// $('.skin-nav-close').eq(0).click(function(e){
	// 	changeSkin.closePanel(e)
	// });
	// $('.skin-layer-open').eq(0).click(function(e){
	// 	changeSkin.openPanel(e)
	// });
	// $('.not-use').eq(0).click(function(e){
	// 	changeSkin.closeSkinFun(e)
	// });	

	changeSkin.bindOpenPanel($('.skin-layer-open'),changeSkin.openPanel);
	changeSkin.bindClosePanel($('.skin-nav-close').eq(0),changeSkin.closePanel);
	changeSkin.bindMouseOverPreview($('.img-content li'),changeSkin.mouseOverPreview);
	changeSkin.bindClickChangeSkin($('.img-content li'),changeSkin.clickChangeSkin);
	changeSkin.bindCloseSkinFun($('.not-use').eq(0),changeSkin.closeSkinFun);

  	var cur_skin_url = localStorage.bcgImg;
  	if(cur_skin_url){//如果bcgImg存在，设置主题色
	  	changeSkin.$skinContainer.css('backgroundImage',cur_skin_url);
		$('#logo').attr('src','./img/logo_white_fe6da1ec.png');
		$('.top-wrap-bcg').css('top','0');
		$('.top-wrap').addClass('has-bcg');
	}
})
