var Gemu = Gemu || {};

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
  function(/* function */ callback){
    window.setTimeout(callback, 0);
  };
})();

if (!Object.create) {
  Object.create = (function(){
    function F(){}
    
    return function(o){
      if (arguments.length != 1) {
          throw new Error('Object.create implementation only accepts one parameter.');
      }
      F.prototype = o
        return new F()
    }
  })()
}

function _super(Base, prop, self, args) {
  return Base.prototype[prop].apply(self, args);
}

