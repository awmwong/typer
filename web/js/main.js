(function(App) {
  App.load('typer');

  // Cards
  cards.browser.setOrientationLock('portrait');

  var world = new Gemu.World();

  var playScene = new Typer.PlayScene();


  world.addScene(playScene);
  world.activateScene(playScene);
  world.run();

})(App);



