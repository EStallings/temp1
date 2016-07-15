
menu_areas =
[
	{
		"name" : "BRIEFING",

	},
	{
		"name" : "FILES",

	},
	{
		"name" : "BLUEPRINTS",

	},
	{
		"name" : "CAMERAS",

	},
	{
		"name" : "TERMINALS",

	},
	{
		"name" : "SETTINGS",

	},
	{
		"name" : "EXIT",

	}
];

current_menu_area = 0;

UI_MAIN = {
	tick : function(){
		C.font = "14px Courier";
		C.fillStyle = '#000';
		C.fillRect(0,0,ww, wh);
		for(var i in menu_areas) {
			C.fillStyle = '#f0f0f0';
			if(i == current_menu_area){
				C.fillStyle = '#0f0';
			}
			C.fillText(menu_areas[i].name, 20, (i*20)+50);
		}
	},
	onkeydown : function(keyCode) {
		switch(keyCode){
			case 38: // up arrow
				current_menu_area = Math.max(0, current_menu_area-1);
				break;
			case 40: //down arrow
				current_menu_area = Math.min(menu_areas.length-1, current_menu_area+1);
				break;
		}
	}
}