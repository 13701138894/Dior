var sum = 0;
// 隐藏部分

$('.w-1 .iconfont, .banner .iconfont ').click(function () {
    // console.log(1);
    $('.user').hide();
    $('.best-1').hide();
    if ($(this).hasClass('icon-aixin1')) {
        $(this).removeClass('icon-aixin1').addClass('icon-aixin');
        return false;
    } else {
        $(this).removeClass('icon-aixin').addClass('icon-aixin1');
        return false;
    }
    // $('<li></li>').appendTo('.add');


})

function font() {
    $('.iconfont').click(function () {
        if ($(this).hasClass('icon-aixin')) {
            $('.best').css('display', 'none');
            $('body').css('overflow', 'hidden');
            $('.content').show();
            $('.smallbox').show();
        }
        //更改收藏个数
        var v = $('.one li').length;
        $('.sc').text(v + 1);
        if ($(this).attr('class') == "iconfont icon-aixin1") {
            return;
        } else { // first部分
            var newLi = $('<li></li>').appendTo('.one');
            var newFirst = $('<div></div>').addClass('first').appendTo(newLi);
            var newA = $('<a></a>').appendTo(newFirst);
            var src = $(this).parent().find('img').attr('src');
            // console.log(src);
            $('<img>').attr('src', src).appendTo(newA);
            // second部分
            var that = $(this);
            console.log(that.prev().children(".left").text())
            var str = `
            <div class="second">
            <a href="javascript:"><p><span>${that.prev().prev().prev().find('i').text()}</span><em>${that.prev().prev().prev().find('span').text()}</em></p></a>
            <p class="type-1">${that.prev().prev().text()}</p>
            <p class="type-2">${that.prev().children(".right").text()}</p></br>
            <p class="type-3">￥<i>${that.prev().children(".left").text()}</i></p>
            <a href="javascript:" class = "del-1">删除</a>
        </div>
            `
            $(str).appendTo(newLi);
            // last部分
            var str = `
            <div class="last">
            <a href="javascript:"><img src="imgs/17.png" alt=""></a>
        </div>
            `
            $(str).appendTo(newLi);
        }

    })
}
font()
$('.wrong').click(function () {
    $('.content').hide();
    $('.smallbox').hide();
    $('body').css('overflow', 'visible');
})
// tab部分
$('.aboutme div').click(function () {
    // console.log($(this))

    var index = $(this).index();
    $('.tab .item').eq(index).show().siblings().hide();
    // console.log(index);
    $('.me').css('boder-bottom', '1px solid #ccc');
});
//给购物栏那一项注册点击事件

$('.shop').click(function () {
    // console.log('1');
})
//给收藏栏注册点击事件
$('.shoucang').click(function () {
    // console.log('1');

})

// console.log($('.del'));
// $('.del').click(function(){
//     console.log(1)
//     // $(this).parent().parent().remove();
// })
// 删除部分

$('.one').on('click', '.del-1', function () {
    $(this).parent().parent().remove();
    var v = $('.one li').length;
    $('.sc').text(v);
    // console.log(v)
    // 收藏部分切换
    if (v == 0) {
        $('.best').css('display', 'block');
    }

})


// tab栏切换线
$('.aboutme div .me').click(function () {
    $(this).css('border-bottom', '2px solid black').parent().siblings().children().css('border-bottom', 'none')

})

// 购物篮
var total = parseInt($('.sl').text());
// console.log(total)

$('.one').on('click', '.last ', function () {
    $('#last-1').show();
    $('.best-1').css('display', 'none');
    var v = $('.one  li').length;
    var lis = $('.one  li')
    console.log(lis)
    $('.sc').text(v);
    console.log(v)
    // 收藏部分切换
    if (v == 1) {
        $('.best').css('display', 'block');
    }
    $('.shop').click();
    // console.log(1)
    var that = $(this);
    $(this).parent().remove();
    var length = $('.sc').text();
    // console.log(length);
    length--;
    $('.sc').text(length);
    var r = `
    <li>
    <div class="first">
        <a href="javascript:"><img src="${that.parent().find('.first img').attr('src')}" alt=""></a>
        <div class="iconfont icon-aixin1"></div>
    </div>
    <div class="second">
        <a href="javascript:">
            <p><span>${that.parent().find('.second span').text()}</span><em>${that.parent().find('.second em').text()}</em></p>
        </a>
        <p class="type-1">${that.prev().find('.type-1').text()}</p>
        <p class="type-2">${that.prev().find('.type-2').text()}</p>
        <p class="details">￥<i>${that.prev().find('.type-3 i').text()}</i></p>
        <a href="javascript:" class="del-1">删除</a>
    </div>
    <div class="last">
        <span>数量:</span><span class="count-1">1</span><br>
        <button id="jian" disabled class = "iconfont icon-jian">
        
        </button>
        <button id="jia"  class = "iconfont icon-54">
       
        </button>


    </div>
</li>
     `;
    $(r).prependTo('.two');
    // var all=$('.two .count-1').text();
    // console.log(all);
    var total = parseInt($('.sl').text());
    total++;
    // console.log(total);
    // console.log(total)
    //在点击收藏事件里面把值赋给购物篮
    $('.sl').text(total);
    sum += parseInt($(this).prev().find('.type-3').children().text())
    var total = $('.last-1 .price').text('总计：' + sum);
    // console.log(total)
})

function toTal_1() {
    sum = 0;
    var lis = $('.two li:not(:last-child)');
    if (lis.length == 0) {
        sum = 0;
    } else {

        for (var i = 0; i < lis.length; i++) {
            var v = parseInt(lis.eq(i).find('i').text());
            var c = parseInt(lis.eq(i).find('.count-1').text());
            // console.log(v, c)
            sum += v * c;
        }
        // console.log(sum);

    }
    $('.price').text('总计：' + sum);
}
// /实现加减按钮
$('.two').on('click', '#jia', function () {
    // console.log(1)
    //先获取数量
    var count = parseInt($(this).parent().find('.count-1').text());
    // console.log(count);
    $(this).prev().prop('disabled', false)
    count++;
    $(this).parent().parent().find('.count-1').text(count);
    var add = parseInt($('.sl').text());
    // console.log(add)
    add++;
    $('.sl').text(add);
    toTal_1();
});
$('.two').on('click', '#jian', function () {
    // console.log(1)
    //先获取数量
    var count = parseInt($(this).parent().find('.count-1').text());
    if (count == 2) {
        $(this).prop('disabled', true);
    }
    // console.log(count);
    count--;
    $(this).parent().parent().find('.count-1').text(count);
    var reduce = parseInt($('.sl').text());
    // console.log(add)
    reduce--;
    $('.sl').text(reduce);
    toTal_1();
});
//实现购物车删除功能
$('.two').on('click', '.del-1', function () {
    //删除当前的li
    $(this).parent().parent().remove();
    //更新购物车总数
    var toTal = parseInt($('.sl').text());
    var reduce = parseInt($(this).parent().next().find('.count-1').text());
    // console.log(reduce);
    var newTotal = toTal - reduce;
    $('.sl').text(newTotal);
    var v = $('.two li').length;
    // console.log(v);
    if (v == 1) {
        $('.best-1').css('display', 'block');
        $('#last-1').css('display', 'none');
    }
    toTal_1();
})

//实现购物车爱心追加收藏栏功能
$('.two').on('click', '.iconfont', function () {
        $('.best').css('display', 'none');
        var that = $(this);
        var i = 0
        if (that.hasClass('icon-aixin1')) {
            $('.shoucang').click();
            that.removeClass('icon-aixin1').addClass('icon-aixin')
            var newLi = $('<li class="active+i"></li>').appendTo('.one');
            var newFirst = $('<div></div>').addClass('first').appendTo(newLi);
            var newA = $('<a></a>').appendTo(newFirst);
            var src = $(this).parent().find('img').attr('src');
            // console.log(src);
            $('<img>').attr('src', src).appendTo(newA);
            // second部分
            var that = $(this);
            // console.log(that.prev().children(".left").text())
            var str = `
                    <div class="second">
                    <a href="javascript:"><p><span>${that.parent().next().children('a').find('span').text()}</span><em>${that.parent().next().children('a').find('em').text()}</em></p></a>
                    <p class="type-1">${that.parent().next().find('.type-1').text()}</p>
                    <p class="type-2">${that.parent().next().find('.type-2').text()}</p></br>
                    <p class="type-3">￥<i>${that.parent().next().find('.details i').text()}</i></p>
                    <a href="javascript:" class = "del-1">删除</a>
                </div>
    `
            $(str).appendTo(newLi);
            // last部分
            var str = `
                <div class="last">
                <a href="javascript:"><img src="imgs/17.png" alt=""></a>
            </div>
            `
            $(str).appendTo(newLi);
            //更改我的收藏的数值
            var num = $('.aboutme').find('.sc').text();
            num++;
            $('.aboutme').find('.sc').text(num);
            // console.log(num)
        } else if (that.hasClass('icon-aixin')) {
            that.removeClass('icon-aixin').addClass('icon-aixin1');
            var num = $('.aboutme').find('.sc').text();
            num--;
            $('.aboutme').find('.sc').text(num);
            var live = $(this).prev().children().attr('src');
            for (var i = 0; i < $('.one li').length; i++) {
                if ($('.one li').eq(i).first().find('img').attr('src') == live) {
                    $('.one li').eq(i).remove();
                }
            }

        }






    })
    // 视频部分
    ! function () {
        // 点击视频实现播放与暂停
        var playPause = document.querySelector('.play-pause');
        var video = document.querySelector(' #video');
        var videoImg = document.querySelector(' .video-img');
        var playBtn = document.querySelector(' .controller-bar .play');
        var pauseBtn = document.querySelector(' .controller-bar .pause');
        var controller = document.querySelector(' .controller');
        var reload = document.querySelector('.reload');

        video.controls = false;
        // 点击画面的播放与暂停
        videoImg.addEventListener('click', videoController);
        // 点击控件的播放与暂停
        var controlBtn = document.querySelector(' .controller-bar div:nth-child(1)');

        controlBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            videoController();
        });
        controller.onclick = function (e) {
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
        var progress = document.querySelector(' .controller .progress');
        var progressCurrent = document.querySelector(' .controller .progress-current');
        var time = document.querySelector(' .controller-bar div:nth-child(2)');

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
        reload.onclick = function () {
            this.style.display = 'none';
            video.currentTime = 0;
            progress.value = 0;
        }
        // 点击进入全屏
        var fullScreen = document.querySelector(' .fullScreen');
        fullScreen.onclick = function () {
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
        var scroll = document.querySelector(' .controller-bar .scroll');
        var innerScroll = document.querySelector(' .controller-bar .inner-scroll');

        scroll.onmousedown = function (e) {
            var clientX = e.clientX;
            var offsetX = e.offsetX;

            var pos = offsetX / this.offsetWidth;
            innerScroll.style.width = this.offsetWidth * pos + 'px';
            video.volume = pos;
            that = this;

            document.onmousemove = function (e) {
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
        document.onmouseup = function () {
            document.onmousemove = null;
        }
    }();



//购物车跳转功能
//购物车爱心删除功能