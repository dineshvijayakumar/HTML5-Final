var num = 500;

setInterval(randomize, 100);


function randomize(){
	var val = Math.round( Math.random()*num);
	postMessage(val);
}

addEventListener("message", numChangeHandler);

function numChangeHandler(evt){
	num = evt.data;
};
