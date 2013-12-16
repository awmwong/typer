(function(App) {
  App.load('typer');

  // Cards
  if (cards) {
    cards.browser.setOrientationLock('portrait');
    cards.browser.statusBar(false);
  }
  
  var world = new Gemu.World();

  var playScene = new Typer.PlayScene();


  world.addScene(playScene);
  world.activateScene(playScene);
  world.run();

})(App);



