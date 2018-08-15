//重写getElementBy函数
var get = {
    byId: function (id) {
        return document.getElementById(id);
    },

    byClsName: function (clsName, oParent) {
        var newClass = [];
        var reg = new RegExp("(^| )" + clsName + "( |$)");
        var allEl = this.byTagName("*", oParent);
        for (var i = 0; i < allEl.length; i++) reg.test(allEl[i].className) && newClass.push(allEl[i]);
        return newClass;
    },
    byTagName: function (el, obj) {
        return (obj || document).getElementsByTagName(el);
    }
};

//获取样式函数
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}

//获取第一个子元素或最后一个子元素
function myfirstchild(Obj) {
    if (Obj.firstElementChild) {
        return Obj.firstElementChild;
    } else {
        return Obj.firstChild;
    }
}

function mylastchild(Obj) {
    if (Obj.lastElementChild) {
        return Obj.lastElementChild;
    } else {
        return Obj.lastChild;
    }
}
