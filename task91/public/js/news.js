$(function() {
    refreshNews('推荐');
    function refreshNews(newsType) {
        $.ajax({
            url: '/news',
            type: 'GET',
            data: { newstype: newsType },
            datatype: 'json',
            success: function(data) {
            	var $lists = $('.news-lists');
            	$lists.empty();
                data.forEach(function(item, index) {
                   	var $list = $('<li>').addClass('news-list').attr('id',index).appendTo($lists);
	                var $imgdiv = $('<div>').addClass('newsimg').appendTo($list)
                    				.append($('<img>').attr('src',item.newsimg));
                    var $p = $('<p>').append($('<span>').addClass('newstime').text(item.newstime))
                    			.append($('<span>').addClass('newssrc').text(item.newssrc));
					var $newscon =$('<div>').addClass('newscontent')
								.append($('<h1>').text(item.newstitle))
								.append($p).appendTo($list);
					
                });
            },
            error: function() {
                console.log('requet fail');
            }
        })
    };

    $('#menu li a').click(function(e){
    	e.preventDefault();
    	refreshNews($(this).text());
    })
})
