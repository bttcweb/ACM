function get(keyword) {
    var reg = new RegExp("(^|&)" + keyword + "=([^&]*)(&|$)", "i");
    var r = encodeURI(window.location.search).substr(1).match(reg);;
    if (r != null) return decodeURI(unescape(r[2]));
    return null;
}

// 获取参数
var data = get('data');
console.log(data);

// 资源全称
var DATA = ["算法竞赛入门经典", "算法竞赛入门经典（第二版）", "啊哈!算法", "C++PrimerPlus", "算法导论", 
			"codeblocks", "Dev-Cpp", "Chrome", "WinRAR", "EVCapture"];

// 延时自动下载
setTimeout(function() {
	// 如果为空则不进行下载
	if ( data == "undefined" || data == null ) return ;
    var type;
    for (i = 0; i < DATA.length; i++) {
        if (data == DATA[i]) {
            if (i < 5) type = ".pdf";
            else type = ".exe";
        }
    }
	if ( data == "啊哈!算法") data = "default" ;
	if ( data == "算法竞赛入门经典" ) data = "default1" ;
	if ( data == "算法竞赛入门经典（第二版）") data = "default2" ;
	if ( data == "算法导论") data = "default3" ;
    // 通过js添加一个提交表单实现自动下载
    var $form = $('<form method="POST"></form>');
    $form.attr('action', 'https://github.com/bttcweb/ACM/releases/download/data/' + data + type);
    $form.appendTo($('body'));
    $form.submit();
}, 1000);


// 返回首页
var home = function() {
	window.location.href="./index.html";
}

$("#index").click(function(){home();});

var time = 5 ;
setInterval(function(){
	if ( time == 1 ) home();
	$("#time").text(time-=1);
},"1000")
