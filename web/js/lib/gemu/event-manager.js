var Gemu = Gemu || {};

Gemu.EventManager = function(params) {

  this.bindings = {};

}

Gemu.EventManager.prototype.bind = function(type, callback)
{
  if (!this.bindings.hasOwnProperty(type)) {
    this.bindings[type] = [];
  }

  this.bindings[type].push(callback);
}

Gemu.EventManager.prototype.raiseEvent = function(type, event)
{
  if (this.bindings.hasOwnProperty(type)) {
    this.bindings[type].forEach(function(cb){
      cb(event);
    });
  }
}

Gemu.EventManager.prototype.unbind = function(type)
{
  this.bindings[type] = [];
}

Gemu.EventManager.prototype.unbindAll = function()
{
  var self = this;
  Object.keys(this.bindings).forEach(function (key){
    self.bindings[key] = [];
  });
}
