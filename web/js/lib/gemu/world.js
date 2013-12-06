// Namespace isolation
var gemu = gemu || {};

gemu.World = function(params)
{

  // Private namespace! 
  this._private = {};

  /**
   *  Properties
   */
  // Holds the DOM (canvas?) element
  this.gameWindow = null;

  // Size
  this.size = { width: 0, height: 0};
}

gemu.World.prototype.go = function()
{
  console.log("World going!");

  for (var i = 0; i < 1000; i++) {
    // Process Input
    this.processInput();

    // Update
    this.update();

    // Render
    this.render();
  }

  console.log("World stopped!");
};

gemu.World.prototype.processInput = function()
{

}

gemu.World.prototype.update = function()
{

}

gemu.World.prototype.render = function()
{

}

