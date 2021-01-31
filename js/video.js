var player = document.getElementById("video_player");
var bc = document.getElementById("bc_video");
function pl(el){	
	bc.style.visibility = "visible";
	bc.style.opacity = "1";
	player.src=el.id;
}
function st(){
	bc.style.opacity = "0";
	bc.style.visibility = "hidden";
	player.src="";
}
