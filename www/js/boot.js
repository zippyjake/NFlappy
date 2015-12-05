// State: Flappy.Boot

'use strict';

var Flappy = { };
'
var Flappy.Boot = function () {}

Flappy.Boot.prototype = {

  init: function () {
    console.log("%c~~~ Flappy Bird ~~~/n",
               "color:#FF0000");
  };

  preload: function () {
  };

  create: function () {
  this.game.stage.backgroundColor = "gold";
  };

};

