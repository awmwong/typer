Typer = Typer || {};

Typer.EndScene = function(params)
{
  Gemu.Scene.call(this, params);
  var self = this;

  this.name = 'endScene';
}

Typer.EndScene.prototype = Object.create(Gemu.Scene.prototype);

Typer.EndScene.prototype.activate = function(data)
{
  _super(Gemu.Scene, 'activate', this, arguments);

  var self = this;
  
  // 'score' button
  this.scoreButton = new Typer.Button({
    position : {x : 0, y: Gemu.World.instance.gameWindow.height / 8},
    size : {width : 500, height : 150 },
    text : this.sceneData.score.toString(),
    fontSize : "72px"
  });

  Gemu.Util.centerHorizontally(this.scoreButton);

  this.addEntity(this.scoreButton);

  // 'post' button
  this.postButton = new Typer.Button({
    position : {x : 0, y: this.scoreButton.position.y + this.scoreButton.size.height + 100},
    size : {width: 500, height : 150 },
    text : "post",
    fontSize : "60px"
  });

  this.posted = false;
  this.postButton.eventManager.bind('touchend', function(){
    if (this.posted === false)  {
      if (cards.kik) {
        cards.kik.getUser(function (user) {
          if ( !user ) {
            // user denied access to their information
            return;
          }

          TyperAPI('/game/create', {
              'username' : user.username,
              'score' : self.sceneData.score,
              'duration' : self.sceneData.duration,
              'bubbles' : self.sceneData.bubbles,
              'bombs' : self.sceneData.bombs,
              'freezes' : self.sceneData.freezes,
              'lifes' : self.sceneData.lifes
            }, function(status, response) {

              if (status === true) {
                console.log("Score posted!");
                this.posted === true;
              }
          });
        });
      }
    } else {

    }


  });

  Gemu.Util.centerHorizontally(this.postButton);
  this.addEntity(this.postButton);

  // 'kik' button
  this.kikButton = new Typer.Button({
    position : {x : 0, y: this.postButton.position.y + this.postButton.size.height + 25},
    size : {width: 500, height : 150 },
    text : "kik",
    fontSize : "60px"
  });

  this.kikButton.eventManager.bind('touchend', function(){
    if (cards && cards.kik) {
      cards.kik.send({
          title     : "Who needs Mario typing?!",
          text      : "I just scored: " + self.sceneData.score.toString()
      });
    }
  });

  Gemu.Util.centerHorizontally(this.kikButton);
  this.addEntity(this.kikButton);

  // 'done' button
  this.doneButton = new Typer.Button({
    position : {x : 0, y: this.kikButton.position.y + this.kikButton.size.height + 25},
    size : {width: 500, height : 150 },
    text : "done",
    fontSize : "60px"
  });

  this.doneButton.eventManager.bind('touchend', function(){
    var menuScene = new Typer.MenuScene();
    Gemu.World.instance.startScene(menuScene);
  });

  Gemu.Util.centerHorizontally(this.doneButton);
  this.addEntity(this.doneButton);

}
