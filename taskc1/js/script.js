/*
使用单例模式：将tab切换的中的变量、方法和绑定事件的方法进行封装
*/
var changePanel = {
    $myNav: $('.mine-nav .title'),
    $curNav:$('.tabin .item'),
    $more:$('.more').eq(0),
    $moreList:$('#more-list'),

    //我的导航面板
    toggleMyNav:function(self){
        if (self.hasClass('open')) {
            self.removeClass('open');
            $('.mine-con').removeClass('open');
        } else {
            self.addClass('open');
            $('.mine-con').addClass('open');
        }
    },

    //当前标签切换及面板
    toggleCurNav:function(index,self){
        self.click(function() {
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
    },

    bindMyNav:function(element,fn){
        element.click(function(){
            fn($(this));
        })
    },

    bindCurNav:function(element,fn){
        element.each(function(index){
            fn(index,$(this));
        })
    },

    bindMore:function(){
        var morelist = changePanel.$moreList;
        this.$more.mouseenter(function(){
            changePanel.$moreList.show();
        })
    },

    bindMoreList:function(element){
        element.mouseenter(function(){
            $(this).show();
        }).mouseleave(function(){
            $(this).hide();
        })
    }
}

$(function() {
    changePanel.bindMyNav(changePanel.$myNav,changePanel.toggleMyNav);
    changePanel.bindCurNav(changePanel.$curNav,changePanel.toggleCurNav);
    changePanel.bindMore();
    changePanel.bindMoreList(changePanel.$moreList);

    //顶部固定搜索框
    $(window).scroll(function(){
        var $top = $(window).scrollTop();
        if($top>180){
            $('.s-top-search').fadeIn(100);
        }else{
            $('.s-top-search').fadeOut(100);
        }
    })

})