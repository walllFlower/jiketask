var _wraper = $('.swiper-wrapper').get(0),
    _timer,
	_this,
	val,
	counter=0;

var _storyTimer,
	_storyWraper = $(".swiper-wrap").get(0),
	storyCounter=1,
	_thisStory;

// banner自动轮播
function repeat(){
	$('.swiper-pagination-switch').removeClass('swiper-active-switch');
		if(counter==3){
			$(_wraper).animate({'margin-left':'0px'},1800,'easeOutQuint');
			counter = 0;
			_this = $('.swiper-pagination-switch').get(counter);
			$(_this).addClass('swiper-active-switch');
			// addClass方法不能在get方法后连缀？
		}else{
			counter++;
			val = counter*(-750);
			console.log(val);
			$(_wraper).animate({'margin-left':val+'px'},1800,'easeOutQuint');
			_this = $('.swiper-pagination-switch').get(counter);
			$(_this).addClass('swiper-active-switch');
		}
}


//story自动轮播
function storyRepeat() {
	$('.story-swiper-pag-switch').removeClass('story-swiper-act-switch');
		if(storyCounter==0){
			$(_storyWraper).animate({'margin-left':'0px'},1800,'easeOutQuint');
			_thisStory = $('.story-swiper-pag-switch').get(storyCounter);
			$(_thisStory).addClass('story-swiper-act-switch');
			// addClass方法不能在get方法后连缀？
			storyCounter++;
		}else{
			// console.log();
			$(_storyWraper).animate({'margin-left':'-1000px'},1800,'easeOutQuint');
			_thisStory = $('.story-swiper-pag-switch').get(storyCounter);
			$(_thisStory).addClass('story-swiper-act-switch');
			storyCounter--;
		}
}

$(document).ready(function(){
	//banner定时器
	_timer = setInterval('repeat()',4000);/*初始化定时器*/

	// banner点击左右键切换
	$('#banner-arrow-right').click(function(){
		if(_timer) clearInterval(_timer);/*点击时清除计数器*/
		$('.swiper-pagination-switch').removeClass('swiper-active-switch');
		if(counter==3){
			$(_wraper).animate({'margin-left':'0px'},1800,'easeOutQuint');
			counter=0;
			_this = $('.swiper-pagination-switch').get(counter);
			$(_this).addClass('swiper-active-switch');
		}else{
			counter++;
			val = counter*(-750);
			$(_wraper).animate({'margin-left':val+'px'},1500,'easeOutQuint');
			_this = $('.swiper-pagination-switch').get(counter);
			$(_this).addClass('swiper-active-switch');

		}
		_timer = setInterval('repeat()',4000);/*恢复计数器*/
	});

	$('#banner-arrow-left').click(function(){
		if(_timer) clearInterval(_timer);
		$('.swiper-pagination-switch').removeClass('swiper-active-switch');
		if(counter==0){
			$(_wraper).animate({'margin-left':'-2250px'},1800,'easeOutQuint');
			counter=3;
			_this = $('.swiper-pagination-switch').get(counter);
			$(_this).addClass('swiper-active-switch');
		}else{
			counter--;
			val = counter*(-750);
			$(_wraper).animate({'margin-left':val+'px'},1500,'easeOutQuint');
			_this = $('.swiper-pagination-switch').get(counter);
			$(_this).addClass('swiper-active-switch');

		}
		_timer = setInterval('repeat()',4000);
	});

	// banner点击标签切换
	$('.swiper-pagination-switch').click(function(){
		if(_timer) clearInterval(_timer);
		$('.swiper-pagination-switch').removeClass('swiper-active-switch');
		$(this).addClass('swiper-active-switch');
		counter = parseInt($(this).attr('data-value'));
		val = counter*(-750);
		$(_wraper).animate({'margin-left':val+'px'},1500,'easeOutQuint');
		console.log(counter);
		_timer = setInterval('repeat()',4000);
	});

	//story定时器
	_storyTimer = setInterval('storyRepeat()',8000);

	// story点击标签切换
	$('.story-swiper-pag-switch').click(function(){
		if(_storyTimer) clearInterval(_storyTimer);
		$('.story-swiper-pag-switch').removeClass('story-swiper-act-switch');
		$(this).addClass('story-swiper-act-switch');
		storyCounter = parseInt($(this).attr('data-value'));
		console.log(storyCounter);
		if(storyCounter==0){
			$(_storyWraper).animate({'margin-left':'0px'},1500,'easeOutQuint');
		}else{
			$(_storyWraper).animate({'margin-left':'-1000px'},1500,'easeOutQuint');
		}
		// console.log();
		_storyTimer = setInterval('storyRepeat()',8000);
	});

	//story鼠标悬浮停止轮播
	$('.story-con').mouseover(function(){
		clearInterval(_storyTimer);
	}).mouseout(function(){
		_storyTimer = setInterval('storyRepeat()',8000);
	});


	// 回到顶部
	$('.top').hide();
	$(document).scroll(function(){
		var scroll_top = $(document).scrollTop(); 
		if(scroll_top==0){
			$('.top').fadeOut();
		}else{
			$('.top').fadeIn();
		}
	});
	$('.top').click(function(){
		$('body').animate({scrollTop:0},300); 
	})
});
