(function () {
    var pics = [
        { src: '1.jpg', tSrc: '1-t.jpg', lSrc: '1-l.jpg', rSrc: '1-r.jpg', diff: '1-diff.png',cSrc:'1-c.png',sSrc:'1-s.jpg'},
        { src: '2.jpg', tSrc: '2-t.jpg', lSrc: '2-l.jpg', rSrc: '2-r.jpg', diff: '2-diff.png',cSrc:'2-c.png',sSrc:'2-s.jpg'},
        { src: '3.jpg', tSrc: '3-t.jpg', lSrc: '3-l.jpg', rSrc: '3-r.jpg', diff: '3-diff.png',cSrc:'3-c.png',sSrc:'3-s.jpg'},
        { src: '4.jpg', tSrc: '4-t.jpg', lSrc: '4-l.jpg', rSrc: '4-r.jpg', diff: '4-diff.png',cSrc:'4-c.png',sSrc:'4-s.jpg'},
        { src: '5.jpg', tSrc: '5-t.jpg', lSrc: '5-l.jpg', rSrc: '5-r.jpg', diff: '5-diff.png',cSrc:'5-c.png',sSrc:'5-s.jpg'},
        { src: '6.jpg', tSrc: '6-t.jpg', lSrc: '6-l.jpg', rSrc: '6-r.jpg', diff: '6-diff.png',cSrc:'6-c.png',sSrc:'6-s.jpg'},
        { src: '7.jpg', tSrc: '7-t.jpg', lSrc: '7-l.jpg', rSrc: '7-r.jpg', diff: '7-diff.png',cSrc:'7-c.png',sSrc:'7-s.jpg'},
        { src: '8.jpg', tSrc: '8-t.jpg', lSrc: '8-l.jpg', rSrc: '8-r.jpg', diff: '8-diff.png',cSrc:'8-c.png',sSrc:'8-s.jpg'},
        { src: '9.jpg', tSrc: '9-t.jpg', lSrc: '9-l.jpg', rSrc: '9-r.jpg', diff: '9-diff.png',cSrc:'9-c.png',sSrc:'9-s.jpg'},
        { src: '10.jpg', tSrc: '10-t.jpg', lSrc: '10-l.jpg', rSrc: '10-r.jpg', diff: '10-diff.png' ,cSrc:'10-c.png',sSrc:'10-s.jpg'},
        { src: '11.jpg', tSrc: '11-t.jpg', lSrc: '11-l.jpg', rSrc: '11-r.jpg', diff: '11-diff.png' ,cSrc:'11-c.png',sSrc:'11-s.jpg'},
        { src: '12.jpg', tSrc: '12-t.jpg', lSrc: '12-l.jpg', rSrc: '12-r.jpg', diff: '12-diff.png' ,cSrc:'12-c.png',sSrc:'12-s.jpg'},
        { src: '13.jpg', tSrc: '13-t.jpg', lSrc: '13-l.jpg', rSrc: '13-r.jpg', diff: '13-diff.png' ,cSrc:'13-c.png',sSrc:'13-s.jpg'},
        { src: '14.jpg', tSrc: '14-t.jpg', lSrc: '14-l.jpg', rSrc: '14-r.jpg', diff: '14-diff.png' ,cSrc:'14-c.png',sSrc:'14-s.jpg'},
        { src: '15.jpg', tSrc: '15-t.jpg', lSrc: '15-l.jpg', rSrc: '15-r.jpg', diff: '15-diff.png' ,cSrc:'15-c.png',sSrc:'15-s.jpg'},
        { src: '16.jpg', tSrc: '16-t.jpg', lSrc: '16-l.jpg', rSrc: '16-r.jpg', diff: '16-diff.png' ,cSrc:'16-c.png',sSrc:'16-s.jpg'},
        { src: '17.jpg', tSrc: '17-t.jpg', lSrc: '17-l.jpg', rSrc: '17-r.jpg', diff: '17-diff.png' ,cSrc:'17-c.png',sSrc:'17-s.jpg'},
        { src: '18.jpg', tSrc: '18-t.jpg', lSrc: '18-l.jpg', rSrc: '18-r.jpg', diff: '18-diff.png' ,cSrc:'18-c.png',sSrc:'18-s.jpg'},
        { src: '19.jpg', tSrc: '19-t.jpg', lSrc: '19-l.jpg', rSrc: '19-r.jpg', diff: '19-diff.png' ,cSrc:'19-c.png',sSrc:'19-s.jpg'},
        { src: '20.jpg', tSrc: '20-t.jpg', lSrc: '20-l.jpg', rSrc: '20-r.jpg', diff: '20-diff.png' ,cSrc:'20-c.png',sSrc:'20-s.jpg'},
        { src: '21.jpg', tSrc: '21-t.jpg', lSrc: '21-l.jpg', rSrc: '21-r.jpg', diff: '21-diff.png' ,cSrc:'21-c.png',sSrc:'21-s.jpg'}
    ];
    var datas = [
        { color: '白色', num: '000 Ultra light 47', price: '320.00' },
        { color: '珊瑚色', num: '450 Ultra lively', price: '320.00' },
        { color: '粉色', num: '485 Ultra lust', price: '320.00' },
        { color: '珊瑚色', num: '555 Ultra kiss 47', price: '320.00' },
        { color: '橘色', num: '545 Ultra mad', price: '320.00' },
        { color: '红色', num: '777 Ultra star', price: '320.00' },
        { color: '珊瑚色', num: '651 Ultra fire', price: '320.00' },
        { color: '红色', num: '770 Ultra love', price: '320.00' },
        { color: '粉色', num: '660 Ultra atomic', price: '320.00' },
        { color: '粉色', num: '763', price: '320.00' },
        { color: '红色', num: '999 Ultra dior', price: '320.00' },
        { color: '砖红色', num: '436 Ultra trouble', price: '320.00' },
        { color: '红色', num: '863', price: '320.00' },
        { color: '砖红色', num: '641', price: '320.00' },
        { color: '红色', num: '851 Ultra shock', price: '320.00' },
        { color: '裸色', num: '325 Ultra tender', price: '320.00' },
        { color: '裸色', num: '587 Ultra appeal', price: '320.00' },
        { color: '粉色', num: '755 Ultra daring', price: '320.00' },
        { color: '紫红色', num: '870 Ultra pulse', price: '320.00' },
        { color: '梅红色', num: '883 Ultra poison', price: '320.00' },
        { color: '黑色', num: '111 Ultra night 47', price: '320.00' }
    ];



    //生成color模块及点击事件
    for (var i = 0; i < pics.length; i++) {
        var obj = pics[i];
        var src = `
                <span>
                    <a href="javascript:">
                        <img src="./upload/${obj.src}" alt="">
                    </a>
                </span>       
        `
        $('<li class="sc"></li>').appendTo('.color ul').html(src)
    }
    var sy=0;
    $('.color li').on('click', function () {
        $(this).addClass('qq').siblings().removeClass('qq');
        var index = $(this).index();
        sy = index;
        var obj1 = pics[index];
        var obj2 = datas[index];
        //圈圈特效
        $(this).find('span').css('border-color', '#000').end().siblings().find('span').css('border-color', 'transparent');
        //改变en描述
        $('up .ms .en').text(obj2.num);
        $('up .ms .cn').text(obj2.color);
        //up图片链接更改
        var src = obj1.src;
        $('.up img').attr('src', './upload/' + src);
        //左侧图片链接改变
        var tSrc = obj1.tSrc;
        var lSrc = obj1.lSrc;
        var rSrc = obj1.rSrc;
        $('.left .t').find('img').attr('src', './upload/' + tSrc);
        $('.left li').eq(0).find('img').attr('src', './upload/' + lSrc);
        $('.left li').eq(1).find('img').attr('src', './upload/' + rSrc);
    })



    $('.color li').on('mouseenter', function () {
        var index = $(this).index();
        var obj1 = pics[index];
        var obj2 = datas[index];
        //圈圈特效
        $(this).find('span').css('border-color', '#000').end().siblings().find('span').css('border-color', 'transparent');
        //改变en描述
        $('.up .ms .en').text(obj2.num);
        $('.up .ms .cn').text(obj2.color);
        //up图片链接更改
        var src = obj1.src;
        $('.up img').attr('src', './upload/' + src);
    })

    $('.color li').mouseleave(function () {
        var obj1 = pics[sy];
        var obj2 = datas[sy];
        //圈圈特效
        $('.color li').eq(sy).find('span').css('border-color', '#000').end().siblings().find('span').css('border-color', 'transparent');
        //改变en描述
        $('.up .ms .en').text(datas[sy].num);
        
        $('.up .ms .cn').text(obj2.color);
        //up图片链接更改
        var src = obj1.src;
        $('.up img').attr('src', './upload/' + src);
        //左侧图片链接改变
        var tSrc = obj1.tSrc;
        var lSrc = obj1.lSrc;
        var rSrc = obj1.rSrc;
        $('.left .t').find('img').attr('src', './upload/' + tSrc);
        $('.left li').eq(0).find('img').attr('src', './upload/' + lSrc);
        $('.left li').eq(1).find('img').attr('src', './upload/' + rSrc);
    });


    // 生成price中的下拉菜单ul及点击事件
    for (var i = 0; i < datas.length; i++) {
        var obj = datas[i];
        var obj1 = pics[i];
        var nr = `
            <a href="javascript:">
                <img src="./upload/${obj1.src}" alt="" class="fl">
                    <div class="ms fl">
                        <p class="en">${obj.num}</p>
                        <p class="cn">${obj.color}</p>
                    </div>
                    <span class="iconfont fr jt">&#xe662;</span>
                    <div class="jage fr">￥${obj.price}</div>
            </a>
        `
        $('<li></li>').html(nr).appendTo('.price ul');
    };
    $('.price').on('click', 'li', function () {
        $(this).find('span.jt').css('color', '#000').end().siblings().find('span.jt').css('color', 'transparent');
        var txt1 = $(this).find('.ms .en').text();
        var txt2 = $(this).find('.ms .cn').text();
        var txt3 = $(this).find('.jage').text();
        var src = $(this).find('img').attr('src');
        $('.up .ms .en').text(txt1);
        $('.up .ms .cn').text(txt2);
        $('.up .jage').text(txt3);
        $('.up img').attr('src', src);
        sy=$(this).index();
        $('.color li').eq($(this).index()).find('span').css('border-color', '#000')
        .end().siblings().find('span').css('border-color', 'transparent');
        $('.color li').eq($(this).index()).addClass('qq').siblings().removeClass('qq');
        var obj1 = pics[$(this).index()];
        var obj2 = datas[$(this).index()];
        var tSrc = obj1.tSrc;
        var lSrc = obj1.lSrc;
        var rSrc = obj1.rSrc;
        $('.left .t').find('img').attr('src', './upload/' + tSrc);
        $('.left li').eq(0).find('img').attr('src', './upload/' + lSrc);
        $('.left li').eq(1).find('img').attr('src', './upload/' + rSrc);
    });
    //price点击事件
    $('.price').click(function () {
        $('.tb').toggleClass('display');
        $('.price ul').toggleClass('display');
    });

    // onscroll事件
    var h = $('.content .right').offset().top;
    juanQu();
    $(window).scroll(function () {
        juanQu();
    });

    function juanQu() {
        var h1 = $(window).scrollTop();
        // 回到顶部按钮出现与隐藏
        if(h1>=100){
            $('.toTop').show().css('z-index',10000);
            
        }else {
            $('.toTop').hide();
        }
        // 点击回到顶部
        $('.toTop').click(function(){
            $('body,html').scrollTop(0);
        })

        var rightHeight = $('.content .right').height();
        var allHeight = $('.top').height();
        if (h1 >= allHeight - rightHeight) {
            $('.content .right').removeClass('scroll');
            $('.content .right').offset({ top: allHeight - rightHeight + 10 });
            // console.log(h1, rightHeight, rightHeight)
        } else if (h1 >= h) {
            $('.content .right').addClass('scroll');
            $('.content .right').offset({ top: h1 + 10 });
        }
        else {
            $('.content .right').removeClass('scroll');
            $('.content .right').offset({ top: h });
        };
    }

    // 定制刻字功能
    $('.right .dz a').eq(0).click(function(){
        $('.kz .wrapper .ok').prop('disabled',true).css({'background':'#cccccc','border-color':'#cccccc','cursor':'default'});
        $('body').addClass('hidden');
        $('.kz').show();
        $('.kz input').on('input',function(){
            var num=8-$(this).val().length;
            // console.log(num)
            $('.kz .count').text(num);
            $('.kz .wrapper .ok').prop('disabled',true);
            if(num<8) {
                $('.kz .wrapper .ok').prop('disabled',false).css({'background':'#000000','border-color':'#000000','cursor':'pointer'});
            }else {
                $('.kz .wrapper .ok').prop('disabled',true).css({'background':'#cccccc','border-color':'#cccccc','cursor':'default'});
            }

        })
    })
    $('.kz .ok').on('click',function(){
        var kznr= $('.kz input').val();
            $('.dz i.nr').addClass('nrr');
            $('.dz span.nr').text(kznr).show();
            // $('.dz span.nr').text(kznr);
            $('body').removeClass('hidden');
            $('.kz').hide();
            $('.kz input').val('');
            $('.kz .count').text('8');
    })
    // 关闭定制刻字功能
    $('.kz .close,.kz  .cancel').on('click',function(e){
        // e.stopPropagation();
        $('.kz input').val('');
        $('.kz .count').text('8');
        $('body').removeClass('hidden');
        $('.kz').hide();
    })

    // 免费送货及退换
    $('.content .right .btn .th').on('click',function(){
        $('.tuihuan').show();
        $('body').addClass('hidden');
        $('.tuihuan span').on('click',function(){
            $('.tuihuan').hide();
            $('body').removeClass('hidden');
        })
    })

    //购物车生成之收藏
    $('.right .btn a').eq(1).click(function(){
        var isOk=$('.right .color li').hasClass('qq');
        if(isOk){
            // $('.right .btn a').eq(1).css('background','#000');
            $('.top .car').show();
            //禁止屏幕生成滚动条
            $('body').addClass('hidden');
            // 自动生成列表
            var nr=`
            <img src="./upload/${pics[sy].sSrc}" alt="" class="fl">
            <div class="fl m">
                <p>全新<strong>DIOR</strong>迪奥烈艳蓝金挚红唇膏</p>
                <i class="p1">炽色 持妆 轻盈水润</i>
                <i class="p2">${datas[sy].num}</i>
                <span><strong>￥${datas[sy].price}</strong></span>
                <a href="javascript:" class="del">删除</a>
            </div>
            <div class="bag fr">
                <span class="iconfont">&#xe683;</span>
            </div>
            `
            $('<li></li>').appendTo('.car .down .d1').addClass('clearfix').html(nr);
            $('.top .car .del').click(function(){
                $(this).parent().parent().remove();
                var cou=$('.top .car .down .d1').find('li').length;
                if(cou==0){
                    $('.top .car .up li').eq(0).find('i').text('');
                }else {
                    $('.top .car .up li').eq(0).find('i').text('('+cou+')');
                }
            })
            // 关闭购物车
            $('.top .car .close').on('click',function(){
                $('body').removeClass('hidden');
                $('.top .car').hide();
            })
            //设置ul的高度
            var diffHeight=$(window).innerHeight()-$('.car .close').height()-$('.car .up').height();
            $('.top .car .down').height(diffHeight);
            //设置切换栏中收藏数量
            var cou=$('.top .car .down .d1').find('li').length;
            if(cou==0){
                $('.top .car .up li').eq(0).find('i').text('');
            }else {
                $('.top .car .up li').eq(0).find('i').text('('+cou+')');
            }
        }
    });

    //购物车之我的账户
    



})();


