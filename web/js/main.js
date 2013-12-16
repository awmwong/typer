(function(App) {
  App.load('typer');

  // Cards
  if (cards) {
    cards.browser.setOrientationLock('portrait');
    cards.browser.statusBar(false);
  }
  
  var world = new Gemu.World();

  var playScene = new Typer.PlayScene({name : 'playScene'});

  var menuScene = new Typer.MenuScene({name : 'menuScene'});

  world.addScene(playScene);
  world.addScene(menuScene);

  world.activateScene(menuScene);
  world.run();

})(App);



