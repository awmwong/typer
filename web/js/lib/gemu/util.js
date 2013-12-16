var Gemu = Gemu || {};
Gemu.Util = {};

Gemu.Util.centerHorizontally = function (entity)
{
  var worldWidth = Gemu.World.instance.gameWindow.width;
  entity.setPosition((worldWidth - entity.size.width) / 2, entity.position.y)
}