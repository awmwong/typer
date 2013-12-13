var Typer = Typer || {};

Typer.Key = function (params)
{
  Gemu.Entity.call(this, params);

  this.eventManager.bind('touchstart', this.onTouchStart.bind(this));
  this.eventManager.bind('touchend', this.onTouchEnd.bind(this));

  this.keyText = params.keyText;

  this.size = {
    width: 52,
    height: 78
  }

  this.drawRoundRect = function(ctx, x, y, width, height, radius, fill, stroke) {
    if (typeof stroke == "undefined" ) {
      stroke = true;
    }
    if (typeof radius === "undefined") {
      radius = 5;
    }
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();

    if (stroke) {
      ctx.stroke();
    }

    if (fill) {
      ctx.fill();
    }        
  }
}

Typer.Key.prototype = Object.create(Gemu.Entity.prototype);

Typer.Key.prototype.draw = function(ctx)
{
  _super(Gemu.Entity, 'draw', this, arguments);

  if (this.selected) {
    ctx.fillStyle = "#C1DAD6";
    ctx.fillRect(this.drawCoordinates.x, this.drawCoordinates.y, this.size.width, this.size.height);
  }

  // Draw rounded outline
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#ACD1E9";
  ctx.strokeRect(this.drawCoordinates.x, this.drawCoordinates.y, this.size.width, this.size.height);
  // this.drawRoundRect(ctx, this.drawCoordinates.x, this.drawCoordinates.y, this.size.width, this.size.height, 10, null, true);

  // Draw the actual letter
  ctx.font = "normal 36px sans-serif";
  ctx.fillStyle = "#ACD1E9";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(this.keyText, this.drawCoordinates.x + (this.size.width / 2), this.drawCoordinates.y + (this.size.height / 2.0));
}

Typer.Key.prototype.onTouchStart = function(event)
{
  var keyboard = this.parentEntity;
  keyboard.selectedKey = this;

  // Fire keypress event on keyboard
  keyboard.eventManager.raiseEvent('keypress', this.keyText);

  console.log("Key Pressed: " + this.keyText);

  this.selected = true;
}

Typer.Key.prototype.onTouchEnd = function(event)
{
  this.selected = false;
}
