$(function(){
	$.extend({
		kuaiBind:function(){
			//lesson-list:kuai 先移除事件绑定
			$('.lesson-list .item').unbind().mouseenter(function(){
					console.log('kuai enter');
					//播放阴影
					$(this).find('.lesson-play').stop().animate({opacity:'1'},100);
					//收藏icon
					$(this).find('.shoucang').css({'display':'block'});
					//信息框
					$(this).find('.infor').stop().animate({height:'170px'},300);
					//隐藏信息
					$(this).find('p').stop().animate({height:'52px',opacity:'1'},300);
					//显示yun-icon
					$(this).find('.yun-icon').css({'display':'block'});
				}).mouseleave(function(){
					$(this).find('.lesson-play').stop().animate({opacity:'0'},100);
					$(this).find('.shoucang').css({'display':'none'});
					$(this).find('.infor').stop().animate({height:'88px'},300);
					$(this).find('p').stop().animate({height:'0',opacity:'0'},300);
					$(this).find('.yun-icon').css({'display':'none'});
				});
		},
		listBind:function(){
			//lesson-list:list 动画效果
			$('.lesson-list2 .item').unbind().mouseenter(function(){
				console.log('list enter');
				//播放阴影
				$(this).find('.lesson-play').stop().animate({opacity:'1'},200);
				//收藏icon
				$(this).find('.shoucang').css({'display':'block'});
			}).mouseleave(function(){
				$(this).find('.lesson-play').stop().animate({opacity:'0'},200);
				$(this).find('.shoucang').css({'display':'none'});
			})

		}
	})

	//默认为块状显示
	$.kuaiBind();

	//切换显示状态
	$('.kuai-icon').click(function(){
		$('#change-list').removeClass().addClass('lesson-list');
		//lesson-list:kuai 动画效果
		$.kuaiBind();

	});
	$('.list-icon').click(function(){
		$('#change-list').removeClass().addClass('lesson-list2');
		//lesson-list:list 动画效果
		$.listBind();
	})


	//打开搜索框：ie9不支持keyframes,用jQuery解决此兼容性问题
	$('#search-open').click(function(){
		$('.search-box').addClass('scale');
		$('.search-box').animate({width:'850px',opacity:'1'},300);
	});

	$('#search-close').click(function(){
		$('.search-box').removeClass('scale');
		$('.search-box').animate({width:'0',opacity:'0'},300);
	})

	//解决ie9不支持placeholder功能
	if(!('placeholder' in document.createElement('input'))){
		console.log('不支持');
		var $this = $('#search-text');
		var ph = $this.attr('placeholder');
		$this.val(ph).addClass('ph-color');
		$this.focus(function(){
			if($this.val()==ph){
				$this.val('').removeClass('ph-color');
			}
		})
		$this.blur(function(){
			if($this.val()==''){
				$this.val(ph).addClass('ph-color');
			}
		})

	}


	//全部课程导航tab切换
	$('.sort-mode dl').mouseenter(function(){
		$(this).addClass('open');
	}).mouseleave(function(){
		$(this).removeClass('open');
	})

	//课程库导航tab切换
	$('.aside-cList > li').mouseenter(function(){
		$(this).addClass('tab-open');
	}).mouseleave(function(){
		$(this).removeClass('tab-open');
	})

})