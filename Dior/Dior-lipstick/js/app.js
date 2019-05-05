// top部分
(function (window) {
    var pics = [
        { src: '1.jpg', tSrc: '1-t.jpg', lSrc: '1-l.jpg', rSrc: '1-r.jpg', diff: '1-diff.png', cSrc: '1-c.png', sSrc: '1-s.jpg' },
        { src: '2.jpg', tSrc: '2-t.jpg', lSrc: '2-l.jpg', rSrc: '2-r.jpg', diff: '2-diff.png', cSrc: '2-c.png', sSrc: '2-s.jpg' },
        { src: '3.jpg', tSrc: '3-t.jpg', lSrc: '3-l.jpg', rSrc: '3-r.jpg', diff: '3-diff.png', cSrc: '3-c.png', sSrc: '3-s.jpg' },
        { src: '4.jpg', tSrc: '4-t.jpg', lSrc: '4-l.jpg', rSrc: '4-r.jpg', diff: '4-diff.png', cSrc: '4-c.png', sSrc: '4-s.jpg' },
        { src: '5.jpg', tSrc: '5-t.jpg', lSrc: '5-l.jpg', rSrc: '5-r.jpg', diff: '5-diff.png', cSrc: '5-c.png', sSrc: '5-s.jpg' },
        { src: '6.jpg', tSrc: '6-t.jpg', lSrc: '6-l.jpg', rSrc: '6-r.jpg', diff: '6-diff.png', cSrc: '6-c.png', sSrc: '6-s.jpg' },
        { src: '7.jpg', tSrc: '7-t.jpg', lSrc: '7-l.jpg', rSrc: '7-r.jpg', diff: '7-diff.png', cSrc: '7-c.png', sSrc: '7-s.jpg' },
        { src: '8.jpg', tSrc: '8-t.jpg', lSrc: '8-l.jpg', rSrc: '8-r.jpg', diff: '8-diff.png', cSrc: '8-c.png', sSrc: '8-s.jpg' },
        { src: '9.jpg', tSrc: '9-t.jpg', lSrc: '9-l.jpg', rSrc: '9-r.jpg', diff: '9-diff.png', cSrc: '9-c.png', sSrc: '9-s.jpg' },
        { src: '10.jpg', tSrc: '10-t.jpg', lSrc: '10-l.jpg', rSrc: '10-r.jpg', diff: '10-diff.png', cSrc: '10-c.png', sSrc: '10-s.jpg' },
        { src: '11.jpg', tSrc: '11-t.jpg', lSrc: '11-l.jpg', rSrc: '11-r.jpg', diff: '11-diff.png', cSrc: '11-c.png', sSrc: '11-s.jpg' },
        { src: '12.jpg', tSrc: '12-t.jpg', lSrc: '12-l.jpg', rSrc: '12-r.jpg', diff: '12-diff.png', cSrc: '12-c.png', sSrc: '12-s.jpg' },
        { src: '13.jpg', tSrc: '13-t.jpg', lSrc: '13-l.jpg', rSrc: '13-r.jpg', diff: '13-diff.png', cSrc: '13-c.png', sSrc: '13-s.jpg' },
        { src: '14.jpg', tSrc: '14-t.jpg', lSrc: '14-l.jpg', rSrc: '14-r.jpg', diff: '14-diff.png', cSrc: '14-c.png', sSrc: '14-s.jpg' },
        { src: '15.jpg', tSrc: '15-t.jpg', lSrc: '15-l.jpg', rSrc: '15-r.jpg', diff: '15-diff.png', cSrc: '15-c.png', sSrc: '15-s.jpg' },
        { src: '16.jpg', tSrc: '16-t.jpg', lSrc: '16-l.jpg', rSrc: '16-r.jpg', diff: '16-diff.png', cSrc: '16-c.png', sSrc: '16-s.jpg' },
        { src: '17.jpg', tSrc: '17-t.jpg', lSrc: '17-l.jpg', rSrc: '17-r.jpg', diff: '17-diff.png', cSrc: '17-c.png', sSrc: '17-s.jpg' },
        { src: '18.jpg', tSrc: '18-t.jpg', lSrc: '18-l.jpg', rSrc: '18-r.jpg', diff: '18-diff.png', cSrc: '18-c.png', sSrc: '18-s.jpg' },
        { src: '19.jpg', tSrc: '19-t.jpg', lSrc: '19-l.jpg', rSrc: '19-r.jpg', diff: '19-diff.png', cSrc: '19-c.png', sSrc: '19-s.jpg' },
        { src: '20.jpg', tSrc: '20-t.jpg', lSrc: '20-l.jpg', rSrc: '20-r.jpg', diff: '20-diff.png', cSrc: '20-c.png', sSrc: '20-s.jpg' },
        { src: '21.jpg', tSrc: '21-t.jpg', lSrc: '21-l.jpg', rSrc: '21-r.jpg', diff: '21-diff.png', cSrc: '21-c.png', sSrc: '21-s.jpg' }
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

    //点击目录弹出目录下拉菜单
    $('.upper .ml').click(function () {
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
    //upper购物篮数量显示及计算更新
    upper_count();
    $('.top').on('click', '.upper .r span:eq(2)', function () {
        var isOk = parseInt($('.upper .r span i').text());
        if (isOk > 0) {
            $('.top .car').show();
            //禁止屏幕生成滚动条
            $('body').addClass('hidden');
            $('.car .up li').eq(2).addClass('active').siblings().removeClass('active');
            $('.car .down ul').eq(2).removeClass('display').siblings().addClass('display');
        }
    })



    //生成color模块及点击事件
    for (var i = 0; i < pics.length; i++) {
        var obj = pics[i];
        var src = `<span><a href="javascript:;"><img src="./upload/${obj.src}" alt=""></a></span>`
        // var src = '<span><a href="javascript:;"><img src="./upload/'+obj.src+'" alt=""></a></span>'
        $('<li class="sc"></li>').appendTo('.color ul').html(src)
    }
    // var sy ;
    var sy = 10;
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

    // color模块默认点击状体
    colorInitialise();
    function colorInitialise() {

        $('.color li').eq(10).find('span').css('border-color', '#000').end().siblings().find('span').css('border-color', 'transparent');
        $('.color li').eq(10).addClass('qq').siblings().removeClass('qq');
        //改变en描述
        $('.price .up .ms .en').text(datas[10].num);
        $('.price .up .ms .cn').text(datas[10].color);
        //up图片链接更改
        var src = pics[10].src;
        $('.up img').attr('src', './upload/' + src);
        //左侧图片链接改变
        var tSrc = pics[10].tSrc;
        var lSrc = pics[10].lSrc;
        var rSrc = pics[10].rSrc;
        $('.left .t').find('img').attr('src', './upload/' + tSrc);
        $('.left li').eq(0).find('img').attr('src', './upload/' + lSrc);
        $('.left li').eq(1).find('img').attr('src', './upload/' + rSrc);
    };



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

    // $('.color li').mouseleave(function () {
    //     var obj1 = pics[sy];
    //     var obj2 = datas[sy];
    //     //圈圈特效
    //     $('.color li.qq').find('span').css('border-color', '#000').end().siblings().find('span').css('border-color', 'transparent');
    //     //改变en描述
    //     $('.price a.up .ms .en').text(datas[sy].num);

    //     $('.price a.up .ms .cn').text(obj2.color);
    //     //up图片链接更改
    //     var src = obj1.src;
    //     $('.up img').attr('src', './upload/' + src);
    //     //左侧图片链接改变
    //     var tSrc = obj1.tSrc;
    //     var lSrc = obj1.lSrc;
    //     var rSrc = obj1.rSrc;
    //     $('.left .t').find('img').attr('src', './upload/' + tSrc);
    //     $('.left li').eq(0).find('img').attr('src', './upload/' + lSrc);
    //     $('.left li').eq(1).find('img').attr('src', './upload/' + rSrc);
    // });

    $('.color li').mouseleave(function () {

        //圈圈特效
        $('.color li.qq').find('span').css('border-color', '#000').end().siblings().find('span').css('border-color', 'transparent');
        var index = $('.color li.qq').index();
        // console.log(index);
        var obj1 = pics[index];
        var obj2 = datas[index];
        // console.log(obj1);
        // console.log(obj2);
        //改变en描述
        $('.price a.up .ms .en').text(obj2.num);

        $('.price a.up .ms .cn').text(obj2.color);
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
        sy = $(this).index();
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
        if (h1 >= 100) {
            var topLeft = (window.innerWidth - $('.top').width()) / 2 + $('.top').width() * 0.95;
            $('.toTop').show().css('left', topLeft);
            // console.log(topLeft)

        } else {
            $('.toTop').hide();
        }
        // 点击回到顶部
        $('.toTop').click(function () {
            $('body,html').scrollTop(0);
        })


        // right模块定位功能实现
        // var rightHeight = $('.content .right').height();
        // console.log(rightHeight,allHeight);
        // h1→window卷去距离
        // allHeight→top高度
        // rightHeight→右边盒子高度
        // h为right盒子到顶部距离
        // upperHeight为upper盒子高度
        // 设置right高度，因为改为弹性布局，若不设置高度，默认继承父盒子高度
        var allHeight = $('.top').height();
        var rightBoxs = $('.right').children('div');
        var rightHeight = 0
        var upperHeight = $('.upper').height();
        for (var i = 0; i < rightBoxs.length; i++) {
            var height = rightBoxs.eq(i).height();
            // console.log(height);
            rightHeight += height;
        }
        // console.log(rightHeight)

        //卷去的距离大于top盒子与right盒子差值时
        if (h1 >= allHeight - rightHeight) {
            // 取消绝对定位
            $('.content .right').removeClass('scroll');
            $('.content .right').offset({ top: allHeight - rightHeight - upperHeight +185});
            $('.content .right').css('left', 0);
            // console.log(h1, allHeight,rightHeight)
            // console.log('aaa',$('.right').width())
        } else if (h1 >= h) {
            // 触发定位
            $('.content .right').addClass('scroll');
            $('.content .right').offset({ top: h1 + 10 });
            var w_width=$('.top').width();
            $('.content .right').css({width:0.34*w_width,'margin-left':0.06*w_width});
            // 计算盒子的位置，（屏幕宽度-版心宽度）/2+
            // var left=(window.innerWidth-$('.top').width())/2+$('.top').width()*0.6;
            // 浏览器时下窗口文档body的宽度$(document.body).width()
            var left = ($(document.body).width() - $('.top').width()) / 2 + $('.top').width() * 0.6;
            // $('.content .right').css({left:left,margin:0});
            $('.content .right').css('left', left);
            // console.log('bbb',$('.right').width());
        }
        else {
            $('.content .right').removeClass('scroll');
            $('.content .right').offset({ top: h });
            $('.content .right').css('left', 0);
        };
        // console.log(h1, allHeight-rightHeight)
        // console.log(h1, allHeight,rightHeight)

    }

    // 定制刻字功能
    $('.right .dz a').eq(0).click(function () {
        $('.kz .wrapper .ok').prop('disabled', true).css({ 'background': '#cccccc', 'border-color': '#cccccc', 'cursor': 'default' });
        $('body').addClass('hidden');
        $('.kz').show();
        $('.kz input').on('input', function () {
            var num = 8 - $(this).val().length;
            // console.log(num)
            $('.kz .count').text(num);
            $('.kz .wrapper .ok').prop('disabled', true);
            if (num < 8) {
                $('.kz .wrapper .ok').prop('disabled', false).css({ 'background': '#000000', 'border-color': '#000000', 'cursor': 'pointer' });
            } else {
                $('.kz .wrapper .ok').prop('disabled', true).css({ 'background': '#cccccc', 'border-color': '#cccccc', 'cursor': 'default' });
            }

        })
    })
    //点击确定键关闭刻字页面，并向刻字区域添加内容
    $('.kz .ok').on('click', function () {
        var kznr = $('.kz input').val();
        $('.dz i.nr').addClass('nrr');
        $('.dz span.nr').text(kznr).show();
        $('body').removeClass('hidden');
        $('.kz').hide();
        $('.kz input').val('');
        $('.kz .count').text('8');
    })
    // 关闭定制刻字功能
    $('.kz .close,.kz  .cancel').on('click', function (e) {
        // e.stopPropagation();
        $('.kz input').val('');
        $('.kz .count').text('8');
        $('body').removeClass('hidden');
        $('.kz').hide();
    })


    // 免费送货及退换
    $('.content .right .btn .th').on('click', function () {
        $('.tuihuan').show();
        $('body').addClass('hidden');
        $('.tuihuan span').on('click', function () {
            $('.tuihuan').hide();
            $('body').removeClass('hidden');
        })
    })
    $('.top .car .playCar').css('width',0.41*w_width)
    //购物车生成之我的收藏
    $('.right .btn a').eq(1).click(function () {
        var isOk = $('.right .color li').hasClass('qq');
        if (isOk) {
            $('.top .car').show();
            //禁止屏幕生成滚动条
            $('body').addClass('hidden');
            //控制playCar位置
            var playCarPosition = ($(window).width() - $('.top').width()) / 2;
            $('.top .car .playCar').css('right', playCarPosition);
            // // 显示我的收藏
            // $('.car .down .d1').removeClass('display').siblings().addClass('display');
            // 我的收藏之空替换隐藏
            $('.car .down .d1').next().addClass('display');
            //我的收藏生成函数
            sc(sy);
            //我的收藏之点击手提袋加入购物篮功能
            $('.car .d1 .bag')[0].addEventListener('click', function () {
                var that = this;

            })

            //设置ul的高度
            var diffHeight = $(window).innerHeight() - $('.car .close').height() - $('.car .up').height();
            $('.top .car .down').height(diffHeight);
            $('.top .car .down .d2').height(diffHeight);
        }
    });

    // 购物车收藏之删除功能
    $('.top .car').on('click', '.d1 .del', function () {
        $(this).parent().parent().remove();
        //检查我的购物篮中是否有带💗商品，有切换💗标记
        var nr = parseInt($(this).siblings('.p2').text());
        var nrs = $('.car .d3 .basket strong');
        for (var i = 0; i < nrs.length; i++) {
            if (nrs.eq(i).text() == nr) {
                $('.car .d3 li').eq(i).find('.switch1').removeClass('display').next().addClass('display');
                break;
            }
        }



        // li的数量
        var cou = $('.top .car .down .d1').find('li').length;
        if (cou == 0) {
            $('.top .car .up li').eq(0).find('i').text('');
            // 我的收藏隐藏
            $('.car .down .d1').addClass('display');
            // 我的收藏之空替换显示
            $('.car .down .d1').next().removeClass('display');
        } else {
            // 我的收藏显示
            $('.car .down .d1').removeClass('display');
            // 我的收藏之空替换隐藏
            $('.car .down .d1').next().addClass('display');
            $('.top .car .up li').eq(0).find('i').text('(' + cou + ')');
        }
    })

    //我的收藏生成函数
    function sc(id) {
        // 自动生成列表
        var nr = `
        <img src="./upload/${pics[id].sSrc}" alt="" class="fl">
        <div class="fl m">
            <p>全新<strong>DIOR</strong>迪奥烈艳蓝金挚红唇膏</p>
            <i class="p1">炽色 持妆 轻盈水润</i>
            <i class="p2">${datas[id].num}</i>
            <span><strong>￥${datas[id].price}</strong></span>
            <a href="javascript:" class="del">删除</a>
        </div>
        <div class="bag fr">
            <span class="iconfont">&#xe683;</span>
        </div>
        `
        $('<li></li>').appendTo('.car .down .d1').addClass('clearfix').html(nr);
        // 导航栏显示点击效果
        $('.top .car .up li').eq(0).addClass('active').siblings().removeClass('active');
        // 显示我的收藏
        $('.car .down .d1').removeClass('display').siblings().addClass('display');
        //设置切换栏中收藏数量
        sc_count();
    }

    //设置切换栏中收藏数量函数
    function sc_count() {
        var cou = $('.top .car .down .d1').find('li').length;
        if (cou == 0) {
            $('.top .car .up li').eq(0).find('i').text('');
        } else {
            $('.top .car .up li').eq(0).find('i').text('(' + cou + ')');
        }
    }


    // 我的收藏是否为空判断函数
    function scIsEmpty() {
        var cou = $('.top .car .down .d1').find('li').length;
        if (cou == 0) {
            $('.top .car .up li').eq(0).find('i').text('');
            // 我的收藏隐藏
            $('.car .down .d1').addClass('display');
            // 我的收藏之空替换显示
            $('.car .down .d1').next().removeClass('display');
        }
    };

    // 点击我的收藏中的购物篮图标，将商品添加到购物篮中
    $('.car').on('click', '.down .d1 .bag span', function () {
        var scNr = $(this).parent().prev().find('i.p2').text();
        var scNrSy;
        for (var i = 0; i < datas.length; i++) {
            var obj = datas[i];
            if (scNr == obj.num) {
                scNrSy = i;
                break;
            }
        }
        draw_d3(scNrSy);
        //upper购物篮数量显示及计算更新
        upper_count();
    })


    // 关闭购物车
    $('.top .car .close').on('click', function () {
        $('body').removeClass('hidden');
        $('.top .car').hide();
    })



    //购物车之购物篮部分
    $('.right .btn .dg').on('click', function () {
        //判断是否有选中的商品
        var isOk = $('.right .color li').hasClass('qq');
        if (isOk) {
            $('.top .car').show();
            //禁止屏幕生成滚动条
            $('body').addClass('hidden');
            draw_d3(sy);
            //upper购物篮数量显示及计算更新
            upper_count();
        }


    })

    // 购物篮之删除功能（用事件委托）
    $('.top .car').on('click', '.d3 .del', function () {
        // $('.top .car .d3 .del').click(function () {
        $(this).parent().parent().parent().remove();
        // li的数量
        var cou = $('.top .car .down .d3').find('li').length;
        // tab切换栏数量更新
        $('.top .car .up li').eq(2).find('a').text('购物篮(' + d3_count() + ')');
        if (cou == 1) {
            $('.top .car .up li').eq(2).find('i').text('0');
            // 购物篮隐藏
            $('.car .down .d3').addClass('display');
            // 购物篮之空替换显示
            $('.car .down .d3').next().removeClass('display');
        } else {
            // 购物篮显示
            $('.car .down .d3').removeClass('display');
            // 购物篮之空替换隐藏
            $('.car .down .d3').next().addClass('display');
        }
        d3_price();
        //upper购物篮数量显示及计算更新
        upper_count();
    })

    //购物车之购物篮部分点击+，数量加1
    $('.car .down .d3').on('click', '.add', function () {
        var cou = parseInt($(this).siblings('i').find('em').text());
        cou++;
        $(this).siblings('i').find('em').text(cou);
        // -按钮取消禁止
        $(this).prev().removeClass('ccc').css('cursor', 'pointer');
        // tab切换栏数量更新
        $('.top .car .up li').eq(2).find('a').text('购物篮(' + d3_count() + ')');
        d3_price();
        //upper购物篮数量显示及计算更新
        upper_count();
    });
    //购物车之购物篮部分点击-，数量减1，并判断是否数量为1
    $('.car .down .d3').on('click', '.reduce', function () {
        var cou = parseInt($(this).siblings('i').find('em').text());
        cou--;
        if (cou <= 1) {
            cou = 1;
            // -按钮添加禁止
            $(this).addClass('ccc').css('cursor', 'default');
            $(this).siblings('i').find('em').text(cou);
            // tab切换栏数量更新
            $('.top .car .up li').eq(2).find('a').text('购物篮(' + d3_count() + ')');
        } else {
            $(this).siblings('i').find('em').text(cou);
            // tab切换栏数量更新
            $('.top .car .up li').eq(2).find('a').text('购物篮(' + d3_count() + ')');
            //upper购物篮数量显示及计算更新
            upper_count();
        }
        d3_price();


    });

    //购物篮是否为空判断函数
    function basketIsEmpty() {
        var cou = $('.top .car .down .d3').find('li').length;
        if (cou == 1) {
            $('.top .car .up li').eq(2).find('i').text('0');
            // 购物篮隐藏
            $('.car .down .d3').addClass('display');
            // 购物篮之空替换显示
            $('.car .down .d3').next().removeClass('display');
        }
    }

    // 购物篮生成函数
    function draw_d3(parameter) {
        // 购物篮部分显示
        $('.car .down .d3').removeClass('display').siblings().addClass('display');
        //控制playCar位置
        var playCarPosition = ($(window).width() - $('.top').width()) / 2;
        $('.top .car .playCar').css('right', playCarPosition);
        // 购物篮之空替换隐藏
        $('.car .down .d3').next().addClass('display');
        // 导航栏显示点击效果
        $('.top .car .up li').eq(2).addClass('active').siblings().removeClass('active');
        //判断购物篮是否存在该商品，如已存在，数量加一
        //获取购物篮目录
        var strong = $('.car .down .d3 .basket strong');
        var nrnr = parseInt(datas[parameter].num);
        // console.log(nrnr)
        var isHas = false;
        for (var i = 0; i < strong.length; i++) {
            if (parseInt(strong.eq(i).text()) == nrnr) {
                // 存在
                var isHas = true;
                var index_has=i;
                break;
            }
        }
        if (isHas) {
            // alert('已经存在,数量加一，价格加一，总数加一')
            // var cou = parseInt($('.car .down .d3 li .right').find('em').text());
            var cou = parseInt($('.car .down .d3 li').eq(index_has).find('.right em').text());
            console.log(index_has)
            cou++;
            // alert(cou)
            $('.car .down .d3  li').eq(index_has).find('.right em').text(cou);
            // -按钮取消禁止
            $('.car .down .d3 .add').prev().removeClass('ccc').css('cursor', 'pointer');
            // tab切换栏数量更新
            $('.top .car .up li').eq(2).find('a').text('购物篮(' + d3_count() + ')');
            d3_price();
            //upper购物篮数量显示及计算更新
            upper_count();
        } else {
            // 生成购物篮内容
            if (parseInt(datas[parameter].num) == 0) {
                var num_0 = '000';
            } else {
                num_0 = parseInt(datas[parameter].num);
            }
            var nr = `
                    <a href="javascript:" class="fl">
                        <img src="./upload/${pics[parameter].cSrc}" alt="">
                    </a>
                    <div class="fl basket">
                        <p>
                            <a href="javascript:">克丽丝汀迪奥烈艳蓝金挚红唇膏  <strong>${num_0}</strong></a>
                        </p>
                        <span>色泽饱满浓郁，质地轻盈舒悦</span>
                        <div class="fl left">
                            <i>￥<em>${datas[parameter].price}</em></i>
                            <a href="javascript:" class="del">删除</a>
                        </div>
                        <div class="fr right">
                            <i>数量：<em>1</em></i>
                            <button class="reduce iconfont ccc">&#xe60f;</button>
                            <button class="add iconfont">&#xe66e;</button>
                        </div>
                    </div>
                    <span class="iconfont love switch1">&#xe82a;</span>
                    <span class="iconfont display love switch2">&#xe608;</span>
                `;


            var newLi = $('<li class="clearfix"></li>').html(nr);
            $('.car .down .d3 .last').before(newLi);
            d3_price();
            // tab切换栏数量更新
            $('.top .car .up li').eq(2).find('a').text('购物篮(' + d3_count() + ')');
            // 设置ul高度
            var diffHeight = $(window).innerHeight() - $('.car .close').height() - $('.car .up').height();
            $('.top .car .down').height(diffHeight);
            $('.top .car .down .d3').height(diffHeight);
        }

    }

    // 购物篮数量显示函数
    function d3_count() {
        var counts = $('.car .down .d3 .right em');
        var num = 0;
        for (var i = 0; i < counts.length; i++) {
            num = num + parseInt(counts.eq(i).text());
            // console.log(num)
        }
        return num;
    }

    // 购物篮价格计算函数
    function d3_price() {
        // 获取商品数量（-1不含最后总价li）
        var len = $('.car .down .d3 li').length - 1;
        var all_price = 0;
        for (var i = 0; i < len; i++) {
            var price = parseInt($('.car .down .d3 li').eq(i).find('.left i em').text());
            var count = parseInt($('.car .down .d3 li').eq(i).find('.right i em').text());
            all_price = all_price + price * count;
        }
        // console.log(all_price)
        $('.car .down .d3 .last').find('em').text(all_price);
        return all_price;
    }

    //点击购物篮中的💗加入我的收藏
    $('.car').on('click', '.down .d3 span.switch1', function () {
        $(this).toggleClass('display').siblings('.switch2').toggleClass('display')
        //添加到收藏
        var num = parseInt($(this).siblings('div').find('strong').text())
        for (i = 0; i < datas.length; i++) {
            var nr = datas[i].num;
            if (nr.indexOf(num) != -1) {
                sc(i);
                break;
            }
        }
    })
    //点击购物篮中的💗删除对应的收藏
    $('.car').on('click', '.down .d3 span.switch2', function () {
        $(this).toggleClass('display').siblings('.switch1').toggleClass('display')
        var nrs = $('.car .down .d1 i.p2');
        //添加到收藏
        var num = parseInt($(this).siblings('div').find('strong').text())
        for (i = 0; i < datas.length; i++) {
            var nr = datas[i].num;
            if (nr.indexOf(num) != -1) {
                var nr = datas[i].num;
                break;
            }
        }
        for (var n = 0; n < nrs.length; n++) {
            if (nr == nrs.eq(n).text()) {
                $('.car .down .d1 li').eq(n).remove();
                sc_count();
                break;
            }
        }
    })

    //upper购物篮数量显示及计算
    function upper_count() {
        if (d3_count() <= 0) {
            $('.top .upper .r span').eq(2).find('i').text(0).hide();

        } else {
            $('.top .upper .r span').eq(2).find('i').show().text(d3_count());
        }
    }



    //购物车导航栏切换事件
    $('.car .up').on('click', 'li', function () {
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        $('.car .down ul').eq(index).removeClass('display').siblings().addClass('display');
        if (index == 0) {
            scIsEmpty();

        } else if (index == 2) {
            basketIsEmpty();

        }



    })

    //比较功能实现
    // 克隆两个color模块
    var ul_left = $('.top .content .color ul')[0].cloneNode(true);
    var ul_right = $('.top .content .color ul')[0].cloneNode(true);
    //ul_left插入left模块
    $(ul_left).prependTo('.top .lipstick_diff .down .left');
    // // ul_right插入right模块,且取消右边模块选择
    $(ul_right).prependTo('.top .lipstick_diff .down .right');
    // 清除拷贝过来的圈圈颜色
    $('.top .lipstick_diff .down').find('.qq').removeClass('qq').find('span').css('border-color', 'transparent');


    // 点击比较按钮弹出比较页面
    var key = $('.top .color .diff').on('click', function () {

        // 显示比较功能模块
        $('.top .lipstick_diff').show();
        $('body').addClass('hidden');
        // 更改底部小图链接
        var initialKey = $('.top .right .color').find('.qq').index();
        var sSrc = pics[initialKey].src;
        $('.top .lipstick_diff .down .left .diff_ms img').attr('src', './upload/' + sSrc);
        //添加圈圈特效
        $('.top .lipstick_diff .down .left li').eq(initialKey).find('span').css('border-color', '#000').addClass('dj')
            .end().siblings().find('span').css('border-color', 'transparent')

        $('.top .lipstick_diff .down .left li').eq(initialKey).addClass('dj')
        //更改下部颜色描述
        var num = datas[initialKey].num;
        var color = datas[initialKey].color;
        $('.top .lipstick_diff .down .left .diff_ms .en').text(num);
        $('.top .lipstick_diff .down .left .diff_ms .cn').text(color);
        //可拖拽盒子照片生成
        var dSrc = pics[initialKey].diff;
        $('.top .lipstick_diff .down .drag img').attr('src', './upload/' + dSrc);
        //右侧盒子下部模块隐藏
        $('.top .lipstick_diff .right .rightIsOk1').css('visibility', 'hidden');
        $('.top .lipstick_diff .right .rightIsOk2').addClass('ccc').css('cursor', 'default');
        //清除右侧盒子的信息（圈圈，及拖拽盒子的底图，及‘.dj’类名）
        $('.top .lipstick_diff .down').find('.qq').removeClass('qq').find('span').css('border-color', 'transparent');
        $('.top .lipstick_diff .down .diff>img').attr('src', '');
        $('.top .lipstick_diff .right li').removeClass('dj');
    })

    // 点击左侧圆圈进行中间图片切换事件
    $('.top .lipstick_diff .down .left').on('click', 'li', function () {
        var key = $(this).index();
        $(this).find('span').css('border-color', '#000').end().siblings().find('span').css('border-color', 'transparent')
        $(this).addClass('dj').siblings().removeClass('dj');
        //可拖拽盒子照片链接更改
        var dSrc = pics[key].diff;
        $('.top .lipstick_diff .down .drag img').attr('src', './upload/' + dSrc);
        // 更改底部小图链接
        var sSrc = pics[key].src;
        $('.top .lipstick_diff .down .left .diff_ms img').attr('src', './upload/' + sSrc);
        //更改西部颜色描述
        var num = datas[key].num;
        var color = datas[key].color;
        $('.top .lipstick_diff .down .left .diff_ms .en').text(num);
        $('.top .lipstick_diff .down .left .diff_ms .cn').text(color);
    })

    // 点击右侧圆圈进行中间图片切换事件
    $('.top .lipstick_diff .down .right').on('click', 'li', function () {
        $('.top .lipstick_diff .right .rightIsOk2').removeClass('ccc').css('cursor', 'pointer');
        $('.top .lipstick_diff .right .rightIsOk1').css('visibility', 'visible');
        var key = $(this).index();
        $(this).find('span').css('border-color', '#000').end().siblings().find('span').css('border-color', 'transparent')
        $(this).addClass('dj').siblings().removeClass('dj');
        //可拖拽盒子照片链接更改(大盒子)
        var dSrc = pics[key].diff;
        $('.top .lipstick_diff .down .diff>img').attr('src', './upload/' + dSrc);
        // 更改底部小图链接
        var sSrc = pics[key].src;
        $('.top .lipstick_diff .down .right .diff_ms img').attr('src', './upload/' + sSrc);
        //更改西部颜色描述
        var num = datas[key].num;
        var color = datas[key].color;
        $('.top .lipstick_diff .down .right .diff_ms .en').text(num);
        $('.top .lipstick_diff .down .right .diff_ms .cn').text(color);
    })

    //点击‘选择按钮’事件
    $('.top .lipstick_diff .down  a.xz_btn').on('click', function () {
        var index = $(this).prev().prev().find('li.dj').index();
        // alert(index);
        // return;
        var obj1 = pics[index];
        var obj2 = datas[index];
        //圈圈特效
        $('.color li').eq(index).find('span').css('border-color', '#000').end().siblings().find('span').css('border-color', 'transparent');
        $('.color li').eq(index).addClass('qq').siblings().removeClass('qq');
        //改变en描述
        $('.up .ms .en').text(obj2.num);

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
        // 关闭比较页面
        $('.top .lipstick_diff').hide();
        $('body').removeClass('hidden');
        $('.top .lipstick_diff .down .right').find('span').css('border-color', 'transparent');
        //去除以前的dj属性
        $('.top .lipstick_diff .down .left li').removeClass('dj');
    });

    //拖拽按钮进行对比
    //拖拽按钮进行对比之图标随着鼠标移动
    var left_diff, diff_W;
    $('.top .lipstick_diff').on('mousedown', '.down .diff', function (e) {
        var isCheck = $('.top .lipstick_diff .down .right li').hasClass('dj');
        if (isCheck) {
            $('.top .lipstick_diff .diff_cover').show();
            var ox_span = e.pageX;
            diff_W = $('.top .lipstick_diff span.move').parent().width();
            console.log(diff_W)
            // w_span = $('.top .lipstick_diff span.move').width() / 2;
            // left_span = $('.top .lipstick_diff span.move').position().left;

            // 获取diff盒子到左边距离
            left_diff = $('.top .lipstick_diff .down .diff').offset().left;
            var x = ox_span - left_diff;
            $('.top .lipstick_diff .down .diff span.move').css('left', x);
            // 鼠标移动
            $(document).on('mousemove', diff_move);
        }

    });

    //鼠标移动
    function diff_move(e) {
        var nx = e.pageX;
        var click_diff = nx - left_diff;
        if (click_diff >= diff_W) {
            click_diff = diff_W;
        } else if (click_diff <= 0) {
            click_diff = 0;
        };
        $('.top .lipstick_diff .down .diff span').css('left', click_diff);
        // 盒子拖动效果
        $('.top .lipstick_diff .down .diff .drag').width(click_diff);

    }


    // 鼠标抬起
    $('.top .lipstick_diff').on('mouseup', function () {
        $(document).off('mousemove', diff_move);
        $('.top .lipstick_diff .diff_cover').hide();
    });


    //关闭比较页面
    $('.top .lipstick_diff .wrapper .up span,.top .lipstick_diff .cover').click(function () {
        $('.top .lipstick_diff .down .right').find('span').css('border-color', 'transparent');
        $('.top .lipstick_diff').hide();
        $('body').removeClass('hidden');
        $('.top .lipstick_diff span.move').css({ left: '50%', transform: 'translate(-50%)' });

    });




})(window);

//middle部分
(function (window) {
    $('a').attr('href','javascript:')
    // 鼠标悬停事件
    $('.title li').click(function () {
        $(this).find('a').addClass('bottom-line').end().siblings().find('a').removeClass('bottom-line');
        var index = $(this).index();
        $('.title_content > div').eq(index).css('display', 'block').siblings().css('display', 'none');
    });
    // 功能1: 点击右按钮，轮播图下一张
    var index = 0;
    function rightPlay() {
        $('.controls a').eq(index).removeClass('active');
        index++;
        var lis = $('.slider li');
        if (index == lis.length) {
            index = 0;
        }
        $('.slider li').eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);
        $('.controls a').eq(index).addClass('active');
    }
    $('.arrow .arrow-right').click(function () {
        rightPlay();
    });
    // 功能2: 点击左按钮，轮播图上一张
    $('.arrow .arrow-left').click(function () {
        $('.controls a').eq(index).removeClass('active');
        index--;
        var lis = $('.slider li');
        if (index < 0) {
            index = lis.length - 1;
        }
        $('.slider li').eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);
        $('.controls a').eq(index).addClass('active');
    });
    // 功能3：小点点轮播
    $('.controls a').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        index = $(this).index();
        $('.slider li').eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);
    });
    // 功能4：自动轮播
    var flag;
    function autoPlay() {
        flag = setInterval(function () {
            rightPlay();
        }, 2500);
    };
    autoPlay();
    $('.slider').mouseenter(function () {
        clearInterval(flag);
    });
    $('.slider').mouseleave(function () {
        // clearInterval(flag);
        autoPlay();
    });

    // 鼠标点击video-icon 播放视频
    $('.video-icon,.video-img').click(function () {
        $('.video-div img').css('display','none');
        $('.video-div video').css('display','block');
        $('.video-div video')[0].play();
        $('.video-icon').css('display','none');
    })

})(window);


// footer部分
/**
 * 模拟下拉框
 */
!function() {
    // 获取对象
    var select = document.querySelector('.footer .select');
    var selectList = document.querySelector('.footer .select-list');
    var aList = document.querySelectorAll('.footer .select-list li a');

    // 注册事件（区域列表的显示与隐藏）
    select.onclick = function(e) {
        e.stopPropagation();
        var svgDown = document.querySelector('.footer .down');
        if (selectList.style.display == 'none') {
            svgDown.style.transform = 'rotate(180deg)';
            selectList.style.display = 'block';
        } else {
            svgDown.style.transform = 'rotate(0deg)';
            selectList.style.display = 'none';
        }
    };
    // 注册事件（点击某个区域，则这个区域显示）
    for (var i = 0; i < aList.length; i++) {
        aList[i].onclick = function(e) {
            select.innerHTML = this.innerHTML + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.1 17" class="down"><path d = "M29.1 2.5L14.9 16.6.8 2.5 2.9.4l12 12 12-12 2.2 2.1z" ></path></svg>';
            selectList.style.display = 'none';
        }
    }
    // 注册事件（点击页面中任意位置，如果下拉框没有合上，则合上）
    document.onclick = function() {
        var svgDown = document.querySelector('.footer .down');
        if (selectList.style.display == 'block') {
            svgDown.style.transform = 'rotate(0deg)';
            selectList.style.display = 'none';
        }
    }
}();
/**
 * 视频处理
 */
!function() {
    // 点击视频实现播放与暂停
    var playPause = document.querySelector('.footer .play-pause');
    var video = document.querySelector('.footer #video');
    var videoImg = document.querySelector('.footer .video-img');
    var playBtn = document.querySelector('.footer .controller-bar .play');
    var pauseBtn = document.querySelector('.footer .controller-bar .pause');
    var controller = document.querySelector('.footer .controller');
    var reload = document.querySelector('.reload');

    video.controls = false;
    // 点击画面的播放与暂停
    videoImg.addEventListener('click', videoController);
    // 点击控件的播放与暂停
    var controlBtn = document.querySelector('.footer .controller-bar div:nth-child(1)');

    controlBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        videoController();
    });
    controller.onclick = function(e) {
        e.stopPropagation();
    };
    // 方法封装
    function videoController() {
        reload.style.display = 'none';
        controller.style.display = 'block';

        if (video.paused || video.ended) {
            video.play();
            playPause.style.display = 'none';
            playBtn.style.display = 'none';
            pauseBtn.style.display = 'block';
        } else {
            video.pause();
            playPause.style.display = 'block';
            playBtn.style.display = 'block';
            pauseBtn.style.display = 'none';
        }
    };
    // 进度条处理
    var progress = document.querySelector('.footer .controller .progress');
    var progressCurrent = document.querySelector('.footer .controller .progress-current');
    var time = document.querySelector('.footer .controller-bar div:nth-child(2)');
    
    var duration;
    video.addEventListener('loadedmetadata', function () {
        duration = video.duration;
    });
    video.addEventListener('timeupdate', function () {
        if (!duration) {
            duration = video.duration;
        }
        progress.value = video.currentTime;
        
        progressCurrent.style.width = Math.floor((video.currentTime / duration) * 100) + '%';

        var currentTime = Math.ceil(video.currentTime) < 10 ? '0' + Math.ceil(video.currentTime) : Math.ceil(video.currentTime);
        time.innerText = '00:' + currentTime + '/00:' + Math.ceil(duration);

        // 判断视频是否播放完成
        if (video.currentTime == duration) {
            reload.style.display = 'block';
        }
    });
    // 点击进度条
    progress.addEventListener('click', function (e) {
        e.stopPropagation();
        var pos = e.offsetX / this.offsetWidth;
        video.currentTime = pos * duration;
        ifPlay();
    });
    // 是否在暂停活播放结束
    function ifPlay() {
        if (video.paused && video.ended) {
            reload.style.display = 'block';
            playPause.style.display = 'none';
        } else if (video.paused) {
            reload.style.display = 'none';
            playPause.style.display = 'block';
        } else {
            reload.style.display = 'none';
            playPause.style.display = 'none';
        }
    }
    // 点击重新加载
    reload.onclick = function() {
        this.style.display = 'none';
        video.currentTime = 0;
        progress.value = 0;
    }
    // 点击进入全屏
    var fullScreen = document.querySelector('.footer .fullScreen');
    fullScreen.onclick = function() {
        videoImg.removeEventListener('click', videoController);
        video.webkitRequestFullScreen();
    }
    // 监听退出全屏
    function checkFull() {
        var isFull = document.webkitIsFullScreen;
        if (isFull === undefined) {
            isFull = false;
        }
        return isFull;
    }

    window.onresize = function () {
        if (!checkFull()) {
            videoImg.addEventListener('click', videoController);
            ifPlay();
        }
    };

    // 声音处理
    var scroll = document.querySelector('.footer .controller-bar .scroll');
    var innerScroll = document.querySelector('.footer .controller-bar .inner-scroll');

    scroll.onmousedown = function (e) {
        var clientX = e.clientX;
        var offsetX = e.offsetX;

        var pos = offsetX / this.offsetWidth;
        innerScroll.style.width = this.offsetWidth * pos + 'px';
        video.volume = pos;
        that = this;

        document.onmousemove = function(e) {
            var currentX = e.clientX;
            var resultX = offsetX + currentX - clientX;

            // 做限制
            if (resultX <= 0) {
                resultX = 0;
            } else if (resultX >= that.offsetWidth) {
                resultX = that.offsetWidth;
            }
            
            var pos = resultX / that.offsetWidth;
            innerScroll.style.width = that.offsetWidth * pos + 'px';
            video.volume = pos;
        }
    }
    document.onmouseup = function() {
        document.onmousemove = null;
    }
}();