(function(App) {
  App.load('typer');

  var world = new Gemu.World();

  var gameScene = new Gemu.Scene();

  var square = new Typer.Square({ "world" : world });
  square.size = {
    width: 50,
    height: 50
  }

  gameScene.addEntity(square);
  world.addScene(gameScene);
  world.activateScene(gameScene);

  square.setPosition(25, 25);
  square.setVelocity(1, 1);

  world.run();
})(App);



