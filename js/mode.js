var brightness;
//显示遮罩
function cover(brightness) {
	if (typeof(div) == 'undefined') {
		div = document.createElement('div');
		div.setAttribute('style', 'position:fixed;top:0;left:0;outline:5000px solid;z-index:99999;');
		document.body.appendChild(div);
	} else {
		div.style.display = '';
	}
	div.style.outlineColor = 'rgba(0,0,0,' + brightness + ')';
}
//事件监听
window.addEventListener('keydown', function(e) {
    if (e.altKey && e.keyCode == 90) { //Alt+Z:打开夜间模式
    	cover(brightness = 0.3);
    	$("body").css({background:"#000",color:"#fff"});
    	$.cookie('Mode', "night", { expires: 0.5, path: '/' });
    }
    if (e.altKey && e.keyCode == 88) { //Alt+X:关闭
    	cover(brightness = 0);
    	$("body").css({background:"#fff",color:"#000"});
    	$.cookie('Mode', "daytime", { expires: 0.5, path: '/' });
    }
    if (e.altKey && e.keyCode == 38) { //Alt+↑:增加亮度
    	if (brightness - 0.05 > 0.05) cover(brightness -= 0.05);
    }
    if (e.altKey && e.keyCode == 40) { //Alt+↓:降低亮度
    	if (brightness + 0.05 < 0.95) cover(brightness += 0.05);
    }
}, false);
//根据cookie中存储的状态判断是否开启夜间模式
$(function(){
	if ( $.cookie("Mode") == "night" ) {
		cover(brightness = 0.3);
		$("body").css({background:"#000",color:"#fff"});
		$.cookie('Mode', "night", { expires: 0.5, path: '/' });
	}
	if ( $.cookie("Mode") == "daytime" ) {
		cover(brightness = 0);
		$("body").css({background:"#fff",color:"#000"});
		$.cookie('Mode', "daytime", { expires: 0.5, path: '/' });
	}
});