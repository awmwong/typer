var Typer = Typer || {};

Typer.Bubble = function (params)
{
  Gemu.Entity.call(this, params);

  this.word = params.word;
  this.wordPos = 0;
  
  this.subWord = "";

  // Compute width
  var globalCtx = Gemu.World.instance.context;
  globalCtx.font = "normal 32px sans-serif";
  globalCtx.textAlign = "left";
  globalCtx.textBaseline = "middle"

  var textWidth = globalCtx.measureText(this.word).width;

  this.size = {
    width : textWidth + 20,
    height : 48
  };

}

Typer.Bubble.prototype = Object.create(Gemu.Entity.prototype);

Typer.Bubble.prototype.draw = function(ctx)
{
  _super(Gemu.Entity, 'draw', this, arguments);

  ctx.lineWidth = 1;
  ctx.strokeStyle = "#ACD1E9";
  ctx.strokeRect(this.drawCoordinates.x, this.drawCoordinates.y, this.size.width, this.size.height);
  ctx.save();

  ctx.font = "normal 32px sans-serif";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle"
  ctx.fillText(this.word, this.drawCoordinates.x + 10, this.drawCoordinates.y + (this.size.height / 2.0));

  ctx.strokeStyle = "#E8D0A9"
  ctx.fillStyle = "#E8D0A9"
  ctx.textAlign = "left";
  ctx.textBaseline = "middle"
  ctx.fillText(this.subWord, this.drawCoordinates.x + 10, this.drawCoordinates.y + (this.size.height/ 2.0));
}

Typer.Bubble.prototype.step = function()
{
  this.wordPos++;
  this.subWord = this.word.substr(0, this.wordPos);
}