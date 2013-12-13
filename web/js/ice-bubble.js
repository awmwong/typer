var Typer = Typer || {};

Typer.IceBubble = function (params)
{
  Typer.Bubble.call(this, params);
}

Typer.IceBubble.prototype = Object.create(Typer.Bubble.prototype);

Typer.IceBubble.prototype.draw = function(ctx)
{
  _super(Typer.Bubble, 'draw', this, arguments);

  ctx.lineWidth = 1;
  ctx.strokeStyle = "#F5FAFA";
  ctx.fillStyle = "#F5FAFA";
  ctx.fillRect(this.drawCoordinates.x, this.drawCoordinates.y, this.size.width, this.size.height);

  ctx.font = "normal 32px sans-serif";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle"
  ctx.strokeStyle = "#ACD1E9";
  ctx.fillStyle = "#ACD1E9";
  ctx.fillText(this.word, this.drawCoordinates.x + 10, this.drawCoordinates.y + (this.size.height / 2.0));

  ctx.strokeStyle = "#E8D0A9"
  ctx.fillStyle = "#E8D0A9"
  ctx.textAlign = "left";
  ctx.textBaseline = "middle"
  ctx.fillText(this.subWord, this.drawCoordinates.x + 10, this.drawCoordinates.y + (this.size.height/ 2.0));
}