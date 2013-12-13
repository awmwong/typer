var Typer = Typer || {};

Typer.SquareParticle = function (params)
{
  Gemu.Entity.call(this, params);

  this.size = {
    width : 8,
    height : 8
  };
}

Typer.SquareParticle.prototype = Object.create(Gemu.Entity.prototype);

Typer.SquareParticle.prototype.draw = function(ctx)
{
  _super(Gemu.Entity, 'draw', this, arguments);

  ctx.lineWidth = 1;
  ctx.strokeStyle = "#ACD1E9";
  ctx.fillStyle = "#ACD1E9";
  ctx.strokeRect(this.drawCoordinates.x, this.drawCoordinates.y, this.size.width, this.size.height);  
}