var Typer = Typer || {};

Typer.PlayScene = function (params)
{
  Gemu.Scene.call(this);

  this.wordList = [
    "cultish", "parade", "crucifix", "bachelor", "rib", "edge", "dimensional", "bell", "junior", "bench",
    "fetish", "rastling", "soul", "wrong", "association", "loophole", "salt", "sentinel", "danger", "behavior",
    "hustle", "warmth", "vision", "deadbeat", "basin", "brave", "establishment", "marble", "hour", "buffer", "volcano",
    "daytime", "nightmare", "unliving", "flag", "crayon", "hug", "defector", "foul", "gargoyle", "grizzly", "fatality",
    "hundred", "bar", "sphere", "tenth", "ultimate", "dead", "song", "debug", "ankle", "scenic", "pressure", "predict",
    "teen", "embrace", "approaching", "sex", "friendless", "eruption", "caterpillar", "arrows", "deliverance",
    "doubles", "nervous", "ray", "blowgun", "giver", "honeydew", "exquisite", "molecular", "ballistic", "heartbeat",
    "falcon", "boutique", "careless", "classic", "cellblock", "droplet", "any", "heartless", "amongst", "continental",
    "fail", "brainwash", "war", "favorable", "twelve", "scream", "abducted", "hunter", "carcinogenic", "regret",
    "blasted", "analytical", "polite", "honeymoon", "film", "barnburner", "harpoon", "footwork", "burglary", "boom",
    "accountable", "grape", "dart", "cosmonaut", "flirt", "animalistic", "disclosure", "moaning", "disrupter", "ignorant",
    "gutless", "huffy", "deception", "evacuation", "sorrow", "booze", "wilderness", "pavement", "solitary", "bringer",
    "mechanical", "truth", "exhibition", "fold", "absurd", "last", "shrimp", "archer", "hostage", "silver", "flatten", "sand",
    "goat", "pig", "freak", "behind", "beefcake", "enrage", "guerilla", "carrion", "confused", "wig", "crafty", "mood",
    "alliance", "horror", "halloween", "hollowness", "iron", "cotton", "freezing", "blind", "hoof", "meat", "gun", "hide",
    "contestant", "passion", "lady", "disgusting", "shine", "reckless", "hearts", "poison", "whip", "internal", "hope",
    "plaid", "horrors", "guilty", "heist", "flesh", "percussive", "sunk", "harlot", "eyetooth", "vampire", "parrot", "provider",
    "heaven", "liver", "half", "fuse", "caregiver", "donut", "condemned", "biter", "winter", "granite", "foggy", "conqueror",
    "deplorable", "heritage", "gymnastic", "chef", "anyone", "green", "donkey", "days", "gunrunner", "severe", "preserve", "cruise",
    "degrading", "copper", "negative", "honesty", "grave", "gurgling", "ankh", "drink", "grinning", "beam", "grip", "pin", "dual",
    "afterwards", "hatch", "rubber", "convulsion", "ark", "link", "bazooka", "nice", "flux", "bughouse", "gems", "search",
    "prophets", "stun", "ripe", "bacon", "bluntness", "cadaver", "flatness", "entity", "freaky", "daddy", "nude", "aroma", "luxury",
    "screamer", "bogeyman", "contamination", "guns", "proven", "abnormal", "exception", "deathtrap", "headlock", "zero", "fish",
    "breakaway", "metal", "vixen", "elephant", "hidden", "bead", "healing", "conscious", "desire", "jerk", "beads", "authentic", "auxiliary",
    "poetic", "bedtime", "ghoulish", "empty", "knuckle", "nebula", "halfway", "hammerhead", "director", "folk", "voids", "heroic", "minimal",
    "liberating", "ego", "guard", "atomic", "silence", "eliminate", "destroy", "rasse", "convict", "hive", "cultural", "sparrow", "five",
    "affordable", "disease", "galloping", "schemer", "eating", "central", "blob", "blinks", "diabolatry", "sanitary", "blueprint", "fancy",
    "connectivity", "cable", "hacksaw", "bombastic", "haunt", "figurehead", "grain", "gallery", "kitten", "anchovies", "cell", "bland", "lick",
    "bittersweet", "hump", "goon", "among", "concert", "ghostly", "cobra", "lands", "gauntlet", "holiest", "periodic", "fundamental", "command",
    "snail", "snake", "begging", "bark", "alarming", "agony", "apple", "heavyset", "derelict", "cords", "gloves", "daring", "western", "costume",
    "exorcism", "blossom", "psycho", "hunting", "feelings", "calling", "evacuate", "fear", "bank", "reason", "perfume", "blackheart", "key",
    "disconnect", "furious", "disobey", "jagged", "cruel", "position", "gone", "area", "bug", "lock", "sprite", "agent", "honest", "armor", "bull",
    "collection", "falls", "collision", "loser", "paradox", "urban", "blinking", "cinnamon", "bumper", "bullet", "harm", "bluff", "enzyme",
    "bleakly", "corduroy", "everlasting", "clear", "assassination", "injustice", "horrific", "bauble", "lemon", "fermentation",
    "daydreamer", "attempt", "rose", "charade", "bad", "awesomeness", "big", "heretical", "grid", "bastion", "blink", "burden", "wasp",
    "drugstore", "horoscope", "blush", "goldfish", "bright", "altercation", "executive", "explosion", "vibrator", "hobby", "groove", "crawler",
    "correlation", "approximation", "gold", "experiment", "absurdities", "automatic", "diplomat", "chromosome", "skin", "bent", "germ", "cuddly",
    "apparently", "bearskin", "eagle", "fornicator", "blessing", "memory", "crispy", "ghoul", "nasty", "air", "bunny", "dreamless", "creator", "bear", "pink",
    "healthy", "philosophy", "clever", "mythical", "apocalypse", "hospital", "useless", "coma", "dirt", "left", "ginger", "giving", "flash", "positive", "direct", "more",
    "bloodsport", "audience", "old", "fumbling", "evoke", "hands", "project", "bumble", "cleanup", "dry", "barbaric", "choker", "clover", "destiny",
    "absorbing", "flood", "disorientation", "flawless", "dazzling", "hooves", "glider", "spirit", "mask", "hangover", "dosage", "crucifixion", "conflict", "ache",
    "switches", "barter", "anywhere", "empirical", "fairytale", "crew", "bulldog", "wife", "gurgle", "aquatic", "easy", "hard", "wealthy", "cosmetic",
    "condition", "bend", "consumption", "blurt", "house", "ability", "gaping", "confidential", "gateway", "poet", "fantastic", "afterlife", "fluent",
    "born", "awful", "forty", "domino", "absolution", "imposter", "edit", "connection", "drain", "burn", "heavenly", "bellyache", "bottom", "scheme",
    "affliction", "drench", "capsule", "calendar", "drag", "aerodrome", "functional", "encounter", "ghost", "phantom", "avoid", "gritty", "attacking",
    "open", "decipherer", "cursed", "breathless", "mystery", "power", "bawling", "bucket", "elevator", "prophesy", "garden", "gang", "aftershock",
    "bonus", "earthborn", "barren", "gymnast", "junkyard", "gift", "indecent", "hunt", "monkey", "bloodlust", "abstinence", "baby", "appeal",
    "children", "retreat", "exposition", "beeswax", "babbling", "night", "carnival", "border", "rich", "parachute", "heater", "exclusive",
    "pessimist", "moan", "lubricant", "ashes", "hinge", "tactic", "console", "bin", "laser", "compulsive", "excellent", "blaster", "hotter", "fight",
    "anyways", "beard", "wept", "horseradish", "grinder", "neck", "billionaire", "deceit", "equipment", "chameleon", "gargantuan", "research", "diagonal",
    "sabotage", "licker", "forgiven", "district", "godless", "drug", "discharge", "sad", "playground", "homicidal", "paralysed", "encryption", "milky",
    "fuel", "arrogant", "coal", "choking", "chop", "daisy", "decay", "detonator", "freckled", "aversion", "cube", "actuality", "inner", "shipment", "queen",
    "doberman", "humility", "captivity", "juvenile", "homesick", "free", "opposition", "coyotes", "rear", "authority", "every", "loner", "poisoner",
    "guidebook", "medusa", "adoption", "biology", "baboon", "blushing", "greasy", "insane", "alien", "adrenaline", "audacity", "gravy", "murder", "pilot",
    "eternal", "autopilot", "poetry", "allied", "chieftain", "aerial", "bleeder", "sexiest", "headphones", "contractual", "battle", "revenge", "burning",
    "empowerment", "harbor", "bean", "heaving", "prank", "regional", "sector", "farm", "cottage", "shark", "block", "easier", "escalator", "invitation",
    "airtight", "banquet", "downriver", "disturbance", "checkpoint", "bloodstain", "elite", "heal", "amoral", "beholder", "bit", "blackout", "eerie", "escapist",
    "abandon", "fever", "cry", "fuzz", "stiff", "basement", "under", "misshapen", "bulletin", "truth", "emotional", "astronaut", "industry", "intoxicant", "moonbeam",
    "bottle", "downtown", "blended", "downward", "cased", "candy", "chief", "donation", "formal", "penguin", "liberation", "selfish", "expression", "absentness",
    "shocking", "braincase", "fellow", "confuse", "frightening", "prayer", "boundary", "legend", "nerve", "foreign", "spike", "harvest", "early", "extensive",
    "abomination", "computer", "curator", "rival", "even", "rebel", "diametric", "feudal", "cyanide", "sound", "ruby", "ornamental", "daylight", "faith", "recluse", "alcohol",
    "servant", "elbow", "megacity", "boar", "martini", "tornado", "furry", "discipline", "communion", "hero", "betrayal", "description", "attacker", "modern",
    "guaranteed", "dozen", "detachable", "discontent", "forbidden", "chemical", "ash", "hectic", "fence", "insect", "curiosities", "halting", "chart",
    "excessive", "collectable", "acidic", "high", "badger", "sprites", "believer", "magnet", "damage", "abattoir", "external", "blasting", "deep", "decadent", "everyday",
    "adaptive", "generation", "swindler", "puzzle", "warm", "trust", "master", "fossil", "decent", "duplicate", "hoaxer", "soft", "pandemic", "buzz", "aficionado",
    "frustration", "gibberish", "humanly", "fool", "bleakness", "cage", "brutish", "visitor", "kick", "blaze", "guilt", "cattle", "chair", "disfigured", "aluminium",
    "gunplay", "bomber", "overt", "lovesick", "advancement", "blister", "frying", "section", "chalk", "beekeeper", "fortress", "confrontational", "kill", "barbell",
    "dramatic", "firm", "channel", "history", "engine", "invader", "communication", "fallout", "paper", "financial", "jade", "protection", "adequate", "criminal",
    "flavoring", "rare", "blue", "clubhouse", "officer", "fighter", "bible", "boa", "advantage", "pleasant", "model", "zoo", "natural", "republic", "bluster", "base", "formula",
    "devoid", "whisper", "southern", "brutal", "captain", "dimension", "badmouth", "flamboyant", "rage", "lasso", "decade", "beaver", "python", "owl", "guillotine", "nuclear",
    "available", "entrance", "head", "morbid", "bulldozer", "reversal", "spell", "charismatic", "beach", "exile", "enter", "deleted", "equivalent", "weirdo", "anything", "felt",
    "extravagant", "better", "finishing", "mistaken", "insurance", "grin", "duke", "invention", "esoteric", "mightiest", "smuggler", "huge", "airship",
    "phenomena", "abstinent", "code", "amusement", "doubtless", "glow", "disfigurement", "west", "hoopla", "fortuneteller", "axe", "believing", "hibernation",
    "bacteria", "graveyard", "wake", "glamorous", "clubfoot", "grab", "hazy", "artist", "companion", "bring", "fanatical", "passenger", "blade", "jewel", "thing",
    "pitch", "blankness", "disaster", "prefab", "great", "creepy", "grabbing", "biplane", "fiend", "buried", "smallpox", "cast", "risky", "aboveground", "shackle",
    "pull", "contagious", "crunch", "thin", "biblical", "lion", "honorary", "muzzle", "elevation", "discord", "rapid", "witness", "back", "elimination", "anytime",
    "finale", "cherry", "rotten", "pinwheel", "factual", "primate", "cougar", "heart", "flunk", "broken", "banana", "chromatic", "doctor"
  ]

  this.keyboardEntity = new Typer.Keyboard({
    size : { width : 640, height : 316}
  });

  this.keyboardEntity.eventManager.bind('keypress', this.onKeyboardKey.bind(this));
  this.addEntity(this.keyboardEntity);

  this.reset();

}

Typer.PlayScene.prototype = Object.create(Gemu.Scene.prototype);

Typer.PlayScene.prototype.reset = function()
{  
  this.bubbleMap = {};
  this.entities = [];
  this.addEntity(this.keyboardEntity);



  this.generateBubbleDelay = 0;
  this.lastGeneratedBubbleTime = new Date().getTime();

  // Ice Boxes
  this.iceBoxes = [];

  // Bomb Boxes
  this.bombBoxes = [];

  this.score = 0;

  this.maxHP = 25;
  this.curHP = this.maxHP;

}

Typer.PlayScene.prototype.render = function(ctx)
{
  _super(Gemu.Scene, 'render', this, arguments);

  // HACK to make sure keyboard is ontop of everything.
  this.keyboardEntity.render(ctx);

  // Draw HP bar
  var hpPercentage = this.curHP / this.maxHP;

  ctx.fillStyle = "#F5FAFA"
  ctx.fillRect(0, 0, hpPercentage * Gemu.World.instance.gameWindow.width, 48);

  // Draw score
  var scoreString = this.score.toString();
  var scoreWidth = ctx.measureText(scoreString).width;

  ctx.font = "normal 32px sans-serif";
  ctx.textAlign = "middle";
  ctx.textBaseline = "middle"
  ctx.strokeStyle = "#E8D0A9"
  ctx.fillStyle = "#E8D0A9"
  ctx.fillText(scoreString, Gemu.World.instance.gameWindow.width / 2, 24);


}

Typer.PlayScene.prototype.update = function()
{
  _super(Gemu.Scene, 'update', this, arguments);

  if (this.curHP === 0) {
    this.reset();
  }

  this.iceBoxes = this.cleanupBoxes(this.iceBoxes.slice());
  this.bombBoxes = this.cleanupBoxes(this.bombBoxes.slice());

  var elapsed = new Date().getTime() - this.lastGeneratedBubbleTime;

  if (elapsed >= this.generateBubbleDelay) {
    this.generateNewBubble();
  }


}

Typer.PlayScene.prototype.handleEvent = function(event)
{
  _super(Gemu.Scene, 'handleEvent', this, arguments);

  var x = event.changedTouches[0].pageX;
  var y = event.changedTouches[0].pageY;

  var canvasX = x / window.innerWidth * Gemu.World.instance.gameWindow.width;
  var canvasY = y / window.innerHeight * Gemu.World.instance.gameWindow.height;

  // A-Key HITBOX HACK
  if (canvasX > 0 && canvasX < 34 && canvasY >= 953 && canvasY <= 1031) {
    this.keyboardEntity.AKeyEntity.eventManager.raiseEvent(event.type, event);
  }

  // L-Key HITBOX HACK
  if (canvasX > 606 && canvasY >= 953 && canvasY <= 1031) {
    this.keyboardEntity.LKeyEntity.eventManager.raiseEvent(event.type, event);
  }
}

Typer.PlayScene.prototype.cleanupBoxes = function(boxes)
{
  var tempEnt = [];

  for (var i = 0; i < boxes.length; i++) {
    var ent = boxes[i];

    if (!ent.deleted) {
      tempEnt.push(ent);
    }
  }

  return tempEnt;
}

Typer.PlayScene.prototype.onKeyboardKey = function(keyEntity)
{
  var self = this;

  // Preview Key
  var previewEntity = new Typer.Key({"keyText" : keyEntity.keyText});
  previewEntity.setPosition(keyEntity.drawCoordinates.x, this.keyboardEntity.position.y);
  previewEntity.velocity = { x : 0, y : - 5};

  setTimeout( function(){ self.removeEntity(previewEntity)}, 300)
  self.addEntity(previewEntity);

  var lowerKey = keyEntity.keyText.toLowerCase();

  if (!this.bubbleMap[lowerKey]) {
    return;
  }

  var matchBubbles = this.bubbleMap[lowerKey].slice();

  if (matchBubbles) {
    matchBubbles.forEach(function(bubble) {
      bubble.step();
      self.unbindBubble(bubble);
      self.bindBubble(bubble);
    });
  }
}

Typer.PlayScene.prototype.getRandomWord = function() 
{
  var randIdx = this.randomInRange(0, this.wordList.length - 1);

  var randWord = this.wordList[randIdx];

  return randWord;
}

Typer.PlayScene.prototype.generateNewBubble = function() 
{
  var randInt = this.randomInRange(0, 100);

  var bubble;
  if (randInt <= 80) {
    bubble = this.generateNormalBubble();
  } else if (randInt <= 90) {
    bubble = this.generateIceBubble();
  } else if (randInt <= 95) {
    bubble = this.generateLifeBubble();
  } else if (randInt <= 100) {
    bubble = this.generateBombBubble();
  }

  if (bubble.position.x + bubble.size.width >= Gemu.World.instance.size.width) {
    bubble.position.x = Gemu.World.instance.size.width - bubble.size.width;
  }

  bubble.position.x = Math.max(bubble.position.x, 32)

  this.addEntity(bubble);
  this.bindBubble(bubble);

  bubble.eventManager.bind('thresholdTouched', this.onBubbleThresholdTouched.bind(this));
  bubble.eventManager.bind('bubbleCompleted', this.onBubbleCompleted.bind(this));

  this.lastGeneratedBubbleTime = new Date().getTime();
  this.generateBubbleDelay = this.randomInRange(1000, 3500);
}

Typer.PlayScene.prototype.generateNormalBubble = function()
{
  return new Typer.Bubble({
   position : { x : this.randomInRange(0, 500), y : - 25 },
   word : this.getRandomWord(),
   velocity : { x : 0, y : 0.5 }
 })
}

Typer.PlayScene.prototype.generateIceBubble = function()
{
  var self = this;

  var bubble = new Typer.IceBubble({
    position : { x : this.randomInRange(0, 500), y : - 25 },
    word : this.getRandomWord(),
    velocity : { x : 0, y : 1 }
  });

  bubble.eventManager.bind('bubbleCompleted', function(){
    self.explodeIceBubble(bubble);
  })

  return bubble;
}

Typer.PlayScene.prototype.generateBombBubble = function()
{
  var self = this;

  var bubble = new Typer.BombBubble({
    position : { x : this.randomInRange(0, 500), y : - 25 },
    word : this.getRandomWord(),
    velocity : { x : 0, y : 1}
  });

  bubble.eventManager.bind('bubbleCompleted', function(){
    self.explodeBombBubble(bubble);
  })

  return bubble;
}

Typer.PlayScene.prototype.generateLifeBubble = function()
{
  var self = this;

  var bubble = new Typer.LifeBubble({
    position : { x : this.randomInRange(0, 500), y : - 25 },
    word : this.getRandomWord(),
    velocity : { x : 0, y : 1}
  });  

  bubble.eventManager.bind('bubbleCompleted', function(){
    self.curHP = Math.min(self.curHP + bubble.word.length, self.maxHP);
  });

  return bubble;
}

Typer.PlayScene.prototype.bindBubble = function(bubble)
{
  // HashMap is keyed on character of the bubble char needing to be typed.
  var key = bubble.word[bubble.wordPos];

  if (!key) return;

  if (!this.bubbleMap.hasOwnProperty(key)) {
    this.bubbleMap[key] = [];
  }

  this.bubbleMap[key].push(bubble);
}

Typer.PlayScene.prototype.unbindBubble = function(bubble)
{
  var key = bubble.word[Math.max(0,bubble.wordPos - 1)  ];
  var bubbles = this.bubbleMap[key];

  for (var i = 0; i < bubbles.length; i++) {
    if (bubbles[i] === bubble) {
      bubbles.splice(i, 1);
      break;
    }
  }
}

Typer.PlayScene.prototype.randomInRange = function(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

Typer.PlayScene.prototype.randomDoubleInRange = function(min, max)
{
  return Math.random() * (max - min + 1) + min;
}

Typer.PlayScene.prototype.onBubbleThresholdTouched = function(bubble)
{

  if (!(bubble instanceof Typer.IceBubble || bubble instanceof Typer.LifeBubble || bubble instanceof Typer.BombBubble)) {
    this.reduceHP(bubble)
  }

  this.unbindBubble(bubble);
  this.removeEntity(bubble);
}

Typer.PlayScene.prototype.onBubbleCompleted = function(bubble)
{
  this.scoreBubble(bubble);
  this.explodeBubble(bubble);
  this.unbindBubble(bubble);
  this.removeEntity(bubble);
}

Typer.PlayScene.prototype.reduceHP = function(bubble)
{
  var numMissingLetters = bubble.word.length - bubble.wordPos;

  this.curHP -= numMissingLetters;

  if (this.curHP < 0) {
    this.curHP = 0;
  }
}

Typer.PlayScene.prototype.scoreBubble = function(bubble)
{
  var wordLength = bubble.word.length;
  var distanceFromTop = Gemu.World.instance.gameWindow.height - bubble.position.y;

  var score = (wordLength * (distanceFromTop * distanceFromTop)) / 10000.0;

  this.score += Math.floor(score);
}

Typer.PlayScene.prototype.explodeBubble = function(bubble)
{
  var self = this;

  var numSquares = self.randomInRange(10, 25);

  for (var i = 0; i < numSquares; i++) {
    var randomX = self.randomInRange(bubble.position.x, bubble.position.x + bubble.size.width);
    var randomY = self.randomInRange(bubble.position.y, bubble.position.y + bubble.size.height);

    var particle = new Typer.BoxSprite({
      position : { x : randomX, y : randomY },
      velocity: { x : 0, y : bubble.velocity.y },
      acceleration : { x : 0, y : self.randomDoubleInRange(0.25, 1) },
      backgroundColor : bubble.bubbleColor
    });

    self.addEntity(particle);
  }
}

Typer.PlayScene.prototype.explodeIceBubble = function(bubble)
{
  var self = this;

  var iceBox = new Typer.GrowingBox({
    position : bubble.position,
    size : bubble.size,
    velocity : { x : 0, y : 0},
    acceleration : { x : 0, y : 0},
    strokeStyle : "#F5FAFA"
  })

  self.addEntity(iceBox);
  self.iceBoxes.push(iceBox);
}

Typer.PlayScene.prototype.explodeBombBubble = function(bubble)
{
  var self = this;
  var bombBox = new Typer.GrowingBox({
    position : bubble.position,
    size : bubble.size,
    velocity : { x : 0, y : 0},
    acceleration : { x : 0, y : 0},
    strokeStyle : "#B7AFA3"
  });

  self.addEntity(bombBox);
  self.bombBoxes.push(bombBox);
}

Typer.PlayScene.prototype.resolveCollisions = function(entity)
{
  var self = this;

  if (entity instanceof Typer.Bubble) {

    // Bubble passing threshold collision
    if (entity.position.y + entity.size.height >= this.keyboardEntity.position.y) {
      entity.eventManager.raiseEvent('thresholdTouched', entity);
    }

    // Bubble with freeze-line
    var iceBoxes = self.iceBoxes.slice();
    iceBoxes.some(function(iceBox){
      if (self.doEntitiesOverlap(iceBox, entity)) {
        entity.velocity = { x : 0, y : 0};

        setTimeout(function(){
          if (!entity) {
            return;
          }

          entity.velocity = { x : 0, y : 1.5};
        }, 5000)
        return;
      }
    });

    // Bubble colliding with bomb-line
    var bombBoxes = self.bombBoxes.slice();
    bombBoxes.some(function(bombBox){
      if (self.doEntitiesOverlap(bombBox, entity)) {
        entity.eventManager.raiseEvent('bubbleCompleted', entity);
        return;
      }
    });
  }

  if (entity instanceof Typer.BoxSprite && !(entity instanceof Typer.GrowingBox)) {
    if (entity.position.y + entity.size.height >= Gemu.World.instance.size.height) {
      this.removeEntity(entity);
    }
  }

  if (entity instanceof Typer.GrowingBox) {
    if (entity.position.x === 0 && entity.position.y === 0 &&
        entity.size.width === Gemu.World.instance.size.width && entity.size.height === Gemu.World.instance.size.height) {
      this.removeEntity(entity);
      entity.deleted = true;
    } 
  }
}

Typer.PlayScene.prototype.doEntitiesOverlap = function(a, b) {
  var ax1 = a.position.x;
  var ax2 = a.position.x + a.size.width;
  var ay1 = a.position.y;
  var ay2 = a.position.y + a.size.height;

  var bx1 = b.position.x;
  var bx2 = b.position.x + b.size.width;
  var by1 = b.position.y;
  var by2 = b.position.y + b.size.height;

  return (ax1 < bx2 && ax2 > bx1 &&
      ay1 < by2 && ay2 > by1);
}
