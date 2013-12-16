Typer = Typer || {};

Typer.MenuScene = function(params)
{
  Gemu.Scene.call(this, params);
  var self = this;

  // 'typer' button
  this.typerButton = new Typer.Button({
    position : {x : 0, y: 250},
    size : {width : 500, height : 150 },
    text : "typer",
    fontSize : "72px"
  });

  Gemu.Util.centerHorizontally(this.typerButton);

  this.addEntity(this.typerButton);

  // 'new game' button
  this.newGameButton = new Typer.Button({
    position : {x : 0, y: this.typerButton.position.y + this.typerButton.size.height + 100},
    size : {width: 500, height : 150 },
    text : "new game",
    fontSize : "60px"
  });

  this.newGameButton.eventManager.bind('touchstart', function(){
    self.newGameButton.selected = true;
    Gemu.World.instance.activateSceneByName('playScene');
  });

  this.newGameButton.eventManager.bind('touchend', function(){
    self.newGameButton.selected = false;
  });

  this.newGameButton.eventManager.bind('touchout', function(){
    self.newGameButton.selected = false;
  });

  Gemu.Util.centerHorizontally(this.newGameButton);
  this.addEntity(this.newGameButton);

  // 'leaderboard' button
  this.leaderboardButton = new Typer.Button({
    position : {x : 0, y: this.newGameButton.position.y + this.newGameButton.size.height + 25},
    size : {width: 500, height : 150 },
    text : "leaderboard",
    fontSize : "60px"
  });

  this.leaderboardButton.eventManager.bind('touchstart', function(){
    self.leaderboardButton.selected = true;
  });

  this.leaderboardButton.eventManager.bind('touchend', function(){
    self.leaderboardButton.selected = false;
  });

  this.leaderboardButton.eventManager.bind('touchout', function(){
    self.leaderboardButton.selected = false;
  });

  Gemu.Util.centerHorizontally(this.leaderboardButton);
  this.addEntity(this.leaderboardButton);
}

Typer.MenuScene.prototype = Object.create(Gemu.Scene.prototype);
