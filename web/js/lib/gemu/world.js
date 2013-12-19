var Gemu = Gemu || {};

Gemu.World = function(params)
{
  // Hold the current time
  this.currentTime = new Date().getTime();

  // Hold the previous time for lag calculation
  this.previousTime = this.currentTime;

  // Current lag
  this.lag = 0;

  // Scene Management
  this.scenes = [];

  // Framerate
  this.framerateTimeAccumulator = 0;
  this.framerateFramesAccumulator = 0;

  // Holds the DOM (canvas?) element
  this.gameWindow = document.getElementById("gemu-canvas");

  if (typeof(this.gameWindow) === 'object') {
    this.context = this.gameWindow.getContext("2d");
  }

  var neededWidth = 640;
  var neededHeight = 960;

  var aspectRatio = neededWidth / neededHeight;

  this.gameWindow.width = neededWidth;
  this.gameWindow.height = (window.innerHeight / window.innerWidth) * this.gameWindow.width;

  if (this.gameWindow.width / this.gameWindow.height > aspectRatio) {
      var previousAspectRatio = this.gameWindow.width / this.gameWindow.height;
      this.gameWindow.height = neededHeight;
      this.gameWindow.width = this.gameWindow.height * previousAspectRatio;
  }

  // Touch Events
  this.gameWindow.addEventListener("touchstart", this.processInput.bind(this));
  this.gameWindow.addEventListener("touchend", this.processInput.bind(this));
  this.gameWindow.addEventListener("touchmove", this.processInput.bind(this));


  // Size
  this.size = { 
    width : this.gameWindow.width,
    height : this.gameWindow.height
  };

  Gemu.World.instance = this;
}

Gemu.World.tickRate = 1000 / 120;

Gemu.World.prototype.run = function()
{
  var world = this;

  this.previousTime = new Date().getTime();


  requestAnimFrame(function(){
    world.loop.call(world);
  })
}

Gemu.World.prototype.loop = function()
{
  var self = this;
  requestAnimFrame(this.loop.bind(this));


  var currentTime = new Date().getTime();

  var elapsed = currentTime - self.previousTime;

  // Prevent spiral of death
  if (elapsed >= 5000) {
    elapsed = 0;
  }

  // Update the last time
  self.previousTime = currentTime;
  // Increment lag accumulator
  self.lag += elapsed;

  /**
   *  Framerate
   */
  self.framerateTimeAccumulator += elapsed;
  self.framerateFramesAccumulator++;
  if (self.framerateTimeAccumulator >= 1000) {
    // console.log("framerate: " + self.framerateFramesAccumulator);
    // console.log("devicePixelRatio: " + self.devicePixelRatio);
    // console.log("backingStoreRatio: " + self.backingStoreRatio);

    self.framerateTimeAccumulator = 0;
    self.framerateFramesAccumulator = 0;
  }


  while (self.lag >= Gemu.World.tickRate) {
    // Update
    self.update();
    self.lag -= Gemu.World.tickRate;
  }

  // Render
  self.render();

}

Gemu.World.prototype.processInput = function(event)
{
  var self = this;

  self.getActiveScene().handleEvent(event);

}

Gemu.World.prototype.update = function()
{
  var self = this;

  self.getActiveScene().update();
}

Gemu.World.prototype.render = function()
{
  var self = this;

  self.clearCanvas();

  self.getActiveScene().render(self.context);
}

Gemu.World.prototype.startScene = function(scene, data) 
{
  var self = this;

  self.scenes = [scene];
  scene.activate(data);
}

Gemu.World.prototype.pushScene = function(scene, data)
{
  var self = this;

  if (scene) {
    // Deactivate the current scene
    var currentActiveScene = self.getActiveScene();
    currentActiveScene.deactivate();

    // Add the new one.
    self.scenes.push(scene);
    scene.activate(data);
  }
}


Gemu.World.prototype.popScene = function()
{
  var self = this;
  var curScene = self.scenes.pop();
  curScene.deactivate();
}

Gemu.World.prototype.getActiveScene = function()
{
  // Active scene is the last element in the array
  return this.scenes[this.scenes.length - 1];
}

Gemu.World.prototype.clearCanvas = function() {
  var self = this;

  self.context.clearRect(
    0,
    0,
    self.size.width,
    self.size.height
  );
}
