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
    videoImg.addEventListener('click', function (e) {
        videoController();
    });
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
    var videoController = function() {
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
        if (video.paused || video.ended) {
            reload.style.display = 'none';
            playPause.style.display = 'block';
        }
        
        var pos = e.offsetX / this.offsetWidth;
        video.currentTime = pos * duration;
    });

    // 点击重新加载
    reload.onclick = function() {
        this.style.display = 'none';
        video.currentTime = 0;
        progress.value = 0;
    }
    // 点击进入全屏
    var fullScreen = document.querySelector('.footer .fullScreen');
    fullScreen.onclick = function() {
        video.webkitRequestFullScreen();
    }

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