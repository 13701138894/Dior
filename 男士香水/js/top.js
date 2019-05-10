// 回到顶部dingBu

//【点击头部右侧爱心后显示我的收藏】
$('.first-heart').click(function(){
    $('.content, .content .samllbox').css('display','block')
})
// 获取今日团距离文档顶部的位置
var _top = $('.dingBu').offset().top;
// 1. 给window注册scroll事件
$(window).scroll(function () {
    var v = $(window).scrollTop();
    // 3. 判断
    if (v > _top) {
        // 固定今日团
        $('.dingBu').addClass('.dingBu');
        // 显示回到顶部
        $('.dingBu').show();
    } else {
        // 回到标准流中
        $('.dingBu').removeClass('.dingBu');
        // 隐藏回到顶部
        $('.dingBu').hide();
    }
});
$('.dingBu').click(function () {
    $('html,body').animate({
        scrollTop: 0
    }, 300, 'linear');
});
// 回到顶部E
// 目录
$('.top .upper .ml').click(function () {
    $('body').addClass('hidden');
    $('.top .ml_develop').show();
})
//点击彩妆
$('.top .ml_develop').on('click', 'li:nth-child(2)', function () {
    $('.top .ml_develop ul .mu_disappear').hide().siblings('.cosmetics').show();
    $('.top .ml_develop ul .d3_show').hide();
})
//点击唇妆
$('.top .ml_develop').on('click', 'li:nth-child(3)', function () {
    $('.top .ml_develop ul .d3').hide().siblings('.d3_show').show();
});
//目录下拉菜单关闭功能
$('.top .ml_develop').on('click', 'img', function () {
    $(this).parent().parent().parent().hide();
    $('.top .ml_develop ul .mu_disappear').show().siblings('.cosmetics,.d3_show').hide();
    $('body').removeClass('hidden');
})
// 目录


// tab切换A
$('.font').on('click','button',function () {
  $(this).find('svg').addClass('icon').removeClass('icon-r').parent().siblings().find('svg').addClass('icon-r').removeClass('icon');
$('.fuQin .show').eq($(this).index()).show().siblings().hide();
 var hid= $('.video-content').hide();
})
// tab切换E




// 需求 点击爱心后从购物车显示
$('.b-1').click(function () {
  
    $(this).addClass('nve').siblings().removeClass('nve');
    $('.gouWu').css('display', 'none');
           
})
$('.b').click(function () {
    $(this).addClass('nve').siblings().removeClass('nve');
    $('.gouWu').css('display', 'block');
})

// 点击li显示下边框
$('.gouWu .zF  li').click(function () {
    $(this).addClass('solid').siblings().removeClass('solid');
})

//点击爱心更换页面切换E