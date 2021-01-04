'use strict'
function tock(){
	while(true){};
}
onmessage = messageEvent => {
	onmessage = tock;
};
