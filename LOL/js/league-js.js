var change_guide = document.getElementsByClassName("big-guide");
var change_img = document.getElementsByClassName("shuffling-img")[0];
var slide_key = document.getElementsByClassName("slide-key");
var guide2 = document.getElementsByClassName("the-newsTab")[0];
var change_guide2 = guide2.getElementsByTagName("li");
var guide3 = document.getElementsByClassName("tab-hd")[0];
var change_guide3 = guide3.getElementsByTagName("li");
var change_picture = document.getElementsByClassName("hero-content");
var change_information = document.getElementById("news-list");
var change_informations = change_information.getElementsByTagName("ul");
var video_top = document.getElementsByClassName('video_top')[0];
var video_change = video_top.getElementsByTagName('li');
var state = 0;
var index = 0;
var changes = 0;
var changes1 = 0;
var changes2 = 0;
//综合资讯导航栏
for (let i=0;i<video_change.length;i++) {
    video_change[i].yy = i;
    video_change[i].onmouseover = function () {
        video_change[changes2].className = "";
        // console.log(i)
        changes2 = this.yy;
        video_change[i].className = "current";
    }
}
for (let i=0;i<change_guide.length;i++) {
    change_guide[i].yy = i;
    change_guide[i].onclick = function () {
        change_guide[changes].className = "big-guide";
        console.log(i)
        changes = this.yy;
        change_guide[i].className = "big-guide cur";
    }
}
for (let i=0;i<change_guide3.length;i++) {
    change_guide3[i].yy = i;
    change_guide3[i].onmouseover = function () {
        change_guide3[changes1].className = "";
        change_picture[changes1].style.display = "none";
        changes1 = this.yy;
        change_guide3[i].className = "current1";
        change_picture[i].style.display = "block";
    }
}
for (let i=0;i<change_guide2.length;i++) {
    change_guide2[i].yy = i;
    change_guide2[i].onmouseover = function () {
        change_guide2[index].className = "";
        change_informations[index].style.display = "none"
        index = this.yy;
        change_informations[i].style.display = "block"
        change_guide2[i].className = "current";
    }
}

for (let i = 0; i < slide_key.length; i++) {
    slide_key[i].yy = i;
    slide_key[i].onmouseover = function () {
        state = this.yy;
        change_slide(i);
    }
}
//轮播图片
setInterval(function (){
    change_img.style.marginLeft = -820 *state + 'px';
    change_slide(state);
    state++;
    if (state==5){
        state=0;
    }
},5000);
//改变下边选择栏样式
function change_slide(dd){
    for(var j=0;j<slide_key.length;j++){
        slide_key[j].className = "slide-key";
    }
    slide_key[dd].className = "slide-key choose-key";
    change_img.style.marginLeft = -820 *dd + 'px';
}

