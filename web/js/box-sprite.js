var Typer = Typer || {};

Typer.BoxSprite = function (params)
{
  Gemu.Entity.call(this, params);

  this.size = {
    width : 8,
    height : 8
  };

  if (params.strokeStyle) {
    this.strokeStyle = params.strokeStyle;
  } else {
    this.strokeStyle = "#ACD1E9";
  }
}

Typer.BoxSprite.prototype = Object.create(Gemu.Entity.prototype);

Typer.BoxSprite.prototype.draw = function(ctx)
{
  _super(Gemu.Entity, 'draw', this, arguments);

  ctx.lineWidth = 1;
  ctx.strokeStyle = this.strokeStyle;
  ctx.strokeRect(this.drawCoordinates.x, this.drawCoordinates.y, this.size.width, this.size.height);  
}