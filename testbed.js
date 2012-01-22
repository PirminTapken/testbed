//set main namespace
goog.provide('testbed');


//get requirements
goog.require('testbed.MenuScene');
goog.require('testbed.world');
goog.require('testbed.WorldView');
goog.require('lime.Director');
goog.require('lime.Label');
goog.require('lime.Layer');
goog.require('lime.RoundedRect');
goog.require('lime.Scene');
goog.require('lime.animation.Sequence');
goog.require('lime.animation.Resize');
goog.require('lime.animation.ScaleTo');
goog.require('lime.transitions.Dissolve');
goog.require('lime.transitions.MoveInUp');

testbed.start = function()
{
	var director = new lime.Director(document.body, 640, 480),
	    gamescene = new lime.Scene().
		    appendChild(
			new testbed.WorldView(testbed.world.generate(testbed.world))),
	    menuscene = new testbed.MenuScene(gamescene);

	director.replaceScene(menuscene, lime.transitions.MoveInUp);

}


//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('testbed.start', testbed.start);
