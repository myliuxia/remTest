/*搜索框样式*/

function onsreachfocus() {
	var cl = document.getElementById("clear");
	cl.style.display = "block";
}

function onsreachblur() {
	var cl = document.getElementById("clear");
	if(document.getElementById("search_name").value == "") {
		cl.style.display = "none";
	}
}

function onClearClick() {

	var se = document.getElementById("search_name");
	se.focus();
	se.value = "";

}
/*显示查询框*/
function showSreach(){
	$(".headertitle").hide();
	$(".mysearch").show();
}
/*隐藏查询框*/
function hideSreach(){
	$(".mysearch").hide();
	$(".headertitle").show();
}