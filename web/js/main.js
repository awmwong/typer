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

  // var endScene = new Typer.EndScene();

  // Gemu.World.instance.startScene(endScene, { 
  //   score : 333,
  //   bubbles : 0,
  //   duration : 123123,
  //   freezes : 1,
  //   bombs : 12,
  //   lifes : 3333
  // });

  world.run();
})(App);



