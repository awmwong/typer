var Gemu = Gemu || {};

Gemu.Entity = function(params)
{

  this.world = params.world;

  this.position = { 
    x : 0,
    y : 0
  };

  this.size = {
    width : 0,
    height : 0
  }

  this.velocity = {
    x : 0,
    y : 0
  };

  this.eventManager = new Gemu.EventManager();

  this.parentEntity = null;

  this.subEntities = [];
}

Gemu.Entity.prototype.render = function(ctx)
{
  // To be extended by subclass
  if (!this.drawCoordinates) {
    this.drawCoordinates = this.getCanvasRelativePosition();
  }

  this.draw(ctx);

  for (var i = 0; i < this.subEntities.length; i++) {
    this.subEntities[i].render(ctx);
  }
}

Gemu.Entity.prototype.draw = function(ctx)
{

}

Gemu.Entity.prototype.update = function(elapsed) 
{
  this.setPosition(
    this.position.x + this.velocity.x,
    this.position.y + this.velocity.y);


  if (this.position.y <= 0){
    this.velocity.y *= -1;
  }

  if (this.position.x <= 0) {
    this.velocity.x *= -1;
  }

  if (this.position.x + this.size.width >= this.world.size.width) {
    this.velocity.x *= -1;
  }

  if (this.position.y + this.size.height >= this.world.size.height) {
    this.velocity.y *= -1;
  }

}

Gemu.Entity.prototype.setVelocity = function(xVelocity, yVelocity)
{
  this.velocity = {
    x : xVelocity,
    y : yVelocity
  }
}

Gemu.Entity.prototype.setPosition = function(xPos, yPos)
{
  this.position = {
    x : xPos,
    y : yPos
  }
}

Gemu.Entity.prototype.doesContainPoint = function(xCoord, yCoord)
{
  var containsX;

  if (xCoord >= this.drawCoordinates.x && xCoord <= this.drawCoordinates.x + this.size.width) {
    containsX = true;
  }

  var containsY;

  if (yCoord >= this.drawCoordinates.y && yCoord <= this.drawCoordinates.y + this.size.height) {
    containsY = true;
  }

  if (containsX && containsY) {
    this.subEntities.forEach(function(entity) {
      if (entity.doesContainPoint(xCoord, yCoord)) {
        entity.eventManager.raiseEvent(event.type, event);
      }
    });

    return true;
  }
  return false;
}

Gemu.Entity.prototype.addEntity = function(entity) 
{
  entity.parentEntity = this;
  this.subEntities.push(entity);
}

Gemu.Entity.prototype.removeEntity = function(entity)
{
  for (var i = 0; i < this.subEntities.length; i++) {
    var e = this.subEntities.at(i);

    if (e === entity) {
      e.parentEntity = null;
      this.subEntities.splice(i, 1);
      break;
    }
  }
}

Gemu.Entity.prototype.getCanvasRelativePosition = function()
{
  var xPos = this.position.x;
  var yPos = this.position.y;

  if (this.parentEntity) {
    var parentOffset = this.parentEntity.getCanvasRelativePosition();

    xPos += parentOffset.x;
    yPos += parentOffset.x;
  }

  return { x : xPos, y : yPos};
}