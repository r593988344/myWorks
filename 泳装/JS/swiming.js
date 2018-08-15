var corker = get.byId("corker");
var lunBo = get.byClsName("lunBo", corker)[0];
// var Oli = get.byClsName("Pic",lunBo);

var button = get.byClsName("button", corker)[0];
var Obuttons = get.byTagName("li", button);

var timer = null;
var timer1 = null;
var index = 0;

/*function autoChange(Obj, Width) {
    var pspeed;
        pspeed = (Width + Obj.offsetLeft) / 20;
        pspeed = pspeed > 0 ? Math.ceil(pspeed) : Math.floor(pspeed);
        if (pspeed != 0) {
            Obj.style.left = Obj.offsetLeft - pspeed + "px";
        } else {
            Obj.removeChild(myfirstchild(Obj));
            Obj.style.left = "0";
            clearInterval(timer);
            key = 0;
        }
}

setInterval(function () {
    if(key==0){
        innerstr = myfirstchild(lunBo).innerHTML;
        lunBo.innerHTML += "<li class='Pic'>" + innerstr + "</li>";
        console.log("<li>" + innerstr + "<li>");
        key = 1;
    }
    timer = setInterval(function () {
        autoChange(lunBo,432);
    },20);
},2000);*/

function autoChange(Obj, dir) {
    // clearInterval(timer);
    var pspeed;
    if (dir == 1) {
        pspeed = (index * 432 + Obj.offsetLeft) / 20;
        pspeed = pspeed > 0 ? Math.ceil(pspeed) : Math.floor(pspeed);
        if (pspeed != 0) {
            Obj.style.left = Obj.offsetLeft - pspeed + "px";
        } else {
            clearInterval(timer);
        }
    }
    else {
        pspeed = (index * 432 + Obj.offsetLeft) / 20;
        pspeed = pspeed > 0 ? Math.ceil(pspeed) : Math.floor(pspeed);
        if (pspeed != 0) {
            Obj.style.left = Obj.offsetLeft - pspeed + "px";
        } else {
            clearInterval(timer);
        }
    }
};

function autoPlay() {
    timer1 = setInterval(function () {
        clearInterval(timer)

        Obuttons[index].className = "buttons";
        index++;
        if (index == 4) {
            index = 0;
        }
        timer = setInterval(function () {
            autoChange(lunBo, 1)
        }, 10)
        Obuttons[index].className = "noButtons";
    }, 3000);
};

autoPlay();

for (let i = 0; i < Obuttons.length; i++) {
    Obuttons[i].yy = i;
    Obuttons[i].onmouseover = function () {
        clearInterval(timer1);
        Obuttons[index].className = "buttons";
        index = this.yy;
        Obuttons[i].className = "noButtons";
        if (i > index) {
            index = i;
            timer = setInterval(function () {
                autoChange(lunBo, 1)
            }, 20)
        }
        else {
            index = i;
            timer = setInterval(function () {
                autoChange(lunBo, 0)
            }, 20)
        }
    }
};
corker.onmouseover = function () {
    clearInterval(timer1);
};
corker.onmouseout = function () {
    autoPlay();
    console.log("llll")
};
Obuttons.onmouseover = function () {
    clearInterval(timer1);
};
Obuttons.onmouseout = function () {

    autoPlay();
    console.log("llll")
};


var Zixun = get.byClsName("qq")[0];
console.log(Zixun)
var erWeiMa = get.byClsName("erWei")[0];
Zixun.onmouseover = function(){
    clearTimeout(timer2);
    erWeiMa.style.display ="block";
}
Zixun.onmouseout = function(){
   timer2 = setTimeout(function(){
        erWeiMa.style.display ="none";
    },200);

}

