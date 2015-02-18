window.addEventListener('load', init);


function init()
{
	g               = {};
	g.canvas        = document.getElementById('canvas');
	g.context       = g.canvas.getContext('2d');
	g.canvas.width  = g.canvasWidth = 800;
	g.canvas.height = g.canvasHeight = 600;
	g.background    = new Background(g);
	g.player        = new Player();
	g.keyBoardMap   = {"left":37, "droite":39, "up":38, "down":40};
	g.keyBoardValue = {"left":false, "droite":false, "up":false, "down":false};
	g.keyboard      = new Keyboard(g);
	game_loop(g);
}

function game_loop(g)
{
	g.context.clearRect(0,0,g.canvas.width, g.canvas.height);
	g.background.render(g);
	g.player.update(g);
	requestAnimationFrame(function(){game_loop(g)});
}
