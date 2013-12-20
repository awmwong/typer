(function(App) {
  App.load('typer');

  // Cards
  if (cards) {
    cards.browser.setOrientationLock('portrait');
    cards.browser.statusBar(false);
  }
  
  var world = new Gemu.World();
  var menuScene = new Typer.MenuScene();
  world.startScene(menuScene);

  // var leaderboardScene = new Typer.LeaderboardScene();
  // world.startScene(leaderboardScene);
  world.run();
})(App);



