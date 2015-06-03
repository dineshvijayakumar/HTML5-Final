var cd = null;
var xhr = new XMLHttpRequest();
	xhr.open("get","../data/chartdata.json",true);
	xhr.onreadystatechange = ajaxHandler;
	xhr.send();
	
function ajaxHandler(){
	if(xhr.readyState == 4 && xhr.status == 200){
	cd = JSON.parse(xhr.responseText);
	console.log(cd);
	postMessage(cd);
	}
}