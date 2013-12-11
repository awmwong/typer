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

Gemu.Scene.prototype.update = function()
{
  this.entities.forEach(function(entity) {
    entity.update();
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