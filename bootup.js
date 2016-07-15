var bootup_time = 5;

function draw_bootup(){
	C.fillStyle = '#000';
	C.fillRect(0,0,ww, wh);
	C.font = "14px Courier";
	C.fillStyle = '#f0f0f0';
	var text = "INITIALIZING";
	if(Math.floor(bootup_time*2) % 4 == 3) text += '.';
	if(Math.floor(bootup_time*2) % 4 == 2) text += '..';
	if(Math.floor(bootup_time*2) % 4 == 1) text += '...';
	C.fillText(text, 20, 100);
	C.fillText(timeNow(), 20, 200);
	bootup_time -= time_dt;
}