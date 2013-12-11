(function(App) {
  App.load('typer');

  var world = new Gemu.World();

  var gameScene = new Gemu.Scene();

  var key = new Typer.Key(
    { "world" : world, "keyText" : "Q" });

  key.size = {

  }

  var keyboardEntity = new Typer.Keyboard({
   "world" : world,
   "position": { x : 0, y : 620}
  });

  keyboardEntity.size = {
    width: 640,
    height: 315
  }

  gameScene.addEntity(keyboardEntity);

  world.addScene(gameScene);
  world.activateScene(gameScene);

  key.setPosition(6, 552);

  world.run();
})(App);



