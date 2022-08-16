var DATA = ["算法竞赛入门经典","算法竞赛入门经典（第二版）","啊哈!算法","C++PrimerPlus","算法导论",
		"codeblocks","Dev-Cpp","Chrome","WinRAR","EVCapture"];
$(function () {
	var i = 0 ;
	$(".item").each(function(){
		$(this).attr("title" , DATA [ i ] );
		$(this).css("background-image","url(images/" + DATA[ i ++ ] + ".png)");
	})
})
$(".item").click(function(){	
	// 获取div的title值
	// alert($(this).attr("title"));
	$(location).prop('href', './Download.html' + '?data='+$(this).attr("title"))
})
