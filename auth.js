valid_missions = ["2B"];

auth_code = "";
login_failed = false;
UI_AUTH = {
	tick : function(){
		C.font = "14px Courier";
		C.fillStyle = '#000';
		C.fillRect(0,0,ww, wh);
		C.fillStyle = '#f0f0f0';
		// C.fillText("ENTER MISSION CREDENTIALS", 20, (20)+50);
		C.fillText("ENTER MISSION CREDENTIALS", 20, (20)+50);
		var draw_auth_code = (auth_code.length > 2) ? auth_code.slice(0, 2) + "-" + auth_code.slice(2, 4) : auth_code;
		if(Math.floor(LAST_TIME * 2) % 2 == 0) {
			draw_auth_code += '_';
		}
		C.fillText(draw_auth_code, 20, (50)+50);
	},
	onkeydown : function(keyCode) {
		if(keyCode == 8) // backspace
		{
			auth_code = auth_code.slice(0, auth_code.length-1);
		}
		else if(keyCode == 13 && auth_code.length == 4){
			if(UI_AUTH.checkCode(auth_code)){

			}
			else
			{

			}
		}
		else if(auth_code.length < 4){
			var c = CHAR_CODE[keyCode];
			if(c){
				auth_code += c;
			}
		}
	},
	checkCode : function(auth_code) {

	}
}

var CHAR_CODE = {
	48:'0',49:'1',50:'2',51:'3',52:'4',53:'5',54:'6',55:'7',56:'8',57:'9',
	65:'A',66:'B',67:'C',68:'D',69:'E',70:'F'
};