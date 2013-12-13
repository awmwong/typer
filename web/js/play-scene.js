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
    "position": { x : 0, y : 620}
  });

  this.keyboardEntity.size = {
    width: 640,
    height: 315
  }

  this.keyboardEntity.eventManager.bind('keypress', this.onKeyboardKey.bind(this));

  this.bubbleMap = {};

  this.addEntity(this.keyboardEntity);

  this.generateBubbleDelay = 0;
  this.lastGeneratedBubbleTime = new Date().getTime();
}

Typer.PlayScene.prototype = Object.create(Gemu.Scene.prototype);

Typer.PlayScene.prototype.update = function()
{
  _super(Gemu.Scene, 'update', this, arguments);

  var elapsed = new Date().getTime() - this.lastGeneratedBubbleTime;

  if (elapsed >= this.generateBubbleDelay) {
    this.generateNewBubble();
  }
}

Typer.PlayScene.prototype.onKeyboardKey = function(key)
{
  var self = this;

  var lowerKey = key.toLowerCase();

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
  var bubble = new Typer.Bubble({
    position : { x : this.randomInRange(0, 300), y : - 25 },
    word : this.getRandomWord(),
    velocity : { x : 0, y : 0.5 }
  })

  this.addEntity(bubble);
  this.bindBubble(bubble);

  bubble.eventManager.bind('thresholdTouched', this.onBubbleThresholdTouched.bind(this));
  bubble.eventManager.bind('bubbleCompleted', this.onBubbleCompleted.bind(this));

  this.lastGeneratedBubbleTime = new Date().getTime();

  this.generateBubbleDelay = this.randomInRange(3000, 7000);
}

Typer.PlayScene.prototype.bindBubble = function(bubble)
{
  // HashMap is keyed on character of the bubble word needing to be typed.
  var key = bubble.word[bubble.wordPos];

  if (!key) return;

  if (!this.bubbleMap.hasOwnProperty(key)) {
    this.bubbleMap[key] = [];
  }

  this.bubbleMap[key].push(bubble);

  console.log("Binded bubble: [" + bubble.word + "] to " + key); 
}

Typer.PlayScene.prototype.unbindBubble = function(bubble)
{
  // You can only ever unbind if you are at least wordPos = 1, since 
  // we look at wordPos - 1's position to unbind.
  if (bubble.wordPos == 0) {
    return;
  }

  var key = bubble.word[bubble.wordPos - 1];
  var bubbles = this.bubbleMap[key];

  for (var i = 0; i < bubbles.length; i++) {
    if (bubbles[i] === bubble) {
      bubbles.splice(i, 1);
      console.log("Unbinded bubble: [" + bubble.word + "] from " + key); 
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
  this.removeEntity(bubble);
}

Typer.PlayScene.prototype.onBubbleCompleted = function(bubble)
{
  this.explodeBubble(bubble);

  this.removeEntity(bubble);
}

Typer.PlayScene.prototype.explodeBubble = function(bubble)
{
  var self = this;

  var numSquares = self.randomInRange(10, 25);

  for (var i = 0; i < numSquares; i++) {
    var randomX = self.randomInRange(bubble.position.x, bubble.position.x + bubble.size.width);
    var randomY = self.randomInRange(bubble.position.y, bubble.position.y + bubble.size.height);

    var particle = new Typer.SquareParticle({
      position : { x : randomX, y : randomY },
      velocity: { x : 0, y : bubble.velocity.y },
      acceleration : { x : 0, y : self.randomDoubleInRange(0.5,2) },
      collidable : false
    });

    self.addEntity(particle);
  }
}

Typer.PlayScene.prototype.resolveCollisions = function(entity)
{
  if (entity instanceof Typer.Bubble) {
    if (entity.position.y + entity.size.height >= this.keyboardEntity.position.y) {
      entity.eventManager.raiseEvent('thresholdTouched', entity);
    }
  }

  if (entity instanceof Typer.SquareParticle) {
    if (entity.position.y + entity.size.height + 10 >= this.keyboardEntity.position.y) {
      this.removeEntity(entity);
    }
  }
}
