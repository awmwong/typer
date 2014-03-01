Typer = Typer || {};

Typer.MenuScene = function(params)
{
  Gemu.Scene.call(this, params);
  var self = this;

  this.name = "menuScene";

  // 'typer' button
  this.typerButton = new Typer.Button({
    position : {x : 0, y: Gemu.World.instance.gameWindow.height / 4 },
    size : {width : 500, height : 150 },
    text : "typer",
    fontSize : "72px"
  });

  this.typerButton.enabled = false;

  Gemu.Util.centerHorizontally(this.typerButton);

  this.addEntity(this.typerButton);

  // 'new game' button
  this.newGameButton = new Typer.Button({
    position : {x : 0, y: this.typerButton.position.y + this.typerButton.size.height + 100},
    size : {width: 500, height : 150 },
    text : "new game",
    fontSize : "60px"
  });

  this.newGameButton.eventManager.bind('touchend', function(){
    var playScene = new Typer.PlayScene();
    Gemu.World.instance.pushScene(playScene);
  });

  Gemu.Util.centerHorizontally(this.newGameButton);
  this.addEntity(this.newGameButton);

  // // 'leaderboard' button
  // this.leaderboardButton = new Typer.Button({
  //   position : {x : 0, y: this.newGameButton.position.y + this.newGameButton.size.height + 25},
  //   size : {width: 500, height : 150 },
  //   text : "leaderboard",
  //   fontSize : "60px"
  // });

  // this.leaderboardButton.eventManager.bind('touchend', function(){
  //   var leaderboardScene = new Typer.LeaderboardScene();
  //   Gemu.World.instance.pushScene(leaderboardScene);
  // });

  // Gemu.Util.centerHorizontally(this.leaderboardButton);
  // this.addEntity(this.leaderboardButton);
}

Typer.MenuScene.prototype = Object.create(Gemu.Scene.prototype);