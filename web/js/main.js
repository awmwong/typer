(function(App) {
  App.load('typer');

  // Cards
  if (cards) {
    cards.browser.setOrientationLock('portrait');
    cards.browser.statusBar(false);
  }
  
  var world = new Gemu.World();

  var playScene = new Typer.PlayScene();

  var menuScene = new Typer.MenuScene();

  var endScene = new Typer.EndScene();

  world.addScene(playScene);
  world.addScene(menuScene);
  world.addScene(endScene);

  world.activateScene(menuScene);
  // world.activateScene(endScene, {
  //   score : 9999
  // });
  world.run();
})(App);



