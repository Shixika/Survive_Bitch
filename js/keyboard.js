var Keyboard = function(g)
{
	// Listen Key pressed
	window.addEventListener('keydown',function(e){
		for (var key in g.keyBoardMap)
		{
			if (e.keyCode === g.keyBoardMap[key])
			{
				g.keyBoardValue[key] = true;
				console.log("keycode :" + g.keyBoardMap[key], "keyboard value : " + g.keyBoardValue[key]);
			}
		};
	});

	// Listen Key Up
	window.addEventListener('keyup',function(e){
		for (var key in g.keyBoardMap)
		{
			if (e.keyCode === g.keyBoardMap[key])
			{
				g.keyBoardValue[key] = false;
				console.log("keycode :" + g.keyBoardMap[key], "keyboard value : " + g.keyBoardValue[key]);
			}
		};
	})
}