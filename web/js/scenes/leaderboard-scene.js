Typer = Typer || {};

Typer.LeaderboardScene = function(params)
{
  Gemu.Scene.call(this, params);
  var self = this;

  this.launchedFromMain = false;

  // 'your score' label
  var yourScore = new Typer.BoxLabel({
    position : {x : 0, y: Gemu.World.instance.gameWindow.height / 24 },
    size : {width : 250, height: 75},
    text : "you",
    fontSize : "48px"
  })

  Gemu.Util.centerHorizontally(yourScore);
  this.addEntity(yourScore);

  // personal label
  var personalLabel = new Typer.BoxLabel({
    position: { x : 0, y : yourScore.position.y + yourScore.size.height + 25},
    size : {width : 500, height : 75},
    text : " ## " + "awmwong" + " [" + 123123 + "]"
  })

  Gemu.Util.centerHorizontally(personalLabel);
  this.addEntity(personalLabel);

  // 'others' label
  var othersLabel = new Typer.BoxLabel({
    position : {x : 0, y : personalLabel.position.y + personalLabel.size.height + 25},
    size : {width : 250, height: 75},
    text : "others",
    fontSize : "48px"
  })

  Gemu.Util.centerHorizontally(othersLabel);
  this.addEntity(othersLabel);

  var startY = 0;
  for (var i = 0; i < 5; i ++) {
    // other scores
    var otherScoreLabel = new Typer.BoxLabel({
      position: { x : 0, y : othersLabel.position.y + othersLabel.size.height + 25 + (i * (75 + 5))},
      size : {width : 500, height : 75},
      text : " ## " + "awmwong" + i + " [" + 123123 + "]"
    })

    Gemu.Util.centerHorizontally(otherScoreLabel);
    self.addEntity(otherScoreLabel);

    if (i == 4) {
      startY = otherScoreLabel.position.y + otherScoreLabel.size.height + 25;
    }
  }

  // back button
  this.backButton = new Typer.Button({
    position : {x : 0, y: startY},
    size : {width: 500, height : 150 },
    text : "back",
    fontSize : "60px"
  });

  this.backButton.eventManager.bind('touchend', function(){
    Gemu.World.instance.popScene();
  });

  Gemu.Util.centerHorizontally(this.backButton);
  self.addEntity(this.backButton);

}

Typer.LeaderboardScene.prototype = Object.create(Gemu.Scene.prototype);