$(function() {
    
    //我的导航面板
    $('.mine-nav .title').click(function() {
        var _this = $(this);
        if (_this.hasClass('open')) {
            _this.removeClass('open');
            $('.mine-con').removeClass('open');
        } else {
            _this.addClass('open');
            $('.mine-con').addClass('open');
        }
    })

    //当前标签切换及面板
    $('.tabin .item').each(function(index) {
        $(this).click(function() {
            $('.tabin .item').each(function() {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                }
            })
            $('.content .item').each(function() {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                }
            })
            $(this).addClass('active');
            $('.content .item').eq(index).addClass('active');
        })
    })

    //右侧面板下拉
    $('.more').eq(0).mouseenter(function(){
        $('#more-list').show();
    })
    $('#more-list').mouseenter(function(){
        $(this).show();
    }).mouseleave(function(){
        $(this).hide();
    })

    //顶部固定搜索框
    $(window).scroll(function(){
        var $top = $(window).scrollTop();
        if($top>180){
            // console.log($top);
            $('.s-top-search').fadeIn(100);
        }else{
            $('.s-top-search').fadeOut(100);
        }
    })

})