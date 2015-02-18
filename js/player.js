var Player = function()
{
	this.pos          = new Vector2(350,550);
	this.width        = 50;
	this.height       = 50;
	this.color        = "red";
	this.velocity     = new Vector2(0,0);
	this.maxVelocity  = 5;
	this.friction = 0.9;
}

Player.prototype.render = function(g)
{
	g.context.fillStyle = this.color;
	g.context.fillRect(this.pos.x, this.pos.y, this.width, this.height);
}

Player.prototype.move = function(g)
{
	if (g.keyBoardValue.droite && this.velocity.x < this.maxVelocity)
	{	
		this.velocity.x++;
	};

	if (g.keyBoardValue.left && this.velocity.x < this.maxVelocity)
	{	
		this.velocity.x--;
	};

	this.velocity.x *= this.friction;
	this.pos.x += this.velocity.x;

}

Player.prototype.update = function(g)
{
	this.render(g);
	this.move(g);
}