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

  if (cards.kik) {
    cards.kik.getUser(function (user) {
      if ( !user ) {
        // user denied access to their information
        return;
      }

      // personal label
      TyperAPI('/games', { username : user.username }, function(success, response){
        console.log(response);
        var obj = response[0];

        var personalLabel = new Typer.BoxLabel({
          position: { x : 0, y : yourScore.position.y + yourScore.size.height + 25},
          size : {width : 500, height : 75},
          text : obj.username + " [" + obj.score + "] "
        })

        Gemu.Util.centerHorizontally(personalLabel);
        self.addEntity(personalLabel);

        // 'others' label
        var othersLabel = new Typer.BoxLabel({
          position : {x : 0, y : personalLabel.position.y + personalLabel.size.height + 25},
          size : {width : 250, height: 75},
          text : "others",
          fontSize : "48px"
        })

        Gemu.Util.centerHorizontally(othersLabel);
        self.addEntity(othersLabel);

        TyperAPI('/allgames', { foo : 'bar' }, function(success, response){
          console.log(response);
          for (var i = 0; i < Math.min(5, response.length); i++) {
            var obj = response[i];

            var otherScoreLabel = new Typer.BoxLabel({
              position: { x : 0, y : othersLabel.position.y + othersLabel.size.height + 25 + (i * (75 + 5))},
              size : {width : 500, height : 75},
              text : i+1 + " - " + obj.username + " [" + obj.score + "] "
            });

            Gemu.Util.centerHorizontally(otherScoreLabel);
            self.addEntity(otherScoreLabel);
          }
        });
      });
    });
  }



  // back button
  this.backButton = new Typer.Button({
    position : {x : 0, y: Gemu.World.instance.gameWindow.height - 175},
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