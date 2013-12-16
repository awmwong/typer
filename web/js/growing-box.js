var Typer = Typer || {};

Typer.GrowingBox = function (params)
{
  Typer.BoxSprite.call(this, params);

  if (params.strokeStyle) {
    this.strokeStyle = params.strokeStyle;
  } else {
    this.strokeStyle = "#ACD139";
  }

  if (params.bubbleColor) {
    this.bubbleColor = params.bubbleColor;
  } else {
    this.bubbleColor = "#ACD139"
  }

  this.growthAmount = 24;
}

Typer.GrowingBox.prototype = Object.create(Typer.BoxSprite.prototype);

Typer.GrowingBox.prototype.update = function()
{
  _super(Typer.Bubble, 'update', this, arguments);

  this.size.width += this.growthAmount;
  this.size.height += this.growthAmount;

  this.position.x -= this.growthAmount / 2;
  this.position.y -= this.growthAmount/ 2;

  // Clamping
  this.size.width = Math.min(Gemu.World.instance.size.width, this.size.width);
  this.size.height = Math.min(Gemu.World.instance.size.height, this.size.height);

  this.position.x = Math.max(0, this.position.x);
  this.position.y = Math.max(0, this.position.y);
}