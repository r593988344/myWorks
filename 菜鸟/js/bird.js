var right = get.byClsName("rightBtn")[0];
var left = get.byClsName("leftBtn")[0];
var rBtn = get.byTagName("span", right)[0];
var lBtn = get.byTagName("span", left)[0];
var Pic = get.byClsName("pic");
var overStop = get.byClsName("slideShow")[0];
var index = 0;
var timer1 = null;


/*var countPassword = get.byClsName("input")[0];
for (var j =0;j<countPassword.length;j++){
    onfocus = function () {
        // countPassword[this.yy].placeholder = "";
        console.log("ddddd");
    }
}*/

//蒙版效果注册界面
var register = get.byClsName("zhuce")[0];
var menban = get.byClsName("menBan")[0];
var Bregister = get.byClsName("register")[0];
var returns = get.byClsName("return",Bregister)[0];
register.onclick = function(){
    menban.style.display = "block";
    Bregister.style.display = "block";
};
returns.onclick = function(){
    menban.style.display = "none";
    Bregister.style.display = "none";
};

//左右轮播切换按钮的显示隐藏
right.onmouseover = function () {
    rBtn.style.display = "block";
};
right.onmouseout = function () {
    rBtn.style.display = "none";
};
left.onmouseover = function () {
    lBtn.style.display = "block";
};
left.onmouseout = function () {
    lBtn.style.display = "none";
};
//从第一张开始显示
for (var i = 1; i < Pic.length; i++) {
    Pic[i].style.opacity = 0;
}
//自动播放
(function () {
    function autoChange() {
        timer1 = setInterval(function () {
            if (index == Pic.length - 1) {
                index = 0;
            }
            else {
                index++;
            }
            for (var i = 0; i < Pic.length; i++) {
                fadOut(Pic[i]);
            }
            fadIn(Pic[index]);
        }, 4000)
    }

//淡入
    function fadIn(obj) {
        var iCur = getStyle(obj, 'opacity');
        if (iCur == 1) {
            return false
        }
        ;
        clearInterval(obj.timers);
        var speed = 5;
        var Op = 0;
        obj.timers = setInterval(function () {
            if (Op == 100) {
                clearInterval(obj.timers);
            }
            else {
                Op += speed;
                obj.style.opacity = Op / 100;
                obj.style.filter = "alpha(opacity=" + Op + ")";
            }
        }, 30)
    }

//淡出
    function fadOut(obj) {
        var iCur = getStyle(obj, 'opacity');
        if (iCur == 0) {
            return false
        }
        ;
        clearInterval(obj.timers);
        var speed = 5;
        var Op = 100;
        obj.timers = setInterval(function () {
            if (Op == 0) {
                clearInterval(obj.timers);
            }
            else {
                Op -= speed;
                obj.style.opacity = Op / 100;
                obj.style.filter = "alpha(opacity=" + Op + ")";
            }
        }, 30)
    }

//右切换
    rBtn.onclick = function () {
        clearInterval(timer1);
        if (index == Pic.length - 1) {
            index = 0;
        } else {
            index++;
        }
        for (var i = 0; i < Pic.length; i++) {
            fadOut(Pic[i])
        }
        fadIn(Pic[index]);
    };
//左切换
    lBtn.onclick = function () {
        clearInterval(timer1);
        if (index == 0) {
            index = Pic.length - 1;
        } else {
            index--;
        }
        for (var i = 0; i < Pic.length; i++) {
            fadOut(Pic[i])
        }
        fadIn(Pic[index]);
    };
    overStop.onmouseover = function () {
        clearInterval(timer1)
    };
    overStop.onmouseout = function () {
        autoChange();
    }
})();

//分享滑动
(function () {
    var share = get.byId("share");
    var timer = null;

    function liMove(Obj, Width, dir, timer) {
        var ispeed;
        if (dir == 1) {
            ispeed = Obj.offsetLeft / 10;
            ispeed = ispeed > 0 ? Math.ceil(ispeed) : Math.floor(ispeed);
            if (ispeed != 0) {
                Obj.style.left = Obj.offsetLeft - ispeed + "px";
            } else {
                clearInterval(timer);
            }
        } else {
            ispeed = (Width - Obj.offsetLeft) / 10;
            ispeed = ispeed > 0 ? Math.ceil(ispeed) : Math.floor(ispeed);
            if (ispeed != 0) {
                Obj.style.left = Obj.offsetLeft + ispeed + "px";
            } else {
                clearInterval(timer);
            }
        }
    }

    share.onmouseover = function () {
        clearInterval(timer);
        timer = setInterval(function () {
            liMove(share, 212, 1, timer)
        }, 20);
    };
    share.onmouseout = function () {
        clearInterval(timer);
        timer = setInterval(function () {
            liMove(share, 212, -1, timer)
        }, 20);
    }
})();

//无缝轮播
(function () {
    var Oslide = get.byId("slideShow");
    var timer2 = null;
    var timer3 = null;
    var key = 0;
    var toLeft = get.byClsName("left")[0];

    function slidShow(Obj, Width, dir) {
        var pspeed;
        if (dir == 1) {
            pspeed = (Width + Obj.offsetLeft) / 20;
            pspeed = pspeed > 0 ? Math.ceil(pspeed) : Math.floor(pspeed);
            if (pspeed != 0) {
                Obj.style.left = Obj.offsetLeft - pspeed + "px";
            } else {
                Obj.removeChild(myfirstchild(Obj));
                Oslide.style.left = "0";
                clearInterval(timer2);
                key = 0;
            }
        } else {
            pspeed = (-Obj.offsetLeft) / 20;
            pspeed = pspeed > 0 ? Math.ceil(pspeed) : Math.floor(pspeed);
            if (pspeed != 0) {
                Obj.style.left = Obj.offsetLeft + pspeed + "px";
            } else {
                clearInterval(timer2);
                key = 0;
                Obj.removeChild(mylastchild(Obj));
            }
        }
    }

    //自动播放无缝轮播
    function autoPlay() {
        timer3 = setInterval(function () {
            toLeft.onclick();
            clearInterval(timer2);
            timer2 = setInterval(function () {
                slidShow(Oslide, 195, 1)
            }, 20);
        }, 3000);
    }

    //向左按钮
    toLeft.onclick = function () {
        if (key == 0) {
            innerstr = myfirstchild(Oslide).innerHTML;
            Oslide.innerHTML += "<li>" + innerstr + "</li>";
            key = 1;
        }
        clearInterval(timer2);
        timer2 = setInterval(function () {
            slidShow(Oslide, 195, 1)
        }, 20);
    };

    //向右按钮
    var toRight = get.byClsName("right")[0];
    toRight.onclick = function () {
        if (key == 0) {
            innerstr = mylastchild(Oslide).innerHTML;
            Oslide.insertBefore(mylastchild(Oslide), myfirstchild(Oslide));
            Oslide.innerHTML += "<li>" + innerstr + "</li>";
    
            Oslide.style.left = -195 + "px";
            key = 1;
        }
        clearInterval(timer2);
        timer2 = setInterval(function () {
            slidShow(Oslide, 195, -1)
        }, 20);
    };

    var stopMove = get.byClsName("productShow")[0];
    stopMove.onmouseover = function () {
        clearInterval(timer3);
    };
    stopMove.onmouseout = function () {
        autoPlay();
    };

    autoPlay();
})();

