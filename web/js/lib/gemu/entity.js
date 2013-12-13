var Gemu = Gemu || {};

Gemu.Entity = function(params)
{
  if (!params) {
    params = {};
  }

  this.world = params.world;

  if (params.position) {
    this.position = params.position;
  } else {
    this.position = { 
      x : 0,
      y : 0
    };
  }


  this.size = {
    width : 0,
    height : 0
  }

  if (params.velocity) {
    this.velocity = params.velocity;
  } else {
   this.velocity = {
     x : 0,
     y : 0
   }; 
  }

  if (params.acceleration) {
    this.acceleration = params.acceleration;
  } else {
    this.acceleration = {
      x : 0,
      y : 0
    }
  }

  if (params.collidable) {
    this.collidable = params.collidable;
  } else {
    this.collidable = true;
  }

  this.eventManager = new Gemu.EventManager();

  this.scene = null;
  this.parentEntity = null;

  this.deleted = false;
  this.subEntities = [];

}

Gemu.Entity.prototype.render = function(ctx)
{
  // To be extended by subclass
  this.drawCoordinates = this.getCanvasRelativePosition();

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
  this.velocity.x += this.acceleration.x;
  this.velocity.y += this.acceleration.y;

  this.setPosition(
    this.position.x + this.velocity.x,
    this.position.y + this.velocity.y);
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
      e.deleted = true;
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