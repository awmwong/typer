var Typer = Typer || {};

Typer.LifeBubble = function (params)
{
  Typer.Bubble.call(this, params);

  this.bubbleColor = "#7db37d";
}

Typer.LifeBubble.prototype = Object.create(Typer.Bubble.prototype);

Typer.LifeBubble.prototype.draw = function(ctx)
{
  _super(Typer.Bubble, 'draw', this, arguments);

  ctx.lineWidth = 1;
  ctx.strokeStyle = this.bubbleColor;
  ctx.fillStyle = this.bubbleColor;
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