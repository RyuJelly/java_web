function kosta2(){
	alert("코스타");
	document.write("<b>KOSTA2<b>");
	console.log("kosta2");
}

window.onload = function(){
	var btn = document.getElementById("btn");
	btn.onclick = kosta2;
}