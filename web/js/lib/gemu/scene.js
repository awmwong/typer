var Gemu = Gemu || {};

Gemu.Scene = function(params)
{
  this.entities = [];

  this.active = false;

}

Gemu.Scene.prototype.addEntity = function(entity)
{
  this.entities.push(entity) 
}

Gemu.Scene.prototype.removeEntity = function(entity)
{
  for (var i = 0; i < this.entities.length; i++) {
    var e = this.entities[i];;

    if (entity === e) {
      e.deleted = true;
      e.eventManager.unbindAll();
      break;
    }
  }
}

Gemu.Scene.prototype.update = function()
{
  var self = this;

  this.cleanupEntities();

  var entities = this.entities.slice();

  entities.forEach(function(entity) {
    entity.update();
    self.resolveCollisions(entity);
  });

}

Gemu.Scene.prototype.render = function(ctx)
{
  var entities = this.entities.slice();

  entities.forEach(function(entity) {
    entity.render(ctx);
  });
}

Gemu.Scene.prototype.handleEvent = function(event)
{
  var x = event.changedTouches[0].pageX;
  var y = event.changedTouches[0].pageY;

  var scaledX = x / window.innerWidth * Gemu.World.instance.gameWindow.width;
  var scaledY = y / window.innerHeight * Gemu.World.instance.gameWindow.height;
  
  var entitiesCopy = this.entities.slice();

  entitiesCopy.forEach(function(entity) {
    if (entity.doesContainPoint(scaledX, scaledY)) {
      entity.eventManager.raiseEvent(event.type, event);
    } 
  });
}

Gemu.Scene.prototype.resolveCollisions = function(entity)
{
  // To be extended.
}

Gemu.Scene.prototype.cleanupEntities = function()
{
  var tempEnt = [];

  for (var i = 0; i < this.entities.length; i++) {
    var ent = this.entities[i];

    if (!ent.deleted) {
      tempEnt.push(ent);
    }
  }

  this.entities = tempEnt;
}