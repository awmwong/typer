var Typer = Typer || {};

Typer.Button = function (params)
{
  Gemu.Entity.call(this, params);

  if (params.strokeStyle) {
    this.strokeStyle = params.strokeStyle;
  } else {
    this.strokeStyle = "#ACD1E9";
  }

  if (params.backgroundColor) {
    this.backgroundColor = params.backgroundColor;
  } else {
    this.backgroundColor = "#6D929B"
  }

  if (params.text) {
    this.text = params.text;
  } else {
    this.text = "";
  }

  if (params.fontSize) {
    this.fontSize = params.fontSize;
  } else {
    this.fontSize = "32px";
  }
}

Typer.Button.prototype = Object.create(Gemu.Entity.prototype);

Typer.Button.prototype.draw = function(ctx)
{
  _super(Gemu.Entity, 'draw', this, arguments);

  ctx.lineWidth = 1;
  ctx.strokeStyle = this.strokeStyle;
  ctx.fillStyle = this.backgroundColor;
  ctx.strokeRect(this.drawCoordinates.x, this.drawCoordinates.y, this.size.width, this.size.height);
  ctx.fillRect(this.drawCoordinates.x, this.drawCoordinates.y, this.size.width, this.size.height);  

  ctx.font = "normal " + this.fontSize + " sans-serif";
  ctx.textAlign = "center";
  ctx.textBasline = "middle";
  ctx.fillStyle = "#ACD1E9";
  ctx.fillText(this.word, this.drawCoordinates.x + (this.size.width / 2.0), this.drawCoordinates.y + (this.size.height / 2.0));
}