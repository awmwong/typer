// Namespace isolation
var Gemu = Gemu || {};

Gemu.World = function(params)
{
  /**
   *  Private things
   */
  this._private = {};

  // Hold the current time
  this._private.currentTime = new Date().getTime();

  // Hold the previous time for lag calculation
  this._private.previousTime = this._private.currentTime;

  // Update Rate
  this._private.tickRate = 1000.0 / 120.0;

  // Current lag
  this._private.lag = 0;

  // Framerate
  this._private.framerateTimeAccumulator = 0;
  this._private.framerateFramesAccumulator = 0;

  // 

  /**
   *  Properties
   */
  // Holds the DOM (canvas?) element
  this.gameWindow = null;

  // Size
  this.size = { width: 0, height: 0};


}

Gemu.World.prototype.go = function()
{
  var world = this;

  this._private.currentTime = new Date().getTime();
  this._private.previousTime = this._private.currentTime;

  requestAnimFrame(function(){
    world.loop.call(world);
  })
}

Gemu.World.prototype.loop = function()
{
  var self = this;

  requestAnimFrame(function() { self.loop.call(self) });

  var currentTime = new Date().getTime();
  var elapsed = currentTime - self._private.previousTime;

  // Prevent spiral of death
  if (elapsed >= 5000) {
    elapsed = 5000;
  }

  // Update the last time
  self._private.previousTime = currentTime;
  // Increment lag accumulator
  self._private.lag += elapsed;

  /**
   *  Framerate
   */
  self._private.framerateTimeAccumulator += elapsed;
  self._private.framerateFramesAccumulator++;
  if (self._private.framerateTimeAccumulator >= 1000) {
    console.log("framerate: " + self._private.framerateFramesAccumulator);

    self._private.framerateTimeAccumulator = 0;
    self._private.framerateFramesAccumulator = 0;
  }

  // Process Input
  self.processInput();

  while (self._private.lag >= self._private.tickRate) {
    // Update
    self.update();
    self._private.lag -= self._private.tickRate;
  }

  // Render
  self.render();
}

Gemu.World.prototype.processInput = function()
{

}

Gemu.World.prototype.update = function()
{

}

Gemu.World.prototype.render = function()
{

}

