/**
 * Created by JetBrains WebStorm.
 * User: 阮律智
 * Date: 18-8-7
 * Time: 上午11:33
 * To change this template use File | Settings | File Templates.
 */
//顶部导航下拉栏切换
(function () {
    var $navTop = $('.nav_top>ul>li');
    var $changeType = $('.nav_guide .nav_middle .left_guide');
    $navTop.each(function (index) {
        $(this).mouseover(function () {
            $(this).addClass('choose').siblings().removeClass('choose');
            $changeType.eq(index).addClass('outChoose').siblings().removeClass('outChoose');
        })
    });
    var $redBg = $('.left_guide>li');
    $redBg.mouseover(function () {
        $(this).addClass('choose').siblings().removeClass('choose');
    })

    //下拉菜单函数
    var UpDown = $('.top_nav_right>ul>li.slideDown');
    var searchSlide = $('.nav_bottom  .cloth_type');
    var moreMarket = $('.moreMarket .more');
    dropDownList(UpDown);
    dropDownList(searchSlide);
    dropDownList(moreMarket);

    function dropDownList(obj) {
        obj.each(function (index) {
            $(this).hover(function () {
                obj.eq(index).children('ul').stop().slideDown(200);
                console.log("ssss")
            }, function () {
                obj.eq(index).children('ul').stop().slideUp(200);
            })
        });
    }
})();

//搜索框模式切换
(function () {
    var $treasure = $('.LoGo .top_search > ul > li');
    var searchVal = ['搜索喜欢的宝贝', '查找需要的店铺'];
    var $search = $('.LoGo .top_search > form .search');
    var index = 0;
    $search.val(searchVal[index]);
    $treasure.click(function () {
        index = $(this).index();
        $(this).addClass('choose').siblings().removeClass('choose');
        $search.val(searchVal[index]);
    });
    $search.focus(function () {
        if ($(this).val() == searchVal[index]) $(this).val('');
    });
    $search.blur(function () {
        if ($(this).val() == '') $(this).val(searchVal[index]);
    });
})();
//a链接的hover效果
$('.toRed').hover(function () {
    $(this).css('color', '#f40');
}, function () {
    $(this).css('color', '');
});


(function () {
    var $pic = $('.broadcast .changePic');
    var $thepic = $('.broadcast .changePic>li');
    var $btn = $(' .broadcast .changBtn>li');
    var index = 0;
    var btnIndex = 0;
    var timers = 0;
    //切换图片
    autoPlay();
    function changePic() {
        $pic.stop().animate({
            left: -$thepic.width() * index
        }, 600);
        $btn.eq(btnIndex).addClass('choose').siblings().removeClass('choose');
    }

    //自动切换图片(轮播)
    function autoPlay() {
        timers = setInterval(function () {
            if (index == $thepic.length) $pic.append($thepic.eq(0).clone());
            if (index == $thepic.length + 1) {
                $pic.css("left", "0");
                $pic.children().eq(-1).remove();
                index = 1;
            }
            if (btnIndex == $thepic.length) btnIndex = 0;
//           console.log($thepic.length)
//             console.log(index)
            changePic();
            index++;
            btnIndex++;
        }, 2000)
    }

    //手动切换图片
    $btn.mouseover(function () {
        if (index == 5) $pic.children().eq(-1).remove();
        index = btnIndex = $btn.index(this);
        changePic();
    });
    //鼠标悬停停止轮播
    $('.main .main_top .broadcast').hover(function () {
        clearInterval(timers);
    }, function () {
        autoPlay()
    });
})();


//倒计时
(function () {
    var $hours = $('.hotCake .halfPrice .hours');
    var $minutes = $('.hotCake .halfPrice .minute');
    var $seconds = $('.hotCake .halfPrice .second');
    var calSeconds = 59;
    var calHours = 12;
    var calMinutes = 52;
    $seconds.text(calSeconds);
    $minutes.text(calMinutes);
    $hours.text(calHours);
    setInterval(function () {
        // console.log("sss")
        $seconds.text(calSeconds);
        if (calSeconds < 10) {
            $seconds.text('0' + calSeconds);

        }
        if ((calSeconds == 0)) {
            calSeconds = 60;
            calMinutes -= 1;
            $minutes.text(calMinutes);
            if (calMinutes < 10) {
                $minutes.text('0' + calMinutes);
            }
            if (calMinutes == 0) {
                calMinutes = 60;
                calHours -= 1;
                $hours.text(calHours);
                if (calHours < 10) {
                    $hours.text('0' + calHours);
                }
            }
        }
        calSeconds--; }, 1000);
})();


(function () {
    //滚动小牌子
    var $board = $('.main .board');
    $(window).scroll(function () {
        $board.stop().animate({
            top: 8 + ($(window).scrollTop())
        }, 300);
    });

//添加蒙板//显示价格
    var $imgBox1 = $('.weddingDress .wedding');
    var $imgBox2 = $('.fullDress .wedding');
    var $imgBox3 = $('.chi_pao .wedding');
    var $imgLi1 = $('.weddingDress .theWedding li .mask');
    var $imgLi2 = $('.fullDress .theWedding li .mask');
    var $imgLi3 = $('.chi_pao .theWedding li .mask');
    mask($imgBox1, $imgLi1);
    mask($imgBox2, $imgLi2);
    mask($imgBox3, $imgLi3);
    var timer = 0;
    function mask(obj1, obj2) {
        obj2.hover(function () {
            obj1.find('img').stop().animate({
                opacity: "0.5"
            }, 100);
            $(this).find("img").stop().animate({
                opacity: "1"
            }, 100);
           var Oul = $(this).find('ul');
            timer = setTimeout(function () {
               Oul.stop().slideDown(200);
            },200);

        }, function () {
            clearTimeout(timer);
            obj1.find('img').stop().animate({
                opacity: "1"
            }, 100);
            $(this).find('ul').stop().slideUp(200);
        })
    }
})();


var $changeText = $('.nav_bottom .cloth_type>span');
var $text = $('.nav_bottom .cloth_type > ul > li');
var $Oul = $('.nav_bottom .cloth_type > ul');
var $search = $('.nav_bottom input.submit');
$text.click(function(){
//    console.log('ssss')
    var theText = $(this).text();
    $changeText.text(theText);
    $search.val('搜'+theText);
    $Oul.hide();
});