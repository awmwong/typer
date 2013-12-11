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

  requestAnimFrame(function() { self.loop.call(self) });

}

Gemu.World.prototype.processInput = function(event)
{
  var self = this;

  self.getActiveScene().handleEvent(event);

}

Gemu.World.prototype.update = function()
{
  var self = this;

  var activeScene = self.getActiveScene();
  activeScene.update();
}

Gemu.World.prototype.render = function()
{
  var self = this;

  self.clearCanvas();

  self.getActiveScene().render(self.context);
}

Gemu.World.prototype.addScene = function(scene) 
{
  var self = this;

  self.scenes.push(scene);
}

Gemu.World.prototype.activateScene = function(scene) 
{
  var self = this;

  self.scenes.forEach(function(s) {
    if (s === scene) {
      s.active = true;
    } else {
      s.active = false;
    }
  });
}

Gemu.World.prototype.getActiveScene = function()
{
  var self = this;

  var retVal;

  self.scenes.some(function (s) {
    if (s.active === true) {
      retVal = s;
    }
  })

  return retVal;
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
