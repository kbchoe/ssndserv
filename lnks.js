

function go_campusmap() {
	window.open('http://moose.snu.ac.kr/board/map/kr/campus_main.html','','fullscreen');
}
function go_campusmap_en() {
//	window.open('http://www.snu.ac.kr:6060/engsnu/aboutsnu/map/Kwanak_map.htm','','fullscreen');
	window.open('http://moose.snu.ac.kr/board/map/en/campus_main.html','','fullscreen');
}

function view_301() {
	window.open('/introduction/location_pop.asp','','width=963, height=433');
}



function inst_layer(div_id) {
	var inst_id = document.all(div_id)
	if ( inst_id.style.display == "none" ) {
		inst_id.style.display = "";
	} else {
		inst_id.style.display = "none";
	}
}

function view_error(err_msg,re_url) {
	alert (err_msg);
	location.href=re_url;
}

