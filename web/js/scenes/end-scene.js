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
    position : {x : 0, y: 175},
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

  this.postButton.eventManager.bind('touchend', function(){

    // TODO POST LEADERBOARD

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
          title     : "Who needs mario typing?",
          text      : "Beat this! " + self.sceneData.score.toString()
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
    Gemu.World.instance.activateSceneByName('menuScene');
  });

  Gemu.Util.centerHorizontally(this.doneButton);
  this.addEntity(this.doneButton);

}
