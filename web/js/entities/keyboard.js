var Typer = Typer || {};


Typer.Keyboard = function(params)
{
  Gemu.Entity.call(this, params);

  this.keyArray = 
    [ 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 
      'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
      'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  this.position = {
    x : 0,
    y : Gemu.World.instance.size.height - this.size.height
  }

  this.setupKeyboard();

  this.eventManager.bind('touchmove', this.onTouchMove.bind(this));

}

Typer.Keyboard.prototype = Object.create(Gemu.Entity.prototype);

Typer.Keyboard.prototype.setupKeyboard = function()
{
  var self = this;

  var startX = this.position.x + 2;
  var startY = this.position.y + 24;

  // Setup the first row
  for (var i = 0; i <= 9; i++) {
    var key = this.keyArray[i];

    var keyEntity = new Typer.Key({"keyText" : key});

    keyEntity.setPosition(startX, startY);

    self.addEntity(keyEntity);

    startX += keyEntity.size.width;
    startX += 4;
  }

  // Setup the second row
  startX = 34;
  startY += 78 + 15;

  for (var i = 10; i <= 18; i++) {
    var key = this.keyArray[i];

    var keyEntity = new Typer.Key({"keyText" : key});

    keyEntity.setPosition(startX, startY);

    self.addEntity(keyEntity);

    // HACK for A & L hit zones.
    if (key === 'A') {
      this.AKeyEntity = keyEntity;
    }

    if (key === 'L') {
      this.LKeyEntity = keyEntity;
    }

    startX += keyEntity.size.width;
    startX += 4;
  }

  // Setup the third row;
  startX = 98;
  startY += 78 + 15;

  for (var i = 19; i <= 25; i++) {
    var key = this.keyArray[i];

    var keyEntity = new Typer.Key({"keyText" : key});

    keyEntity.setPosition(startX, startY);

    self.addEntity(keyEntity);

    startX += keyEntity.size.width;
    startX += 4;
  }

  console.log(startY);
}

Typer.Keyboard.prototype.draw = function(ctx)
{
  ctx.fillStyle = "#6D929B"
  ctx.fillRect(this.drawCoordinates.x, this.drawCoordinates.y, this.size.width, this.size.height);

  // ctx.strokeStyle = "#ACD1E9";
  // ctx.lineWidth  = 1;
  // ctx.beginPath();
  // ctx.moveTo(this.drawCoordinates.x, this.drawCoordinates.y);
  // ctx.lineTo(this.drawCoordinates.x + this.size.width, this.drawCoordinates.y);
  // ctx.stroke();
  // ctx.closePath();
}

Typer.Keyboard.prototype.onTouchMove = function(event)
{
  if (this.selectedKey) {
    this.selectedKey.onTouchEnd(event);
    this.selectedKey = null;
  }
}