var Typer = Typer || {};


Typer.Keyboard = function(params)
{
  Gemu.Entity.call(this, params);

  this.keyArray = 
    [ 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 
      'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
      'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  this.position = params.position;

  this.setupKeyboard();

  this.eventManager.bind('touchmove', this.onTouchMove.bind(this));

}

Typer.Keyboard.prototype = Object.create(Gemu.Entity.prototype);

Typer.Keyboard.prototype.setupKeyboard = function()
{
  var self = this;

  var startX = this.position.x + 6;
  var startY = this.position.y + 24;

  // Setup the first row
  for (var i = 0; i <= 9; i++) {
    var key = this.keyArray[i];

    var keyEntity = new Typer.Key({"keyText" : key});

    keyEntity.setPosition(startX, startY);

    self.addEntity(keyEntity);

    startX += keyEntity.size.width;
    startX += 12;
  }

  // Setup the second row
  startX = 38;
  startY += 78 + 15;

  for (var i = 10; i <= 18; i++) {
    var key = this.keyArray[i];

    var keyEntity = new Typer.Key({"keyText" : key});

    keyEntity.setPosition(startX, startY);

    self.addEntity(keyEntity);

    startX += keyEntity.size.width;
    startX += 12;
  }

  // Setup the third row;
  startX = 102;
  startY += 78 + 15;

  for (var i = 19; i <= 25; i++) {
    var key = this.keyArray[i];

    var keyEntity = new Typer.Key({"keyText" : key});

    keyEntity.setPosition(startX, startY);

    self.addEntity(keyEntity);

    startX += keyEntity.size.width;
    startX += 12;
  }

  console.log(startY);
}

Typer.Keyboard.prototype.draw = function(ctx)
{

}

Typer.Keyboard.prototype.onTouchMove = function(event)
{
  if (this.selectedKey) {
    this.selectedKey.onTouchEnd(event);
    this.selectedKey = null;
  }
}