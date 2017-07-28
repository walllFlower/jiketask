$(window).on('load',function(){
	boxLocation();
	var dataImg = {//json数据
		'data':[{
			'src':'1.jpg'
		},{
			'src':'3.jpg'
		},{
			'src':'5.jpg'
		},{
			'src':'7.jpg'
		},{
			'src':'9.jpg'
		},{
			'src':'11.jpg'
		}]
	}
	$(window).scroll(function(){
		if(scrollSide()){
			//创建每一个box元素,以瀑布流形式location
			$.each(dataImg.data,function(index,value){
				var box = $('<div>').addClass('box').appendTo($('#container'));
				var content = $('<div>').addClass('content').appendTo(box);
				$('<img>').attr('src','img/'+$(value).attr('src')).appendTo(content);
				boxLocation();
			})			
		}
	})
	$(window).resize(function(){//改变窗口时重新布局
		boxLocation();
	})
})

function scrollSide(){
	//得到最后一个box,不一定是最下面的盒子.转换成dom对象,获得top
	var lastBoxTop = $('.box').last().get(0).offsetTop;
	var scrollSideHeight = lastBoxTop;
	var scrollHeight = $(window).scrollTop();
	//最后一张图片出现时开始加载
	return (scrollHeight+$(window).height()>=scrollSideHeight);
}

function boxLocation(){
	var boxs = $('.box');
	var boxWidth = boxs.width();
	var num = Math.floor($(window).width()/boxWidth);
	var boxHeightArr = [];
	boxs.each(function(index,element){
		if(index<num){
			boxHeightArr[index] = $(element).height();//转换为jq对象
			$(element).css({
				'position':'absolute',
				'top':0,
				'left':index*boxWidth
			});
		}else{
			var minBoxHeight = Math.min.apply(null,boxHeightArr);//得到最小高度
			var minBoxIndex = $.inArray(minBoxHeight,boxHeightArr);//得到最小高度对应的索引
			$(element).css({
				'position':'absolute',
				'top':minBoxHeight,
				'left':boxs.eq(minBoxIndex).position().left
			});
			boxHeightArr[minBoxIndex] += $(element).height();
		}
	})
}