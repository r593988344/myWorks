/**
 *@author 阮律智
 *2018.8
 */
/*---------栏目切换-------------------------------------------------------------------------------*/
(function () {
    var $changeGuide = $('.changeGuide>li');
//大标题搜索栏切换
    var changeInput = [" 河棠鱼坊烤鱼，烤的不好吃",
        " 杭州西湖烤鱼，烤的很好吃",
        " 台州黄岩烤鱼，烤的非常好吃",
        " 烤鱼秘籍全在此，烤的不好吃不要钱",
        " 看牛人现场烤鱼，火光冲天"];
    var $Input = $(".top .search .redBg input.input");
    var icur = 0;
    $Input.val(changeInput[icur]);
    $changeGuide.click(function () {
        $(this).addClass('theRed');
        $(this).siblings().removeClass('theRed');
        icur = $(this).index();
        $Input.val(changeInput[icur]);
    });

    inputs($('.redBg input.input'));
    function inputs(myInput) {
        myInput.focus(function () {
            if ($(this).val() == changeInput[icur]) {
                $(this).val("");
            }
        });
        myInput.blur(function () {
            if ($(this).val() == '') {
                $(this).val(changeInput[icur]);
            }
        });
    }

//酒店栏切换
    //红店铺切换
    tab($('.Hot2>li'), $('.newShop .hotHotel'), 'click');
    tab($('.Hot1>li'), $('.subWay>div'), 'click');
    tab($('.changeBtn>ul>li'), $('.lifestyleGuides .showHide'), 'mouseover');
    tab($('.couponsTitle>li'), $('.oldBeijing'), 'mouseover');

    function tab(oList, oShows, ev) {
        oShows.hide().eq(0).show();
        oList.each(function (index) {
            $(this).on(ev, function () {
                $(this).removeClass('theBlack').addClass('red').addClass('theWhite').siblings('li')
                    .removeClass('red').removeClass('theWhite').addClass('theBlack');
                oShows.each(function () {
                    oShows.eq(index).show().siblings('.showHide').hide();
                });
            })
        });
    };
//地铁线路
    var $subway = $('.subWayLine .lineWay img');
    var $subButton = $('.subWay .chooseLine button');
    $subButton.each(function (index) {
        $(this).click(function () {
            $subway.eq(index).addClass('show').siblings().removeClass('show');
        })
    });
})();

/*---------图片滚动分割线-------------------------------------------------------------------------------*/

(function () {
    //找到图片和按钮对象
    var $changePic = $(".newBest .lunBo .changes>ul>li");
    var $shows = $(".newBest .lunBo .shows>ul");
    var index = 0;
    var indexSmall = 0;
    var changeText = ['美女去哪儿了', '美女在这里！', '爸爸去哪儿~']
//切换图片
    $('.lunBo p').text(changeText[indexSmall]);

    function Lunbo(obj, speed) {
        obj.stop().animate({top: -136 * index}, speed);
        $changePic.eq(indexSmall).addClass("blueborder").siblings().removeClass("blueborder");
        $('.lunBo p').text(changeText[indexSmall]);
        /*      console.log(index);
              console.log(indexSmall);*/
    };
    // console.log($('.lunBo p').text());

//自动无缝轮播
    function autoPlay() {
        timer1 = setInterval(function () {
            var $afterClone = $shows.children().eq(0).html();
            if (index == $changePic.length - 1) $shows.append($afterClone);
            if (indexSmall == $changePic.length) indexSmall = 0;
            if (index == $changePic.length + 1) {
                index = 1;
                $shows.css("top", "0");
                $shows.children().eq(-1).remove();
            }
            Lunbo($shows, 400);
            index++;
            indexSmall++;
            // console.log(indexSmall)
        }, 2000);
    };
    autoPlay();
//手动切换图片
    $changePic.each(function (tindex) {
        $(this).hover(function () {
            clearInterval(timer1);
            index = indexSmall = tindex;
            Lunbo($shows, 400);
//    console.log(index);
        }, function () {
            autoPlay();
        })
    });

//排行榜hover
    /*var $chooseRank = $('.BBS .BBSRanking>ul>li.ranking');
    $chooseRank.hover(function () {
        $(this).addClass('chooseRank');
    }, function () {
        $(this).removeClass('chooseRank');
    });*/

    var $chooseRank = $('.middle .middleLeft .BBS .BBSRanking>ul>li');
    $chooseRank.mouseenter(function () {
        $(this).addClass('chooseRank').siblings().removeClass('chooseRank');
    });

//美女图片hover
    // console.log($masking);

    var introduce = ['<p></br>用户名：性感1</br>区域：朝阳CBD</br>人气：12345</p>',
        '<p></br>用户名：性感1</br>区域：朝阳CBD</br>人气：12345</p>',
        '<p></br>用户名：性感1</br>区域：朝阳CBD</br>人气：12345</p>',
        '<p></br>用户名：性感1</br>区域：朝阳CBD</br>人气：12345</p>',
        '<p></br>用户名：性感1</br>区域：朝阳CBD</br>人气：12345</p>',
        '<p></br>用户名：性感1</br>区域：朝阳CBD</br>人气：12345</p>',
        '<p></br>用户名：性感1</br>区域：朝阳CBD</br>人气：12345</p>',
        '<p></br>用户名：性感1</br>区域：朝阳CBD</br>人气：12345</p>',
        '<p></br>用户名：性感1</br>区域：朝阳CBD</br>人气：12345</p>',
        '<p></br>用户名：性感1</br>区域：朝阳CBD</br>人气：12345</p>',
        '<p></br>用户名：性感1</br>区域：朝阳CBD</br>人气：12345</p>'];
    // var $bGgirl = $('.beautifulGirl .girls>ul>li .introduce_bg');
    var $girls = $('.beautifulGirl .girls>ul>li');
    $girls.each(function (index) {
        $(this).mouseenter(function () {
            $(this).children('.introduce_bg').show().html(introduce[index]);
        });
        $(this).mouseleave(function () {
            $(this).children().hide();
            // $girls.css('opacity', '1');
        })
    })

})();
//鼠标放在日历节日上的效果
/*function mouseMove(thex,they,obj1,obj2,showspeed){
    var x = thex;
    var y = they;
    obj1.mousemove(function(e){
        obj2.css({
            "top": (e.pageY+y) + "px",
            "left": (e.pageX+x)  + "px"
        }).stop().show(showspeed);
    }).mouseout(function () {
        obj2.stop().hide();
    });
};*/
var Week  = ['MON','THE','WED','THU','FRI','SAT','SUN']
var $show1 = $('.active1 .festival');
var $show2 = $('.active2 .festival');
// var $riliFestival = $('.festival .week');
var $rili1 = $('.clmonth .active1');
var $rili2 = $('.clmonth .active2');
// var $act = $('.act>td');
console.log($rili1.parent().children());
rili($rili1,$show1);
rili($rili2,$show2);
// rili($rili2,$show2);
function rili(obj1,obj2){
        obj1.hover(function () {
            var index = $(this).index();
            obj1.find('.week').text(Week[index]);
            obj2.show();
            console.log(index);
            // console.log('ssss');

        },function () {
            obj2.hide();
        });

}


/*---------文字滚动分割线-------------------------------------------------------------------------------*/
(function () {
    //找到文字对象与按钮
    var $updown = $('.top .search .searchBottom .arrow>em');
    var $Ctext = $('.top .search .searchBottom .rollText>ul');
    var index1 = 0;

    function qieZi(obj, speed) {
        obj.stop().animate({top: -28 * index1}, speed);
    };

//自动滚动文字
    function autoText() {
        timer2 = setInterval(function () {
            if (index1 == 2) {
                var $afterClone = "<li>" + $Ctext.children().eq(0).html() + "</li>";
                $Ctext.append($afterClone);
            }
            if (index1 == 4) {
                index1 = 1;
                $Ctext.css("top", "0");
                $Ctext.children().eq(-1).remove();
            }
            qieZi($Ctext, 1000);
            index1++;
//        console.log(index1)
        }, 1000);
    };
    autoText();
//手动切换文字
    var $stopText = $('.top .search .searchBottom');
    $stopText.hover(function () {
        clearInterval(timer2);
//        console.log("ssss")
    }, function () {
        autoText();
    });
    $updown.click(function () {
        var dir = $(this).index();
        if (dir == 0) {
            if (index1 == 2) {
                var $afterClone = "<li>" + $Ctext.children().eq(0).html() + "</li>";
                $Ctext.append($afterClone);
            }
            if (index1 >= 3) {
                index1 = 0;
                $Ctext.css("top", "0");
                $Ctext.children().eq(-1).remove();
            }
            index1++;
            qieZi($Ctext, 400);
        }
        else {
            console.log(index1)
            index1--;
            if (index1 < 0) {
                index1 = 2;
            }
            qieZi($Ctext, 400);
        }
    })
})();
/*-----------日历效果----------------------------------------------------------------------------------------*/
/*(function () {
    var $calendar = $('.calendarDate .clmonth td');
    $calendar.each(function (index) {
        // console.log(index)
       $(this).hover(function () {
            // console.log(iTr);
            // num = $(this).text();
            $(this).addClass('hover');
           if (index>29)index-=29;
            var ypos = -index * 40+1;
            // console.log(iNow)
            $(this).css({backgroundPosition: 0 + ' ' + ypos + 'px'})
           mouseMove(40,-40, $(".active"),$(".showHappy"),10)
       }, function () {
            $(this).removeClass('hover');
            $(this).css({backgroundPosition: 0})
        })
    })
   ;
})();*/




