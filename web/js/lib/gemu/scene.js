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
      this.entities.splice(i, 1);
      break;
    }
  }
}

Gemu.Scene.prototype.update = function()
{
  var self = this;

  this.entities.forEach(function(entity) {
    entity.update();
    self.resolveCollisions(entity);

  });

}

Gemu.Scene.prototype.render = function(ctx)
{
  this.entities.forEach(function(entity) {
    entity.render(ctx);
  });
}

Gemu.Scene.prototype.handleEvent = function(event)
{
  console.log(event);
  var x = event.changedTouches[0].clientX;
  var y = event.changedTouches[0].clientY;

  var scaledX = x * 2;
  var scaledY = y * 2;

  this.entities.forEach(function(entity) {
    if (entity.doesContainPoint(scaledX, scaledY)) {
      entity.eventManager.raiseEvent(event.type, event);
    } 
  });
}

Gemu.Scene.prototype.resolveCollisions = function(entity)
{

}
