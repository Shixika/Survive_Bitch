var Background = function(g)
{
	this.pos = new Vector2(0,0);
	this.width = g.canvas.width;
	this.height = g.canvas.height;
	this.color = 'rgba(0,0,0,0.8);'
}

Background.prototype.render = function(g)
{
	g.context.fillStyle = this.color;
	g.context.fillRect(this.pos.x, this.pos.y, this.width, this.height);
}